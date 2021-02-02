const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.connect("mongodb://localhost:27017/Restaurant-Booking", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//importing internal Routes

const internalRouter = require("./Routes/InternalRoutes");
const bookingRouter = require("./Routes/bookingRoutes");
const timingRouter = require("./Routes/timingRoutes");


//initialize app objects
const app = express();

//port for application
const port = 5000;

//add middleqare
app.use(express.json());
app.use(cors());

app.get("/", (request, response) => response.send("Server is Running OK"));

app.use("/internal", internalRouter);
app.use("/booking", bookingRouter);
app.use("/timing", timingRouter);

// start your server
app.listen(port, () =>
console.log(`App is Listning at http://localhost:${port}`)
);