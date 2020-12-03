// mahasiswaModel.js

var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

var mahasiswa_schema = new Schema({
  nim: {
    type: String,
    required: true,
    index: {
      unique: true,
    },
  },
  nama: String,
  jurusan: String,
  semester: String,
  create_date: {
    type: Date,
    default: Date.now(),
  },
});

var Mahasiswa = (module.exports = mongoose.model(
  "Mahasiswa",
  mahasiswa_schema
));
module.exports.get = function (callback, limit) {
  Mahasiswa.find(callback).limit(limit);
};
