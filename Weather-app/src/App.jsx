import { useState } from 'react'
import WeatherForm from './Components/WeatherForm'
import WeatherPopup from './Components/WeatherPopup'
import './App.css'

function App() {
  const [cityName, setCityName] = useState("")

  return (
    <div id='app-conteiner'>
      <WeatherForm cityName={cityName} setCityName={setCityName}/>
      <WeatherPopup />
    </div>
  )
}

export default App
