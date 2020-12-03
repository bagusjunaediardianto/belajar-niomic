var daerah = ()=> {
    var data = {
        propinsi : {
            jatim : ["kediri","nganjuk"],
            jateng : ["pekalongan","batang"],
            jabar : ["majalengka","banjar"]
        }
        }
        data.propinsi.jatim[2] = "mojokerto"
        data.propinsi.banten = ["cilegon","tangerang"]
        
        console.log(data.propinsi.jatim)
        console.log(data.propinsi.banten)
        console.log(data.propinsi)
        
        
        
    }

daerah()