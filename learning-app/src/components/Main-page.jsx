
export function Main({onNumberOneClick,onNumberTwoClick,onAlphabetClick}){

	return(
	<>
			<div className='title-main'>
				<span className='main-title'> <p style={{ color: 'red' }}>M </p> <p style={{ color: 'orange' }}>Y</p> </span>
				<span className='title-learning'> <p style={{ color: 'yellow' }}>L </p> <p style={{ color: 'green' }}>E</p><p style={{ color: 'blue' }}>A</p><p style={{ color: 'indigo' }}>R</p><p style={{ color: 'violet' }}>N</p><p style={{ color: 'red' }}>I</p><p style={{ color: 'orange' }}>N</p><p style={{ color: 'yellow' }}>G</p> </span>
			</div>
			
	<div className='main-pageBtns'>
		<button className='main-alphabetbtn' onClick={onAlphabetClick}>Alphabet</button>
		<button className='main-numberbtn' onClick={onNumberOneClick}>Numbers 1-10</button>
		<button className='main-numberbtn' onClick={onNumberTwoClick}>Numbers 11-20</button>
	</div>
	</>
	)
}