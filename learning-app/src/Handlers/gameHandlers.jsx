
export const handleShapeChange = () => {
}
export const handleClick = (items, dispatch,state) => {
   dispatch({ type: 'compare-Letters', compLetters: [...state.compLetters, items], compare: !state.compare,
    getBtnColor: 'green', getBackgroundColor: 'black' });
 };
export const handleColorGameClick = (items, dispatch,state) => {
   dispatch({ type: 'compare-Letters', compLetters: [...state.compLetters, items], compare: !state.compare,
    getBtnColor: 'green', getBackgroundColor: 'black' });
 };
export const handleShapeGameClick = (button,dispatch,state ) => {
	const currentShape = state.shapes[state.shapeIndex]?.value;
	if(button === currentShape){
		dispatch({type: "compare-Shapes", shapeIndex: state.shapeIndex + 1})
	}	
}
export const handlePlay = (dispatch,state) => {
	dispatch({ type: 'start-Learning', cat:"alphabet", play: true, items: state.items, buttons: state.buttons})
};

export const handleColorPlayClick = (dispatch, state) =>{
	dispatch({ type: "start-Learning", cat: "colors", colorPlay: true, colors: state.colors, buttons: state.buttons })
}

export const handleShapePlayClick = (dispatch, state) =>{
	dispatch({type: "start-Learning", cat: "shapes", shapePlay: true, getShape:true , shapes: state.shapes, buttons:state.buttons})
}
// Event used to go back to home screen
export const handleHomeClick = (dispatch,state) => {
	if(state.getNumbers) {
		dispatch({ type: 'Home', getNumberPlay: false, items: state.items, buttons: state.buttons, textNumber: state.textNumber, compLetters: state.compLetters })
	}
	if(state.getAlphabet) {
		dispatch({ type: 'Home', play: !state.play, compLetters: state.compLetters, items: state.items, buttons: state.buttons,
		winner: state.winner, text: state.text})
	}
	if(state.colorMain){
		dispatch({ type: "Home", colorPlay: !state.colorPlay, colors: state.colors, buttons: state.buttons, compLetters:state.compLetters, winner: state.winner, text: state.text })
	}
	if(state.getShape){
		dispatch({ type: "Home", shapePlay: !state.shapePlay, shapes: state.shapes, buttons: state.buttons, shapeIndex: state.shapeIndex,  winner: '', text: state.text })
	}
};
// Event used to reset items and buttons arrays.
export const handleRestartClick = (dispatch,state) => {
	if(state.getNumberCatOne.length > 0) {
		dispatch({ type: 'restart-Btn', cat:"number-One", items: state.items, buttons: state.buttons, compLetters: state.compLetters, winner: state.winner})
	}
	if(state.getNumberCatTwo.length > 0) {
		dispatch({ type: 'restart-Btn', cat: "number-Two", items: state.items, buttons: state.buttons, compLetters: state.compLetters, winner: state.winner})
	}
	if(state.getAlphabet) {
		dispatch({ type: 'restart-Btn', cat:"alphabet", items: state.items, buttons: state.buttons, compLetters: state.compLetters, winner: state.winner})
	}
	if(state.colorPlay){
		dispatch({type:'restart-Btn', cat:"colors", colors:state.colors, buttons: state.buttons, compLetters:state.compLetters, winnner: state.winner})
	}
	if(state.getShape){
		dispatch({ type: 'restart-Btn', cat: "shapes", shapes: state.shapes, shapeIndex:state.shapeIndex, buttons: state.buttons,  winnner: state.winner })
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
		dispatch({ type: 'start-Learning', cat:"number-One", getNumberPlay: !state.getNumberPlay, items: state.getNumberCatOne,buttons: state.buttons})
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
	dispatch({ type: "learning-Homepage", cat:"colors", colorMain: state.colorMain})
}

export const handleBackShapeClick = (dispatch, state) =>{
	dispatch({type: "learning-Menu-Btn", cat: "shapes", shapeHome:state.shapeHome, text: state.text})
}

export const handleBackColorClick = (dispatch, state) => {
	dispatch({ type: "learning-Menu-Btn", cat: "colors",color:state.colorMain})
}

