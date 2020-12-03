// index.js

let express = require("express"),
  app = express(),
  bodyParser = require("body-parser");

let apiRoutes = require("./app/api/api-routes");

// config body-parser
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/mahasiswa", {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var port = 8080;
app.use("/api", apiRoutes);

app.listen(port);
console.log("services started at port  : " + port);
