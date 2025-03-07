import { useState,useEffect} from 'react';
import {Letterbtn} from './components/Letter-Btn'
import {Home} from './components/Home'
import {Homebtn} from './components/Home-Btn'
import {Restartbtn} from './components/Restart-Btn'

import './App.css'
function App() {
  const [btnLetters, setBtnLetters] = useState(shuffledLetter);
  const [letter,setLetter] = useState(ALPHABET);
  const [compLetters, setCompLetters] = useState([]);
  const [letterValue, setLetterValue] = useState(null)
  const [compare, setCompare] = useState(false);
  const [match,setMatch]= useState(false);
  const [winner,setWinner] = useState('');
  const [play,setPlay] = useState(false);
  const [text,setText]= useState('');
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
        if(letter.length === 0 )setWinner(`Good Job ${text}!`)
      return () => clearInterval(nextLetter);
    }
  }, [compLetters, letterValue, letter, match]);
    console.log('CL',compLetters)

  const handleClick =(letter,i)=>{
    setCompLetters([...compLetters,letter,winner]);
    setCompare(true);
  }
  useEffect(()=>{
  if(compare && compLetters.length > 1){
    if(compLetters[0] === compLetters[1]){
        console.log('MATCH');
        setMatch(true);
        setCompLetters([]);
        setCompare(false);
    }else{
      console.log('NO MATCH');
      setCompLetters([]);
      setCompare(false);
    }
  }
  },[compare,match])
  const handlePlay = ()=>{
    const shuffled = shuffleArray(ALPHABET.map((l) => l.value));
    setPlay(p=>!p);
    setLetter(ALPHABET);
    setBtnLetters(shuffled);
    console.log('playGame');
  }
  const handleHomeClick = ()=>{
    setPlay(p=>!p)
    setCompLetters([]);
    setLetter(ALPHABET);
    setWinner('');
    setText('');
  }
  const handleRestartClick =()=>{
    const shuffled = shuffleArray(ALPHABET.map((l) => l.value));
    setLetter(ALPHABET);
    setBtnLetters(shuffled);
    setCompLetters([]);
  }
  return (
    <div className='App'>
      {play ? (
      <>
        {letter.length === 0 && <h2>{winner}</h2>}
          <div className='homeBtn-border'>
            <Homebtn onHomeClick={handleHomeClick}/>
            {letter.length === 0 && <Restartbtn onRestartClick={handleRestartClick}/>}
            
          </div>
        <div className='letter-border'>
          {letter.map((l) => (
            <div className='letter' key={l.value}>
              {l.value.toUpperCase()}</div>
          ))}
        </div>
        <ul className='letters-border'>
          {btnLetters.map((letter, index) => (
            <li key={letter}>
            <Letterbtn  letter={letter.toUpperCase()} onClick={()=>handleClick(letter,index)} disabled={compLetters.length < 1 }/>
            </li>
          ))}
        </ul>
      </>
      ) : (
        <>
          <Home onPlayClick={handlePlay} value={text} onChange={(e)=> setText(e.target.value)} />
          
        </>
      )}
    </div>
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
export const alphabet = ALPHABET.map((a) => a.value)

function shuffleArray(array) {
  for(let i = array.length - 1; i >= 1; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
const shuffledLetter = shuffleArray(alphabet)

