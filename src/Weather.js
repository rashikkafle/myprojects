import React, { useEffect, useState } from 'react'
import './App.css';

function Weather() {

    const [weather, setweather]=useState(null);
    const [city, setcity]=useState("");
    
    useEffect(()=>{
        const API_key="0968235ac5a2499d999bac54d3dc2feb"
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`;
        
            
        
        const fetchweather= async()=>{
            if(!city) return;
            try{
                const response = await fetch(url);
                const data= await response.json();
                setweather(data);
            }
            catch(error){
               alert("Error !!!")
            }
            };
        fetchweather();
    },[city]);
  return (
    <>
    <div className='weather'>
        <h1>Weatherapp</h1>
        <input
        type='text'
        placeholder='Enter the city'
        value={city}
        onChange={(e)=>setcity(e.target.value)}
        />
        <div>
            {weather && weather.main?(
                <div>
                    <p> temperature:{weather.main.temp}F</p>
                    <p>Humidity:{weather.main.humidity}</p>
                    <p>Condition:{weather.weather[0].description}</p>
                </div>
            ):city ?(

                <p> Loading...</p>
            ):<p> Type city name only</p>
            
            }
        </div>

    </div>
    </>
  );
}

export default Weather
