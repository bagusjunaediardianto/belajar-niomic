var panggilRegex = (x,y)=> {
    return x.search(y)
}

var data = "abcdefghijklmnopqrstuvwxyz"

console.log("Urutan ke :",(panggilRegex(data,"S".toLowerCase())))
