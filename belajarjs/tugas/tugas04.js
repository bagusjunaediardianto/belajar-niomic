var siswa = (siswa1 = 190,siswa2 = 195 ,siswa3 = 180)=> {
    
    if (siswa1 > siswa2){
        if(siswa1 > siswa3){
            console.log("siswa 1 lebih tinggi dari siswa 3 dan siswa 2")
        }else{
            console.log("siswa 1 lebih tinggi dari siswa 2, tapi tidak lebih tinggi dari siswa 3")
        }
    }else{
        if(siswa1 < siswa3){
            console.log("siswa 1 lebih pendek dari siswa 3 dan siswa 2")
        }else{
            console.log("siswa 1 lebih tinggi dari siswa 3, tapi tidak lebih tinggi dari siswa 2")   
        }
    }
}

siswa()