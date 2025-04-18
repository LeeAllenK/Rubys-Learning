
export function Playbtn({onPlayClick,}){
	return(
		<button className='md:text-black-900 md:text-4xl text-4xl md:font-bold font-bold flex md:justify-center justify-center items-center md:h-25 md:w-full w-full  border-t-[0.09em] border-b-[0.09em] border-t-[#f0f0f0] border-b-[#a8a6a6] border-none bg-gradient-to-b from-[#f0f0f0] to-[#a8a6a6] shadow-[0_4px_3px_#a8a6a6] m-2 cursor-pointer' style={{ fontFamily: '"DynaPuff", system-ui'}} onClick={onPlayClick}>PLAY</button>
	)
}