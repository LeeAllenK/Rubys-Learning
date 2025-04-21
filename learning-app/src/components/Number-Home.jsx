import {Playbtn} from './Play-Btn'
import {MenuBtn} from './Menu-Btn'
export function Number({ onNumberPlayClick, onBackNumberClick,onChange,value}){
	return(
		<div className='flex flex-col md:items-center m-0 p-0 md:w-full w-full'>
				<MenuBtn onClick={onBackNumberClick}/>
				<div className='flex md:text-6xl text-4xl font-bold m-10 ' style={{ fontFamily: '"DynaPuff", system-ui' }}>
					<span className='flex m-1.5'><p className='text-red-600'>L</p><p className='text-orange-400'>E</p><p className='text-[#ffff00]'>A</p><p className='text-green-700'>R</p><p className='text-blue-700'>N</p></span>
					<span className='flex m-1.5'> <p className='text-[#4b0082]'>M </p> <p className='text-violet-500'>Y</p> </span>
					<span className='flex m-1.5'><p className='text-red-600'>N</p><p className='text-orange-400'>U</p><p className='text-[#ffff00]'>M</p><p className='text-green-700'>B</p><p className='text-blue-700'>E</p><p className='text-[#4b0082]'>R</p><p className='text-viloet-500'>S</p></span>
				</div>
					<div className='flex flex-col text-4xl font-bold '>
						<input 
					className='flex place-items-center bg-white text-black border-2 border-black-700 md:h-20 md:w-screen w-full md:mb-1 mb-1'
						type='text'
						placeholder="Enter Your Name"
						value={value.charAt(0).toUpperCase() + value.slice(1)}
						onChange={onChange}
						/>
					</div>
			<Playbtn onPlayClick={onNumberPlayClick}/>
		</div>
	)
}


