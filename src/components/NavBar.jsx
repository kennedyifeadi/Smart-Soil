import React, { useContext } from 'react'
import { ThemeToggle } from './UI/DarkMode'
import SmartSoilImage from '../assets/images/SmartSoil.png'
import SmartSoilImageColored from '../assets/images/SmartSoilColored.png'
import { DarkToggleContext } from './context/DarkModeContext'

export const NavBar = () => {
  const {isDark, setIsDark} = useContext(DarkToggleContext)

  return (
    <div className='w-full h-[60px] shadow-sm pr-4 flex justify-between border-b border-[#27272a]'>
        <div className='w-[75%] h-full items-center '>
            <img src={isDark ? SmartSoilImageColored : SmartSoilImage} alt="Smart Soil logo" className='h-full' />
        </div>
        <div className='flex w-[25%] h-full justify-between items-center '>
            <ThemeToggle/>
            <div className='w-10 h-10 p-2 rounded-full bg-black'>

            </div>
        </div>
    </div>
  )
}
