import { useEffect, useRef,useReducer} from 'react';
import {btnClassName, colorClasses,btnValueClassName} from './Data/app'
import { handlePlay,handleClick, handleHomeClick, handleRestartClick, handleNumberOneClick, handleNumberTwoClick, handleAlphabetClick, handleBackClick, handleNumberBackClick, handleNumberPlayClick, handleShapeClick, handleColorClick, handleBackColorClick, handleBackShapeClick, handleColorPlayClick,handleShapePlayClick, handleColorGameClick,handleShapeGameClick, handleShapeChange} from './Handlers/gameHandlers';
import { Button } from './components/Button';
import { Home } from './components/Home';
import { Homebtn } from './components/Home-Btn';
import { Restartbtn } from './components/Restart-Btn';
import { Main } from './components/Main-page';
import { Number } from './components/Number-Home';
import { Color } from './components/Color-Homepage';
import {Shape } from './components/Shape-Homepage';
import { appReducer} from './AppReducer/reducer';
import { initialState} from './AppReducer/appInitialState';

export const speak = (text ,dispatch,state) => {
  if(!text) return;
  if(!dispatch) return;
  dispatch({type:"Speak", speaking:state?.speaking})
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = 'en-US'; // adjust language if needed
  window.speechSynthesis.speak(speech);
};
function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const currentShape = state.shapes[state.shapeIndex];

  // Used a ref to persist the "nextIndex" value across renders and effects.
  const nextIndexRef = useRef(state.items.length);
  // This effect automatically selects letters from the items array.
  useEffect(() => {
    if( 
      (state.compLetters.length === 0 && state.play) ||
      (state.compLetters.length === 0 && state.getNumberPlay) ||
      (state.compLetters.length === 0 && state.colorPlay)
      ){
      nextIndexRef.current = state.items.length || state.colors.length 
      const nextIntervalId = setInterval(() => {
        // Decrement the value stored in the ref.
        nextIndexRef.current--;
        const value = state.items[nextIndexRef.current]?.value || state.colors[nextIndexRef.current]?.value 
      
        if(value) {
          console.log(value)
          speak(value,dispatch,state);
          dispatch({ type: 'update-State', letterValue: value, compLetters: [...state.compLetters, value]});
        }
        if(nextIndexRef.current <= 0 ) {
          clearInterval(nextIntervalId);
          dispatch({
            type: 'set-Winner',
            winner: `Good Job ${state.text || state.textNumber || ''}!`,
          });
        }
      if(state.items.length <= 0 || state.colors.length <= 0){
          speak(state.winner,dispatch,state)
        }
      }, 500);
      return () => clearInterval(nextIntervalId);
    }
  }, [state.compLetters, state.items, state.colors, state.text,state.letterValue, state.textNumber, state.play, state.getNumberPlay,state.colorPlay, state.speaking]);
  // Speak the shape
  useEffect(() => {
    const shapeValue = state.shapes[state.shapeIndex]?.value;
    if(!shapeValue) return;
    speak(`Pick the ${shapeValue} ${state.text}`, dispatch);
  }, [state.shapeIndex, state.shapes]);
  // Handle winner
  useEffect(() => {
    if(state.shapeIndex !== 5) return;
    const message = `Good Job ${state.text || ''}!`;
    dispatch({ type: 'set-Winner', winner: message });
    speak(message);
  }, [state.shapeIndex]);

  // Effect compares the automatically picked items with the user’s pick.
  useEffect(() => {
    if(state.compare && state.compLetters.length > 1) {
      if(state.compLetters[0] === state.compLetters[1]) {
        dispatch({ type: 'match-Items', match: !state.match });
        // Remove the items from the items array using the index stored in the ref.
        dispatch({
          type: 'remove-Items',
          items: state.items.filter((_, index) => index !== nextIndexRef.current),
          colors: state.colors.filter((_,index) => index !== nextIndexRef.current)
        });
      }
      dispatch({ 
        type: 'clear-Comparison',
        compLetters: state.compLetters,
        compare: !state.compare,
       });
    }
  }, [state.compare, state.compLetters]);
//Handler change button color 
const handleButtonStyle = (item) => {
  return state.compLetters.includes(item) ? { color: state.getColor,} : {};
};

    let content;
    // Main screen
    if(!(state.getAlphabet || state.getNumbers || state.colorMain || state.shapeHome)) {
      content = (
        <Main
          onNumberOneClick={() => handleNumberOneClick(dispatch, state)}
          onAlphabetClick={() => handleAlphabetClick(dispatch,state)}
          onNumberTwoClick={() => handleNumberTwoClick(dispatch, state)}
          onShapeClick={() => handleShapeClick(dispatch, state)}
          onColorClick={()=> handleColorClick(dispatch, state)}
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
            onChange={(e) => dispatch({ type: "text" ,cat: "number", textNumber: e.target.value || "",})}
          />
          <ul className="flex md:justify-center justify-center flex-wrap md:mt-10 mt-10 lg:text-9xl md:text-7xl sm:text-4xl text-3xl font-bold m-0 p-0"
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
      content = (
        <section className="grid grid-rows-1 place-items-center w-screen h-fit ">
            <section className="flex justify-between w-screen h-fit">
              <Homebtn onHomeClick={() => handleHomeClick(dispatch, state)} />
              {state.items.length === 0 && (
                <Restartbtn onRestartClick={() => handleRestartClick(dispatch, state)} />
              )}
            </section>
            <div className="grid items-center lg:w-screen md:w-screen sm:w-screen  lg:h-full md:h-full sm:h-full w-screen h-full">
              <div className="relative flex justify-center items-center lg:w-full lg:h-100 md:w-full md:h-100 sm:w-full sm:h-75 w-full h-75">
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
                      className="absolute flex justify-center items-center bg-[#74a3c9] 
                    w-full h-full lg:text-[20em] text-[10em] border-red-500 font-bold">
                      {l.value.toUpperCase()}
                    </div>
                  ))
                )}
              </div>
            <ul className="flex flex-row flex-wrap lg:place-content-center md:place-content-center sm:place-content-center place-content-center lg:w-full md:w-full sm:w-full w-full lg:h-fit md:h-fit sm:h-fit max-h-fit gap-2">
                {state.buttons.map((button,i) => (
                  <li key={i} className="w-fit">
                    <Button className="border-0.5 lg:border-b-6 lg:border-r-6 border-b-3 border-r-3 lg:rounded rounded-full border-gray-800 bg-[#0000003c] lg:text-5xl md:text-4xl text-2xl font-bold lg:w-25 lg:h-25 md:w-20 md:h-20 sm:w-50 sm:h-50 w-10 h-11 cursor-pointer active:translate-y-0.5 lg:rainbow-border md:rainbow-border"
                      value={button.toUpperCase()}
                      onClick={() => handleClick(button, dispatch, state)}
                      style={handleButtonStyle(button)} disabled={state.compLetters.length < 1 || state.speaking}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </section>
      );
    }
    // Number play screen
    else if(state.getNumberPlay) {
      content = (
        <section className="flex flex-col place-content-center lg:w-screen md:w-screen sm:w-screen lg:h-fit md:h-fit sm:h-fit h-fit gap-2">
            <section className="flex justify-between w-screen h-fit ">
              <Homebtn onHomeClick={() => handleHomeClick(dispatch, state)} />
              {state.items.length === 0 && (
                <Restartbtn onRestartClick={() => handleRestartClick(dispatch,state)} />
              )}
            </section>
            <div className="grid items-center lg:w-screen md:w-screen sm:w-screen  lg:h-full md:h-full sm:h-full w-screen h-full">
              <div className="relative flex justify-center items-center lg:w-full lg:h-100 md:w-full md:h-50 sm:w-full sm:h-75 w-full h-50">
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
                      className="absolute flex justify-center items-center bg-[#74a3c9] 
                      w-full h-full lg:text-[18em] text-[10em] border-red-500 font-bold ">
                      {l.value}
                    </div>
                  ))
                )}
              </div>
            <ul className="flex flex-row flex-wrap lg:place-content-center md:place-content-center sm:place-content-center place-content-center lg:w-full md:w-full sm:w-full w-full lg:h-fit md:h-fit sm:h-fit max-h-fit gap-2 lg:grid lg:place-items-center md:place-items-center sm:place-items-center place-items-center lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-4 grid-cols-4">
                {state.buttons.map((items) => (
                  <li key={items}>
                    <Button className="border-0.5 lg:border-b-8 lg:border-r-8 md:border-b-8 md:border-r-8 border-b-5 border-r-5 lg:rounded  rounded-full border-black bg-[#0000003c] lg:text-8xl md:text-4xl text-4xl font-bold lg:w-50 lg:h-50 md:w-30 md:h-30 sm:w-50 sm:h-50 w-20 h-20 cursor-pointer active:translate-y-0.5 rainbow-border" 
                    value={items.toUpperCase()} 
                    onClick={() => handleClick(items,dispatch,state)} 
                    style={handleButtonStyle(items)} disabled={state.compLetters.length < 1 || state.speaking}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </section>
      );
    }else if(state.colorPlay){
      content = (
        <section className="flex flex-col place-content-center lg:w-screen md:w-screen sm:w-screen lg:h-fit md:h-fit sm:h-fit h-fit gap-2">
            <section className="flex flex-row">
              <Homebtn onHomeClick={() => handleHomeClick(dispatch, state)} />
              {state.colors.length === 0 && (
                <Restartbtn onRestartClick={() => handleRestartClick(dispatch, state)} />
              )}
            </section>
            <div className="grid lg:w-screen md:w-screen sm:w-screen lg:h-full md:h-full sm:h-full w-screen h-full">
              <div className="relative flex justify-center items-center lg:w-screen lg:h-100 md:w-screen md:h-100 sm:w-screen sm:h-75 w-screen h-50">
                {state.colors.length === 0 ? (
                  <div
                    className="lg:text-6xl md:text-4xl sm:text-lg text-lg font-bold winner-grow"
                    style={{ fontFamily: '"DynaPuff", system-ui' }}
                  >
                    {state.winner}
                  </div>
                ) : (
                  state.colors.map((color,i) => (
                    <div
                      key={i}
                      className={`${btnValueClassName} ${colorClasses[color.value]}`}>
                      {color.value}
                    </div>
                  ))
                )}
              </div>
              <ul className="flex flex-row flex-wrap place-content-center  w-screen h-fit max-h-fit gap-2">
                {state.buttons.map((button) => (
                  <li key={button} className="">
                    <Button className={`${btnClassName} ${colorClasses[button]}`}
                      value={button.toUpperCase()}
                      onClick={() => handleColorGameClick(button, dispatch, state)}
                      disabled={state.compLetters.length < 1 || state.speaking}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </section>
      )
    } else if(state.shapePlay) {
      content = (
        <section className="flex flex-col place-content-center lg:w-screen md:w-screen sm:w-screen lg:h-fit md:h-fit sm:h-fit h-fit gap-2">
          <section className="flex flex-row">
            <Homebtn onHomeClick={() => handleHomeClick(dispatch, state)} />
            {state.winner.length > 0 && (
              <Restartbtn onRestartClick={() => handleRestartClick(dispatch, state)} />
            )}
          </section>
          <div className="grid lg:w-screen md:w-screen sm:w-screen lg:h-full md:h-full sm:h-full w-screen h-full">
            <div className="relative flex  items-center justify-center lg:w-screen lg:h-fit md:w-screen md:h-60 sm:w-screen sm:h-75 w-screen h-70 ">
              {state.winner.length > 0 ? (
                <div className="lg:text-6xl md:text-4xl sm:text-lg text-lg font-bold winner-grow" style={{ fontFamily: '"DynaPuff", system-ui' }}> {state.winner} </div>
              ) : (
                <section className="flex flex-col place-items-center">
                  <section className={`flex ${currentShape?.className}`}></section>
                  <div className="flex place-content-center h-10 w-full text-2xl text-white font-extrabold">{currentShape?.value} </div>
                </section>
              )}
            </div>
            <ul className="flex flex-row flex-wrap  place-items-end place-content-center lg:w-full md:w-full sm:w-full w-full lg:h-fit md:h-fit sm:h-fit max-h-fit gap-5">
              {state.buttons.map((button) => (
                <li key={button.value} className="flex ">
                  <Button className={`${button.className} cursor-pointer`}
                  onClick={() => handleShapeGameClick(button.value, dispatch, state)}
                  disabled={state.spekaing}
                  />
                </li>
              ))}
            </ul>
          </div>
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
          onChange={(e) => dispatch({ type: "text", cat:"alphabet", text: e.target.value })}
        />
      );
    }
    else if(state.colorMain){
      content = (
        <Color
          onColorClick={()=> handleColorPlayClick(dispatch, state)}
          onBackColorClick={() => handleBackColorClick(dispatch, state)}  
          value={state.text}
          onChange={(e) => dispatch({ type: "text", cat: "color", text: e.target.value})}
          speak={speak}
          dispatch={dispatch}
          state={state}
        />
      )
    }
    else if(state.shapeHome){
      content = (
        <Shape
        onShapeClick={() => handleShapePlayClick(dispatch, state)}
        onBackShapeClick={() => handleBackShapeClick(dispatch, state)}
        value={state.text}
        onChange={(e) => dispatch({ type: "text", cat: "shape", text: e.target.value})}
        />
      )
    }
    else {
      content = null;
    }
    return <div className="  lg:w-screen md:w-screen sm:w-10 w-screen h-20 sm:h-3 ">{content}</div>;
}
export default App;
