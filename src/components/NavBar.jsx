import React from 'react'
import { ThemeToggle } from './UI/DarkMode'

export const NavBar = () => {
  return (
    <div className='w-full h-[40px] shadow-sm px-4 flex justify-between'>
        <div></div>
        <div className='flex w-[20%] h-full justify-between items-center'>
            <ThemeToggle/>
        </div>
    </div>
  )
}
