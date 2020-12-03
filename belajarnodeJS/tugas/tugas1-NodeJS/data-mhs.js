// initialize router express
let router = require("express").Router();

// set default API response
router.get("/", (req, res) => {
  res.json({
    mhs: [
      {
        nama: "Richard Muhammad",
        tanggalLahir: "14 Januari 1994",
        gender: "Laki - laki",
        hobi: "membaca buku",
      },
      {
        nama: "Bagus Junaedi Ardianto",
        tanggalLahir: "29 Juni 1993",
        gender: "Laki - laki",
        hobi: "olahraga",
      },
    ],
  });
});

module.exports = router;
