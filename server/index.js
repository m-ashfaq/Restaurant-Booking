const express = require("express");


//initialize app objects
const app = express();

//port for application
const port = 5000;

//add middleqare
app.use(express.json());


// start your server
app.listen(port, () =>
console.log(`Fruit app is Listning at http://localhost:${port}`)
);