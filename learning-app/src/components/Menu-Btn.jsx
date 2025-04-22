export function MenuBtn({ onClick }){
	return(
		<button className='flex  md:text-black  md:font-bold font-bold text-black md:text-5xl text-3xl md:justify-center justify-center md:h-full md:w-full w-full border-t-[0.09em] border-b-[0.09em] border-t-[#f0f0f0] border-b-[#a8a6a6] border-none bg-linear-to-b from-[#f0f0f0] to-[#a8a6a6] shadow-[0_4px_3px_#a8a6a6] cursor-pointer hover:bg-linear-[180deg,green_100%] hover:shadow-[0_4px_3px_008000] hover:text-white' style={{ fontFamily: '"DynaPuff", system-ui' }} onClick={onClick}>LEARNING MENU</button>
	)
}