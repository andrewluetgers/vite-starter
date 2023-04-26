// console.log('postcss.config.cjs')

const postcssConfig = {
	parser: false,
	map: true,
	plugins: {
		'postcss-preset-env': {
			autoprefixer: {
				flexbox: 'no-2009',
			},
			stage: 3
		},
		'postcss-nested': {},
		'postcss-flexbugs-fixes': {},
	}
}
export default postcssConfig