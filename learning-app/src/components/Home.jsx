import {Playbtn} from './Play-Btn'
import {MenuBtn} from './Menu-Btn'
export function Home({onPlayClick,onBackClick,onChange,value}){
	return(
//Md implement
		<>
			<div className='flex flex-col md:items-center m-0 p-0 md:w-full w-full'>
					<MenuBtn onClick={onBackClick}/>
				<div className='flex md:text-6xl text-4xl font-bold m-10 ' style={{ fontFamily: '"DynaPuff", system-ui' }}>
						<span className='flex m-1.5'><p className='text-red-600'>L</p><p className='text-orange-400'>E</p><p className='text-[#ffff00]'>A</p><p className='text-green-700'>R</p><p className='text-blue-700'>N</p></span>
						<span className='flex m-1.5'> <p className='text-[#4b0082]'>M </p> <p className='text-[#ee82ee]'>Y</p> </span>
						<span className='flex m-1.5'><p className='text-red-600'>A</p><p className='text-orange-400'>L</p><p className='text-[#ffff00]'>P</p><p className='text-green-700'>H</p><p className='text-green-700'>A</p><p className='text-blue-700'>B</p><p className='text-[#4b0082]'>E</p><p className='text-[#ee82ee]'>T</p></span>
					</div>
					<div className='flex flex-col text-4xl font-bold '>
						<input 
						className='flex place-items-center bg-white text-black border-2 border-black-700 md:w-screen w-full md:mb-1 mb-1'
						type='text'
						placeholder="Enter Your Name"
						value={value.charAt(0).toUpperCase() + value.slice(1)}
						onChange={onChange}
						/>
			<Playbtn onPlayClick={onPlayClick}/>
					</div>
		</div>
		{/* <div className='flex  mt-4 '> */}
			<ul className='flex md:flex-wrap md:justify-center justify-center flex-wrap md:mt-10 md:text-9xl text-5xl font-bold m-0 p-0 ' style={{ fontFamily: '"DynaPuff", system-ui' }}>
				<li className="m-1 home-A">A</li>
				<li  className="m-1 home-B">B</li>
				<li  className="m-1 home-C">C</li>
				<li  className="m-1 home-D">D</li>
				<li  className="m-1 home-E">E</li>
				<li  className="m-1 home-F">F</li>
				<li  className="m-1 home-G">G</li>
				<li  className="m-1 home-H">H</li>
				<li  className="m-1 home-I">I</li>
				<li  className="m-1 home-J">J</li>
				<li  className="m-1 home-K">K</li>
				<li  className="m-1 home-L">L</li>
				<li  className="m-1 home-M">M</li>
				<li  className="m-1 home-N">N</li>
				<li  className="m-1 home-O">O</li>
				<li  className="m-1 home-P">P</li>
				<li  className="m-1 home-Q">Q</li>
				<li  className="m-1 home-R">R</li>
				<li  className="m-1 home-S">S</li>
				<li  className="m-1 home-T">T</li>
				<li  className="m-1 home-U">U</li>
				<li  className="m-1 home-V">V</li>
				<li  className="m-1 home-W">W</li>
				<li  className="m-1 home-X">X</li>
				<li  className="m-1 home-Y">Y</li>
				<li  className="m-1 home-Z">Z</li>
			</ul>
		{/* </div> */}
		</>
	)
}

