import '../App.css';

export function Letterbtn({letter,onClick,disabled,compare}){
	
	return(
		<button className='letter-Btns' onClick={onClick} disabled={disabled}>{letter}</button>
	)
}