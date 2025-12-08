import { useEffect, useRef,useReducer} from 'react';
import { handlePlay,handleClick, handleHomeClick, handleRestartClick, handleNumberOneClick, handleNumberTwoClick, handleAlphabetClick, handleBackClick, handleNumberBackClick, handleNumberPlayClick } from './Handlers/gameHandlers';
import { Button } from './components/Button';
import { Home } from './components/Home';
import { Homebtn } from './components/Home-Btn';
import { Restartbtn } from './components/Restart-Btn';
import { Main } from './components/Main-page';
import { Number } from './components/Number-Home';
import { appReducer} from './AppReducer/reducer';
import { initialState} from './AppReducer/appInitialState';

const speak = (text) => {
  if(!text) return;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US'; // adjust language if needed
  window.speechSynthesis.speak(utterance);
};

function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);
  // Used a ref to persist the "nextIndex" value across renders and effects.
  const nextIndexRef = useRef(state.items.length);
  // This effect automatically selects letters from the items array.
  useEffect(() => {
    if( (state.compLetters.length === 0 && state.play) || (state.compLetters.length === 0 && state.getNumberPlay)){
      nextIndexRef.current = state.items.length;
      const nextIntervalId = setInterval(() => {
        // Decrement the value stored in the ref.
        nextIndexRef.current--;
        const value = state.items[nextIndexRef.current]?.value;
        if(value) {
          speak(value);
          dispatch({
            type: 'update-State',
              letterValue: value,
              compLetters: [...state.compLetters, value],
          });
        }
        if(nextIndexRef.current <= 0) {
          clearInterval(nextIntervalId);
          dispatch({
            type: 'set-Winner',
            payload: `Good Job ${state.text || state.textNumber || ''}!`,
          });
        }
      }, 500);
        if(state.winner.length > 0){
          speak(state.winner)
        }
      return () => clearInterval(nextIntervalId);
    }
  }, [state.compLetters, state.items, state.text,state.letterValue, state.textNumber, state.play, state.getNumberPlay]);
  // Effect compares the automatically picked items with the user’s pick.
  useEffect(() => {
    if(state.compare && state.compLetters.length > 1) {
      if(state.compLetters[0] === state.compLetters[1]) {
        console.log('MATCH');
        dispatch({ type: 'set-Match', match: !state.match });
        // Remove the items from the items array using the index stored in the ref.
        dispatch({
          type: 'update-Items',
          items: state.items.filter((_, index) => index !== nextIndexRef.current),
        });
      }
      dispatch({ 
        type: 'clear-Comparison',
        compLetters: state.compLetters,
        compare: !state.compare,
       });
    }
  }, [state.compare, state.compLetters]);
  useEffect(() => {
    if(state.items.length > 0 ||  state.buttons.length > 0 ){
    console.log("Updated items:", state.items);
    console.log("Updated buttons:", state.buttons);
}
  }, [state.items, state.buttons]);
//Handler change button color 
const handleButtonStyle = (item) => {
  return state.compLetters.includes(item) ? { color: state.getColor, background: state.getBackgroundColor} : {};
};
    let content;
    // Main screen
    if(!(state.getNumbers || state.getAlphabet)) {
      content = (
        <Main
          onNumberOneClick={() => handleNumberOneClick(dispatch, state)}
          onAlphabetClick={() => handleAlphabetClick(dispatch,state)}
          onNumberTwoClick={() => handleNumberTwoClick(dispatch, state)}
        />
      );
    }
    // Number selection screen
    else if(state.getNumbers && !state.getNumberPlay) {
      content = (
        <>
          <Number
            onNumberPlayClick={() => handleNumberPlayClick(dispatch,state)}
            onBackNumberClick={() => handleNumberBackClick(dispatch,state)}
            value={state.textNumber || ""}
            onChange={(e) =>
              dispatch({
                type: "updateTextNumber",
                textNumber: e.target.value || "",
              })
            }
          />
          <ul className="flex md:justify-center justify-center flex-wrap md:mt-10 mt-10 md:text-9xl text-5xl font-bold m-0 p-0"
            style={{ fontFamily: '"DynaPuff", system-ui' }}>
            {state.getNumberCatOne.length > 0 ? (
              <>
                <li className="m-5 mb-10 home-One">1</li>
                <li className="m-5 mt-10 home-Two">2</li>
                <li className="m-5 mb-10 home-Three">3</li>
                <li className="m-5 mt-10 home-Four">4</li>
                <li className="m-5 mb-10 home-Five">5</li>
                <li className="m-5 mt-10 home-Six">6</li>
                <li className="m-5 mb-10 home-Seven">7</li>
                <li className="m-5 mt-10 home-Eight">8</li>
                <li className="m-5 mb-10 home-Nine">9</li>
                <li className="m-5 mt-10 home-Ten">10</li>
              </>
            ) : (
              <>
                <li className="m-5 mb-10 home-Eleven">11</li>
                <li className="m-5 mt-10 home-Twelve">12</li>
                <li className="m-5 mb-10 home-Thirteen">13</li>
                <li className="m-5 mt-10 home-Fourteen">14</li>
                <li className="m-5 mb-10 home-Fifteen">15</li>
                <li className="m-5 mt-10 home-Sixteen">16</li>
                <li className="m-5 mb-10 home-Seventeen">17</li>
                <li className="m-5 mt-10 home-Eighteen">18</li>
                <li className="m-5 mb-10 home-Nineteen">19</li>
                <li className="m-5 mt-10 home-Twenty">20</li>
              </>
            )}
          </ul>
        </>
      );
    }
    // Play screen
    else if(state.play) {
  // console.log('Buttons:', state.items.map((button)=> button));
  console.log(state.play,state.items.length)
      content = (
        <section className="grid grid-rows-1 place-items-center w-screen h-fit gap-2">
          <section className="flex flex-col lg:w-screen lg:h-full md:w-screen sm:w-screen h-full w-screen">
            <section className="flex justify-between w-screen h-fit">
              <Homebtn onHomeClick={() => handleHomeClick(dispatch, state)} />
              {state.items.length === 0 && (
                <Restartbtn onRestartClick={() => handleRestartClick(dispatch, state)} />
              )}
            </section>
            <div className="grid items-center w-full h-full">
              <div className="relative flex justify-center items-center w-full h-60 md:h-96">
                {state.items.length === 0 ? (
                  <div
                    className="lg:text-6xl md:text-4xl sm:text-lg text-lg font-bold winner-grow"
                    style={{ fontFamily: '"DynaPuff", system-ui' }}
                  >
                    {state.winner}
                  </div>
                ) : (
                  state.items.map((l) => (
                    <div
                      key={l.value}
                      className="absolute flex justify-center items-center bg-[#74a3c9] border-7 border-b-20 border-r-20 
                    w-40 h-40 md:w-60 md:h-60 text-6xl md:text-[10em] font-bold rounded rainbow-border">
                      {l.value.toUpperCase()}
                    </div>
                  ))
                )}
              </div>
              <ul className="grid lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-4 grid-cols-5 gap-2">
                {state.buttons.map((button,i) => (
                  <li key={i}>
                    <Button className="border-0.5 border-b-8 border-r-8 rounded border-black bg-[#0000003c] md:text-8xl text-4xl font-bold lg:w-50 lg:h-50 md:w-40 md:h-40 sm:w-50 sm:h-50 w-15 h-15 cursor-pointer active:translate-y-0.5 rainbow-border"
                      items={button.toUpperCase()}
                      onClick={() => handleClick(button, dispatch, state)}
                      style={handleButtonStyle(button)} disabled={state.compLetters.length < 1}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </section>
      );
    }
    // Number play screen
    else if(state.getNumberPlay) {
      content = (
        <section className="grid grid-rows-1 place-items-center w-screen h-fit gap-2">
          <section className="flex flex-col lg:w-screen lg:h-full md:w-screen sm:w-screen h-full w-screen">
            <section className="flex justify-between w-screen h-fit">
              <Homebtn onHomeClick={() => handleHomeClick(dispatch, state)} />
              {state.items.length === 0 && (
                <Restartbtn onRestartClick={() => handleRestartClick(dispatch,state)} />
              )}
            </section>
            <div className="grid items-center w-full h-full">
              <div className="relative flex justify-center items-center w-full h-60 md:h-96">
                {state.items.length === 0 ? (
                  <div
                    className="lg:text-6xl md:text-4xl sm:text-lg text-lg font-bold winner-grow"
                    style={{ fontFamily: '"DynaPuff", system-ui' }}
                  >
                    {state.winner}
                  </div>
                ) : (
                  state.items.map((l) => (
                    <div
                      key={l.value}
                      className="absolute flex justify-center items-center bg-[#74a3c9] border-7 border-b-20 border-r-20 
                    w-40 h-40 md:w-60 md:h-60 text-6xl md:text-[10em] font-bold rounded rainbow-border">
                      {l.value}
                    </div>
                  ))
                )}
              </div>
              <ul className="grid lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-4 grid-cols-5 gap-2">
                {state.buttons.map((items) => (
                  <li key={items}>
                    <Button className="border-0.5 border-b-8 border-r-8 rounded border-black bg-[#0000003c] md:text-8xl text-4xl font-bold lg:w-50 lg:h-50 md:w-40 md:h-40 sm:w-50 sm:h-50 w-15 h-15 cursor-pointer active:translate-y-0.5 rainbow-border" 
                    items={items.toUpperCase()} 
                    onClick={() => handleClick(items,dispatch,state)} 
                    style={handleButtonStyle(items)} disabled={state.compLetters.length < 1}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </section>
      );
    }
    // Alphabet screen
    else if(state.getAlphabet) {
      content = (
        <Home
          onPlayClick={() => handlePlay(dispatch,state)}
          onBackClick={() => handleBackClick(dispatch,state)}
          value={state.text}
          onChange={(e) => dispatch({ type: "updateText", text: e.target.value })}
        />
      );
    }
    else {
      content = null;
    }
    return <div className="grid md:w-screen w-screen">{content}</div>;
}
export default App;

export const numbersOne = [{ value: '1' }, { value: '2' }, { value: '3' }, { value: '4' }, { value: '5' },{ value: '6' }, { value: '7' }, { value: '8' }, { value: '9' }, { value: '10' }].reverse();

export const numbersTwo = [ { value: '11' }, { value: '12' }, { value: '13' }, { value: '14' }, { value: '15' },{ value: '16' }, { value: '17' }, { value: '18' }, { value: '19' }, { value: '20' },].reverse();

export const ALPHABET = [{ value: 'a' }, { value: 'b' }, { value: 'c' }, { value: 'd' }, { value: 'e' }, { value: 'f' }, { value: 'g' }, { value: 'h' }, { value: 'i' }, { value: 'j' }, { value: 'k' }, { value: 'l' }, { value: 'm' }, { value: 'n' }, { value: 'o' }, { value: 'p' }, { value: 'q' }, { value: 'r' }, { value: 's' }, { value: 't' }, { value: 'u' }, { value: 'v' }, { value: 'w' }, { value: 'x' }, { value: 'y' }, { value: 'z' } 
].reverse();

export function shuffleArray(array) {
  for(let i = array.length - 1; i >= 1; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
