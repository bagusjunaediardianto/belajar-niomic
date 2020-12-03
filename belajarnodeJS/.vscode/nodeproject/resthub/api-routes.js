// initialize express router
let router = require("express").Router();

// set default API response
router.get("/", (req, res) => {
  res.json({
    status: "API Its Working",
    message: "Welcome To RestHub Crafted !",
  });
});

// import contactController
var contactController = require("./contactController");

// contactroutes
router
  .route("/contact")
  .get(contactController.index)
  .post(contactController.new);

router
  .route("/contact/:contact_id")
  .get(contactController.view)
  .patch(contactController.update)
  .put(contactController.update)
  .delete(contactController.delete);

// exports API
module.exports = router;
