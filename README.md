
# Weather application

simple weather information app for showing basic MERN stack capabilities, as a assignment from Fintek.


## Authors

- [@Roei Zaro](https://github.com/RoeiZaro)


## Project Comments

* Best to run this app on google chrome.
* The input is a bit forgiving, but still write the full name to get the right place.
* The project is responsive and will change his appearance when the width of the screen is less then 680px and look best at width higher the 320px
* From the nature of google chrome the pressing the enter key when the focus is on the submit button will trigger a request but will not show it in the UI unlike when using the space bar (space-bar and enter register diffrently but do pretty much the same)




## Environment Variables

To run this project, you will need to create and add the following environment variables to your .env files

1. back folder .env:

`PORT`
`API_URL`

where the first one in the desired port for the server and the later had to be: "http://api.weatherapi.com/v1/current.json?key={your-key}q="

and you can use this given key 90e9aa3641dd4b31a09190503231208 

`http://api.weatherapi.com/v1/current.json?key=90e9aa3641dd4b31a09190503231208&q=` for convenience


2. weather-app folder .env

`VITE_API_KEY` = `"http://localhost:{PORT}/getWeather"`

where {PORT} needs to be replaced with the port selected in the .env file in the back folder.






## Deployment

To deploy this project after adding the .env files run both of the front and back folders:


1. the backend (back folder):

go to the folder route and run the following commands:
```bash
  npm i
```

```bash
  npm start
```

now the server will run, if you wish to run with nodemon you use
```bash
  npm run dev
```
instead but make sure you have installed nodemon globally or add it to this project.



2. the frontend (Weather-app folder):

go to the folder route in another terminal and run:
```bash
  npm i
```
```bash
  npm run dev
```

now the app will run on the port showed in the terminal via vite and you can start using the app in local enviroment.




## Tech and library used

**Client:** React, CSS, Google Font API, Axios

**Server:** Node, Express, Cors, Dotenv, Axios

