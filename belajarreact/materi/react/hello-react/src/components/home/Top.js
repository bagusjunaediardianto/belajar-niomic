import React from 'react';


const Top = ()=> {
    function handlePesan(value,e){
        e.preventDefault()
        alert("Halaman Top Tampil")
        alert(value)
    }
    return(
        <div>
            <a href="/" onClick={(e)=>handlePesan("Pesan Dari Top",e)}>Halaman Top</a>
        </div>
    )
}

export default Top