import {Playbtn} from './Play-Btn'
export function Home({onPlayClick}){
		
	return(
		<div>
			<h1>Learn My Alphabet</h1>
			<Playbtn onPlayClick={onPlayClick}/>
		</div>
	)
}