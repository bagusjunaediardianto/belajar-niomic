// siswaController.js
// import siswaModel.js
let Siswa = require("./siswaModel");

// handle index action
exports.index = (req, res) => {
  Siswa.get((err, siswa) => {
    res.json({
      status: "success",
      message: "data siswa berhasil diakses",
      data: siswa,
    });
  });
};

// handle create data siswa
exports.new = (req, res) => {
  var siswa = new Siswa();
  siswa.nama = req.body.nama ? req.body.nama : siswa.nama;
  siswa.tanggalLahir = req.body.tanggalLahir;
  siswa.gender = req.body.gender;
  siswa.hobi = req.body.hobi;

  //   simpan data siswa
  siswa.save((err) => {
    // if err
    if (err) res.send(err);
    res.json({
      message: "data siswa berhasil diunggah",
      data: siswa,
    });
  });
};

// handle view info
exports.view = (req, res) => {
  Siswa.findById(req.params.siswa_id, (err, siswa) => {
    if (err) {
      res.send(err);
    }
    res.json({
      message: "Menunggu data siswa ditampilkan",
      data: siswa,
    });
  });
};

// handle update data sisw
exports.update = (req, res) => {
  Siswa.findById(req.params.siswa_id, (err, siswa) => {
    if (err) res.send(err);
    siswa.nama = req.body.nama ? req.body.nama : siswa.nama;
    siswa.tanggalLahir = req.body.tanggalLahir;
    siswa.gender = req.body.gender;
    siswa.hobi = req.body.hobi;

    // update data siswa
    siswa.save((err) => {
      if (err) res.json(err);
      res.json({
        message: "data siswa berhasil di update",
        data: siswa,
      });
    });
  });
};

// handle data delete siswa
exports.delete = (req, res) => {
  Siswa.remove(
    {
      _id: req.params.siswa_id,
    },
    (err, siswa) => {
      if (err) res.send(err);
      res.json({
        status: "success",
        message: "data siswa berhasil terhapus",
      });
    }
  );
};
