import '../App.css';

export function Button({items,onClick,disabled,className,style}){
	return(
		<button className='item-btns' style={style} onClick={onClick} disabled={disabled}>k{items}</button>
	)
}