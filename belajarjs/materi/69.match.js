function Match() {
    var isi = "Saya Pintar Memasak Nasi Goreng"

    console.log(isi.match("Pintar"))
    console.log(isi.match("Goreng"))
    console.log(isi.match(/goreng/gi))
}

Match()