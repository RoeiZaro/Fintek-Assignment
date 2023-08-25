import React from "react";
import "./WeatherForm.css";

// NOTE: add actual data from api
function WeatherPopup({ weatherData }) {
  return (
    <div id="popup-conteiner">
      {/* show to popup after getting data with id property */}
      {weatherData && (
        <div id="popup">
          {/* place section */}
          <div id="location-section">
            <p>{weatherData?.city}</p>
            <p>{weatherData?.country}</p>
          </div>

          {/* temperature section */}
          <div id="temperature-section">
            <p>{weatherData?.temp}°</p>
          </div>

          {/* bottom data row section */}
          <div id="bottom-info">
            <div>
              <p>Precipitation</p>
              <p>{weatherData?.precip} mm</p>
            </div>
            <div>
              <p>Humidity</p>
              <p>{weatherData?.humidity}%</p>
            </div>
            <div>
              <p>Wind</p>
              <p>{weatherData?.windSpeed} km/h</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WeatherPopup;
