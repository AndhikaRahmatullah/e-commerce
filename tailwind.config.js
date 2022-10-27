// /** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
		"./node_modules/tw-elements/dist/js/**/*.js",
		"./node_modules/flowbite/**/*.js",
	],
	theme: {
		extend: {
			colors: {
				'oren': '#EA9615',
				'oren2': '#B47310',
				'ijo': '#15EA2C',
				'biru': '#1569EA',
				'ungu': '#44455B',
			},
			fontFamily: {
				'roboto': ['Roboto'], // 1 3 4 5 7 9
				'lora': ['Lora'], // 4 5 6 7
				'fredoka': ['Fredoka One'] // 4
			},

		},
	},
	plugins: [
		require('tw-elements/dist/plugin'),
		require('flowbite/plugin')
	],
}
