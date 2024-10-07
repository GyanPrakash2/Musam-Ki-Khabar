import { Button } from '@mui/material'
import React, { useState } from 'react'
import Weather from '../weather/Weather'

function Search({setData}) {
    //
    const [location,setLocation]= useState("")
    const handleChange = (e)=>{
        setLocation(e.target.value)
        // console.log(e.target.value)
    }
    //First Letter capital
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
    }
    const fetchApi= async (searchLocation)=>{
        try{
            const api= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchLocation}&appid=c19eb713cbd6e3064e93bd9cdcdb80f9&units=metric`)
             const data= await api.json()
             console.log(data);
             // setValue(capitalizeFirstLetter(location))
             // setTemp(data.main.temp)
             // setHumid(data.main.humidity)
             setData(data)
         }
         catch(e){
             console.log(e);
             
         }
    }
    // Fetch Noida's weather on initial render
    React.useEffect(() => {
        fetchApi("Noida"); // Fetch Noida's weather as default on component load
    }, []); // Empty dependency array to run only once when the component loads

    const handleSearch = (e)=>{

        e.preventDefault()
        const searchLocation = location.trim() || 'Noida';
        fetchApi(searchLocation)
        setLocation("")
       
    }
  return (
    // <div>
    //     <div className='flex justify-center items-center'>
    //         <form action="" onSubmit={handleSearch}>
    //         <input type="text" placeholder='Location ' value={location} onChange={handleChange}
    //         className='border-2 border-violet-400 m-2'/>
            

    //         <Button type='submit'>Search</Button>
    //         </form>
    //     </div>
        
        
        
    // </div>

    <div className="flex justify-center items-center my-4 bg-gray-100 p-4 rounded-lg shadow-md">
    <form action="" onSubmit={handleSearch} className="flex items-center space-x-2">
        <input
            type="text"
            placeholder="Enter Location"
            value={location}
            onChange={handleChange}
            className="border-2 border-blue-600 rounded-lg p-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
        />
        <Button
            type="submit"
            className="bg-green-600 text-white rounded-lg px-4 py-2 hover:bg-blue-300 transition duration-200"
        >
            Search
        </Button>
    </form>
</div>



    

  )
}

export default Search