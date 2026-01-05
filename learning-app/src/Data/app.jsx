export const numbersOne = [{ value: '1' }, { value: '2' }, { value: '3' }, { value: '4' }, { value: '5' }, { value: '6' }, { value: '7' }, { value: '8' }, { value: '9' }, { value: '10' }].reverse();

export const numbersTwo = [{ value: '11' }, { value: '12' }, { value: '13' }, { value: '14' }, { value: '15' }, { value: '16' }, { value: '17' }, { value: '18' }, { value: '19' }, { value: '20' },].reverse();

export const ALPHABET = [{ value: 'a' }, { value: 'b' }, { value: 'c' }, { value: 'd' }, { value: 'e' }, { value: 'f' }, { value: 'g' }, { value: 'h' }, { value: 'i' }, { value: 'j' }, { value: 'k' }, { value: 'l' }, { value: 'm' }, { value: 'n' }, { value: 'o' }, { value: 'p' }, { value: 'q' }, { value: 'r' }, { value: 's' }, { value: 't' }, { value: 'u' }, { value: 'v' }, { value: 'w' }, { value: 'x' }, { value: 'y' }, { value: 'z' }].reverse();

export const COLORS = [{ value: 'RED' }, { value: 'ORANGE' }, { value: 'YELLOW' }, { value: 'GREEN' }, { value: 'BLUE' }, { value: 'PURPLE' }, { value: 'PINK' }].reverse();

export const SHAPES = [
	{
		name: "square",
		value: "SQUARE",
		className: "  lg:w-40 lg:h-40 md:w-25 md:h-25 w-15 h-15  bg-black text-white "
	},
	{
		name: "circle",
		value: "CIRCLE",
		className: "lg:w-45 lg:h-45 md:w-25 md:h-25 w-15 h-15 bg-black text-white rounded-full "
	},
	{
		name: "triangle",
		value: "TRIANGLE",
		className: " w-0 h-0 lg:border-l-[90px] md:border-l-[45px] border-l-[25px] lg:border-r-[90px]  md:border-r-[45px] border-r-[25px] lg:border-b-[160px]   md:border-b-[80px] border-b-[50px] border-transparent border-b-black text-white  "
	},
	{
		name: "rectangle",
		value: "RECTANGLE",
		className: "lg:w-70 lg:h-34 md:w-30 md:h-15 w-25 h-12 bg-black text-white"
	},
	{
		name: "oval",
		value: "OVAL",
		className: "lg:w-70 lg:h-30 md:w-50 md:h-20 w-30 h-15 bg-black text-white rounded-full"
	},
];

export function shuffleArray(array) {
	for(let i = array.length - 1; i >= 1; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
};

export const btnClassName = `border-0.5 flex place-items-center place-content-center border-b-6 border-r-5 lg:rounded-xl md:rounded-xl  rounded-full border-black lg:text-4xl md:text-xl sm:text-lg text-md font-bold lg:w-50 lg:h-20 md:w-28 md:h-12 sm:w-50 sm:h-20 w-20 h-14 cursor-pointer active:translate-y-0.5 `;

export const colorClassName =`grid grid-cols-3 place-items-center h-30 text-xl`;

export const btnValueClassName = `absolute flex justify-center flex-wrap items-center bg-[#74a3c9] border-3 lg:w-60 lg:h-60 w-40 h-40 md:w-50 md:h-50 lg:text-5xl md:text-5xl sm:text-2xl text-2xl font-bold rounded-full `;

export const colorClasses = {
	RED: "bg-red-600",
	BLUE: "bg-blue-600",
	GREEN: "bg-green-600",
	YELLOW: "bg-yellow-500",
	ORANGE: "bg-orange-500",
	PURPLE: "bg-purple-600",
	PINK: "bg-pink-400"
};

export const colorMenuClasses = {
	RED: "text-red-600",
	BLUE: "text-blue-600",
	GREEN: "text-green-700",
	YELLOW: "text-yellow-500",
	ORANGE: "text-orange-500",
	PURPLE: "text-purple-600",
	PINK: "bg-pink-400"
};