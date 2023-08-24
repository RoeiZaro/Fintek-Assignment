import { useState } from 'react'
import WeatherForm from './Components/WeatherForm'
import WeatherPopup from './Components/WeatherPopup'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WeatherForm />
      <WeatherPopup />
    </>
  )
}

export default App
