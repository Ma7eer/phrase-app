import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
html {
  --grey: #bdbdbd;
  --black: #242b32;
  --white: white;
  --yellow: yellow;
}

body {
  margin: 0;
  font-family: 'Tajawal', sans-serif;
  text-align: center;
  scroll-behavior: smooth;
  background-color: var(--grey);
}
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
