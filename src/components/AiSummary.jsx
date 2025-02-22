import React, { useContext, useEffect, useState } from 'react'
import { DarkToggleContext } from './context/DarkModeContext'
import { RiRobot2Line } from "react-icons/ri";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Loader } from './UI/Loader';
import { onValue, ref } from 'firebase/database';
import { db } from '../firebase/firebase';

export const AiSummary = () => {
  const { isDark } = useContext(DarkToggleContext);
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const API_KEY = import.meta.env.VITE_REACT_API_KEY;
  const genAI = new GoogleGenerativeAI(API_KEY);

  const [temperature, setTemperature] = useState(null);
  const [moisture, setMoisture] = useState(null);
  const [humidity, setHumidity] = useState(null);

  useEffect(() => {
    const updateDashboard = () => {
      onValue(ref(db, "Data"), (snapshot) => {
        const Data = snapshot.val();
        setTemperature(Data?.Temperature || 0);
        setMoisture(Data?.Moisture || 0);
        setHumidity(Data?.Humidity || 0);
      });
    };
    updateDashboard();
  }, []);

  const fetchData = async () => {
    if (moisture === null || temperature === null || humidity === null) return; // Prevents running with empty values
  
    try {
      setIsLoading(true);
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const prompt = `Provide recommendations for improving soil health based on the following data: 
        - Moisture: ${moisture}% 
        - Temperature: ${temperature}°C 
        - Humidity: ${humidity}%, your response should not exceed 30 words`;
  
      const result = await model.generateContent(prompt);
      const cleanResponse = result.response.text().replace(/\*/g, ''); // Removes '*' from response
      setResponse(cleanResponse);
    } catch (error) {
      console.log(error);
      setResponse("Error fetching AI recommendations.");
    } finally {
      setIsLoading(false);
    }
  };
  

  useEffect(() => {
    if (moisture !== null && temperature !== null && humidity !== null) {
      fetchData();
    }
  }, [moisture, temperature, humidity]);

  return (
    <div className='w-full h-[32%] px-4 mb-2'>
      <div className={`relative w-full h-full overflow-hidden flex flex-col justify-between 
        ${isDark ? "border-2 border-[#27272a] bg-[#27272ab9]" : "border-2 border-[#dbd9d99f] bg-[#dbd9d96c]"} 
        rounded-md `}>
        <div className='flex flex-col w-full px-4'>
          <div className='flex flex-col leading-0.5 '>
            <h1 className={`text-xl font-bold ${isDark ? "text-[#fafafa]" : "text-[#09090b]"}`}>
              AI Assistance
            </h1>
            <span className='text-[9px] text-[#7f7f86]'>
              hear what SoilBot has to say...
            </span>
          </div>
          <div className={`absolute top-[-1rem] ${isDark ? "text-[#cfdf32]" : "text-[#ffbc02]"} text-7xl opacity-25 w-full h-full`}>
            <span className='w-full h-full flex justify-end'>
              <RiRobot2Line />
            </span>
          </div>
        </div>
        <div className='flex w-full h-[80%] p-2 overflow-y-auto'>
          <div className={`w-full h-full max-h-full overflow-y-auto rounded-md p-2 text-[15px] ${isDark ? "text-[#fafafa]" : "text-[#09090b]"} ${isDark ? "bg-[#09090b5e]" : "bg-[#fafafa]" }`}>
            {isLoading ? <Loader /> : response}
          </div>
        </div>
      </div>
    </div>
  );
};
