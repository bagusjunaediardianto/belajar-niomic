function Tombol(){
    var a = document.getElementsByTagName("input")[0]
    a.attributes.removeNamedItem("value")
    a.attributes.removeNamedItem("type")
}