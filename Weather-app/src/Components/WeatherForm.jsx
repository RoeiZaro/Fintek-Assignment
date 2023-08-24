import React from 'react'

const text = `
    Use our weather app
    to see the weather
    around the world
  `
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
    <div>
       <pre>{text}</pre>
      
       <form onSubmit={(eve)=>handleSubmit(eve)}>

        <label value=''>City Name:</label>

        <div id="inputConteiner">
          <input id='cityNameInput' type='text' name='cityName' value={"cityName"} onChange={(eve)=>handleChange(eve)} />
          <input id='submit' type='submit' value="Check"/>
        </div>
          
      </form>
    </div>
  )
}

export default WeatherForm