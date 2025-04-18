export function MenuBtn({ onClick }){
	return(
		<button className='md:text-black md:font-bold font-bold text-black md:text-5xl flex md:justify-center justify-center items-center md:h-40 md:w-full w-full  border-t-[0.09em] border-b-[0.09em] border-t-[#f0f0f0] border-b-[#a8a6a6] border-none bg-gradient-to-b from-[#f0f0f0] to-[#a8a6a6] shadow-[0_4px_3px_#a8a6a6] cursor-pointer hover:bg-linear-[180deg,green_100%] hover:shadow-[0_4px_3px_008000]' style={{ fontFamily: '"DynaPuff", system-ui' }} onClick={onClick}>LEARNING MENU</button>
	)
}