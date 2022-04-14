import { useState } from 'react'
import './App.scss'
// import styles
import 'val-design/dist/index.css'

import {
  BrowserRouter as Router,
  Link,
  Navigate,
  Outlet,
  Route,
  Routes,
  useNavigate
} from 'react-router-dom'

import Button from '@/components/Button'
import Alert from '@/components/Alert'
import AutoComplete from '@/components/AutoComplete'
import { Menu } from 'val-design'

function App() {
  const [index, setIndex] = useState<string>('0')

  const nav = useNavigate()

  const menu: string[] = [
    'Button',
    'Alert',
    'AutoComplete',
    'Icon',
    'Input',
    'Tabs',
    'Upload'
  ]
  const handleMenuSelect = (index: string) => {
    console.log(index)
    nav(`/${menu[+index].toLocaleLowerCase()}`)
    setIndex(index)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={'https://api.valzt.cn/media/avatar_me.png'} alt="logo" />
        <h1 style={{ marginTop: '10px' }}>Welcome to val-design</h1>
        <div>--{Button.name.split('Custom').pop()?.toString()}</div>
        <Menu defaultIndex={index} onSelect={handleMenuSelect}>
          {menu.map((m, i) => (
            <Menu.Item key={i}>{m}</Menu.Item>
          ))}
        </Menu>
      </header>
      <main
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Outlet />
      </main>
    </div>
  )
}

export default App
