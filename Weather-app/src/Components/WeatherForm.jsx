import React from 'react'
import './WeatherPopup.css'

// opening message text
const text = `
    Use our weather app
    to see the weather
    around the world
  `
// form handling
  const handleChange = (eve) =>{
    setCityName(eve.target.value)
}

const handleSubmit = (eve) => {
  eve.preventDefault()
  //send API request and  w8 for response, then show to weather
  console.log(cityName);
}

function WeatherForm() {
  return (
    <div id='form-conteiner'>
        {/* opening massage */}
       <pre>{text}</pre>
      
       {/* the form */}
       <form onSubmit={(eve)=>handleSubmit(eve)}>

        <label value=''>City Name:</label>

        {/* the input and the submit area */}
        <div id="inputConteiner">
          <input id='cityNameInput' type='text' name='cityName' value={"cityName"} onChange={(eve)=>handleChange(eve)} />
          <input id='submit' type='submit' value="Check"/>
        </div>
          
      </form>
    </div>
  )
}

export default WeatherForm