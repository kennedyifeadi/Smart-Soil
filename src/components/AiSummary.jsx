import React, { useContext } from 'react'
import { DarkToggleContext } from './context/DarkModeContext'

export const AiSummary = () => {
  const {isDark} = useContext(DarkToggleContext)

  return (
    <div className='w-full h-[32%] px-4'>
        <div className={`w-full h-full ${isDark ? "border-2 border-[#27272a] bg-[#27272ab9]" : "border-2 border-[#dbd9d99f] bg-[#dbd9d96c]"} rounded-md `}>
            <div className='flex flex-col w-full px-4'>
                <div className='flex flex-col leading-0.5 '>
                    <h1 className={`text-xl font-bold ${isDark ? "text-[#fafafa]" : "text-[#09090b]"}`}>
                        AI Assistance
                    </h1>
                    <span className='text-[9px] text-[#7f7f86]'>
                        get valued soil recommendations
                    </span>
                </div>
                <div></div>
            </div>
            <div>
                AI recommendation
            </div>
        </div>
    </div>
  )
}
