var panggilSplice = ()=> {
    var kota = ["jakarta","medan","padang","malang"]
    
    console.log(kota)

    kota.splice(2,0,"palembang")

    console.log(kota)

    kota.splice(3,1)
    
    return kota
    
}

console.log(panggilSplice())