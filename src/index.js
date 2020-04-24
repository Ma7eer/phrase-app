import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
html {
  --header-text: ${props => props.theme.header_text};
  --header-text-shadow: ${props => props.theme.header_text_shadow};

  --tag-background: ${props => props.theme.tag_background};
  --tag-text: ${props => props.theme.tag_text};
  --tag-background-highlighted: ${props =>
    props.theme.tag_background_highlighted};
  --tag-text-highlighted: ${props => props.theme.tag_text_highlighted};
  --tag-counter-background: ${props => props.theme.tag_counter_background};
  --tag-counter-text: ${props => props.theme.tag_counter_text};

  --card-front-background: ${props => props.theme.card_front_background};
  --card-front-text: ${props => props.theme.card_front_text};
  --card-front-text-underline: ${props =>
    props.theme.card_front_text_underline};
  --card-front-border:  ${props => props.theme.card_front_border};
  --card-back-background: ${props => props.theme.card_back_background};
  --card-back-text: ${props => props.theme.card_back_text};
  --card-back-text-underline: ${props => props.theme.card_back_text_underline};
  --card-back-border:  ${props => props.theme.card_back_border};
  
  --background: ${props => props.theme.background};
}

body {
  margin: 0;
  font-family: 'Tajawal', sans-serif;
  text-align: center;
  scroll-behavior: smooth;
  background-color: var(--background)
}
`

const theme = {
  second_theme: {
    header_text: 'white',

    tag_background: '#6B727F',
    tag_text: 'white',
    tag_background_highlighted: '#272727',
    tag_text_highlighted: 'white',
    tag_counter_background: 'white',
    tag_counter_text: 'black',

    card_front_background: '#FED766',
    card_front_text: 'black',
    card_front_text_underline: '#BF1A2F',
    card_front_border: 'rgb(238, 238, 238)',
    card_back_background: 'white',
    card_back_text: 'black',
    card_back_text_underline: '#BF1A2F',
    card_back_border: 'rgb(238, 238, 238)',

    background: '#009FB7',
  },
  light_theme: {
    header_text: 'white',

    tag_background: '#14CBCB',
    tag_text: 'black',
    tag_background_highlighted: '#0390F5',
    tag_text_highlighted: 'white',
    tag_counter_background: 'white',
    tag_counter_text: 'black',

    card_front_background: '#0390F5',
    card_front_text: 'white',
    card_front_text_underline: '#14CBCB',
    card_front_border: 'rgb(238, 238, 238)',
    card_back_background: 'white',
    card_back_text: 'black',
    card_back_text_underline: '#14CBCB',
    card_back_border: 'rgb(238, 238, 238)',

    background: '#92CCF6',
  },
  dark_theme: {
    header_text: 'white',

    tag_background: '#194D73',
    tag_text: 'white',
    tag_background_highlighted: '#14CBCB',
    tag_text_highlighted: '#122C34',
    tag_counter_background: 'white',
    tag_counter_text: 'black',

    card_front_background: '#194D73',
    card_front_text: 'white',
    card_front_text_underline: '#14CBCB',
    card_front_border: '#194D73',
    card_back_background: '#FFFFFF',
    card_back_text: '#122C34',
    card_back_text_underline: '#14CBCB',
    card_back_border: 'rgb(238, 238, 238)',

    background: '#122C34',
  },
  fifth_theme: {
    header_text: 'white',

    tag_background: '#44CFCB',
    tag_text: 'black',
    tag_background_highlighted: '#045252',
    tag_text_highlighted: 'white',
    tag_counter_background: 'white',
    tag_counter_text: 'black',

    card_front_background: '#045252',
    card_front_text: 'white',
    card_front_text_underline: '#44CFCB',
    card_front_border: '#122C34',
    card_back_background: 'white',
    card_back_text: 'black',
    card_back_text_underline: '#44CFCB',
    card_back_border: 'rgb(238, 238, 238)',

    background: '#4EA5D9',
  },
}

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles theme={theme.fifth_theme} />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
