function Tombol() {
    document.cookie = "username=Admin"
    var a = document.cookie
    document.getElementById("contoh").innerHTML = "cookie = "+a
}