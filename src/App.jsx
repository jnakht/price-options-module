
import { useEffect, useState } from 'react'
import './App.css'
import BarChart from './Components/BarChart/BarChart'
import DaisyNav from './Components/DaisyNav/DaisyNav'
import LineChart from './Components/LineChart/LineChart'
import MultiLineChart from './Components/MultiLineChart/MultiLineChart'
import NavBar from './Components/NavBar/NavBar'
import PieC from './Components/PieC/PieC'
import axios from 'axios'

function App() {
  
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    // .then(res => res.json())
    // .then(data => console.log(data.data))

    // fetch data using axios
    axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
    .then(data => {
      console.log(data.data.data)
      const allPhones = data.data.data;
      const fakeData = allPhones.map(phone => {
          const obj = {
            name: phone.phone_name,
            price: phone.slug.split('-')[1],
          }
          return obj;
      })
      setPhones(fakeData)
      console.log(fakeData)
    })
  } ,[])
  

  return (
    <>
      {/* <DaisyNav></DaisyNav> */}
      <NavBar></NavBar>
      <LineChart></LineChart>
      <MultiLineChart></MultiLineChart>
      <BarChart></BarChart>
      <PieC></PieC> 
    </>
  )
}

export default App
