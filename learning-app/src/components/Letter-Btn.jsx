import '../App.css';

export function Letterbtn({letter,onClick,disabled,className}){
	
	return(
		<button className='letter-btns' onClick={onClick} disabled={disabled}>{letter}</button>
	)
}