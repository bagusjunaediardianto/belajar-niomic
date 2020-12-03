var panggilNestedArray = (x)=> {
    var data = []
    for (var i = 0; i < x.length+1; i++){
        data.push([x[0][i]].concat([x[1][i]]).concat([x[2][i]]))
    }

    return data
}

var arraydata = [
    [1,2,3],
    ["Mark Zuckerberg","Elon Musk","Bill Gates"],
    ["Facebook","Tesla","Microsoft"]
]
console.log(panggilNestedArray(arraydata))

