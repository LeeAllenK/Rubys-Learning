import { shuffleArray, ALPHABET, numbersOne, numbersTwo} from './App';

export function appReducer(state,action){
	switch(action.type){
		case 'select-Alphabet':
		console.log('alphabet')
		return{
			...state,
			getAlphabet: !state.getAlphabet
		}
		case 'select-NumbersCatOne':
		console.log('numbers')
		return{
			...state,
			getNumbers: !state.getNumbers,
			getNumberCatOne: numbersOne
		}
		case 'select-NumbersCatTwo':
		console.log('NUMBERSTWO')
		return{
			...state,
			getNumbers: !state.getNumbers,
			getNumberCatTwo: numbersTwo
		}
		case 'toggle-Play':
		const shuffled = shuffleArray(ALPHABET.map((l) => l.value));
		console.log(state)
		return{
			...state,
			play: !state.play,
			items: ALPHABET,
			buttons: shuffled
		}
		case 'toggle-Numberplay':
		const shuffledNumbersOne = shuffleArray(numbersOne.map((l) => l.value));
		const shuffledNumbersTwo = shuffleArray(numbersTwo.map((l) => l.value));
		console.log('play')
		return{
			...state,
			getNumberPlay: !state.getNumberPlay,
			items: state.getNumberCatOne.length > 0 ? numbersOne : numbersTwo,
			buttons: state.getNumberCatTwo.length > 0 ? shuffledNumbersTwo: shuffledNumbersOne
		}
		case 'Menu':
		return{
			...state,
			getAlphabet: state.getAlphabet ? !state.getAlphabet : state.getAlphabet,	
			getNumbers: state.getNumbers ? !state.getNumbers : state.getNumbers,
			getNumberCatOne: state.getNumbers ? [] : state.getNumberCatOne,
			getNumberCatTwo: state.getNumbers ? [] : state.getNumberCatTwo
		}
		case "Home":
		return{
			...state,
			play: state.play ? !state.play : state.play,
			getNumberPlay: state.getNumberPlay ? !state.getNumberPlay : state.getNumberPlay,
			compLetters: [],
			items: ALPHABET,
			winner: '',
			text: ''
		}
		default: return state;
	}
}

export const initialState = {
	getAlphabet: false,
	getNumbers: false,
	getNumberCatOne: [],
	getNumberCatTwo: [],
	getNumberPlay: false,
	play: false,
	items: [],
	buttons: [],
	compLetters: [],	
	winner: '',
	text: '',
}
