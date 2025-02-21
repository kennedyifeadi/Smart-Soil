import React, { useContext } from 'react'
import { DarkToggleContext } from './context/DarkModeContext'

export const Chart = () => {
  const {isDark} = useContext(DarkToggleContext)

  return (
    <div className='w-full h-[32%] px-4 mb-4' >
        <div className={`w-full h-full px-2 ${isDark ? "border-2 border-[#27272a] bg-[#27272ab9]" : "border-2 border-[#dbd9d99f] bg-[#dbd9d96c]"} rounded-md`}>
            <div className='w-full flex justify-between'>
                <div className='flex flex-col leading-0.5'>
                    <span className={`text-xl font-bold ${isDark ? "text-[#fafafa]" : "text-[#09090b]"}`}>
                        Chart Analysis
                    </span>
                    <span className='text-[9px] text-[#7f7f86]'>
                        over the past week
                    </span>
                </div>
                <div>
                    <span>

                    </span>
                </div>
            </div>
            <div>
                main Chart
            </div>
        </div>
    </div>
  )
}
