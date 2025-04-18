import {Playbtn} from './Play-Btn'
import {MenuBtn} from './Menu-Btn'
export function Home({onPlayClick,onBackClick,onChange,value}){
	return(
//Md implement
		<>
			<div className='flex flex-col items-center  '>
					<MenuBtn onClick={onBackClick}/>
				<div className='flex text-6xl font-bold' style={{ fontFamily: '"DynaPuff", system-ui' }}>
						<span className='flex m-1.5'><p className='text-red-600'>L</p><p className='text-orange-400'>E</p><p className='text-[#ffff00]'>A</p><p className='text-green-700'>R</p><p className='text-blue-700'>N</p></span>
						<span className='flex m-1.5'> <p className='text-[#4b0082]'>M </p> <p className='text-[#ee82ee]'>Y</p> </span>
						<span className='flex m-1.5'><p className='text-red-600'>A</p><p className='text-orange-400'>L</p><p className='text-[#ffff00]'>P</p><p className='text-green-700'>H</p><p className='text-green-700'>A</p><p className='text-blue-700'>B</p><p className='text-[#4b0082]'>E</p><p className='text-[#ee82ee]'>T</p></span>
					</div>
					<div className='flex text-4xl font-bold'>
						<input 
						className='flex border-2 border-black-700 place-items-center w-screen'
						type='text'
						placeholder="Enter Your Name"
						value={value.charAt(0).toUpperCase() + value.slice(1)}
						onChange={onChange}
						/>
					</div>
			<Playbtn onPlayClick={onPlayClick}/>
		</div>
			<ul className='flex justify-center text-7xl font-bold' style={{ fontFamily: '"DynaPuff", system-ui' }}>
					<li className="m-1">A</li>
					<li  className="m-1">B</li>
					<li  className="m-1">C</li>
					<li  className="m-1">D</li>
					<li  className="m-1">E</li>
					<li  className="m-1">F</li>
					<li  className="m-1">G</li>
					<li  className="m-1">H</li>
					<li  className="m-1">I</li>
					<li  className="m-1">J</li>
					<li  className="m-1">K</li>
					<li  className="m-1">L</li>
					<li  className="m-1">M</li>
					<li  className="m-1">N</li>
					<li  className="m-1">O</li>
					<li  className="m-1">P</li>
					<li  className="m-1">Q</li>
					<li  className="m-1">R</li>
					<li  className="m-1">S</li>
					<li  className="m-1">T</li>
					<li  className="m-1">U</li>
					<li  className="m-1">V</li>
					<li  className="m-1">W</li>
					<li  className="m-1">X</li>
					<li  className="m-1">Y</li>
					<li  className="m-1">Z</li>
			</ul>
		</>
	)
}

