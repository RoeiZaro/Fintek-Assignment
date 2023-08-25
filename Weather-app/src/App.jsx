import { useState } from "react";
import WeatherForm from "./Components/WeatherForm";
import WeatherPopup from "./Components/WeatherPopup";
import "./App.css";

function App() {
  // weather information state
  const [weatherData, setWeatherData] = useState("");

  return (
    <div id="app-conteiner">
      {/* text+input+submit botton */}
      <WeatherForm setWeatherData={setWeatherData} />

      {/* the weather popup that appear after getting the weather data */}
      <WeatherPopup weatherData={weatherData} />
    </div>
  );
}

export default App;
