var panggilNestedArray = (x)=> {
    for (var i = 0; i < x.length ; i++){
        console.log("ID      :",x[i][0])
        console.log("name    :",x[i][1])
        console.log("company :",x[i][2])
    }
    
}

var data = [
    [1,"Mark Zuckerberg","Facebook"],
    [2,"Elon Musk","Tesla"],
    [3, "Bill gates","Microsoft"],
    [4,"Steve Jobs","Apple"]
]

panggilNestedArray(data)