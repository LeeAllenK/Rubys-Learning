
export function Main({onNumberOneClick,onNumberTwoClick,onAlphabetClick}){

	return(
	<div className='main-pageBtns'>
		<button className='main-alphabetbtn' onClick={onAlphabetClick}>Alphabet</button>
		<button className='main-numberbtn' onClick={onNumberOneClick}>Numbers 1-10</button>
		<button className='main-numberbtn' onClick={onNumberTwoClick}>Numbers 11-20</button>
	</div>
	)
}