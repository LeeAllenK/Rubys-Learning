export function Homebtn({onHomeClick}){
	return(
		<button className='border-2 md:w-50 w-30 md:h-15 h-10 md:text-5xl text-2xl font-bold rounded-4xl cursor-pointer bg-linear-to-b from bg-green-400 to-green-600 active:translate-y-0.5 shadow-lg border-green-600' style={{ fontFamily: '"DynaPuff", system-ui' }} onClick={onHomeClick }>Home</button>
	)
}
