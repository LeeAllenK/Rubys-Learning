import {Button} from './Button';
export function Main({onNumberOneClick, onNumberTwoClick, onAlphabetClick, onShapeClick, onColorClick}){
	return(
		<>
			<section className='flex md:justify-center items-center justify-center md:w-full lg:text-7xl md:text-7xl  text-4xl font-bold '>
				<span className='flex justify-center md:m-4' style={{ fontFamily: '"DynaPuff", system-ui' }}> <p className='text-red-600'>M </p> <p className='text-orange-400'>Y</p> </span>
				<span className='flex justify-center m-4 ' style={{ fontFamily: '"DynaPuff", system-ui' }}> <p className='text-[#ffff00]'>L </p> <p className='text-green-700'>E</p><p className='text-blue-700'>A</p><p className='text-[#4b0082]'>R</p><p className='text-[#ee82ee]'>N</p><p className='text-red-600'>I</p><p className='text-orange-400'>N</p><p className='text-[#ffff00]'>G</p> </span>
			</section>	
			<section className='flex m-0 flex-col place-items-center justify-start h-screen w-screen lg:text-6xl md:text-6xl sm:text-4xl text-2xl font-black '>
				<Button className='md:text-black-900 flex place-content-center min-w-fit w-screen border-t-[0.09em] border-b-[0.09em] border-t-[#f0f0f0] border-b-[#a8a6a6] border-none bg-gradient-to-b from-[#f0f0f0] to-[#a8a6a6] shadow-[0_4px_3px_#a8a6a6] m-2 cursor-pointer mt-20 hover:bg-linear-[180deg,green_100%] hover:shadow-[0_4px_3px_008000] hover:text-white' style={{ fontFamily: '"DynaPuff", system-ui' }} onClick={onAlphabetClick} value={"Alphabets"}/>
				<Button className='text-black-900 flex place-content-center h-fit w-screen border-t-[0.09em] border-b-[0.09em] border-t-[#f0f0f0] border-b-[#a8a6a6] border-none bg-gradient-to-b from-[#f0f0f0] to-[#a8a6a6] shadow-[0_4px_3px_#a8a6a6] m-2 cursor-pointer hover:bg-linear-[180deg,green_100%] hover:shadow-[0_4px_3px_008000] hover:text-white' style={{ fontFamily: '"DynaPuff", system-ui' }} onClick={onNumberOneClick} value={"Numbers 1-10"}/>
				<Button className='text-black-900 flex place-content-center h-fit w-screen border-t-[0.09em] border-b-[0.09em] border-t-[#f0f0f0] border-b-[#a8a6a6] border-none bg-gradient-to-b from-[#f0f0f0] to-[#a8a6a6] shadow-[0_4px_3px_#a8a6a6] m-2 cursor-pointer hover:bg-linear-[180deg,green_100%] hover:shadow-[0_4px_3px_008000] hover:text-white' style={{ fontFamily: '"DynaPuff", system-ui' }} onClick={onNumberTwoClick} value={"Numbers 11-20"}/>
				<Button className='text-black-900 flex place-content-center h-fit w-screen border-t-[0.09em] border-b-[0.09em] border-t-[#f0f0f0] border-b-[#a8a6a6] border-none bg-gradient-to-b from-[#f0f0f0] to-[#a8a6a6] shadow-[0_4px_3px_#a8a6a6] m-2 cursor-pointer hover:bg-linear-[180deg,green_100%] hover:shadow-[0_4px_3px_008000] hover:text-white' style={{ fontFamily: '"DynaPuff", system-ui' }} onClick={onColorClick} value={"Colors"}/>
				<Button className='text-black-900 flex place-content-center h-fit w-screen border-t-[0.09em] border-b-[0.09em] border-t-[#f0f0f0] border-b-[#a8a6a6] border-none bg-gradient-to-b from-[#f0f0f0] to-[#a8a6a6] shadow-[0_4px_3px_#a8a6a6] m-2 cursor-pointer hover:bg-linear-[180deg,green_100%] hover:shadow-[0_4px_3px_008000] hover:text-white' style={{ fontFamily: '"DynaPuff", system-ui' }} onClick={onShapeClick} value={"Shapes"}/>
			</section>
		</>
	)
}
