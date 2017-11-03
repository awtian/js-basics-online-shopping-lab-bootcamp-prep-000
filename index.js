var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
console.log(`${item} has ben added to the cart!`)
var ran = Math.floor(Math.random()*100+1)
var item = `[${item}]:[${ran}]`
cart.push(item)
return cart
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
