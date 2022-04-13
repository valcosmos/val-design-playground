import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import {
  BrowserRouter as Router,
  Link,
  Navigate,
  Route,
  Routes,
  useNavigate
} from 'react-router-dom'
import Button from './components/Button'
import Alert from './components/Alert'
import AutoComplete from './components/AutoComplete'

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="" element={<Button />}></Route>
        <Route path="button" element={<Button />}></Route>
        <Route path="alert" element={<Alert />}></Route>
        <Route path="autocomplete" element={<AutoComplete />}></Route>
      </Route>
    </Routes>
  </Router>,
  document.getElementById('root')
)
