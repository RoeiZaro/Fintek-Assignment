const PORT = process.env.PORT || 3100;

const express = require('express')
const app = express()
const http = require("http").Server(app);
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
const weather = require("./route");


app.use('/', weather)

http.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
  












// vanilla way
// const http = require("http")

// const PORT = process.env.PORT || 3100;

// const server = http.createServer((req,res)=>{
//     console.log(req.url,req.method);
// })

// server.listen(PORT, ()=>console.log(`server running on port ${PORT}`));