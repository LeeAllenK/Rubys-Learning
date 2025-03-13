// import { useState, useEffect, useRef } from 'react';
// import { Letterbtn } from './Button';
// import { Home } from './Home';
// import { Homebtn } from './Home-Btn';
// import { Restartbtn } from './Restart-Btn';
// import { Main } from './Main-page';
// import { Number } from './Number-Home';
// import '../App.css';

// export function NumberApp({numberPlay}) {
//   const [btnLetters, setBtnLetters] = useState(shuffledNumbers);
//   const [letter, setLetter] = useState(NUMBERS);
//   const [compLetters, setCompLetters] = useState([]);
//   const [letterValue, setLetterValue] = useState('');
//   const [compare, setCompare] = useState(false);
//   const [match, setMatch] = useState(false);
//   const [winner, setWinner] = useState('');
//   const [play, setPlay] = useState(false);
//   const [text, setText] = useState('');
//   const [getNumbers, setGetNumbers] = useState(false);
//   const [getAlphabet, setGetAlphabet] = useState(false);
//   // Use a ref to persist the "nextIndex" value across renders and effects.
//   const nextIndexRef = useRef(letter.length);
//   // This effect automatically selects letters from the letter array.
//   useEffect(() => {
// 	if(compLetters.length === 0) {
// 	  nextIndexRef.current = letter.length;
// 	  const nextIntervalId = setInterval(() => {
// 		// Decrement the value stored in the ref.
// 		nextIndexRef.current--;
// 		setLetter((prev) => {
// 		  const value = prev[nextIndexRef.current]?.value;
// 		  if(value) {
// 			setLetterValue(value);
// 			// Use updater syntax to ensure consistency across state updates.
// 			setCompLetters([...compLetters, value]);
// 		  }
// 		  return prev;
// 		});
// 		if(nextIndexRef.current <= 0) {
// 		  clearInterval(nextIntervalId);
// 		  setWinner(`Good Job ${text}!`);
// 		}
// 	  }, 500);
// 	  return () => clearInterval(nextIntervalId);
// 	}
//   }, [compLetters, letter, text]);
//   console.log('COMPLETTER', compLetters);
//   // Effect compares the automatically picked letter with the user’s pick.
//   useEffect(() => {
// 	if(compare && compLetters.length > 1) {
// 	  if(compLetters[0] === compLetters[1]) {
// 		console.log('MATCH');
// 		setMatch(true);
// 		// Remove the letter from the letter array using the index stored in the ref.
// 		setLetter((prev) =>
// 		  prev.filter((_, index) => index !== nextIndexRef.current)
// 		);
// 	  } else {
// 		console.log('NO MATCH');
// 	  }
// 	  setCompLetters([]);
// 	  setCompare(false);
// 	}
//   }, [compare, compLetters]);
//   // Event to add to compLetters array to compare
//   const handleClick = (letter, i) => {
// 	setCompLetters((prevComp) => [...prevComp, letter]);
// 	setCompare(true);
//   };
//   // Event used to start application and set arrays for letters and btnLetters
//   const handlePlay = () => {
// 	const shuffled = shuffleArray(ALPHABET.map((l) => l.value));
// 	setPlay((p) => !p);
// 	setLetter(ALPHABET);
// 	setBtnLetters(shuffled);
// 	console.log('playGame');
//   };
//   // Event used to go back to home screen
//   const handleHomeClick = () => {
// 	setPlay((p) => !p);
// 	setCompLetters([]);
// 	setLetter(NUMBERS);
// 	setWinner('');
// 	setText('');
// 	setGetNumbers((gn)=>!gn)
//   };
//   // Event used to reset letter and btnLetters arrays.
//   const handleRestartClick = () => {
// 	const shuffled = shuffleArray(ALPHABET.map((l) => l.value));
// 	setLetter(NUMBERS);
// 	setBtnLetters(shuffled);
// 	setCompLetters([]);
//   };

//   const handleNumberBackClick = ()=>{
// 	setGetNumbers(gn=>!gn)
//   }
//   return (
// 	<div className='App'>
// 		<>
// 		{getNumbers && <Number/>}
// 		  {letter.length === 0 && <h2>{winner}</h2>}
// 		  <div className='homeBtn-border'>
// 			<Homebtn onHomeClick={handleHomeClick} />
// 			{letter.length === 0 && (
// 			  <Restartbtn onRestartClick={handleRestartClick} />
// 			)}
// 		  </div>
// 		  <div className='letter-border'>
// 			{letter.map((l) => (
// 			  <div className='letter' key={l.value}>
// 				{l.value.toUpperCase()}
// 			  </div>
// 			))}
// 		  </div>
// 		  <ul className='letters-border'>
// 			{btnLetters.map((letter, index) => (
// 			  <li key={letter}>
// 				<Letterbtn
// 				  letter={letter.toUpperCase()}
// 				  onClick={() => handleClick(letter, index)}
// 				  disabled={compLetters.length < 1}
// 				/>
// 			  </li>
// 			))}
// 		  </ul>
// 		</>
// 	</div>
//   );
// }

// const NUMBERS = [
//   { value: '1' }, { value: '2' }, { value: '3' }, { value: '4' }, { value: '5' },
//   { value: '6' }, { value: '7' }, { value: '8' }, { value: '9' }, { value: '10' },
//   { value: '11' }, { value: '12' }, { value: '13' }, { value: '14' }, { value: '15' },
//   { value: '16' }, { value: '17' }, { value: '18' }, { value: '19' }, { value: '20' },
// ].reverse();

// export const numbers = NUMBERS.map((a) => a.value);

// function shuffleArray(array) {
//   for(let i = array.length - 1; i >= 1; i--) {
// 	const j = Math.floor(Math.random() * (i + 1));
// 	[array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// }

// const shuffledNumbers = shuffleArray([...numbers]);
