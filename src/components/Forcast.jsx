import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { DarkToggleContext } from './context/DarkModeContext'
import { motion } from "motion/react"

export const Forcast = () => {
  const {isDark} = useContext(DarkToggleContext)
  const [tomorrowForcast, setTomorrowForcastDay] = useState("")
  const [todayForcast, setTodayForcastDay] = useState("")

  const weatherAPI = "https://api.weatherapi.com/v1/forecast.json?key=a4f33c6a6aa4444a949135854241011&q=ibadan&days=2&aqi=yes&alerts=yes"


  const fetchData = async ()=>{
    const res = await axios.get(weatherAPI)
    const data = res.data
    const tomorrowForcast = data.forecast.forecastday[1].day.condition.text
    const todayForcast = data.current.condition.text

    setTomorrowForcastDay(tomorrowForcast)
    setTodayForcastDay(todayForcast)
}

  useEffect(()=>{
    fetchData()
}, []);

  return (
    <div className='w-full h-[5%] flex gap-2 px-4 mb-2'>
      <motion.div 
      initial = {{opacity: 0, y: 40}}
      animate={{ opacity: 1, y: 0}}
      transition={{ duration: 1}}
      className={`w-max h-max flex flex-col border-2 ${isDark ? "text-[#fafafa] border-[#27272a] bg-[#27272ab9]" : "text-[#09090b] border-[#dbd9d99f] bg-[#dbd9d96c]"} rounded-full px-4`}>
        <span className='w-max text-[12px]'>
          {todayForcast}
        </span>
        <span className={`text-[8px] ${isDark ? "text-[#cfdf32]" : "text-[#ffbc02]"}`}>
          today's weather reading
        </span>
      </motion.div>
      <motion.div 
      initial = {{opacity: 0, y: 40}}
      animate={{ opacity: 1, y: 0}}
      transition={{ duration: 1.2}}
      className={`w-max h-max flex flex-col border-2 ${isDark ? "text-[#fafafa] border-[#27272a] bg-[#27272ab9]" : "text-[#09090b] border-[#dbd9d99f] bg-[#dbd9d96c]"} rounded-full px-4`}>
        <span className='w-max text-[12px]'>
          {tomorrowForcast}
        </span>
        <span className={`text-[8px] ${isDark ? "text-[#cfdf32]" : "text-[#ffbc02]"}`}>
          tomorrow's weather reading
        </span>
      </motion.div>
    </div>
  )
}
