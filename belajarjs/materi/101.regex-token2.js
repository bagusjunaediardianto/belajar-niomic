var s = 'abCD123 efg456 !@#$%^_"'


// angka
console.log(s.match(/\d/g))

// selain angka
console.log(s.match(/\D/g))


// angka, huruf, underscore
console.log(s.match(/\w/g))

// selain angka, huruf, underscore
console.log(s.match(/\W/g))

// whitespace
console.log(s.match(/\s/g))
console.log(s.match(/\S/g))

console.log("banyaknya spasi :",s.match(/\s/g).length)


