// console.log('postcss.config.cjs')

const postcssConfig = {
	parser: false,
	map: 'no-map',
	plugins: {
		'postcss-preset-env': {
			autoprefixer: {
				flexbox: 'no-2009',
			},
			stage: 3
		},
		'postcss-flexbugs-fixes': {},
		'tailwindcss/nesting': 'postcss-nested',
		'tailwindcss': {},
		'autoprefixer': {},
	}
}
export default postcssConfig