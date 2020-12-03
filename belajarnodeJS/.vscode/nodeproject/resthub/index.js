// file name index.js
// import Express
let express = require("express");

// import body parser
let bodyParser = require("body-parser");

// import mongoose
let mongoose = require("mongoose");

// initialize app
let app = express();

// import Routes
let apiRoutes = require("./api-routes");

// configuration body parser
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// connect mongoose and set connection variable
mongoose.connect("mongodb://localhost/resthub", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var db = mongoose.connection;

app.use(bodyParser.json());

// setup server port
var port = process.env.PORT || 8080;

// send message for default URl
app.get("/", (req, res) => res.send("Hello World With Express + nodemon"));

// app api-routes
app.use("/api", apiRoutes);

// Launch app to listen specified port
app.listen(port, function () {
  console.log("Running Resthub On Port" + port);
});
