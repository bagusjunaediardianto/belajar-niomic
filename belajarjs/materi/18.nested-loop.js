for(var i = 0; i < 2; i++){
    console.log("i ke - ",i)
    
    for(var j = 0; j < 3; j++){
        console.log("j ke - ",j)
    
        for(var k = 0; k < 4; k++){
            console.log("k ke - ",k)
            
        }
    }
    console.log("")
    
}

// perulangan bersarang akan mengulang secara bertahap pada sarang yang bukan sarang terakhir
// contoh : 
//     i akan berulang 2 kali
//         j akan berulang 3 kali
//              k akan berulang 4 kali
// maka yang terjadi adalah akan mengeksekusi
// 
//      i ke [0]
//      j ke [0]
//      k ke [0]
//      k ke [1]
//      k ke [2]
//      k ke [3]
//      j ke [1]
//      k ke [0]
//      k ke [1]
//      k ke [2]
//      k ke [3]
//      j ke [2]
//      k ke [0]
//      k ke [1]
//      k ke [2]
//      k ke [3]
// 
//      i ke [1]
//      j ke [0]
//      k ke [0]
//      k ke [1]
//      k ke [2]
//      k ke [3]
//      j ke [1]
//      k ke [0]
//      k ke [1]
//      k ke [2]
//      k ke [3]
//      j ke [2]
//      k ke [0]
//      k ke [1]
//      k ke [2]
//      k ke [3]