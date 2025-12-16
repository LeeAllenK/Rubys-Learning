
export const handleClick = (items, dispatch,state) => {
   dispatch({ type: 'compare-Letters', compLetters: [...state.compLetters, items], compare: !state.compare,
    getColor: 'green', getBackgroundColor: 'black' });
 };
export const handleColorGameClick = (items, dispatch,state) => {
	conosle.log(items)
   dispatch({ type: 'compare-Letters', compLetters: [...state.compLetters, items], compare: !state.compare,
    getColor: 'green', getBackgroundColor: 'black' });
 };
export const handlePlay = (dispatch,state) => {
	dispatch({ type: 'start-Learning', cat:"alphabet", play: true, items: state.items, buttons: state.buttons})
};

export const handleColorPlayClick = (dispatch, state) =>{
console.log('dslk')
	dispatch({ type: "start-Learning", cat: "colors", colorPlay: true, getColors:true, colors: state.colors, buttons: state.buttons })
}
// Event used to go back to home screen
export const handleHomeClick = (dispatch,state) => {
	if(state.getNumbers) {
		console.log('nums')
		dispatch({ type: 'Home', getNumberPlay: false, items: state.items, buttons: state.buttons, textNumber: state.textNumber, compLetters: state.compLetters })
	}
	if(state.getAlphabet) {
		console.log('al')
		dispatch({ type: 'Home', play: !state.play, compLetters: state.compLetters, items: state.items, buttons: state.buttons,
		winner: state.winner, text: state.text})
	}
	if(state.getColor){
			console.log('go home color')
		dispatch({ type: "Home", colorPlay: !state.colorPlay, colors: state.colors, buttons: state.buttons, compLetters:state.compLetters, winner: state.winner, text: state.text })
	}
};
// Event used to reset items and buttons arrays.
export const handleRestartClick = (dispatch,state) => {
	if(state.getNumberCatOne.length > 0) {
		dispatch({ type: 'restart-Btn', cat:"number-One", items: state.items, buttons: state.buttons, compLetters: state.compLetters,
			winner: state.winner})
	}
	if(state.getNumberCatTwo.length > 0) {
		dispatch({ type: 'restart-Btn', cat: "number-Two", items: state.items, buttons: state.buttons, compLetters: state.compLetters})
	}
	if(state.getAlphabet) {
		dispatch({ type: 'restart-Btn', cat:"alphabet", items: state.items, buttons: state.buttons, compLetters: state.compLetters})
	}
};
export const handleNumberOneClick = (dispatch,state) => {
	dispatch({ type: "learning-Homepage", cat: "number-One", getNumbers: !state.getNumbers, getNumberCatOne: state.getNumberCatOne})
};
export const handleNumberTwoClick = (dispatch,state) => {
	dispatch({ type: "learning-Homepage", cat: "number-Two", getNumbers: !state.getNumbers, getNumberCatTwo: state.getNumberCatTwo})
}
export const handleAlphabetClick = (dispatch,state) => {
	dispatch({ type: "learning-Homepage", cat: "alphabet", getAlphabet: !state.getAlphabet})
};
export const handleBackClick = (dispatch, state) => {
	dispatch({type: 'learning-Menu-Btn', cat:"alphabet", getAlphabet: !state.getAlphabet})
}
export const handleNumberBackClick = (dispatch, state) => {
	dispatch({ type: 'learning-Menu-Btn', cat:"numbers", 
	getNumbers: !state.getNumbers, getNumberCatOne: state.getNumberCatOne, getNumberCatTwo: state.getNumberCatTwo})
}
export const handleNumberPlayClick = (dispatch, state) => {
	if(state.getNumberCatOne[0]?.value.includes('10')) {
		dispatch({ type: 'start-Learning', cat:"number-One", getNumberPlay: !state.getNumberPlay, items: state.getNumberCatOne, 
		buttons: state.buttons})
	}
	if(state.getNumberCatTwo[0]?.value.includes('20')) {
		dispatch({ type: 'start-Learning', cat:"number-Two", getNumberPlay: !state.getNumberPlay, items: state.getNumberCatTwo,
		buttons: state.buttons})
	}
}
export const handleShapeClick = (dispatch, state)=>{
	dispatch({type: "learning-Homepage", cat:"shapes", shapeHome:state.shapeHome })
}
 
export const handleColorClick = (dispatch, state) =>{
console.log('main')
	dispatch({ type: "learning-Homepage", cat:"colors", colorMain: state.colorMain})
}

export const handleBackShapeClick = (dispatch, state) =>{
	dispatch({type: "learning-Menu-Btn", cat: "shapes", shapeHome:state.shapeHome, text: state.text})
}

export const handleBackColorClick = (dispatch, state) => {
	console.log('back')
	dispatch({ type: "learning-Menu-Btn", cat: "colors",color:state.colorMain})
}

