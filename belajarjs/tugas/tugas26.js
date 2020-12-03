var panggilisFinite = ()=> {
    var data = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 1]
    var a,aa,b,bb,c,cc,d,dd,e,ee,f,ff,g,gg,h,hh,i,ii,j,jj
    a = data[0], b = data[1], c = data[2], d = data[3], e = data[4], f = data[5], 
    g = data[6], h = data[7], i = data[8], j = data[9], k = data[10]

    aa = isFinite(data[0]), bb = isFinite(data[1]), cc = isFinite(data[2]), dd = isFinite(data[3]),ee = isFinite(data[4]),
    ff = isFinite(data[5]), gg = isFinite(data[6]), hh = isFinite(data[7]), ii = isFinite(data[8]),jj = isFinite(data[9]),
    kk = isFinite(data[10])

    if (aa === true){
        console.log("Angka",a,"NOT Infinity")   
    } 
    
}

panggilisFinite()
console.log();

function panggilisFinite2 () {
    var data = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 1]
    for(var i = 0; i < data.length;i++){
        if (isFinite(data[i]) === true){
            console.log("Angka",data[i],"NOT infinity.")
            
        }else {
            console.log("Angka",data[i],"Infinity.")
        }
    }
}

panggilisFinite2()

