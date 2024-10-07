import React from 'react'
import Humidity from '../Details/Humidity'
import WindSpeed from '../Details/WindSpeed'
import Aqi from '../Details/Aqi'
import Pressure from '../Details/Pressure'


function WeatherDetails({humidity,pressure,windSpeed}) {
  return (
    // <div className='p-4 mr-4 h-32 w-3/5 border-2 border-black'>
    //     <div className=' flex justify-around    '> 
    //         <Aqi/>
    //         <Humidity humidity ={humidity}/>
    //     </div>
    //    <div className=' flex justify-around ' >
    //     <WindSpeed windSpeed ={windSpeed}/>
    //     <Pressure pressure={pressure}/>
    //    </div>
        
    // </div>
    <div className='p-4 mr-4 h-64 w-4/5 bg-white border-2 border-gray-300 rounded-lg shadow-md'>
    <div className='flex justify-around items-center'>
        <Aqi />
        <Humidity humidity={humidity} />
    </div>
    <div className='flex justify-around items-center mt-5'>
        <WindSpeed windSpeed={windSpeed} />
        <Pressure pressure={pressure} />
    </div>
</div>

  )
}

export default WeatherDetails