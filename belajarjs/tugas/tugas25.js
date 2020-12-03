function sortData(){
    var array1 = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16]
    console.log("Sebelumnya     :",array1.toString())
    console.log();
    array1 = array1.sort()
    console.log("Ascending      :",array1.toString())
    console.log("Descending     :",array1.reverse().toString())
    console.log("Filter > 10    :",array1.filter(data => data > 10).toString())
}

sortData()