// import Express
let express = require("express");

// enable all cors
let cors = require("cors");

// import body-parser
let bodyParser = require("body-parser");

// import mongoose
let mongoose = require("mongoose");

// initialize app
let app = express();

// import routes
let apiRoutes = require("./api-routes");

// configuration body parser
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// enable all cors
app.use(cors());

// connect mongoose and set connection variable
mongoose.connect("mongodb://localhost/dom-ops", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// setup db
var db = mongoose.connection;

app.use(bodyParser.json());

// setup server PORT
var port = process.env.PORT || 8080;

// send message for default
app.get("/", function (req, res) {
  res.send("Welcome to Dom OPS V 1.1");
});

// app api-routes
app.use("/api", apiRoutes);

// launch app to listen specified port
app.listen(port, function (req, res) {
  console.log("Running Server Dom Ops On Port : " + port);
});
