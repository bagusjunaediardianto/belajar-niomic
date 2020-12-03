// initialize express Router
let router = require("express").Router();

// set default API response
router.get("/", (req, res) => {
  res.json({
    status: "API Its Working",
    message: "Dom Ops V 1.1 - running in engine",
  });
});

// import item controller
var itemController = require("./itemController");
// Item routes
router.route("/items").get(itemController.index).post(itemController.new);
router
  .route("/items/:item_id")
  .get(itemController.view)
  .patch(itemController.update)
  .put(itemController.update)
  .delete(itemController.delete);

// exports API
module.exports = router;
