import React from 'react'
import { render } from 'react-dom'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import '~styles/global.sass'

render(<App />, document.querySelector(`#root`))
