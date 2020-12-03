var x

function openWindow(){

    x = window.open("","NIOMIC","width=500,height=400")
    x.document.writer("<p>Anda berhasil membuka window</p>")
}

function closeWindow(){
    x.close()
}