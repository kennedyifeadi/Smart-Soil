import React, { useContext } from 'react'
import { ThemeToggle } from './UI/DarkMode'
import SmartSoilImage from '../assets/images/SmartSoil.png'
import SmartSoilImageColored from '../assets/images/SmartSoilColored.png'
import { DarkToggleContext } from './context/DarkModeContext'
import SmartSoilUser from '../assets/images/JFK.jpeg'

export const NavBar = () => {
  const {isDark} = useContext(DarkToggleContext)

  return (
    <div className={`w-full h-[8%] pr-4 flex justify-between border-b border-dashed mb-2 ${isDark ? "border-[#27272a]": "border-[#dbd9d9]"} `}>
        <div className='w-[75%] h-full items-center '>
            <img src={isDark ? SmartSoilImageColored : SmartSoilImage} alt="Smart Soil logo" className='h-full' />
        </div>
        <div className='flex w-[25%] h-full justify-between items-center '>
            <ThemeToggle/>
            <div className='w-10 h-10 rounded-full boer'>
                <img src={SmartSoilUser} alt="User" className={`w-full h-full rounded-full object-cover ${isDark ? "border-2 border-[#27272a]" : "border-2 border-[#dbd9d99f]"}`} />
            </div>
        </div>
    </div>
  )
}
