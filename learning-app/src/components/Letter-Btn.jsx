import '../App.css';
export function Letterbtn({letter,onClick}){
	return(
		<button className='letter-btns' onClick={onClick} >{letter}</button>
	)
}