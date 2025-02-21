import { useContext } from "react"
import { AiSummary } from "./components/AiSummary"
import { Chart } from "./components/chart"
import { DarkToggleContext} from "./components/context/DarkModeContext"
import { Forcast } from "./components/Forcast"
import { NavBar } from "./components/NavBar"
import { ValueCard } from "./components/ValueCard"
import { FaTemperatureHigh } from "react-icons/fa6";
import { BsMoisture } from "react-icons/bs";
import { WiHumidity } from "react-icons/wi";

function App() {
  const {isDark} = useContext(DarkToggleContext)
  return (
    <div className={`w-[100dvw] h-[100dvh] flex flex-col relative overflow-hidden ${isDark ? "bg-[#09090b]" : "bg-[#fafafa]"}`}>
        <NavBar/>
        <Forcast/>
        <div className=" w-full h-max flex justify-between px-4 mb-4">
          <ValueCard Title="Temperature" Value="0" State={"Moderate level"} Icon={<FaTemperatureHigh />}/>
          <ValueCard Title="Moisture" Value={"0"} State={"Moderate level"} Icon={<BsMoisture />}/>
          <ValueCard Title="Humidity" Value={"0"} State={"Moderate level"} Icon={<WiHumidity />}/>
        </div>
        <Chart/>
        <AiSummary/>
    </div>
  )
}

export default App
