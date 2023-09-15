/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

const safeList = [
	'stroke-indigo-400',
	'stroke-pink-400',
	'stroke-yellow-400',
	'stroke-yellow-500',
	'stroke-blue-500',
	'stroke-rose-500',
	'stroke-indigo-500',
	'stroke-teal-500'
];

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	safelist: [
		...safeList,
		'hover:text-location',
		'hover:text-linkedin',
		'hover:text-website',
		'hover:text-github',
		'hover:text-email'
	],
	theme: {
		extend: {
			screens: {
				xxs: '320px',
				xs: '490px',
				mxl: '1436px',
				...defaultTheme.screens
			},
			fontSize: {
				ss: '0.8125rem'
			},
			lineHeight: {
				ss: '1.5rem'
			},
			spacing: {
				ss: '3rem'
			},
			colors: {
				nhs_blue: '#005EB8',
				nhs_bright_blue: '#0072CE',
				linkedin: '#0072B1',
				website: '#7e22ce',
				location: '#4f46e5',
				github: '#171515',
				email: '#e11d48',

				...defaultTheme.colors
			},
			keyframes: {
				'fade-in': {
					'0%': {
						opacity: '0'
					},
					'100%': {
						opacity: '1'
					}
				}
			},
			animation: {
				'fade-in': 'fade-in 0.5s ease-out'
			}
		},
		variants: {
			fill: ['hover', 'focus']
		}
	},
	plugins: []
};
