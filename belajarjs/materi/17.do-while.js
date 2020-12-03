// perbedaan while dan do-while adalah terletak pada strukturnya
//apabila while mengecek kondisi dahulu baru ,mengeksekusi statement
//sedangkan do-while mengeksekusi statement terlebih dahulu, baru mengecek kondisi kemudian
var i = 10

do  {
    console.log("ini urutan ke - "+i)
    --i

} while(i > 10)