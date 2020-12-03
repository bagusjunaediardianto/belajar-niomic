var panggilObject = ()=> {

    var universitas = {
        negeri : {
            jakarta : ["UI","UNJ","UIN JKT","UPN","POL Negeri Jakarta"],
            bandung : ["ITB","UNPAD","UPI","UIN SGD","ISBI"],
            semarang : ["UNDIP","AKPOL","POLTEKKES","POLIMARIN","UNNES","UIN SMG","POLINES"]
            },
        swasta : {
            jakarta : ["Trisakti","UNTAR","BINUS","UNTAG","UBL","UBM"],
            bandung : ["UNIKOM","Maranatha","Widyatama","Telkom","UNPAR"],
            semarang : ["Dian Nuswantoro","Sultan Agung","STIKUBANK","UMS","Soegijapranata"]
        }
    }
    console.log("Daftar Universitas Negeri di Jakarta : ")
    
    for (var x in universitas.negeri.jakarta){
        console.log("- "+universitas.negeri.jakarta[x])
    }

    console.log("\nDaftar Universitas Swasta di Jakarta : ")

    for (var x in universitas.swasta.jakarta){
        console.log("- "+universitas.swasta.jakarta[x])
        
    }
    
}

panggilObject()