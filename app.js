const express = require("express");
const morgan = require("morgan");

const carsRouter = require("./routes/cars_routes/carRoutes");

const app = express();

// use morgan during development
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//use express json formatter middleware
app.use(express.json());

app.use("/api/v1/cars", carsRouter);
app.all("*", (req, res, next) => {
  next(new Error(`Can't find ${req.originalUrl} on the server`, 404));
});

// catch all the pages that are not available
// app.all('*', (req, res, next) => {

// })

module.exports = app;
