import { useState } from 'react'
import WeatherForm from './Components/WeatherForm'
import WeatherPopup from './Components/WeatherPopup'
import './App.css'

function App() {
  const [weatherData, setWeatherData] = useState("")
  
  return (
    <div id='app-conteiner'>
      <WeatherForm  setWeatherData={setWeatherData}/>
      <WeatherPopup  weatherData={weatherData}/>
    </div>
  )
}

export default App
