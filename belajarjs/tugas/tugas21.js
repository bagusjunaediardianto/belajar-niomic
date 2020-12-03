function replaceData(x,y,z){
    console.log("Before : "+x)
    return "After  : "+x.replace(y,z)
}

var kalimat = "Saya belajar masak nasi goreng"

console.log(replaceData(kalimat,"masak","makan"))
