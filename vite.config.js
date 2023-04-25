import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import macrosPlugin from 'vite-plugin-babel-macros'
import svgr from 'vite-plugin-svgr'


// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		svgr(),
		react(),
		macrosPlugin()
	],
	css: {
		modules: {
			scopeBehaviour: 'global'
		}
	},
	resolve: {
		alias: {
			crypto: 'rollup-plugin-node-builtins',
		}
	}
})
