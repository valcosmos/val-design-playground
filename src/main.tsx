import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import '@/styles/common.scss'

import 'val-design/dist/index.css'

import App from './App'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  // <React.StrictMode>
  <Router>
    <App />
  </Router>,
  // </React.StrictMode>,

  document.getElementById('root')
)
