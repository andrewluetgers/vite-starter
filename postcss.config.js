// console.log('postcss.config.cjs')

const postcssConfig = {
	parser: false,
	map: false,
	plugins: {
		'postcss-nested': {},
		'postcss-modules': {
			scopeBehaviour: 'global'
		},
		'postcss-preset-env': {
			autoprefixer: {
				flexbox: 'no-2009',
			},
			stage: 3
		},
		'postcss-flexbugs-fixes': {},
	}
}
export default postcssConfig