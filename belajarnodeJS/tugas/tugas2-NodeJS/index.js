// import express
let express = require("express");

// import mongoose
let mongoose = require("mongoose");

// import body-parser
let bodyParser = require("body-parser");

// inisialisasi app
let app = express();

// import route
let apiRoutes = require("./api-routes");

// configure body parser
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// connect mongoose and set connection variable
mongoose.connect("mongodb://localhost/tugas2-NodeJS", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// setup db
var db = mongoose.connection;

app.use(bodyParser.json());

// setup server PORT
var port = process.env.PORT || 8080;

// send message for default
app.get("/", (req, res) => {
  res.send("Welcome to DB Integration");
});

// app api-routes
app.use("/api", apiRoutes);

// launch app to listen specified port
app.listen(port, (req, res) => {
  console.log("Running DB Integration on Port : " + port);
});
