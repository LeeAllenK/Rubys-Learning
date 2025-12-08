import {Button} from './Button';

export function Playbtn({onPlayClick}){
	return(
		<button className='md:text-black-900 lg:text-7xl md:text-4xl text-4xl md:font-bold font-bold flex md:justify-center justify-center items-center lg:h-35 md:h-20 h-15 lg:w-screen md:w-screen sm:w-screen w-full  border-t-[0.09em] border-b-[0.09em] border-t-[#f0f0f0] border-b-[#a8a6a6] border-none bg-linear-to-b from-[#f0f0f0] to-[#a8a6a6] shadow-[0_4px_3px_#a8a6a6] cursor-pointer hover:bg-linear-[180deg,green_100%] hover:shadow-[0_4px_3px_008000] hover:text-white' style={{ fontFamily: '"DynaPuff", system-ui'}} onClick={onPlayClick}>PLAY</button>
	)
}