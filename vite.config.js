import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import macrosPlugin from 'vite-plugin-babel-macros'
import svgr from 'vite-plugin-svgr'
import {basename} from "path";


// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		svgr(),
		react(),
		macrosPlugin()
	],
	css: {
		modules: {
			scopeBehaviour: 'global',
			localsConvention: 'camelCase',
			// https://github.com/css-modules/postcss-modules#generating-scoped-names
			generateScopedName: (name, filename, css) => {
				let i = css.indexOf("." + name),
					line = parseInt(css.substr(0, i).split(/[\r\n]/).length, 10)-3,
					file = basename(filename, ".css")
						.replace(/^\./, '')
						.split('.module')[0]
						.split('.css')[0]

				line = line ? `_${line}` : ''
				name = name == 'styles' ? '' : `_${name}`

				// console.log({filename, file, line, name})
				return `_${file}${line}${name}`;
			}
		}
	},
	resolve: {
		alias: {
			crypto: 'rollup-plugin-node-builtins',
		}
	}
})

