function alertConfirm(x){

    var y
    x = confirm("Anda Yakin ? ")
    if(x == true){
        y = "Kamu telah yakin"
    }else {
        y = "Kamu tidak yakin"
    }

    document.getElementById("hasil").innerHTML = y
}