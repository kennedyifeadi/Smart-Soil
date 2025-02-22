import React, { useContext } from 'react'
import { DarkToggleContext } from './context/DarkModeContext'
import { RiRobot2Line } from "react-icons/ri";


export const AiSummary = () => {
  const {isDark} = useContext(DarkToggleContext)

  return (
    <div className='w-full h-[32%] px-4'>
        <div className={`relative w-full h-full overflow-hidden flex flex-col justify-between ${isDark ? "border-2 border-[#27272a] bg-[#27272ab9]" : "border-2 border-[#dbd9d99f] bg-[#dbd9d96c]"} rounded-md `}>
            <div className='flex flex-col w-full px-4'>
                <div className='flex flex-col leading-0.5 '>
                    <h1 className={`text-xl font-bold ${isDark ? "text-[#fafafa]" : "text-[#09090b]"}`}>
                        AI Assistance
                    </h1>
                    <span className='text-[9px] text-[#7f7f86]'>
                        listen to what your robot has to say...
                    </span>
                </div>
                <div className={`absolute top-[-1rem] ${isDark ? "text-[#cfdf32]" : "text-[#ffbc02]"} text-7xl opacity-25 w-full h-full`}>
                    <span className='w-full h-full flex justify-end'>
                        <RiRobot2Line />
                    </span>
                </div>
            </div>
            <div className='w-full h-[80%] p-2'>
                <div className={`w-full h-full rounded-md ${isDark ? "bg-[#09090b5e]" : "bg-[#fafafa]" }`}>

                </div>
            </div>
        </div>
    </div>
  )
}

// AIzaSyD1USFu5Hfsm51w8hslUuwQp6jobvbQ4sg
