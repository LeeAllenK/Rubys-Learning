import { shuffleArray, ALPHABET,numbersOne, numbersTwo,COLORS, SHAPES} from '../Data/app';

export function appReducer(state,action){
const shuffledAlphabet = shuffleArray(ALPHABET.map((l) => l.value));
const shuffledNumbersOne = shuffleArray(numbersOne.map((l) => l.value));
const shuffledNumbersTwo = shuffleArray(numbersTwo.map((l) => l.value));
const shuffledColors = shuffleArray(COLORS.map((c) => c.value));
const shuffledButtons = shuffleArray(SHAPES.map((s) => s.value))

	switch(action.type){
//USED TO UPDATE STATE TO SPEAK 
		case 'Speak':{
			if(action.cat === 'shapes'){
			console.log('speak Error')
				return{...state,speaking:action.speaking}
			}else{
		 		return{...state, speaking:action.speaking}
			}
		}
		case "learning-Homepage":{
			if(action.cat === "alphabet"){
				return{...state, getAlphabet: action.getAlphabet}
			}else if(action.cat === "number-One"){
				return{...state, getNumbers: !state.getNumbers, getNumberCatOne: numbersOne}
			}else if(action.cat === "number-Two"){
				return{...state, getNumbers: !state.getNumbers, getNumberCatTwo: numbersTwo}
			}else if(action.cat === "shapes"){
				// alert('Update Coming Soon...!');
				return{...state, shapeHome:true}
			}else if(action.cat === "colors"){
				return { ...state, colorMain: true }
			}
		}
		case "learning-Menu-Btn":{
			if(action.cat === "alphabet"){
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
				return { ...state, colorMain:false }
			}
		}
		case "Home":
		return{...state, 
				play: state.play ? !state.play : state.play, 
				getNumberPlay: state.getNumberPlay ? action.getNumberPlay : state.getNumberPlay,
				colorPlay: state.colorPlay ? !state.colorPlay : state.colorPlay,
				shapePlay: state.shapePlay ? !state.shapePlay : state.shapePlay,
				colors: [], compLetters: [],shapes:[], items: [], buttons: [], winner: '', text: '',	textNumber: '', shapeIndex:0}
		case 'text':
			if(action.cat === 'alphabet'){
				return {...state, text: action.text};
			}else if(action.cat === 'number'){
				return {...state, textNumber: action.textNumber};
			}else if(action.cat === 'color'){
				return{...state, text:action.text}
			}else if(action.cat === 'shape'){
				return{...state, text:action.text}
			}
		case 'start-Learning':
			if(action.cat === "alphabet"){
				return{...state, play: action.play, items:[...ALPHABET], buttons: [...shuffledAlphabet]}
			}else if(action.cat === "number-One"){
				return{...state, getNumberPlay: action.getNumberPlay, items: numbersOne, buttons: shuffledNumbersOne}
			}else if(action.cat === "number-Two"){
				return{...state, getNumberPlay: action.getNumberPlay, items: numbersTwo, buttons: shuffledNumbersTwo}
			}else if(action.cat === "colors"){
				return{...state, colorPlay:action.colorPlay, colors:COLORS, buttons: shuffledColors}
			}else if(action.cat === "shapes"){
				return{...state, shapePlay: action.shapePlay, getShape:action.getShape, shapes: SHAPES,buttons:SHAPES}
			}
    	case 'update-State':
			return {...state, letterValue: action.letterValue, compLetters: action.compLetters};
		case 'match-Items':
			return {...state, match: !state.match};
		case 'remove-Items':
			return {...state, items: action.items, colors: action.colors};
		case 'clear-Comparison':
			return {...state, compLetters: [], compare: false, color: 'color-btns'};
		case 'compare-Letters':
				console.log('compare')
			return {...state, compLetters: action.compLetters, compare: action.compare, getColor: action.getColor, getBackgroundColor: action.getBackgroundColor};
		case 'compare-Shapes':{
			if(action.cat === 'error'){
				return{...state, shapeIndex:action.shapeIndex}
			}else{
			return{...state,shapeIndex:action.shapeIndex}
			}
		}
		case 'set-Winner':
			return {...state, winner: action.winner};
		case 'restart-Btn':
			if(action.cat === 'alphabet'){
				return{...state, items:  ALPHABET, buttons: shuffledAlphabet, compLetters: [],winner:''}
			}else if(action.cat === 'number-One'){
				return{...state, items: numbersOne, buttons: shuffledNumbersOne, compLetters: [], winner:''}
			}else if(action.cat === 'number-Two'){
				return{...state, items: numbersTwo, buttons: shuffledNumbersTwo, compLetters: [],winner: ''}
			}else if(action.cat === 'colors'){
					console.log('restart')
				return{...state, colors:COLORS, buttons: shuffledColors, compLetters: [],winner: ''}
			}else if(action.cat === 'shapes'){
				return{...state, shapes:SHAPES, button:shuffledButtons, shapeIndex: 0, winner: '',}
			}	
		default: return state;
	}
}
