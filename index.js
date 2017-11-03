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
 console.log(`${item} has been added to your cart.`)
var ran = Math.floor(Math.random()*100+1)
var item = {[item]:ran}
cart.push(item)
return cart
}

function viewCart() {
  // write your code here
  if (cart.length===0) {
    console.log(`Your shopping cart is empty.`)
  }
  else if (cart.length===1) {
    var itemAndPrices = [];
    for (var i=0; i < cart.length; i++) {
    var itemAndPrice = cart[i]
    var itemn = Object.keys(itemAndPrice)
    var price = cart[itemn]
    itemAndPrices.push(`${itemn} at /$${price}`)
    }
    console.log (`In your cart, you have ${itemn} at /$${price}.`)
  }
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
