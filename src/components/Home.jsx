import {Playbtn} from './Play-Btn'
export function Home({onPlayClick}){
	return(
		<>
		<div className='home-border'>
			<h1>Learn My Alphabet</h1>
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