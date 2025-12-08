export function Main({onNumberOneClick,onNumberTwoClick,onAlphabetClick}){
	return(
	<>
			<div className='flex md:justify-center items-center justify-center md:w-full md:text-7xl text-5xl font-bold mt-20'>
				<span className='flex justify-center md:m-4' style={{ fontFamily: '"DynaPuff", system-ui' }}> <p className='text-red-600'>M </p> <p className='text-orange-400'>Y</p> </span>
				<span className='flex justify-center m-4 ' style={{ fontFamily: '"DynaPuff", system-ui' }}> <p className='text-[#ffff00]'>L </p> <p className='text-green-700'>E</p><p className='text-blue-700'>A</p><p className='text-[#4b0082]'>R</p><p className='text-[#ee82ee]'>N</p><p className='text-red-600'>I</p><p className='text-orange-400'>N</p><p className='text-[#ffff00]'>G</p> </span>
			</div>	
			<div className='flex m-0 flex-col items-center justify-start md:h-screen h-screen lg:w-screen md:w-screen sm:w-screen w-screen lg:text-6xl md:text-6xl sm:text-4xl text-4xl font-black '>
				<button className='md:text-black-900 flex md:justify-center justify-center items-center lg:25 md:h-20 h-20 lg:w-screen md:w-screen sm:w-screen w-svh border-t-[0.09em] border-b-[0.09em] border-t-[#f0f0f0] border-b-[#a8a6a6] border-none bg-gradient-to-b from-[#f0f0f0] to-[#a8a6a6] shadow-[0_4px_3px_#a8a6a6] m-2 cursor-pointer mt-20 hover:bg-linear-[180deg,green_100%] hover:shadow-[0_4px_3px_008000] hover:text-white' style={{ fontFamily: '"DynaPuff", system-ui'}} onClick={onAlphabetClick}>Alphabets</button>
				<button className='text-black-900 flex justify-center items-center lg:25 md:h-20 h-20 lg:w-screen md:w-screen sm:w-screen w-svh border-t-[0.09em] border-b-[0.09em] border-t-[#f0f0f0] border-b-[#a8a6a6] border-none bg-gradient-to-b from-[#f0f0f0] to-[#a8a6a6] shadow-[0_4px_3px_#a8a6a6] m-2 cursor-pointer hover:bg-linear-[180deg,green_100%] hover:shadow-[0_4px_3px_008000] hover:text-white' style={{ fontFamily: '"DynaPuff", system-ui' }} onClick={onNumberOneClick}>Numbers 1-10</button>
				<button className='text-black-900 flex justify-center items-center lg:h-25 md:h-20 h-20 sm:h-full lg:w-screen md:w-screen sm:w-screen w-svh border-t-[0.09em] border-b-[0.09em] border-t-[#f0f0f0] border-b-[#a8a6a6] border-none bg-gradient-to-b from-[#f0f0f0] to-[#a8a6a6] shadow-[0_4px_3px_#a8a6a6] m-2 cursor-pointer hover:bg-linear-[180deg,green_100%] hover:shadow-[0_4px_3px_008000] hover:text-white' style={{ fontFamily: '"DynaPuff", system-ui' }} onClick={onNumberTwoClick}>Numbers 11-20</button>
	</div>
	</>
	)
}
