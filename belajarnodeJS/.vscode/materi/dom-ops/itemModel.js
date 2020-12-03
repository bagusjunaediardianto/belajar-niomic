// itemModel.js
var mongoose = require("mongoose");

// setup schema
var itemSchema = mongoose.Schema({
  code: {
    type: String,
    required: true,
  },
  uom: String,
  name: String,
});

// export Item Model
var Item = (module.exports = mongoose.model("items", itemSchema));
module.exports.get = (callback, limit) => {
  Item.find(callback).limit(limit);
};
