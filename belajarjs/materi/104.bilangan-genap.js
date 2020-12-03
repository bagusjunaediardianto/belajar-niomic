function panggilBilanganGenap(x){
    for (var i = 1; i < 10; i++){
        if (i%2 === 0) {
            x.push(i)
        }
    }
    return x
}

console.log(panggilBilanganGenap([]))
