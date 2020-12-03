function panggilRegex(x){
    let ambildata = x.match(/[e,s]/g)

    return ambildata
}

let str = "Para tetua adat mendiskusikan masalah kejahatan yang terjadi di rumah adat"

console.log(panggilRegex(str))
