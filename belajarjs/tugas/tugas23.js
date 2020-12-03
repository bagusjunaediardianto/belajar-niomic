function filterAngka(x){
    return x >= 15
}

var data = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66]

console.log("cara 1 : ",
    data.filter(filterData=>filterData >= 15)
    )
console.log()

console.log("cara 2 : ",
    data.filter(filterAngka)
)

