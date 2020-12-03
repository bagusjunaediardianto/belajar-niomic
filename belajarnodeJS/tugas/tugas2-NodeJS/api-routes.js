// inisialisasi express router
let router = require("express").Router();

// set default API response
router.get("/", (req, res) => {
  res.json({
    status: "Sukses Terhubung",
    message: "DB Integration - running in engine",
  });
});

// import siswaController
var siswaController = require("./siswaController");

// siswa routes
router.route("/datasiswa").get(siswaController.index).post(siswaController.new);
router
  .route("/datasiswa/:siswa_id")
  .get(siswaController.view)
  .patch(siswaController.update)
  .put(siswaController.update)
  .delete(siswaController.delete);

module.exports = router;
