import React from 'react'
import Location from '../location/Location'

function Weather({location,temp}) {
  return (
    
    // <div className=' p-4 m-8 w-2/5 h-32 border-2 border-black'>
    //   <Location location={location}/>

    //     <h1> {temp} °C</h1>
    // </div>

    <div className='p-4 m-8 w-2/5 h-64 border-2 border-gray-300 bg-white rounded-lg shadow-lg flex flex-col items-center justify-center'>
    <Location location={location} />
    <h1 className='mt-8 text-2xl font-bold text-gray-800'>{temp}°C</h1>
</div>
  )
}

export default Weather