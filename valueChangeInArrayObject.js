let arr = [{ id: 1, name: "paint", price: 20 }, { id: 2, name: "shirt", price: 30 }, { id: 3, name: "t-shirt", price: 50 }];
const changePrice = (array) => {
    let result = array.map((item) => {
        return ({ ...item, price: item.price + 10 })
    })
    return result
}
console.log(changePrice(arr));