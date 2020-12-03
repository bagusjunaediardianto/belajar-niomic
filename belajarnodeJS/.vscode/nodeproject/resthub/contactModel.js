// contactModel.js
var mongoose = require("mongoose");

//setup db schema
var contactSchema = mongoose.Schema({
  nama: {
    type: String,
    required: true,
  },
  gender: String,
  email: {
    type: String,
    required: true,
  },
  phone: String,
  create_date: {
    type: Date,
    default: Date.now,
  },
});

// export contactModel
var Contact = (module.exports = mongoose.model("contact", contactSchema));
module.exports.get = (callback, limit) => {
  Contact.find(callback).limit(limit);
};
