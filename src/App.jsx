import { useContext } from "react"
import { AiSummary } from "./components/AiSummary"
import { Chart } from "./components/chart"
import { DarkToggleContext} from "./components/context/DarkModeContext"
import { Forcast } from "./components/Forcast"
import { NavBar } from "./components/NavBar"
import { ValueCard } from "./components/ValueCard"

function App() {
  const {isDark, setIsDark} = useContext(DarkToggleContext)
  return (
    <div className={`w-[100dvw] h-[100dvh] flex flex-col relative overflow-hidden ${isDark ? "bg-[#09090b]" : "bg-white"}`}>
        <NavBar/>
        <Forcast/>
        <div>
          <ValueCard/>
          <ValueCard/>
          <ValueCard/>
        </div>
        <Chart/>
        <AiSummary/>
    </div>
  )
}

export default App
