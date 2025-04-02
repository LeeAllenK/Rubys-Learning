import { shuffleArray, ALPHABET } from './App';

export function appReducer(state,action){
	switch(action.type){
		case 'Toggle-Play':
		const shuffled = shuffleArray(ALPHABET.map((l) => l.value));
		console.log(state)
		return{
			...state,
			play: !state.play,
			items: ALPHABET,
			buttons: shuffled
		}
		case "Home":
		return{
			...state,
			play: !state.play,
			compLetters: [],
			items: ALPHABET,
			winner: '',
			text: ''
		}
		default: return state;
	}
}

export const alphabetState = {
	play: false,
	items: [],
	buttons: [],
	compLetters: [],	
	winner: '',
	text: '',
}
export const numbersState = {
	play: false,
	items: [],
	buttons: [],
	compLetters: [],	
	winner: '',
	text: '',
}