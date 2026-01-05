import {Playbtn} from './Play-Btn'
import {MenuBtn} from './Menu-Btn'
export function Shape({ onShapeClick, onBackShapeClick,onChange,value}){
	return(
		<div className='flex flex-col lg:items-center md:items-center sm:items-center place-items-center m-0 p-0 lg:w-screen md:w-screen sm:screen max-w-screen'>
				<MenuBtn onClick={onBackShapeClick}/>
				<div className='flex md:text-6xl text-3xl font-bold m-10 ' style={{ fontFamily: '"DynaPuff", system-ui' }}>
				<span className='flex m-1.5'><p className='text-red-600'>L</p><p className='text-orange-400'>E</p><p className='text-yellow-300'>A</p><p className='text-green-700'>R</p><p className='text-blue-700'>N</p></span>
					<span className='flex m-1.5'> <p className='text-indigo-500'>M </p> <p className='text-violet-500'>Y</p> </span>
				<span className='flex m-1.5'><p className="text-yellow-300">S</p><p className='text-red-600'>H</p><p className='text-orange-400'>A</p><p className='text-blue-700'>P</p><p className='text-green-700'>E</p><p className='text-violet-500'>S</p></span>
				</div>
					<div className='flex flex-col md:text-6xl text-3xl font-bold '>
					<input 
					className='flex lg:place-items-center md:place-items-center sm:place-items-center lg:text-5xl md:text-4xl sm:3xl text-2xl lg:font-extrabold md:font-extra-bold sm:font-extra-bold font-extrabold place-items-center lg:bg-white md:bg-white sm:bg-white bg-white lg:text-black md:text-black sm:text-black text-black border-2 border-black-700 lg:h-20 md:h-15 h-10 lg:w-screen md:w-screen sm:w-screen w-screen  md:mb-1 mb-1 hover:bg-gray-400'
						type='text'
						placeholder="Enter Your Name"
						value={value.charAt(0).toUpperCase() + value.slice(1)}
						onChange={onChange}
						/>
					</div>
			<Playbtn onPlayClick={onShapeClick}/>
		</div>
	)
}


