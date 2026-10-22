import React from 'react'
import MyNavBar from './MyNavBar'
import { Outlet } from 'react-router'

export default function MainLayout({theme, toggleTheme}) {
  return (
    <>
    <MyNavBar theme={theme} toggleTheme={toggleTheme}/>

    <main className='container pb-5'>
        <Outlet/>
    </main>
    </>
  )
}
