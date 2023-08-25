require("dotenv").config();
const axios = require("axios");
const API_URL = process.env.API_URL;

exports.getWeatherData = (req, res) => {
  // taking the city from the request and modifying for the param in the WeatherAPI request
  const cityNameFormatted = req.body.city.replaceAll(" ", "-");
  // using a variable for combining the string
  const apiUrl = `${API_URL}${cityNameFormatted}&aqi=no`;

  // sending the request (NOTE: had problems with try catch so went for the recommended way by the documantation)
  axios
    .get(apiUrl)
    .then((result) => {
      const { data } = result;

      const weatherDataForClient = {
        city: data.location.name,
        country: data.location.country,
        temp: data.current.temp_c,
        precip: data.current.precip_mm,
        humidity: data.current.humidity,
        windSpeed: data.current.wind_kph,
      };
      //sending the data
      res.status(200).send({ status: 200, weatherDataForClient });
    })
    .catch((err) => {
      // check the type of of error and send the adequate respond
      err.code === "ERR_BAD_REQUEST"
        ? res.status(400).send({ status: 400, message: "city not found" })
        : res.status(500).send(err);
    });
};
