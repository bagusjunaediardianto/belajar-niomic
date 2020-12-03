// initilize express router
let router = require("express").Router();

// set default API response
router.get("/", (req, res) => {
  res.json({
    status: "API Its Working",
    message: "Selamat datang di data center Siswa Indonesia",
  });
});

module.exports = router;
