import '../App.css';

export function Button({items,onClick,disabled}){
	
	return(
		<button className='item-btns' onClick={onClick} disabled={disabled}>{items}</button>
	)
}