// initialize express router
let router = require("express").Router();

// set default API response
router.get("/", function (req, res) {
  res.json({
    message: "Services start Engine",
  });
});

var mahasiswaController = require("../controllers/mahasiswaController");

// mahasiswa routes
router
  .route("/mahasiswa")
  .post(mahasiswaController.new)
  .get(mahasiswaController.index);
router
  .route("/mahasiswa/:nim")
  .get(mahasiswaController.view)
  .put(mahasiswaController.update)
  .patch(mahasiswaController.update)
  .delete(mahasiswaController.delete);

module.exports = router;
