export function MenuBtn({ onClick }){
	return(
		<button className='flex lg:text-black md:text-black sm:text-black lg:font-bold md:font-bold sm:font-bold font-bold text-black lg:text-5xl md:text-5xl sm:text-3xl text-lg lg:justify-center md:justify-center justify-center md:h-fit lg:w-screen lg:h-fit md:w-screen sm:w-screen sm:h-fit w-svh h-fit border-t-[0.09em] border-b-[0.09em] border-t-[#f0f0f0] border-b-[#a8a6a6] border-none bg-linear-to-b from-[#f0f0f0] to-[#a8a6a6] shadow-[0_4px_3px_#a8a6a6] cursor-pointer hover:bg-linear-[180deg,green_100%] hover:shadow-[0_4px_3px_008000] hover:text-white' style={{ fontFamily: '"DynaPuff", system-ui' }} onClick={onClick}>LEARNING MENU</button>
	)
}