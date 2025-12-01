import { shuffleArray, ALPHABET, numbersOne, numbersTwo} from '../App';

export function appReducer(state,action){
const shuffledAlphabet = shuffleArray(ALPHABET.map((l) => l.value));
const shuffledNumbersOne = shuffleArray(numbersOne.map((l) => l.value));
const shuffledNumbersTwo = shuffleArray(numbersTwo.map((l) => l.value));

	switch(action.type){
		case 'select-Alphabet':
		return{...state, getAlphabet: !state.getAlphabet}
		case 'select-NumbersCatOne':
		return{...state, getNumbers: !state.getNumbers, getNumberCatOne: numbersOne}
		case 'select-NumbersCatTwo':
		return{...state, getNumbers: !state.getNumbers, getNumberCatTwo: numbersTwo}
		case 'toggle-Play':
		return{	...state, play: !state.play, items: ALPHABET, buttons: shuffledAlphabet}
		case 'toggle-Numberplay':
		return{...state, getNumberPlay: !state.getNumberPlay, items: state.getNumberCatOne.length > 0 ? numbersOne : numbersTwo, buttons: state.getNumberCatTwo.length > 0 ? shuffledNumbersTwo: shuffledNumbersOne}
    	case 'update-State':
			return {...state, letterValue: action.letterValue, compLetters: action.compLetters};
		case 'set-Winner':
			return {...state, winner: action.payload};
		case 'set-Match':
			return {...state, match: !state.match};
		case 'update-Items':
			return {...state, items: action.items,};
		case 'clear-Comparison':
			return {...state, compLetters: [], compare: false, color: 'color-btns'};
		case 'compare-Letters':
			return {...state, compLetters: action.compLetters, compare: action.compare, getColor: action.getColor, getBackgroundColor: action.getBackgroundColor};
		case 'updateText':
			return {...state, text: action.text};
		
		case 'updateTextNumber':
			console.log('updateNumbers')
			return {...state, textNumber: action.textNumber};
		case 'Menu':
		return{...state,
			getAlphabet: state.getAlphabet ? !state.getAlphabet : state.getAlphabet,	
			getNumbers: state.getNumbers ? !state.getNumbers : state.getNumbers,
			getNumberCatOne: state.getNumbers ? [] : state.getNumberCatOne,
			getNumberCatTwo: state.getNumbers ? [] : state.getNumberCatTwo
		}
		case "Home":
		return{...state, play: state.play ? !state.play : state.play, getNumberPlay: state.getNumberPlay ? !state.getNumberPlay : state.getNumberPlay, compLetters: [], items: [], buttons: [],	winner: '',	text: '',	textNumber: ''}
		case 'restart-Alphabet':		
		return{...state, items:  ALPHABET, buttons: shuffledAlphabet, compLetters: []}
		case 'restart-NumCatOne':		
		return{...state, items: numbersOne, buttons: shuffledNumbersOne, compLetters: [], winner:''}
		case 'restart-NumCatTwo':		
		return{...state, items: numbersTwo, buttons: shuffledNumbersTwo, compLetters: []}
		case "": return{...state, getColor: action.getColor}
		default: return state;
	}
}
