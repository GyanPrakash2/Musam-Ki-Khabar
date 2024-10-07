import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Search from './components/search/Search'
import Weather from './components/weather/Weather'
import Location from './components/location/Location'
import WeatherDetails from './components/weatherDetails/WeatherDetails'

function App() {
  // const [count, setCount] = useState(0)
    // const [value,setValue] = useState("") //for city name
    // const [temp, setTemp] = useState()
    // const [humid,setHumid]= useState()
    const[data, setData] =useState({})
    console.log(data)

  return (

      <div  style={{backgroundImage: `url(' ')`}}>
        <Header/>
        <Search setData={setData}/>
        <div className='flex items-center justify-between'>
        <Weather location={data.name} temp={data.main?data.main.temp:'loading'}/>
        <WeatherDetails pressure={data.main?data.main.pressure:"loading"} windSpeed={data.wind? data.wind.speed:"loading"} humidity={data.main? data.main.humidity:"loading"} />
        </div>
      </div>

  )
}

export default App
