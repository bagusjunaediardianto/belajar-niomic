function balikKata(x){
    var str = x.split("")
    var y = ""
    for(var i = str.length-1; i >= 0; i--){
        y+= str[i]
        
    }
    return y
}

console.log(balikKata("Niomic!"))
console.log(balikKata("Javascript"))
console.log(balikKata("alohahola"))
console.log(balikKata("Jawa_Barat"))












