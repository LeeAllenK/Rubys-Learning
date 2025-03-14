import {shuffleArray,ALPHABET} from './App';

export function appReducer(state,action){
	switch(action.type){
		case 'Toggle-Play':
		const shuffled = shuffleArray(ALPHABET.map((l) => l.value));
			console.log(ALPHABET)
		return{
			...state,
			play: !state.play,
			items: ALPHABET ,
			buttons: shuffled
		}
		case 'Add-alpha':
		// const shuffled = shuffleArray(ALPHABET.map((l) => l.value));
		return{
			...state,
			getAlphabet: !state.getAlphabet
		}
		default:
			return state;
	}
}