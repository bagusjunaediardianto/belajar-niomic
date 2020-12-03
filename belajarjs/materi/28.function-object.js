var fungsiObject = ()=> {

    var x = {
        pesan : halo(),
        warga : data()
    }
    console.log(x.pesan+x.warga)
    
}

function halo(){
    return "halo teman teman dari - "
}

function data(){
    var data = {
        propinsi : {
            jatim : {
                kediri : {
                    papar : ["papar selatan", "dawuhan", "pehwetan", "purwotengah"]
                }
            }
        }
    }
    return data.propinsi.jatim.kediri.papar[3]
}

fungsiObject()