import {useState} from 'react'
import {ReactComponent as ReactLogo} from './assets/react.svg'
import {css} from 'cssed/macro'
import './App.css'


export default function App() {
	const [count, setCount] = useState(0)

	return (
		<div className={`app ${styles}`}>
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src="/vite.svg" className="logo vite" />

				</a>
				<a href="https://react.dev" target="_blank">
					<ReactLogo className="logo react" />
				</a>
			</div>

			<h1>
				<span className="vite">Vite</span> +
				<span className="react"> React</span> +
				<span> cssed</span>
			</h1>


			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</div>
	)
}

 let {styles} = css`
:local(.styles) {

	color: white;

	h1 {
		font-style: italic;
	}

	.vite {
		color: #ad4bfe;
	}

	.react {
		color: #00d9ff;
	}

	span {
		color: #daf788;
	}

	p {
		color: #19a8ff;
	}
}
 `

