export const numbersOne = [{ value: '1' }, { value: '2' }, { value: '3' }, { value: '4' }, { value: '5' }, { value: '6' }, { value: '7' }, { value: '8' }, { value: '9' }, { value: '10' }].reverse();

export const numbersTwo = [{ value: '11' }, { value: '12' }, { value: '13' }, { value: '14' }, { value: '15' }, { value: '16' }, { value: '17' }, { value: '18' }, { value: '19' }, { value: '20' },].reverse();

export const ALPHABET = [{ value: 'a' }, { value: 'b' }, { value: 'c' }, { value: 'd' }, { value: 'e' }, { value: 'f' }, { value: 'g' }, { value: 'h' }, { value: 'i' }, { value: 'j' }, { value: 'k' }, { value: 'l' }, { value: 'm' }, { value: 'n' }, { value: 'o' }, { value: 'p' }, { value: 'q' }, { value: 'r' }, { value: 's' }, { value: 't' }, { value: 'u' }, { value: 'v' }, { value: 'w' }, { value: 'x' }, { value: 'y' }, { value: 'z' }].reverse();

export const COLORS = [{ value: 'red' }, { value: 'orange'}, { value: 'yellow'}, { value: 'green'}, { value: 'blue'}, { value: 'indigo'}, { value: 'violet'},].reverse();

export function shuffleArray(array) {
	for(let i = array.length - 1; i >= 1; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
};

export const btnClassName = `
  border-0.5 border-b-8 border-r-8 rounded border-black
  lg:text-5xl md:text-4xl text-4xl font-bold
  lg:w-50 lg:h-50 md:w-40 md:h-40 sm:w-50 sm:h-50 w-20 h-20
  cursor-pointer active:translate-y-0.5`;

export const btnValueClassName = `absolute flex justify-center items-center bg-[#74a3c9] border-7 border-b-20 border-r-20 
w-40 h-40 md:w-60 md:h-60 lg:text-6xl md:text-3xl sm:text-2xl text-2xl md:text-[10em] font-bold rounded `;

export const colorClasses = {
	red: "bg-red-600",
	blue: "bg-blue-600",
	green: "bg-green-600",
	yellow: "bg-yellow-600",
	orange: "bg-orange-600",
	violet: "bg-violet-600",
	indigo: "bg-indigo-600",
};