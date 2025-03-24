import {Playbtn} from './Play-Btn'
export function Number({ onNumberPlayClick, onBackNumberClick,onChange,value}){
	return(
		<div className='number-border'>
				<button className='back-btn' onClick={onBackNumberClick}>BACK</button>
				<h1 className='number-header'>
				<span className='title-number'><p style={{ color: 'red' }}>L</p><p style={{ color: 'blue' }}>E</p><p style={{ color: 'green' }}>A</p><p style={{ color: 'orange' }}>R</p><p style={{ color: 'yellow' }}>N</p></span>
				<span className='title-myNum'> <p style={{ color: 'indigo' }}>M </p> <p style={{ color: 'violet' }}>Y</p> </span>
				<span className='title-numbers'><p style={{ color: 'red' }}>N</p><p style={{ color: 'orange' }}>U</p><p style={{ color: 'blue' }}>M</p><p style={{ color: 'yellow' }}>B</p><p style={{ color: 'green' }}>E</p><p style={{ color: 'orange' }}>R</p><p style={{ color: 'indigo' }}>S</p></span>
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

