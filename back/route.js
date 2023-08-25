const express = require("express");
const router = express.Router();

const { getWeatherData } = require("./controller");

// setting the route as a post method
router.post("/getWeather", getWeatherData);

module.exports = router;
