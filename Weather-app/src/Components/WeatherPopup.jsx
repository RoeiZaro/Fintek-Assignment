import React from 'react'
import './WeatherForm.css'

// NOTE: add actual data from api 
function WeatherPopup() {
  return (
    <div id='popup-conteiner'>
         <div id='popup'>
          <div id='location-section'>
            <p>Tel Aviv</p>
            <p>Israel</p>
          </div>

          <div id='temperature-section'>
            <p>18*</p>
          </div>

          <div id='bottom-info'>
            <div>
              <p>Precipitation</p>
              <p>0 mm</p>
            </div>
            <div>
              <p>Humidity</p>
              <p>53%</p>
            </div>
            <div>
              <p>Wind</p>
              <p>23 km/h</p>
            </div>
        </div>

        </div>

    </div>
  )
}

export default WeatherPopup