function panggilRegex(x,y){
    let str = new RegExp(y)

    return str.exec(x)
}

let data = "Belajar menimba ilmu programming bersama Niomic"

console.log(panggilRegex(data,"bersama"))
