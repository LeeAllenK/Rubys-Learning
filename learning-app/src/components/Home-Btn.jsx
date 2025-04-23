export function Homebtn({onHomeClick}){
	return(
		<button className='border-2 lg:w-50 md:w-30 lg:h-15 md:h-10 w-30 h-10 lg:text-5xl md:text-3xl text-2xl font-bold rounded-4xl cursor-pointer bg-linear-to-b from bg-green-400 to-green-600 active:translate-y-0.5 shadow-lg border-green-600' style={{ fontFamily: '"DynaPuff", system-ui' }} onClick={onHomeClick }>Home</button>
	)
}
