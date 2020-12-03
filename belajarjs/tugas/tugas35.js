var deretAngka = (x)=> {
    var data = ""
    for(var i = 1; i <= x; i++){
        if(i%3 === 0 && i%5===0) data+= "NIOMIC " 
        else if(i%3 === 0) data+= "NIO "
        else if(i%5 === 0) data+= "MIC "
        else data+= i+" "
    }

    return data
}

console.log(deretAngka(10))
console.log(deretAngka(30))
console.log(deretAngka(50))

