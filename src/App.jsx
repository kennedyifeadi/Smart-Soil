import { useContext, useEffect, useState } from "react"
import { AiSummary } from "./components/AiSummary"
import { Chart } from "./components/Chart"
import { DarkToggleContext} from "./components/context/DarkModeContext"
import { Forcast } from "./components/Forcast"
import { NavBar } from "./components/NavBar"
import { ValueCard } from "./components/ValueCard"
import { FaTemperatureHigh } from "react-icons/fa6";
import { BsMoisture } from "react-icons/bs";
import { WiHumidity } from "react-icons/wi";
import { db, onValue, ref} from "./firebase/firebase"

function App() {
  const {isDark} = useContext(DarkToggleContext)
  const [temperature, setTemperature] = useState(0);
  const [moisture, setMoisture] = useState(0);
  const [humidity, setHumidity] = useState(0);


  const updateDashboard = () => {
    onValue(ref(db, "Data"), (snapshot) => {
      const Data = snapshot.val();
      setTemperature(Data?.Temperature);
      setMoisture(Data?.Moisture);
      setHumidity(Data?.Humidity);
    });
   
  };


  useEffect(()=>{
    updateDashboard();
  }, [])
  return (
    <div className={`w-[100dvw] h-[100dvh] flex flex-col justify-between relative overflow-hidden ${isDark ? "bg-[#09090b]" : "bg-[#fafafa]"}`}>
        <NavBar/>
        <Forcast/>
        <div className=" w-full h-max flex justify-between px-4 mb-4">
          <ValueCard Title="Temperature" Value={temperature + "°C"} State={"Moderate level"} Icon={<FaTemperatureHigh />}/>
          <ValueCard Title="Moisture" Value={moisture + "%"} State={"Moderate level"} Icon={<BsMoisture />}/>
          <ValueCard Title="Humidity" Value={humidity + "%"} State={"Moderate level"} Icon={<WiHumidity />}/>
        </div>
        <div className='w-full h-[64%] border flex flex-col md:flex-row'>
          <Chart/>
          <AiSummary/>
        </div>
    </div>
  )
}

export default App
