
export function Button({items,onClick,disabled,style}){
	return(
		<button className=' flex items-center justify-center border-0.5 border-b-8 border-r-8 rounded border-black bg-[#0000003c] text-8xl font-bold w-40 h-40 m-0.5 cursor-pointer active:translate-y-0.5 rainbow-border' style={style} onClick={onClick} disabled={disabled}>{items}</button>
	)
}

// .item-btns {
//   display: flex;
//   border: 0.05em solid black;
//   justify-content: center;
//   align-items: center;
//   font-size: 0.8em;
//   font-weight: 800;
//   border-radius: 50px;
//   width: 1.6em;
//   height: 1.6em;
//   margin: 0.1em;
//   background: linear-gradient(180deg, #ffffff, #d9d9d9);
//   box-shadow: 0.05em 0.1em black;
//   color: black;
//   transition: transform 0.2s ease;
//   border-color: black;
// }
// .item-btns:hover {
//   animation: rainbow-border 3s infinite;

// }
// .item-btns:active{
//   transform: translateY(3px);

// }