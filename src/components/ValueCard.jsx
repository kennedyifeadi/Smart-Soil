import React, { useContext } from 'react'
import { DarkToggleContext } from './context/DarkModeContext'

export const ValueCard = ({Title, Value, Icon, State}) => {
  const {isDark} = useContext(DarkToggleContext)

  return (
    <div className={`relative flex flex-col p-2 w-[30%] h-max rounded-md overflow-hidden ${isDark ? "border-2 border-[#27272a] bg-[#27272ab9]" : "border-2 border-[#dbd9d99f] bg-[#dbd9d96c]"} `}>
        <div className='flex justify-between items-center'>
            <div className='flex flex-col h-full leading-2.5 z-20'>
                <span className={`${isDark ? "text-[#cfdf32]" : "text-[#ffbc02]"} text-[7px]`}>
                    current value
                </span>
                <span className={`${isDark ? "text-[#fafafa]" : "text-[#09090b]"} font-bold text-[12px]`}>
                    {Title}
                </span>
            </div>
            <div className={`absolute top-0 right-[-1rem] flex justify-end items-center ${isDark ? "text-[#cfdf32]" : "text-[#ffbc02]"} text-7xl opacity-25 w-full h-full`}>
                {Icon}
            </div>
        </div>
        <div className='w-full flex z-10'>
            <span className={`w-full text-5xl ${isDark ? "text-[#fafafa]" : "text-[#09090b]"}`}>
                {Value}
            </span>
        </div>
        <div className='w-full flex'>
            <p className='w-full text-[8px] text-[#7f7f86]'>
                {State}
            </p>
        </div>
    </div>
  )
}
