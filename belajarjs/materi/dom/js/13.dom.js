function Tombol(){
    var a = document.getElementsByTagName("h1")[0]
    var b = document.createAttribute("class")
    b.value = "contohcss"
    a.attributes.setNamedItem(b)

}