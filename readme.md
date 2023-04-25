# Vite + React + Cssed + Storybook

```bash
npm i
npm run dev
```

## Cssed
The [cssed project](https://github.com/okotoki/cssed) enables a zero-runtime css-in-js that compiles down to css modules + Postcss. It uses a css tagged template literal syntax powered by a Babel macro.

This example tries to get as close to the Emotion.js DX as possible it adds nesting support with postcss-nested and sets the module scope to global by default. By wrapping css in a :local scope declaration you get the benefit of scoped styles but the need to only import a single top level style class.

```javascript
import {css} from 'cssed/macro'
export default function App() {
  return (
    <div className={`app ${styles}`}>
      Vite + React + 
      <span>cssed</span>
    </div>
  )
}

let {styles} = css`
:local(.styles) {  
  color: red;
  
  span {
    color: yellow;
  }
 }`
```
