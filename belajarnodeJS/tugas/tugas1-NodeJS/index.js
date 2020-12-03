// import express
let express = require("express");

// import routes
let apiHome = require("./home");
let apiMhs = require("./data-mhs");

// initialize app
let app = express();

// setup server Port
var port = process.env.PORT || 8080;

// send message for default API
app.get("/", (req, res) => res.send("Welcome To Dom Ops V1.1"));

// app api-routes
app.use("/home", apiHome);
app.use("/data-mhs", apiMhs);

// launch app to listen specified port
app.listen(port, () => {
  console.log("Running Dom Ops V 1.1 On Port : " + port);
});
