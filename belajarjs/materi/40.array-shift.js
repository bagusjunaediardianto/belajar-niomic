var panggilShift = ()=> {
    var kota = ["jakarta","bandung","malang","surabaya","makasar"]

    console.log(kota)
    console.log("++++++++++++++++++++++++")
    
    var kota2 = kota.shift()
    console.log(kota2)
    
    var kota3 = kota.shift()
    console.log(kota3)
    
    // kota = kota.shift()

    return kota

}

console.log(panggilShift())
