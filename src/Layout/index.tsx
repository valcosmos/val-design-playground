import { FC } from 'react'

import { useState } from 'react'

import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import { Menu } from 'val-design'

import style from './layout.module.scss'

const Layout = () => {
  const [index, setIndex] = useState<string>('0')

  const nav = useNavigate()
  const location = useLocation()

  const menu: string[] = [
    'Button',
    'message',
    'Alert',
    'AutoComplete',
    'Icon',
    'Input',
    'Tabs',
    'Upload'
  ]
  console.log(location)
  const handleMenuSelect = (index: string) => {
    console.log(index)
    nav(`/${menu[+index].toLocaleLowerCase()}`)
    setIndex(index)
  }
  return (
    <div className={style.layout}>
      <header className="header">
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

export default Layout
