import {Number} from './Number-Home'
import {NumberApp} from './Number-App'
export function Main({onNumberClick,onAlphabetClick}){

	return(
	<div className='main-pageBtns'>
		<button className='main-numberbtn' onClick={onNumberClick}>Numbers</button>
		<button className='main-alphabetbtn' onClick={onAlphabetClick}>Alphabet</button>
	</div>
	)
}