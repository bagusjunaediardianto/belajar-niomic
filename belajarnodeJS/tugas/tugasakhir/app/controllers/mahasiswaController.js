// mahasiswaController.js

// model instances
let Mahasiswa = require("../models/mahasiswaModel");

// handle index action
exports.index = function (req, res) {
  Mahasiswa.find(function (err, datamhs) {
    if (err) res.send(err);
    else
      res.json({
        message: "data mahasiswa berhasil ditampilkan",
        data: datamhs,
      });
  });
};

exports.new = (req, res) => {
  var mahasiswa = new Mahasiswa();
  mahasiswa.nim = req.body.nim ? req.body.nim : mahasiswa.nim;
  mahasiswa.nama = req.body.nama;
  mahasiswa.jurusan = req.body.jurusan;
  mahasiswa.semester = req.body.semester;

  mahasiswa.save(function (err) {
    if (err) res.send(err);
    else
      res.json({
        message: "data mahasiswa berhasil di tambahkan",
      });
  });
};

// handle view untuk data mahasiswa berdasarkan nim
exports.view = function (req, res) {
  Mahasiswa.findOne(
    {
      nim: req.params.nim,
    },
    function (err, datamhs) {
      if (err) res.send(err);
      else res.json(datamhs);
    }
  );
};

// handle get data user by NIM
exports.update = function (req, res) {
  Mahasiswa.findOne(
    {
      nim: req.params.nim,
    },
    function (err, datamhs) {
      if (err) res.send(err);
      else {
        datamhs.nim = req.body.nim;
        datamhs.nama = req.body.nama;
        datamhs.jurusan = req.body.jurusan;
        datamhs.semester = req.body.semester;

        datamhs.save(function (err) {
          if (err) res.send(err);
          else
            res.json({
              message: "data mahasiswa berhasil di update",
            });
        });
      }
    }
  );
};

exports.delete = function (req, res) {
  Mahasiswa.remove(
    {
      nim: req.params.nim,
    },
    function (err, datamhs) {
      if (err) res.send(err);
      else
        res.json({
          message: "data mahasiswa berhasil terhapus",
        });
    }
  );
};
