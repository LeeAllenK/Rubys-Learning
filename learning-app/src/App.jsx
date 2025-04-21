import { useState, useEffect, useRef,useReducer} from 'react';
import { Button } from './components/Button';
import { Home } from './components/Home';
import { Homebtn } from './components/Home-Btn';
import { Restartbtn } from './components/Restart-Btn';
import { Main } from './components/Main-page';
import { Number } from './components/Number-Home';
import { appReducer, initialState} from './AppReducer';
// import './App.css';

function App() {
  const [buttons, setButtons] = useState(initialState );
  const [items, setItems] = useState(initialState);
  const [compLetters, setCompLetters] = useState(initialState);
  const [letterValue, setLetterValue] = useState(initialState);
  const [compare, setCompare] = useState(initialState);
  const [match, setMatch] = useState(initialState);
  const [winner, setWinner] = useState(initialState);
  const [play, setPlay] = useState(initialState);
  const [text, setText] = useState(initialState);
  const [textNumber, setTextNumber] = useState(initialState);
  const [getNumbers, setGetNumbers] = useState(initialState);
  const [getAlphabet, setGetAlphabet] = useState(initialState);
  const [getNumberPlay,setGetNumberPlay] = useState(initialState)
  const [getNumberCatOne, setGetNumberCatOne] = useState(initialState);
  const [getNumberCatTwo, setGetNumberCatTwo] = useState(initialState);
  const [getColor,setGetColor] = useState('white');
  const [getBackgroundColor, setGetBackgroundColor] = useState('linear-gradient(180deg, green, green)');
  const [state, dispatch] = useReducer(appReducer, initialState);
  // Used a ref to persist the "nextIndex" value across renders and effects.
  const nextIndexRef = useRef(state.items.length);
  // This effect automatically selects letters from the items array.
  useEffect(() => {
    if(
      (state.compLetters.length === 0 && state.play) ||
      (state.compLetters.length === 0 && state.getNumberPlay)
    ) {
      nextIndexRef.current = state.items.length;
      const nextIntervalId = setInterval(() => {
        // Decrement the value stored in the ref.
        nextIndexRef.current--;
        const value = state.items[nextIndexRef.current]?.value;
        if(value) {
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
        color: state.color
       });
    }
  }, [state.compare, state.compLetters]);
  // Event to add to compLetters array to compare
  const handleClick = (items, i) => {
    console.log(items)
    dispatch({
      type: 'compare-Letters',
        compLetters: [...state.compLetters, items],
        compare: !state.compare,
    });
  };
  // Reducer implemented to better optimize events used to start application and set arrays for letters and buttons
  const handlePlay = () => {
    dispatch({
      type:'toggle-Play',
      play: !state.play,
      items: state.items,
      buttons: state.buttons
    })
  };
  // Event used to go back to home screen
  const handleHomeClick = () => {
    if(state.getNumbers){
      dispatch({
        type: 'Home',
        getNumberPlay: false,
        items: state.items,
        buttons: state.buttons,
        textNumber: state.textNumber,
        compLetters: state.compLetters
      })
    }
    if(state.getAlphabet){
      dispatch({
        type: 'Home',
        play: !state.play,
        compLetters: state.compLetters,
        items: state.items,
        buttons: state.buttons,
        winner: state.winner,
        text: state.text
      })
    }
  };
  // Event used to reset items and buttons arrays.
  const handleRestartClick = () => {
    if(state.getNumberCatOne.length > 0) {
      dispatch({
        type: 'restart-NumCatOne',
        items:state.items,
        buttons: state.buttons,
        compLetters: state.compLetters
      })
    }
    if(state.getNumberCatTwo.length > 0){
      dispatch({
        type: 'restart-NumCatTwo',
        items: state.items,
        buttons: state.buttons,
        compLetters: state.compLetters
      })
    }
    if(state.getAlphabet){
      dispatch({
        type: 'restart-Alphabet',
        items: state.items,
        buttons: state.buttons,
        compLetters: state.compLetters
      })
    }
  };
  const handleNumberOneClick = () => {
    dispatch({
      type: 'select-NumbersCatOne',
      getNumbers: !state.getNumbers,
      getNumberCatOne: state.getNumberCatOne

    })
  };
  const handleNumberTwoClick = ()=>{
    dispatch({
      type: 'select-NumbersCatTwo',
      getNumbers: !state.getNumbers,
      getNumberCatTwo: state.getNumberCatTwo

    })
  }
  const handleAlphabetClick = () => {
    dispatch({
      type: 'select-Alphabet',
      getAlphabet: !state.getAlphabet
    })
  };
  const handleBackClick = ()=>{
    dispatch({
      type: 'Menu',
      getAlphabet: !state.getAlphabet
    })
  }
  const handleNumberBackClick = ()=>{
    dispatch({
      type: 'Menu',
      getNumbers: !state.getNumbers,
      getNumberCatOne: state.getNumberCatOne,
      getNumberCatTwo: state.getNumberCatTwo
    })
  }
  const handleNumberPlayClick = ()=>{
    if(state.getNumberCatOne[0]?.value.includes('10')) {
      dispatch({
        type: 'toggle-Numberplay',
        getNumberPlay: !state.getNumberPlay,
        items: state.getNumberCatOne,
        buttons: state.buttons
      })
    }
    if(state.getNumberCatTwo[0]?.value.includes('20')){
      dispatch({
        type: 'toggle-Numberplay',
        getNumberPlay: !state.getNumberPlay,
        items: state.getNumberCatTwo,
        buttons: state.buttons
      })
    }
  }
const handleButtonStyle = (item) => {
  return state.compLetters.includes(item) ? { color: getColor, background: getBackgroundColor} : {};
};

  return (
    <div className='md:w-full w-full'>
      {!(state.getNumbers || state.getAlphabet) && (
        <Main onNumberOneClick={handleNumberOneClick} onAlphabetClick={handleAlphabetClick} onNumberTwoClick={handleNumberTwoClick}/>
      )}
      {(state.getNumbers && !state.getNumberPlay) &&(
      <>
          <Number
            onNumberPlayClick={handleNumberPlayClick}
            onBackNumberClick={handleNumberBackClick}
            value={state.textNumber || ''}
            onChange={(e) => dispatch({ type: 'updateTextNumber', textNumber: e.target.value || ''})}
          />
          <ul className='number-list'>
            {state.getNumberCatOne.length > 0 ? (
              <>
                <li className="home-One">1</li>
                <li className="home-Two">2</li>
                <li className="home-Three">3</li>
                <li className="home-Four">4</li>
                <li className="home-Five">5</li>
                <li className="home-Six">6</li>
                <li className="home-Seven">7</li>
                <li className="home-Eight">8</li>
                <li className="home-Nine">9</li>
                <li className="home-Ten">10</li>
              </>
            ) : (
            <>
            <li className="home-Eleven">11</li>
            <li className="home-Twelve">12</li>
            <li className="home-Thirteen">13</li>
            <li className="home-Fourteen">14</li>
            <li className="home-Fifteen">15</li>
            <li className="home-Sixteen">16</li>
            <li className="home-Seventeen">17</li>
            <li className="home-Eighteen">18</li>
            <li className="home-Nineteen">19</li>
            <li className="home-Twenty">20</li>
            </>
            )}
            
          </ul>
      </>
      )}
      {state.play ? (
  // background-color: white;
  // display: flex;
  // justify-content: center;
  // font-size: 12.5em;
  // height: 250px;
  // width: 250px;
  // border-radius: 10px;
  // position: absolute;
  // color: black;
  // background: linear-gradient(180deg, #999898, #bdb6b6);
  // box-shadow: 0 2px 6px #0000004d;
  // animation: rainbow-letter 3s infinite;
  // margin: 0;
        <>
          <div className='flex flex-row justify-between m-1 '>
            <Homebtn onHomeClick={handleHomeClick}/>
            {state.items.length === 0 && <Restartbtn onRestartClick={handleRestartClick}/>}
          </div>
          {state.items.length === 0 && <h2>{state.winner}</h2>}
          {/* .letter-border,.num-border {
            display: flex;
          justify-content:center;
          align-content: center;
} */}
          <div className='flex justify-center ' >
            {state.items.map((l) => (
              <div className='flex justify-center items-center bg-white border-4 w-50 h-50 absolute text-9xl ' key={l.value}>
                {l.value.toUpperCase()}
              </div>
            ))}
          </div>
          {/* .letters-border,.nums-border{
            display:flex;
          justify-content: center;
          align-content: flex-start;
          flex-wrap: wrap;
          width: 100%;
          margin-top: 300px;
          padding: 0;
} */}
          <ul className='flex justify-center flex-wrap mt-75 p-1 w-full'>
            {state.buttons.map((items, index) => (

            //   display: flex;
            // justify-content: center;
            // flex-wrap: wrap;
            // font-family: "DynaPuff", system-ui;
            // font-optical-sizing: auto;
            // font-weight: 900;
            // font-style: normal;
            // font-variation-settings:"wdth" 100;
              <li className='flex' key={items}>
                <Button
                  items={items.toUpperCase()}
                  onClick={() => handleClick(items, index)}
                  style={handleButtonStyle(items)}
                  disabled={state.compLetters.length < 1}
               ></Button>
              </li>
            ))}
          </ul>
        </>
      ) : state.getNumberPlay ? (
          <>
            {state.items.length === 0 && <h2>{state.winner}</h2>}
            <div className='homeBtn-border'>
              <Homebtn onHomeClick={handleHomeClick} />
              {state.items.length === 0 && <Restartbtn onRestartClick={handleRestartClick} />}
            </div>
            <div className='num-border'>
              {state.items.map((l) => (
                <div className='num' key={l.value}>
                  {l.value}
                </div>
              ))}
            </div>
            <ul className='nums-border'>
              {state.buttons.map((items, index) => (
                <li className='num-list' key={items} >
                  <Button
                    items={items.toUpperCase()}
                    onClick={() => handleClick(items, index)}
                    style={handleButtonStyle(items)}
                    disabled={state.compLetters.length < 1}
                  />
                </li>
              ))}
            </ul>
          </>
      ) : state.getAlphabet ?(
        <Home
          onPlayClick={handlePlay}
          onBackClick={handleBackClick}
          value={state.text}
          onChange={(e) => dispatch({ type: 'updateText', text: e.target.value })}
        />
      ):(
        <></>
      )}
    </div>
  );
}
export default App;

export const numbersOne = [
  { value: '1' }, { value: '2' }, { value: '3' }, { value: '4' }, { value: '5' },
  { value: '6' }, { value: '7' }, { value: '8' }, { value: '9' }, { value: '10' }
].reverse();
export const numbersTwo = [
  { value: '11' }, { value: '12' }, { value: '13' }, { value: '14' }, { value: '15' },
  { value: '16' }, { value: '17' }, { value: '18' }, { value: '19' }, { value: '20' },
].reverse();
export const ALPHABET = [
  { value: 'a' }, { value: 'b' }, { value: 'c' }, { value: 'd' }, { value: 'e' },
  { value: 'f' }, { value: 'g' }, { value: 'h' }, { value: 'i' }, { value: 'j' },
  { value: 'k' }, { value: 'l' }, { value: 'm' }, { value: 'n' }, { value: 'o' },
  { value: 'p' }, { value: 'q' }, { value: 'r' }, { value: 's' }, { value: 't' },
  { value: 'u' }, { value: 'v' }, { value: 'w' }, { value: 'x' }, { value: 'y' },
  { value: 'z' }
].reverse();
export const alphabet = ALPHABET.map((a) => a.value);
export const numbers = numbersOne.map((a) => a.value);
export function shuffleArray(array) {
  for(let i = array.length - 1; i >= 1; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
