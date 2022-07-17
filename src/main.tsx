import React, { lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import '@/styles/common.scss'

import 'val-design/dist/index.css'

import App from './App'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

import { BrowserRouter as Router } from 'react-router-dom'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Router>
    <App />
  </Router>
)
// ReactDOM.render(
//   // <React.StrictMode>
//   <Router>
//     <App />
//   </Router>,
//   // </React.StrictMode>,

//   document.getElementById('root')
// )
