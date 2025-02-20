import { AiSummary } from "./components/AiSummary"
import { Chart } from "./components/chart"
import { Forcast } from "./components/Forcast"
import { NavBar } from "./components/NavBar"
import { ValueCard } from "./components/ValueCard"

function App() {

  return (
    <div>
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
