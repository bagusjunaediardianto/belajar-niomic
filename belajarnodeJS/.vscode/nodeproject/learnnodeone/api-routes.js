// initialize express router
let router = require("express").Router();

// set default API response
router.get("/", (req, res) => {
  res.json({
    status: "API Its Working",
    message: "Welcome to Dom Ops V1.1",
  });
});

// exports API
module.exports = router;
