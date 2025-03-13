import { useState, useEffect, useRef } from 'react';
import { Button } from './components/Button';
import { Home } from './components/Home';
import { Homebtn } from './components/Home-Btn';
import { Restartbtn } from './components/Restart-Btn';
import { Main } from './components/Main-page';
import { Number } from './components/Number-Home';
// import {NumberApp } from './components/Number-App'
import './App.css';

function App() {
  const [buttons, setButtons] = useState(shuffledLetter );
  const [items, setItems] = useState([]);
  const [compLetters, setCompLetters] = useState([]);
  const [letterValue, setLetterValue] = useState('');
  const [compare, setCompare] = useState(false);
  const [match, setMatch] = useState(false);
  const [winner, setWinner] = useState('');
  const [play, setPlay] = useState(false);
  const [text, setText] = useState('');
  const [textNumber, setTextNumber] = useState('');
  const [getNumbers, setGetNumbers] = useState(false);
  const [getAlphabet, setGetAlphabet] = useState(false);
  const [getNumberPlay,setGetNumberPlay] = useState(false)
  const [getNumberCat, setGetNumberCat] = useState([]);
  // Use a ref to persist the "nextIndex" value across renders and effects.
  const nextIndexRef = useRef(items.length);
  // This effect automatically selects letters from the items array.
  useEffect(() => {
    if((compLetters.length === 0 && play) || (compLetters.length === 0 && getNumberPlay)) {
      nextIndexRef.current = items.length;
      const nextIntervalId = setInterval(() => {
        // Decrement the value stored in the ref.
        nextIndexRef.current--;
        setItems((prev) => {
          const value = prev[nextIndexRef.current]?.value;
          if(value) {
            setLetterValue(value);
            // Use updater syntax to ensure consistency across state updates.
            setCompLetters([...compLetters, value]);
          }
          return prev;
        });
        if(nextIndexRef.current <= 0) {
          clearInterval(nextIntervalId);
          setWinner(`Good Job ${text ? text : textNumber}!`);
        }
      }, 500);
      return () => clearInterval(nextIntervalId);
    }
  }, [compLetters, items, text,textNumber,play,getNumberPlay]);
  console.log('COMPLETTER', compLetters);
  // Effect compares the automatically picked items with the user’s pick.
  useEffect(() => {
    if(compare && compLetters.length > 1) {
      if(compLetters[0] === compLetters[1]) {
        console.log('MATCH');
        setMatch(true);
        // Remove the items from the items array using the index stored in the ref.
        setItems((prev) =>
          prev.filter((_, index) => index !== nextIndexRef.current)
        );
      } else {
        console.log('NO MATCH');
      }
      setCompLetters([]);
      setCompare(false);
    }
  }, [compare, compLetters]);
  // Event to add to compLetters array to compare
  const handleClick = (items, i) => {
    setCompLetters((prevComp) => [...prevComp, items]);
    setCompare(true);
  };
  // Event used to start application and set arrays for letters and buttons
  const handlePlay = () => {
    const shuffled = shuffleArray(ALPHABET.map((l) => l.value));
    setPlay((p) => !p);
    setItems(ALPHABET);
    setButtons(shuffled);
    console.log('playGame');
  };
  // Event used to go back to home screen
  const handleHomeClick = () => {
    
    if(getNumbers){
      setItems(numbersOne)
      setTextNumber('')
      setGetNumberPlay(np=>!np)
      setCompLetters([]);
    }
    if(getAlphabet){
    setPlay((p) => !p);
    setCompLetters([]);
    setItems(ALPHABET);
    setWinner('');
    setText('');
    }
    console.log('HOME',items)
  };
  // Event used to reset items and buttons arrays.
  const handleRestartClick = () => {
    const shuffled = shuffleArray(ALPHABET.map((l) => l.value));
    const shuffledNumber = shuffleArray(numbersOne.map((l) => l.value));
    setItems(ALPHABET);
    setButtons(shuffled);
    setCompLetters([]);
    if(getNumbers) {
      setItems(numbersOne);
      setButtons(shuffledNumber);
      setCompLetters([]);
    }
  };
  const handleNumberOneClick = () => {
    setGetNumbers(gn=>!gn)
    setGetNumberCat(numbersOne)
    console.log('playGame');
  };
  const handleNumberTwoClick = ()=>{
    setGetNumbers(gn => !gn);
    setGetNumberCat(numbersTwo);
    console.log('11-20')
  }
  const handleAlphabetClick = () => {
    console.log('alphabet');
    setGetAlphabet(ga=>!ga)
  };
  const handleBackClick = ()=>{
    setGetAlphabet(ga=>!ga)
  }
  const handleNumberBackClick = ()=>{
    setGetNumbers(gn=>!gn)
  }
  console.log(getNumberCat[0]?.value)
  const handleNumberPlayClick = ()=>{
    if(getNumberCat[0]?.value.includes('20')){
      const shuffledNumber = shuffleArray(numbersTwo.map((l) => l.value));
      setGetNumberPlay(np => !np);
      setItems(numbersTwo);
      setButtons(shuffledNumber);
    }
    if(getNumberCat[0]?.value.includes('10')) {
      const shuffledNumber = shuffleArray(numbersOne.map((l) => l.value));
      setGetNumberPlay(np => !np);
      setItems(numbersOne);
      setButtons(shuffledNumber);
    }
  }
  console.log(items)
  return (
    <div className='App'>
      {!(getNumbers || getAlphabet) && (
        <Main onNumberOneClick={handleNumberOneClick} onAlphabetClick={handleAlphabetClick} onNumberTwoClick={handleNumberTwoClick}/>
      )}
      {(getNumbers &&!getNumberPlay) &&(
        <Number
          onNumberPlayClick={handleNumberPlayClick} 
          onBackNumberClick={handleNumberBackClick} 
          value={textNumber}
          onChange={(e)=> setTextNumber(e.target.value)}
          />
      )}
      { play ? (
        <>
          {items.length === 0 && <h2>{winner}</h2>}
          <div className='homeBtn-border'>
            <Homebtn onHomeClick={handleHomeClick} />
            {items.length === 0 && <Restartbtn onRestartClick={handleRestartClick} />}
          </div>
          <div className={ 'letter-border' }>
            {items.map((l) => (
              <div className='letter' key={l.value}>
                {l.value.toUpperCase()}
              </div>
            ))}
          </div>
          <ul className={'letters-border'}>
            {buttons.map((items, index) => (
              <li key={items}>
                <Button
                  items={items.toUpperCase()}
                  onClick={() => handleClick(items, index)}
                  disabled={compLetters.length < 1}
                />
              </li>
            ))}
          </ul>
        </>
      ) : getNumberPlay ? (
          <>
            {items.length === 0 && <h2>{winner}</h2>}
            <div className='homeBtn-border'>
              <Homebtn onHomeClick={handleHomeClick} />
              {items.length === 0 && <Restartbtn onRestartClick={handleRestartClick} />}
            </div>
            <div className='num-border'>
              {items.map((l) => (
                <div className='num' key={l.value}>
                  {l.value.toUpperCase()}
                </div>
              ))}
            </div>
            <ul className='nums-border'>
              {buttons.map((items, index) => (
                <li className='num-list' key={items} >
                  <Button
                    items={items.toUpperCase()}
                    onClick={() => handleClick(items, index)}
                    disabled={compLetters.length < 1}
                  />
                </li>
              ))}
            </ul>
          </>
      ) : getAlphabet ?(
        <Home
          onPlayClick={handlePlay}
          onBackClick={handleBackClick}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      ):(
        <></>

      )}
    </div>
  );
}
export default App;
const numbersOne = [
  { value: '1' }, { value: '2' }, { value: '3' }, { value: '4' }, { value: '5' },
  { value: '6' }, { value: '7' }, { value: '8' }, { value: '9' }, { value: '10' }
].reverse();
const numbersTwo = [
  { value: '11' }, { value: '12' }, { value: '13' }, { value: '14' }, { value: '15' },
  { value: '16' }, { value: '17' }, { value: '18' }, { value: '19' }, { value: '20' },
].reverse();
const ALPHABET = [
  { value: 'a' }, { value: 'b' }, { value: 'c' }, { value: 'd' }, { value: 'e' },
  { value: 'f' }, { value: 'g' }, { value: 'h' }, { value: 'i' }, { value: 'j' },
  { value: 'k' }, { value: 'l' }, { value: 'm' }, { value: 'n' }, { value: 'o' },
  { value: 'p' }, { value: 'q' }, { value: 'r' }, { value: 's' }, { value: 't' },
  { value: 'u' }, { value: 'v' }, { value: 'w' }, { value: 'x' }, { value: 'y' },
  { value: 'z' }
].reverse();

export const alphabet = ALPHABET.map((a) => a.value);
export const numbers = numbersOne.map((a) => a.value);

function shuffleArray(array) {
  for(let i = array.length - 1; i >= 1; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const shuffledLetter = shuffleArray([...alphabet]);
const shuffledNumber = shuffleArray([...numbers]);
