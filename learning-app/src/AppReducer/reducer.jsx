import { shuffleArray, ALPHABET,numbersOne, numbersTwo,COLORS} from '../App';

export function appReducer(state,action){
const shuffledAlphabet = shuffleArray(ALPHABET.map((l) => l.value));
const shuffledNumbersOne = shuffleArray(numbersOne.map((l) => l.value));
const shuffledNumbersTwo = shuffleArray(numbersTwo.map((l) => l.value));
const shuffledColors = shuffleArray(COLORS.map((c) => c.value));

	switch(action.type){
//USED TO UPDATE STATE TO SPEAK 
		case 'Speak':
		 return{...state, speak:action.speak}
		case "learning-Homepage":{
			if(action.cat === "alphabet"){
				return{...state, getAlphabet: action.getAlphabet}
			}else if(action.cat === "number-One"){
				return{...state, getNumbers: !state.getNumbers, getNumberCatOne: numbersOne}
			}else if(action.cat === "number-Two"){
				return{...state, getNumbers: !state.getNumbers, getNumberCatTwo: numbersTwo}
			}else if(action.cat === "shapes"){
				return{...state, shapeHome:true}
			}else if(action.cat === "colors"){
				return { ...state, colorMain: true }
			}
		}
		case "learning-Menu-Btn":{
			if(action.cat === "alphabet"){
				console.log('learning-Alpahbet')
				return { ...state, getAlphabet: state.getAlphabet ? !state.getAlphabet : state.getAlphabet }
			}else if(action.cat === 'numbers'){
				return{...state,
				getNumbers: state.getNumbers ? !state.getNumbers : state.getNumbers,
				getNumberCatOne: state.getNumbers ? [] : state.getNumberCatOne,
				getNumberCatTwo: state.getNumbers ? [] : state.getNumberCatTwo
				}
			}
			else if(action.cat === "shapes"){
				return{...state, shapeHome:false, text: ''}
			}else if(action.cat === "colors"){
				console.log(COLORS)
				return { ...state, colorMain:false }
			}
		}
		case "Home":
		return{...state, 
				play: state.play ? !state.play : state.play, 
				getNumberPlay: state.getNumberPlay ? action.getNumberPlay : state.getNumberPlay,
				colorPlay: state.colorPlay ? !state.colorPlay : state.colorPlay,
				colors: [], compLetters: [], items: [], buttons: [], winner: '', text: '',	textNumber: ''}
		case 'text':
			if(action.cat === 'alphabet'){
				return {...state, text: action.text};
			}else if(action.cat === 'number'){
				return {...state, textNumber: action.textNumber};
			}
		case 'start-Learning':
			if(action.cat === "alphabet"){
				return{...state, play: action.play, items:[...ALPHABET], buttons: [...shuffledAlphabet]}
			}else if(action.cat === "number-One"){
				return{...state, getNumberPlay: action.getNumberPlay, items: numbersOne, buttons: shuffledNumbersOne}
			}else if(action.cat === "number-Two"){
				return{...state, getNumberPlay: action.getNumberPlay, items: numbersTwo, buttons: shuffledNumbersTwo}
			}else if(action.cat === "colors"){
					console.log('Play') //BUG
				return{...state, colorPlay:action.colorPlay, getColors:action.getColors, colors:COLORS, buttons: shuffledColors}
			}
    	case 'update-State':
			return {...state, letterValue: action.letterValue, compLetters: action.compLetters};
		case 'match-Items':
			return {...state, match: !state.match};
		case 'remove-Items':
			return {...state, items: action.items,};
		case 'clear-Comparison':
			return {...state, compLetters: [], compare: false, color: 'color-btns'};
		case 'compare-Letters':
			return {...state, compLetters: action.compLetters, compare: action.compare, getColor: action.getColor, getBackgroundColor: action.getBackgroundColor};
		case 'set-Winner':
			return {...state, winner: action.payload};
		case 'restart-Btn':
			if(action.cat === 'alphabet'){
				return{...state, items:  ALPHABET, buttons: shuffledAlphabet, compLetters: []}
			}else if(action.cat === 'number-One'){
				return{...state, items: numbersOne, buttons: shuffledNumbersOne, compLetters: [], winner:''}
			}else if(action.cat === 'number-Two'){
				return{...state, items: numbersTwo, buttons: shuffledNumbersTwo, compLetters: []}
			}		
		default: return state;
	}
}
