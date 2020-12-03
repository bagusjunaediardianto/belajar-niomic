var bilanganGanjil = (x)=> {
    for(var i = 0 ; i < 10; i++){
        if(i%2 !==0){
            x.push(i)
        }
    }
    return x
}

console.log(bilanganGanjil([]))