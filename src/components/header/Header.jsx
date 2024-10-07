import React from 'react'

  function Header() {
    return (
      // <div  className='flex justify-between items-center p-4 bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg'>
      //   <img src="logo.svg"  className='h-16 w-16'  />
      //   <h1 className='text-center flex-grow text-4xl font-bold text-white mt-2'>
      //     Mausam ki Khabar
      //   </h1>
      // </div>

      <div className='flex justify-between items-center p-4 bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg'>
    <img src="logo.svg" className='h-16 w-16 rounded-full border-2 border-gray-600 shadow-md' alt="Logo" />
    <h1 className='flex-grow text-center text-4xl font-bold text-white mt-2'>
        Mausam ki Khabar
    </h1>
</div>

    )
  }

export default Header