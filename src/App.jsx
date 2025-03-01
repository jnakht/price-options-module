
import './App.css'
import BarChart from './Components/BarChart/BarChart'
import DaisyNav from './Components/DaisyNav/DaisyNav'
import LineChart from './Components/LineChart/LineChart'
import MultiLineChart from './Components/MultiLineChart/MultiLineChart'
import NavBar from './Components/NavBar/NavBar'

function App() {
  
  

  return (
    <>
      {/* <DaisyNav></DaisyNav> */}
      <NavBar></NavBar>
      <LineChart></LineChart>
      <MultiLineChart></MultiLineChart>
      <BarChart></BarChart>
    </>
  )
}

export default App
