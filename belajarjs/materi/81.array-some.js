let products = [
    {name : "Apple",type:"fruit"},
    {name : "Monitor",type: "computer"},
    {name : "Mango",type: "fruit"},
    {name : "Table",type: "furniture"}
]

    console.log(
        products.some(product=>product.type === "fruit")
        )
    