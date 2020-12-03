// itemController.js

// import item model
Item = require("./itemModel");

// handle index action
exports.index = function (req, res) {
  Item.get((err, items) => {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "Items retrieved succesfully",
      data: items,
    });
  });
};

// handle create item actions
exports.new = function (req, res) {
  var item = new Item();
  item.code = req.body.code ? req.body.code : item.code;
  item.uom = req.body.uom;
  item.name = req.body.name;

  //   save the item and check for errors
  // if (err)

  // res.json(err)
  res.json({
    message: "New Item Created !",
    data: item,
  });
};

// handle view list item info
exports.view = function (req, res) {
  Item.findById(req.params.item_id, (err, item) => {
    if (err) res.send(err);
    res.json({
      message: "Item details loading ..",
      data: item,
    });
  });
};

// handle update item info
exports.update = function (req, res) {
  Item.findById(req.params.item_id, (err, item) => {
    if (err) res.send(err);
    item.code = req.body.code ? req.body.code : item.code;
    item.uom = req.body.uom;
    item.name = req.body.name;

    // save the item and check for errors
    item.save((err) => {
      if (err) res.json(err);
      res.json({
        message: "Item Info updated",
        data: item,
      });
    });
  });
};

// handle delete item
exports.delete = function (req, res) {
  Item.remove(
    {
      _id: req.params.item_id,
    },
    (err, item) => {
      if (err) res.send(err);

      res.json({
        status: "success",
        message: "Item deleted",
      });
    }
  );
};
