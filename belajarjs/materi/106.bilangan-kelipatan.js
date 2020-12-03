function panggilBilanganKelipatan (x){
    for (var i = 1; i < 50; i++){
        if(i%5 === 0){
            x += i+" "
        }
    }

    return x
}

console.log(panggilBilanganKelipatan([]))
