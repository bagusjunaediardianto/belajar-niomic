var nestedObject = ()=> {
    var mahasiswa = {
        nama : "ilham",
        ipk  : {
            semester1 : 3.5,
            semester2 : 3.75,
            semester3 : 3.4,
            semester4 : 4
        }
    }
    console.log(mahasiswa.nama+" "+mahasiswa.ipk.semester2)
    

}

nestedObject()