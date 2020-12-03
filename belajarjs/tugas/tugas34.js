 var deretAngka = (x)=> {
    var data = ""
    for (var i = 1; i <= x; i++){
        if(i%3 === 0){
            data+= "NIO "
        }else{
            data+= i+" "
        }
    }
    return data

 }

 console.log(deretAngka(10))
 
