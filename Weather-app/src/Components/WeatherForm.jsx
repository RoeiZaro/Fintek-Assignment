import React, { useState } from "react";
import "./WeatherPopup.css";
import axios from "axios";

// opening message text
const text = "Use our weather app\nto see the weather\naround the world";

function WeatherForm({ setWeatherData }) {
  //input state
  const [cityName, setCityName] = useState("");
  //saving the string that sent to the API request
  const [existCityData, setExistCityData] = useState("");

  // api url
  const apiKey = import.meta.env.VITE_API_KEY;

  // function that make the API request and set the weather data
  const getWeatherData = async () => {
    try {
      // the request
      const response = await axios.post(apiKey, { city: cityName });

      // successfull fetching of data (saving in the states)
      setExistCityData((prev) => cityName);
      setWeatherData((prev) => response.data.weatherDataForClient);
    } catch (err) {
      console.log(err);
      // error caused by invalid data
      if (err.message === "Request failed with status code 400") {
        // cleaning the weather data
        setWeatherData((prev) => {});
        setExistCityData((prev) => "");
        // alerting bad city name
        alert("City name was invalid, try modifiying the input.");
      } else {
        // alerting error from diffrent cause
        alert(
          "Error connecting to the server, check your connection and try again."
        );
      }
      // logging the full error in the console
      console.error("There was a problem with the request:", err);
    }
  };

  // form handling
  const handleChange = (eve) => {
    setCityName(eve.target.value);
  };
  // from handling
  const handleSubmit = (eve) => {
    eve.preventDefault();

    //send API request and save the data if the input diffrent from the previous one
    if (existCityData !== cityName) getWeatherData(cityName);
  };

  return (
    <div id="form-conteiner">
      {/* opening massage */}
      <pre>{text}</pre>

      {/* the form */}
      <form onSubmit={(eve) => handleSubmit(eve)}>
        <label value="">City Name:</label>

        {/* the input and the submit area */}
        <div id="inputConteiner">
          <input
            id="cityNameInput"
            type="text"
            name="cityName"
            maxLength={25}
            value={cityName}
            onChange={(eve) => handleChange(eve)}
          />

          <input
            id={cityName && "able-button"}
            className="submit"
            type="submit"
            value="Check"
            disabled={!cityName}
          />
        </div>
      </form>
    </div>
  );
}

export default WeatherForm;
