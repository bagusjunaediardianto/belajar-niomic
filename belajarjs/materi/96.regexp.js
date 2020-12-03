var data = "abcdefghijklmnopqrstuvwxyza"

var panggilRegexp = (x)=> {
    return x.search(/a/ig)
    // ig adalah jenis flags
}

console.log(panggilRegexp(data))
