import {Playbtn} from './Play-Btn'
import {MenuBtn} from './Menu-Btn'
export function Number({ onNumberPlayClick, onBackNumberClick,onChange,value}){
	return(
		<div className='number-border'>
				<MenuBtn onClick={onBackNumberClick}/>
				<h1 >
				<div className='title'>
				<span className='title-learn'><p style={{ color: 'red' }}>L</p><p style={{ color: 'blue' }}>E</p><p style={{ color: 'green' }}>A</p><p style={{ color: 'orange' }}>R</p><p style={{ color: 'yellow' }}>N</p></span>
				<span className='title-my'> <p style={{ color: 'indigo' }}>M </p> <p style={{ color: 'violet' }}>Y</p> </span>
				<span className='title-numbers'><p style={{ color: 'red' }}>N</p><p style={{ color: 'orange' }}>U</p><p style={{ color: 'blue' }}>M</p><p style={{ color: 'yellow' }}>B</p><p style={{ color: 'green' }}>E</p><p style={{ color: 'orange' }}>R</p><p style={{ color: 'indigo' }}>S</p></span>
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
			<Playbtn onPlayClick={onNumberPlayClick}/>
		</div>
	)
}

