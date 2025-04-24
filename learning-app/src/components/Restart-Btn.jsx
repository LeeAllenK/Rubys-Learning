export function Restartbtn({onRestartClick}){
	return(
		<button className='border-2 lg:w-60 lg:h-15 md:w-50 md:h-10 w-30 h-10  lg:text-5xl md:text-3xl text-2xl font-bold rounded-4xl cursor-pointer bg-linear-to-b from bg-green-400 to-green-600 active:translate-y-0.5 shadow-lg border-green-600' style={{ fontFamily: '"DynaPuff", system-ui' }} onClick={onRestartClick}>Restart</button>
	)
}

// .home - btn,.restart - btn{
// 	color: black;
// 	font - size: 2.5em;
// 	font - weight: 900;
// 	border - radius: 1em;
// 	border: 0.09em solid #a8a6a6,;
// 	background: linear - gradient(180deg, #f0f0f0, #a8a6a6);
// 	box - shadow: 0 4px 3px #a8a6a6,;
// 	transition: all 0.2s ease;
// 	margin: 20px;
// }
// .home - btn: hover,.restart - btn:hover{
// 	box - shadow: 0 0px 8px green;
// 	background: linear - gradient(180deg, rgb(165, 235, 165), green);
// 	border - color: green;
// 	color: white;
// }