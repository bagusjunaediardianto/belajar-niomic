function Tombol() {
    var a = document.getElementsByTagName("button")[0]
    var b = a.attributes[0].name
    document.getElementById("contoh").innerHTML = b
}