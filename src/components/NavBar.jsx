import React from 'react'
import { ThemeToggle } from './UI/DarkMode'
import SmartSoilImage from '../assets/images/SmartSoil.png'

export const NavBar = () => {
  return (
    <div className='w-full h-[60px] shadow-sm px-4 flex justify-between'>
        <div className='w-[75%] h-full items-center '>
            <img src={SmartSoilImage} alt="Smart Soil logo" className='h-full' />
        </div>
        <div className='flex w-[25%] h-full justify-between items-center border border-black'>
            <ThemeToggle/>
            <div className='w-10 h-10 p-2 rounded-full bg-black'>

            </div>
        </div>
    </div>
  )
}
