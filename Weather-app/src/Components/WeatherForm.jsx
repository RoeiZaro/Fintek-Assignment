import React, { useState } from 'react'
import './WeatherPopup.css'
import axios from 'axios';

// opening message text
const text = `
    Use our weather app
    to see the weather
    around the world
  `

function WeatherForm({setWeatherData}) {
    const [cityName,setCityName] = useState("");

  const getWeatherData = async () => {
    try {
      const response = await axios.post('http://localhost:3100/getWeather', { city });
      console.log(response)
    } catch (err) {
      console.error('There was a problem with the request:', err);
    }
  };
  // form handling
  const handleChange = (eve) =>{
    setCityName(eve.target.value)
  }


  const handleSubmit = (eve) => {
    eve.preventDefault()
    //send API request and  w8 for response, then show to weather
    getWeatherData(cityName)
      .then(response => {console.log(response);})
      .catch(err =>{console.log(err);})
    
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