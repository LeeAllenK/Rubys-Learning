
export function Letterbtn({letter,onClick,disabled,compare}){
	
	return(
		<button onClick={onClick} disabled={disabled}>{letter}</button>
	)
}