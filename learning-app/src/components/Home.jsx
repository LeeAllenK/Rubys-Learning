import {Playbtn} from './Play-Btn'
export function Home({onPlayClick,onBackClick,onChange,value}){
	return(
		<>
		<div className='home-border'>
					<button className='menu-btn' onClick={onBackClick}>LEARNING MENU</button>
				<h1>
					<div className='title'>
						<span className='title-learn'><p style={{ color: 'red' }}>L</p><p style={{ color: 'blue' }}>E</p><p style={{ color: 'green' }}>A</p><p style={{ color: 'orange' }}>R</p><p style={{ color: 'yellow' }}>N</p></span>
						<span className='title-my'> <p style={{ color: 'indigo' }}>M </p> <p style={{ color: 'violet' }}>Y</p> </span>
						<span className='title-alpha'><p style={{ color: 'red' }}>A</p><p style={{ color: 'orange' }}>L</p><p style={{ color: 'blue' }}>P</p><p style={{ color: 'yellow' }}>H</p><p style={{ color: 'green' }}>A</p><p style={{ color: 'orange' }}>B</p><p style={{ color: 'indigo' }}>E</p><p style={{ color: 'violet' }}>T</p></span>
					</div>
				</h1>
					<div>
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

