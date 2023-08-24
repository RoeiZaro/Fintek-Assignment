const axios = require('axios');
const API_URL = process.env.API_URL || "http://api.weatherapi.com/v1/current.json?key=90e9aa3641dd4b31a09190503231208&q=";

exports.getWeatherData = (req, res) => {
    const cityNameFormatted = req.body.city.replaceAll(" ", "-");
    const apiUrl = `${API_URL}${cityNameFormatted}&aqi=no`;

    axios.get(apiUrl)
        .then(result => {
            const { data } = result;

            const weatherDataForClient = {
                city: data.location.name,
                country: data.location.country,
                temp: data.current.temp_c,
                precip: data.current.precip_mm,
                humidity: data.current.humidity,
                windSpeed: data.current.wind_kph,
            };

            res.status(200).send({ status: 200, weatherDataForClient });
        })
        .catch(err => {
            err.code ==="ERR_BAD_REQUEST"?
            res.status(400).send({ status: 400, message: "city not found" }):
                res.status(500).send(err);
        });
};
