import { useState,useEffect} from 'react';
import {Letterbtn} from './components/Letter-Btn'

// ADD HOME PAGE, PLAY BTN, AND STATE TO HOLD USERNAME AFTER GAME COMPLETION
import './App.css'
function App() {
  const [btnLetters, setBtnLetters] = useState(shuffledLetter);
  const [letter,setLetter] = useState(ALPHABET);
  const [compLetters, setCompLetters] = useState([]);
  const [letterValue, setLetterValue] = useState(null)
  const [compare, setCompare] = useState(false);
  const [match,setMatch]= useState(false)
  const [winner,setWinner] = useState('')
  useEffect(() => {
    let nextIndex = letter.length + 1; 
          console.log(nextIndex)
    if(compLetters.length === 0) {
      const nextLetter = setInterval(() => {
        setLetter((prev) => {
          nextIndex--;
          let value = prev[nextIndex + 1]?.value;
          if(value !== null && value !== undefined) {
            setLetterValue(value);
            setCompLetters([...compLetters, value]);
          console.log(value)
          }

          if(match) {
            setMatch(false);
            return prev.slice(0,nextIndex);
          }
          return prev;
        });
      }, 100);
      console.log('LV', letterValue);
        if(letter.length === 0)setWinner('Good Job Ruby!')
      return () => clearInterval(nextLetter);
    }
  }, [compLetters, letterValue, letter, match]);


      console.log('CL',compLetters)
  const handleClick =(letter)=>{
    setCompLetters([...compLetters,letter,winner])
    setCompare(true)
  }
  useEffect(()=>{
  if(compare && compLetters.length > 1){
    if(compLetters[0] === compLetters[1]){
        console.log('MATCH');
        setMatch(true)
        setCompLetters([]);
        setCompare(false)
    }else{
      console.log('NO MATCH')
      setCompLetters([])
      setCompare(false)
    }
  }
  },[compare,match])
  return (
    <>
      <h1 className='Ruby'>Ruby's Alphabet</h1>
        <h2>{winner}</h2>
      <div className='letter-border'>
        {letter.map((l, index) => (
          <div className='letter' key={l.value}>
            {l.value.toUpperCase()}</div>
        ))}
      </div>
      <ul className='letters-border'>
        {btnLetters.map((letter, index) => (
          <Letterbtn key={letter} letter={letter.toUpperCase()} onClick={()=>handleClick(letter)} disabled={compLetters.length < 1 }/>
        ))}
      </ul>
    </>
  );
}

export default App;
const ALPHABET = [
  { value: 'a' }, { value: 'b' }, { value: 'c' }, { value: 'd' }, { value: 'e'},
  { value: 'f' }, { value: 'g' }, { value: 'h' }, { value: 'i' }, { value: 'j'},
  { value: 'k' }, { value: 'l' }, { value: 'm' }, { value: 'n' }, { value: 'o'},
  { value: 'p' }, { value: 'q' }, { value: 'r' }, { value: 's' }, { value: 't'},
  { value: 'u' }, { value: 'v' }, { value: 'w' }, { value: 'x' }, { value: 'y'},
  { value: 'z'}
].reverse();
// console.log(ALPHABET.map((a) => a.value))
const alphabet = ALPHABET.map((a) => a.value)

function shuffleArray(array) {
  for(let i = array.length - 1; i >= 1; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
const shuffledLetter = shuffleArray(alphabet)

