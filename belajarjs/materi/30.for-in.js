var panggilObject = ()=> {

    var mahasiswa = {
        nama : "Adi",
        umur : 23,
        jurusan : "Teknik Informatika",
        semester : 7
    }
    for (var x in mahasiswa){
        console.log(mahasiswa[x])
    }
}

panggilObject()