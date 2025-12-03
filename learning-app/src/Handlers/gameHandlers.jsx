// import {useReducer} from 'react';
// import {appReducer} from '../AppReducer/reducer';
// import { initialState } from '../AppReducer/appInitialState';


export const handlePlay = ({dispatch}) => {
// const [state, dispatch] = useReducer(appReducer, initialState);
	dispatch({
		type: 'toggle-Play',
		play: !state.play,
		items: state.items,
		buttons: state.buttons
	})
};
// Event used to go back to home screen
export const handleHomeClick = () => {
	if(state.getNumbers) {
		dispatch({
			type: 'Home',
			getNumberPlay: false,
			items: state.items,
			buttons: state.buttons,
			textNumber: state.textNumber,
			compLetters: state.compLetters
		})
	}
	if(state.getAlphabet) {
		dispatch({
			type: 'Home',
			play: !state.play,
			compLetters: state.compLetters,
			items: state.items,
			buttons: state.buttons,
			winner: state.winner,
			text: state.text
		})
	}
};
// Event used to reset items and buttons arrays.
export const handleRestartClick = () => {
	if(state.getNumberCatOne.length > 0) {
		dispatch({
			type: 'restart-NumCatOne',
			items: state.items,
			buttons: state.buttons,
			compLetters: state.compLetters,
			winner: state.winner,
		})
	}
	if(state.getNumberCatTwo.length > 0) {
		dispatch({
			type: 'restart-NumCatTwo',
			items: state.items,
			buttons: state.buttons,
			compLetters: state.compLetters
		})
	}
	if(state.getAlphabet) {
		dispatch({
			type: 'restart-Alphabet',
			items: state.items,
			buttons: state.buttons,
			compLetters: state.compLetters
		})
	}
};
export const handleNumberOneClick = () => {
	dispatch({
		type: 'select-NumbersCatOne',
		getNumbers: !state.getNumbers,
		getNumberCatOne: state.getNumberCatOne

	})
};
export const handleNumberTwoClick = () => {
	dispatch({
		type: 'select-NumbersCatTwo',
		getNumbers: !state.getNumbers,
		getNumberCatTwo: state.getNumberCatTwo

	})
}
export const handleAlphabetClick = () => {
	dispatch({
		type: 'select-Alphabet',
		getAlphabet: !state.getAlphabet
	})
};
export const handleBackClick = () => {
	dispatch({
		type: 'Menu',
		getAlphabet: !state.getAlphabet
	})
}
export const handleNumberBackClick = () => {
	dispatch({
		type: 'Menu',
		getNumbers: !state.getNumbers,
		getNumberCatOne: state.getNumberCatOne,
		getNumberCatTwo: state.getNumberCatTwo
	})
}
export const handleNumberPlayClick = () => {
	if(state.getNumberCatOne[0]?.value.includes('10')) {
		dispatch({
			type: 'toggle-Numberplay',
			getNumberPlay: !state.getNumberPlay,
			items: state.getNumberCatOne,
			buttons: state.buttons
		})
	}
	if(state.getNumberCatTwo[0]?.value.includes('20')) {
		dispatch({
			type: 'toggle-Numberplay',
			getNumberPlay: !state.getNumberPlay,
			items: state.getNumberCatTwo,
			buttons: state.buttons
		})
	}
}