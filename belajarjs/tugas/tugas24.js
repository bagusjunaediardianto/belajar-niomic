function sortData(){
    var data = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66]
    console.log("Before     : ",data.toString())
    
    data = data.sort()
    console.log("Ascending  : ",data.toString())
    console.log("Descending : ",data.reverse().toString())
}

sortData()


