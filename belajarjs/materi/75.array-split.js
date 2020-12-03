function panggilSplit(x,y) {
    console.log(typeof x)
    console.log(x)
    console.log()

    var result = x.split(y)
    console.log(typeof result)
    return result
}

var kalimat = "kita sedang belajar js"

console.log(panggilSplit(kalimat," "))
