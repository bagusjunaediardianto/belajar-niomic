var x = document.getElementById("lokasi")

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
    }else {
        x.innerHTML = "Geolocation tidak support pada browser anda"
    }
}

function showPosition(position){
    x.innerHTML = "latitude : "+ position.coords.latitude + "<br>Longitude : "+position.coords.longitude
}