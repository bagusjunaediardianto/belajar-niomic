// import express
let express = require("express");

// import body parser
let bodyParser = require("body-parser");

// import mongoose
let mongoose = require("mongoose");

// initialize app
let app = express();

// import routes
let apiRoutes = require("./api-routes");

// configuration body parse
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

var db = mongoose.connection;

app.use(bodyParser.json());
// setup server PORT
var port = process.env.PORT || 8080;

// send message for default
app.get("/", (req, res) => res.send("Welcome To Dom Ops V1.1 and nodemon"));

// app api-routes
app.use("/api", apiRoutes);

// launch app to listen specified port
app.listen(port, (req, res) => {
  console.log("Running Dom Ops On Port " + port);
});
