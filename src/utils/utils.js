//products Array of CartProducts
//returns a number, the total price of all products
export const totalPrice = (products) =>{
    let sum = 0;
    products.forEach(products => sum += products.price);
    return sum;
}