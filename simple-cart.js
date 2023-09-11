// [45, 65, 45, 98]

const shopingCart = [
  { name: "shoe", price: 1200 },
  { name: "shirt", price: 2200 },
  { name: "pant", price: 3700 },
  { name: "belt", price: 600 },
];

function totalCost(products) {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    // console.log(product);
    sum = sum + product.price;
  }
  return sum;
}
// totalCost(shopingCart);
const expense = totalCost(shopingCart);
console.log("Total expense today", expense);
