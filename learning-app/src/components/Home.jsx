import {Playbtn} from './Play-Btn'
import {MenuBtn} from './Menu-Btn'
export function Home({onPlayClick,onBackClick,onChange,value}){
	return(
		<>
		<div className='home-border'>
					<MenuBtn onClick={onBackClick}/>
				<h1>
					<div className='title'>
						<span className='title-learn'><p className='text-red-600'>L</p><p className='text-orange-400'>E</p><p className='text-[#ffff00]'>A</p><p className='text-green-700'>R</p><p className='text-blue-700'>N</p></span>
						<span className='title-my'> <p className='text-[#4b0082]'>M </p> <p className='text-[#ee82ee]'>Y</p> </span>
						<span className='title-alpha'><p className='text-red-600'>A</p><p className='text-orange-400'>L</p><p className='text-[#ffff00]'>P</p><p className='text-green-700'>H</p><p className='text-green-700'>A</p><p className='text-blue-700'>B</p><p className='text-[#4b0082]'>E</p><p className='text-[#ee82ee]'>T</p></span>
					</div>
				</h1>
					<div className='input'>
						<input 
						type='text'
						placeholder="Enter Your Name"
						value={value.charAt(0).toUpperCase() + value.slice(1)}
						onChange={onChange}
						/>
					</div>
			<Playbtn onPlayClick={onPlayClick}/>
		</div>
			<ul className='home-list'>
					<li className="home-A">A</li>
					<li className="home-B">B</li>
					<li className="home-C">C</li>
					<li className="home-D">D</li>
					<li className="home-E">E</li>
					<li className="home-F">F</li>
					<li className="home-G">G</li>
					<li className="home-H">H</li>
					<li className="home-I">I</li>
					<li className="home-J">J</li>
					<li className="home-K">K</li>
					<li className="home-L">L</li>
					<li className="home-M">M</li>
					<li className="home-N">N</li>
					<li className="home-O">O</li>
					<li className="home-P">P</li>
					<li className="home-Q">Q</li>
					<li className="home-R">R</li>
					<li className="home-S">S</li>
					<li className="home-T">T</li>
					<li className="home-U">U</li>
					<li className="home-V">V</li>
					<li className="home-W">W</li>
					<li className="home-X">X</li>
					<li className="home-Y">Y</li>
					<li className="home-Z">Z</li>
			</ul>
		</>
	)
}

