import { useState } from 'react'
import './App.scss'
// import styles
import 'val-design/dist/index.css'

import { Outlet, useNavigate } from 'react-router-dom'

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
        <h1 className="mt-3 mb-3">Welcome to val-design</h1>

        <div className="menu">
          <Menu defaultIndex={index} onSelect={handleMenuSelect}>
            {menu.map((m, i) => (
              <Menu.Item key={i}>{m}</Menu.Item>
            ))}
          </Menu>
        </div>
      </header>
      <main className="main">
        <Outlet />
      </main>
    </div>
  )
}

export default App
