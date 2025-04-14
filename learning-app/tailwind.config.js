import tailwindcss from '@tailwindcss/vite';

export default {
	plugins: [tailwindcss()],
	theme: {
		extend: {
			fontFamily: {
				'dyna-puff': ['"DynaPuff"', 'system-ui'], // Custom font setup
			},
		},
	},
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], // Adjust the content paths
};
