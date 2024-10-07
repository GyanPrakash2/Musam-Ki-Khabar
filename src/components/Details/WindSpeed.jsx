import React from 'react'

function WindSpeed({windSpeed}) {
  return (
    // <div className='w-10 h-10 border-black border-2'>{windSpeed}</div>

    <div className="flex flex-col items-center justify-center w-24 h-24 bg-blue-500 text-white border-2 border-gray-300 rounded-lg shadow-md p-4">
    <h3 className="text-sm font-medium mb-1">WindSpeed</h3>
    <h1 className="text-2xl font-bold">{windSpeed}%</h1>
</div>
  )
}

export default WindSpeed