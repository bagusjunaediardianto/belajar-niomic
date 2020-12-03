// siswaModel.js
var mongoose = require("mongoose");

// setup schema
var siswaSchema = mongoose.Schema({
  create_date: {
    type: Date,
    default: Date.now,
  },
  nama: {
    type: String,
    required: true,
  },
  tanggalLahir: String,
  gender: String,
  hobi: String,
});

// export siswa model
var Siswa = (module.exports = mongoose.model("siswa", siswaSchema));
module.exports.get = (callback, limit) => {
  Siswa.find(callback).limit(limit);
};
