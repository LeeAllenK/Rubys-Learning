
export const handleClick = (items, dispatch,state) => {
   dispatch({ type: 'compare-Letters', compLetters: [...state.compLetters, items], compare: !state.compare,
    getColor: 'green', getBackgroundColor: 'black' });
 };
export const handlePlay = (dispatch,state) => {
	dispatch({ type: 'Play-Alphabet', play: true, items: state.items, buttons: state.buttons})
};
// Event used to go back to home screen
export const handleHomeClick = (dispatch,state) => {
	if(state.getNumbers) {
		dispatch({ type: 'Home', getNumberPlay: false, items: state.items, buttons: state.buttons, textNumber: state.textNumber, compLetters: state.compLetters })
	}
	if(state.getAlphabet) {
		dispatch({ type: 'Home', play: !state.play, compLetters: state.compLetters, items: state.items, buttons: state.buttons,
		winner: state.winner, text: state.text})
	}
};
// Event used to reset items and buttons arrays.
export const handleRestartClick = (dispatch,state) => {
	if(state.getNumberCatOne.length > 0) {
		dispatch({ type: 'restart-NumCatOne', items: state.items, buttons: state.buttons, compLetters: state.compLetters,
			winner: state.winner})
	}
	if(state.getNumberCatTwo.length > 0) {
		dispatch({ type: 'restart-NumCatTwo', items: state.items, buttons: state.buttons, compLetters: state.compLetters})
	}
	if(state.getAlphabet) {
		const shuffledAlphabet = shuffleArray(ALPHABET.map((l) => ({ value: l.value })));
		dispatch({ type: 'restart-Alphabet', items: ALPHABET, buttons: shuffledAlphabet, compLetters: state.compLetters})
	}
};
export const handleNumberOneClick = (dispatch,state) => {
	dispatch({ type: 'select-NumbersCatOne', getNumbers: !state.getNumbers, getNumberCatOne: state.getNumberCatOne})
};
export const handleNumberTwoClick = (dispatch,state) => {
	dispatch({ type: 'select-NumbersCatTwo', getNumbers: !state.getNumbers, getNumberCatTwo: state.getNumberCatTwo})
}
export const handleAlphabetClick = (dispatch,state) => {
	dispatch({ type: 'select-Alphabet', getAlphabet: !state.getAlphabet})
};
export const handleBackClick = (dispatch, state) => {
	dispatch({type: 'Menu', getAlphabet: !state.getAlphabet})
}
export const handleNumberBackClick = (dispatch, state) => {
	dispatch({ type: 'Menu', getNumbers: !state.getNumbers,getNumberCatOne: state.getNumberCatOne, 
	getNumberCatTwo: state.getNumberCatTwo})
}
export const handleNumberPlayClick = (dispatch, state) => {
	if(state.getNumberCatOne[0]?.value.includes('10')) {
		dispatch({ type: 'toggle-Numberplay', getNumberPlay: !state.getNumberPlay, items: state.getNumberCatOne, 
		buttons: state.buttons})
	}
	if(state.getNumberCatTwo[0]?.value.includes('20')) {
		dispatch({ type: 'toggle-Numberplay', getNumberPlay: !state.getNumberPlay, items: state.getNumberCatTwo,
		buttons: state.buttons})
	}
}