import {Playbtn} from './Play-Btn'
export function Number({ onNumberPlayClick, onBackNumberClick,onChange,value}){
	return(
		<>
		<div className='number-border'>
				<button className='back-btn' onClick={onBackNumberClick}>BACK</button>
				<h1 className='number-header'>
					<span className='title-number'><p >Learn My Numbers</p></span>
				</h1>
					<div>
						<input 
						type='text'
						placeholder="Enter Your Name"
						value={value.charAt(0).toUpperCase() + value.slice(1)}
						onChange={onChange}
						/>
					</div>
			<Playbtn onPlayClick={onNumberPlayClick}/>
		</div>
			<ul className='number-list'>
					<li className="home-One">1</li>
					<li className="home-Two">2</li>
					<li className="home-Three">3</li>
					<li className="home-Four">4</li>
					<li className="home-Five">5</li>
					<li className="home-Six">6</li>
					<li className="home-Seven">7</li>
					<li className="home-Eight">8</li>
					<li className="home-Nine">9</li>
					<li className="home-Ten">10</li>
					<li className="home-Eleven">11</li>
					<li className="home-Twelve">12</li>
					<li className="home-Thirteen">13</li>
					<li className="home-Fourteen">14</li>
					<li className="home-Fifteen">15</li>
					<li className="home-Sixteen">16</li>
					<li className="home-Seventeen">17</li>
					<li className="home-Eighteen">18</li>
					<li className="home-Nineteen">19</li>
					<li className="home-Twenty">20</li>
			</ul>
		</>
	)
}

