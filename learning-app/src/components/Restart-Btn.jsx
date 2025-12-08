export function Restartbtn({onRestartClick}){
	return(
		<button className='border-2 lg:w-60 lg:h-15 md:w-50 md:h-10 w-full h-fit lg:text-5xl md:text-3xl sm:text-2xl text-lg font-bold rounded-4xl cursor-pointer bg-linear-to-b from bg-green-400 to-green-600 active:translate-y-0.5 shadow-lg border-green-600' style={{ fontFamily: '"DynaPuff", system-ui' }} onClick={onRestartClick}>Restart</button>
	)
}
