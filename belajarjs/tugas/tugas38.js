function panggilRegex(x,y){
    return x.match(y)
}

let str = "abcdefghijklmnopqrstuvwxyz-ABCDEFGHIJKLMNOPQRSTUVWXYZ"

console.log(panggilRegex(str,/[c,C]/g))
console.log(panggilRegex(str,/[k,K]/g))
console.log(panggilRegex(str,/[l,L]/g))
