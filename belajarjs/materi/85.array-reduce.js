const data = [1,2,3,4]
const reducer = (akumulator, currentValue) => akumulator + currentValue

console.log(data.reduce(reducer))

console.log(data.reduce(reducer,5))


const daerah = [
    {kota : "kediri", populasi : 1823000},
    {kota : "nganjuk", populasi : 1245000},
    {kota : "blitar", populasi : 1000542},
    {kota : "trenggalek", populasi : 825000}
]

const reduceData = (val,elemen) => val + elemen.populasi
 
console.log(daerah.reduce(reduceData,0))
