const express = require("express");
const router = express.Router();

const {getWeatherData}  = require("./controller");

router.post("/getWeather", getWeatherData);


module.exports = router;
