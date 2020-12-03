function promptWindow(x){
    x = prompt("Masukkan Nama Kamu","Nama")
    if(x != null){
        document.getElementById("jawaban").innerHTML = "Hello "+x+" Apa Kabar ?"
    }
}