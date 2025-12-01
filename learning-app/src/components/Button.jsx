
export function Button({items,onClick,disabled,style,className}){
	return(
		<button className={className} style={style} onClick={onClick} disabled={disabled}>{items}</button>
	)
}

