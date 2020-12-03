var panggilFilterParameter = (x)=> {
    var data = [
        {negara : "Indonesia", benua : "Asia"},
        {negara : "Jerman", benua : "Eropa"},
        {negara : "Spanyol", benua : "Eropa"},
        {negara : "Korea", benua : "Asia"},
        {negara : "Portugal", benua : "Eropa"},
        {negara : "Amerika Serikat", benua : "Amerika"}
    ]
    
    var a = data.filter((elemen) => {
         return elemen.benua === x
    })

    console.log(a)
    
}


panggilFilterParameter("Asia")
panggilFilterParameter("Eropa")
