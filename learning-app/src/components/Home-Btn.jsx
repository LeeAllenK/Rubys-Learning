export function Homebtn({onHomeClick}){
	return(
		<button className='border-2 w-50 h-15w-50 h-15 text-5xl font-bold rounded-4xl cursor-pointer bg-linear-to-b from bg-green-400 to-green-600 active:translate-y-0.5 shadow-lg border-green-600' style={{ fontFamily: '"DynaPuff", system-ui' }} onClick={onHomeClick }>Home</button>
	)
}
