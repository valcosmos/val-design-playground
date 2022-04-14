import React, { lazy, Suspense } from 'react'
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

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

import Button from './components/Button'
import Alert from './components/Alert'
import AutoComplete from './components/AutoComplete'
import Icon from '@/components/Icon'
import Input from '@/components/Input'
import Tabs from '@/components/Tabs'
import Upload from '@/components/Upload'

// const Button = lazy(() => import('@/components/Button'))
// const Alert = lazy(() => import('@/components/Alert'))
// const AutoComplete = lazy(() => import('@/components/AutoComplete'))
// const Icon = lazy(() => import('@/components/Icon'))
// const Input = lazy(() => import('@/components/Input'))
// const Tabs = lazy(() => import('@/components/Tabs'))
// const Upload = lazy(() => import('@/components/Upload'))

console.log(Button)

const routesArr = [
  { k: 'button', v: Button },
  { k: 'alert', v: Alert },
  { k: 'autocomplete', v: AutoComplete },
  { k: 'icon', v: Icon },
  { k: 'input', v: Input },
  { k: 'tabs', v: Tabs },
  { k: 'upload', v: Upload }
]

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <Router>
    {/* <Suspense fallback={<div></div>}> */}
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Navigate to={'/button'} />}></Route>
          {routesArr.map((r) => (
            <Route path={r.k} element={<r.v />} key={r.k} />
          ))}
        </Route>
      </Routes>
    {/* </Suspense> */}
  </Router>,
  document.getElementById('root')
)
