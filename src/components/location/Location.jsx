import React from 'react'

function Location({location}) {
  return (
    // <div className='h-10 w-20 border-2 border-black'>
    //     <h1 className='p-1'>{location}</h1>
    // </div>

    <div className='h-14 w-28 border-2 border-gray-300 bg-blue-500 text-white rounded-lg shadow-md flex items-center justify-center'>
    <h1 className='text-sm font-semibold'>{location}</h1>
</div>
  )
}

export default Location