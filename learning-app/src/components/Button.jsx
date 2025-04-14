
export function Button({items,onClick,disabled,style}){
	return(
		<button className='item-btns' style={style} onClick={onClick} disabled={disabled}>k{items}</button>
	)
}