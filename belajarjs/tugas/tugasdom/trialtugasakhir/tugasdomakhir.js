function buatLogin(){
    var elem = document.getElementById("x")
    elem.parentElement.removeChild(elem)

    var p = document.createElement("P")
    p.className = "tulisan_login"
    p.innerHTML = "Silahkan Login"

    var elemen = document.getElementsByTagName("div")[0]
    elemen.appendChild(p)

    var form = document.createElement("FORM")
    elemen.appendChild(form)

    var label = document.createElement("LABEL")
    label.innerHTML = "Username"
    form.appendChild(label)

    var input_username= document.createElement("input")
    input_username.type = "text"
    input_username.placeholder = "username"
    input_username.className = "form_login"
    form.appendChild(input_username)

    var label2 = document.createElement("LABEL")
    label2.innerHTML = "Password"
    form.appendChild(label2)

    var input_password= document.createElement("input")
    input_password.type = "password"
    input_password.placeholder = "your password"
    input_password.className = "form_login"
    form.appendChild(input_password)

    var tombol= document.createElement("input")
    tombol.type = "submit"
    tombol.className = "form_login"
    form.appendChild(tombol)
}