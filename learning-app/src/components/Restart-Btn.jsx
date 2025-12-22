export function Restartbtn({onRestartClick}){
	return(
		<button className='border-2 lg:w-screen lg:h-fit md:w-screen md:h-fit sm:w-10 sm:h-fit w-screen h-fit lg:text-3xl md:text-xl sm:text-5xl text-lg font-bold rounded-4xl cursor-pointer bg-linear-to-b from bg-green-400 to-green-600 active:translate-y-0.5 shadow-lg border-green-600' style={{ fontFamily: '"DynaPuff", system-ui' }} onClick={onRestartClick}>Restart</button>
	)
}
