function dragStart(event){
    event.dataTransfer.setData("Text",event.target.id)
}

function dragging(event){
    document.getElementById("object_text").innerHTML = "elemen sedang di drag"
}

function allowDrop(event){
    event.preventDefault()
}

function drop(event){
    event.preventDefault
    var data =  event.dataTransfer.getData("Text")
    event.target.appendChild(document.getElementById(data))
    document.getElementById("object_text").innerHTML = "elemen sudah di drop"
}