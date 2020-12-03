function createRegister(){
    var elem = document.getElementById("x")
    elem.parentElement.removeChild(elem)

    var paragraf = document.createElement("p")
    paragraf.className = "tulisan-register"
    paragraf.innerHTML = "SILAHKAN MENDAFTAR"
    
    var elemen = document.getElementsByTagName("div")[0]
    elemen.appendChild(paragraf)

    var form = document.createElement("FORM")
    form.className = "form-register"
    elemen.appendChild(form)

    var label = document.createElement("LABEL")
    label.innerHTML = "Nama User"
    form.appendChild(label)

    var input = document.createElement("input")
    input.type = "text"
    input.name = "username"
    input.placeholder = "Nama User.."
    input.className = "form-register"
    form.appendChild(input)

    var label2 = document.createElement("LABEL")
    label2.innerHTML = "Nomor Handphone"
    form.appendChild(label2)

    var input2 = document.createElement("input")
    input2.type = "text"
    input2.name = "numberphone"
    input2.placeholder = "No handphone."
    input2.className = "form-register"
    form.appendChild(input2)

    var label3 = document.createElement("LABEL")
    label3.innerHTML = "Username"
    form.appendChild(label3)

    var input3 = document.createElement("input")
    input3.type = "email"
    input3.name = "emailID"
    input3.placeholder = "Username atau Email.."
    input3.className = "form-register"
    form.appendChild(input3)

    var label4 = document.createElement("LABEL")
    label4.innerHTML = "Password"
    form.appendChild(label4)

    var input4 = document.createElement("input")
    input4.type = "password"
    input4.name = "pass"
    input4.placeholder = "Password .."
    input4.className = "form-register"
    form.appendChild(input4)

    var input5 = document.createElement("input")
    input5.type = "submit"
    input5.name = "submit"
    input5.value = "DAFTAR SEKARANG"
    input5.className = "tombol-register"
    form.appendChild(input5)
}