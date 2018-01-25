import React from 'react'
import ReactDOM from 'react-dom'
import './styles/main.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const rootEl = document.getElementById('root')

ReactDOM.render(<App />, rootEl)

registerServiceWorker()
