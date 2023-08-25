import React, { useState } from 'react'
import './WeatherPopup.css'
import axios from 'axios';

// opening message text
const text = 'Use our weather app\nto see the weather\naround the world'

function WeatherForm({setWeatherData}) {
  const [cityName,setCityName] = useState("");
  const [existCityData,setExistCityData] = useState("");

  const getWeatherData = async () => {
    console.log(cityName);
    console.log(existCityData);
    try {
      const response = await axios.post('http://localhost:3100/getWeather', { city: cityName });
      setExistCityData(prev=>cityName);
      setWeatherData(prev=>response.data.weatherDataForClient);
    } catch (err) {
      alert(err.message);
      if(err.message === "Request failed with status code 400"){
        setWeatherData(prev=>{});
        setExistCityData(prev=>"");
      }
      console.error('There was a problem with the request:', err);
    }
  };


  // form handling
  const handleChange = (eve) =>{
    setCityName(eve.target.value);
  }


  const handleSubmit = (eve) => {
    eve.preventDefault();

    //send API request and save the data if doe
    if(existCityData !== cityName)getWeatherData(cityName); 
  }



    return (
    <div id='form-conteiner'>
        {/* opening massage */}
       <pre>{text}</pre>
      
       {/* the form */}
       <form onSubmit={(eve)=>handleSubmit(eve)}>

        <label value=''>City Name:</label>

        {/* the input and the submit area */}
        <div id="inputConteiner">
          <input 
            id='cityNameInput' 
            type='text' 
            name='cityName' 
            maxLength={25}
            value={cityName} 
            onChange={(eve)=>handleChange(eve)} 
          /> 

          <input 
            id={cityName&&'able-button'}
            className='submit'
            type='submit' 
            value="Check"
            disabled={!cityName}
            />
        </div>
          
      </form>
    </div>
  )
}

export default WeatherForm