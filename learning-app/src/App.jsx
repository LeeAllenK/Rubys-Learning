import { useState, useEffect, useRef } from 'react';
import { Letterbtn } from './components/Letter-Btn';
import { Home } from './components/Home';
import { Homebtn } from './components/Home-Btn';
import { Restartbtn } from './components/Restart-Btn';
import './App.css';

function App() {
  const [btnLetters, setBtnLetters] = useState(shuffledLetter);
  const [letter, setLetter] = useState(ALPHABET);
  const [compLetters, setCompLetters] = useState([]);
  const [letterValue, setLetterValue] = useState('');
  const [compare, setCompare] = useState(false);
  const [match, setMatch] = useState(false);
  const [winner, setWinner] = useState('');
  const [play, setPlay] = useState(false);
  const [text, setText] = useState('');
  // Use a ref to persist the "nextIndex" value across renders and effects.
  const nextIndexRef = useRef(letter.length);
  // This effect automatically selects letters from the letter array.
  useEffect(() => {
    if(compLetters.length === 0) {
      nextIndexRef.current = letter.length;
      const nextIntervalId = setInterval(() => {
        // Decrement the value stored in the ref.
        nextIndexRef.current--;
        setLetter((prev) => {
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
          setWinner(`Good Job ${text}!`);
        }
      }, 500);
      return () => clearInterval(nextIntervalId);
    }
  }, [compLetters, letter, text]);
  console.log('COMPLETTER',compLetters)
  // effect compares the automatically picked letter with the user’s pick.
  useEffect(() => {
    if(compare && compLetters.length > 1) {
      if(compLetters[0] === compLetters[1]) {
        console.log('MATCH');
        setMatch(true);
        // Remove the letter from the letter array using the index stored in the ref.
        setLetter((prev) =>
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
  const handleClick = (letter, i) => {
    setCompLetters((prevComp) => [...prevComp, letter]);
    setCompare(true);
  };
//Event used to start application and set arrays for lletters and btnLetters
  const handlePlay = () => {
    const shuffled = shuffleArray(ALPHABET.map((l) => l.value));
    setPlay((p) => !p);
    setLetter(ALPHABET);
    setBtnLetters(shuffled);
    console.log('playGame');
  };
//Event used to go back to home screen
  const handleHomeClick = () => {
    setPlay((p) => !p);
    setCompLetters([]);
    setLetter(ALPHABET);
    setWinner('');
    setText('');
  };
//Event used to reset letter and btnLetters arrays.
  const handleRestartClick = () => {
    const shuffled = shuffleArray(ALPHABET.map((l) => l.value));
    setLetter(ALPHABET);
    setBtnLetters(shuffled);
    setCompLetters([]);
  };
  return (
    <div className='App'>
      {play ? (
        <>
          {letter.length === 0 && <h2>{winner}</h2>}
          <div className='homeBtn-border'>
            <Homebtn onHomeClick={handleHomeClick} />
            {letter.length === 0 && (
              <Restartbtn onRestartClick={handleRestartClick} />
            )}
          </div>
          <div className='letter-border'>
            {letter.map((l) => (
              <div className='letter' key={l.value}>
                {l.value.toUpperCase()}
              </div>
            ))}
          </div>
          <ul className='letters-border'>
            {btnLetters.map((letter, index) => (
              <li key={letter}>
                <Letterbtn
                  letter={letter.toUpperCase()}
                  onClick={() => handleClick(letter, index)}
                  disabled={compLetters.length < 1}
                />
              </li>
            ))}
          </ul>
        </>
      ) : (
        <Home
          onPlayClick={handlePlay}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      )}
    </div>
  );
}
export default App;
const ALPHABET = [
  { value: 'a' }, { value: 'b' }, { value: 'c' }, { value: 'd' }, { value: 'e' },
  { value: 'f' }, { value: 'g' }, { value: 'h' }, { value: 'i' }, { value: 'j' },
  { value: 'k' }, { value: 'l' }, { value: 'm' }, { value: 'n' }, { value: 'o' },
  { value: 'p' }, { value: 'q' }, { value: 'r' }, { value: 's' }, { value: 't' },
  { value: 'u' }, { value: 'v' }, { value: 'w' }, { value: 'x' }, { value: 'y' },
  { value: 'z' }
].reverse();

export const alphabet = ALPHABET.map((a) => a.value);

function shuffleArray(array) {
  for(let i = array.length - 1; i >= 1; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const shuffledLetter = shuffleArray([...alphabet]);
