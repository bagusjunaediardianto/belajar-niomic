function balikKata(x){
    var temp = ""
    for(var i = x.length-1; i >= 0; i--){
        temp+= x[i]
    }
    return temp
}


console.log(balikKata("Niomic!"))
console.log(balikKata("Javascript"))
console.log(balikKata("alohahola"))
console.log(balikKata("Jawa_Barat"))


