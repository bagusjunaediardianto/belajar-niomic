var itemMethod = (x)=> {
    x = document.getElementsByTagName("p")
    for(var i=0;i < x.length;i++){
        alert(x.item(i).innerHTML)
    }
}