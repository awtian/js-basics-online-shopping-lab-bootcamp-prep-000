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
  if (cart.length === 0) {
  return console.log("Your shopping cart is empty.")
  }
  else {
    var itemNPrices = [];
    for (var i = 0; i < cart.length; i++) {
     var itemNPrice = cart[i]
     var item = Object.keys(itemNPrice)[0]
     var price = itemNPrice[item]
     itemNPrices.push(` ${item} at \$${price}`)
   }
   if (itemNPrices.length === 1) {
     return console.log(`In your cart, you have${itemNPrices}.`)
   }
   else if (itemNPrices.length === 2) {
     return console.log(`In your cart, you have${itemNPrices[0]} and${itemNPrices[1]}.`)
   }
   else {
     return console.log(`In your cart, you have${itemNPrices.slice(0,-1)}, and${itemNPrices.slice(-1)}.`)
   }
 }
 }


function total() {
  // write your code here  var totalPrice = 0
   var totalPrice = 0
    for (var i = 0; i < cart.length; i++){
      var itemNPrice = cart[i]
      var item = Object.keys(itemNPrice)[0]
      var price = itemNPrice[item]
      totalPrice += price
    }
  return totalPrice
}

function removeFromCart(itemn) {
  // write your code here
  for (var i = 0; i < cart.length; i++) {
    if(cart[i].hasOwnProperty(itemn)) {
      cart.splice(i,1)
      return cart
    }
  }
  console.log(`That item is not in your cart.`)
  return cart
}

function placeOrder(cardNumber) {
  // write your code here
  if(!cardNumber) {
     console.log("Sorry, we don't have a credit card on file for you.");
   }
   else {
     console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`);
     for(var i=cart.length;i>0;i--) {
       cart.pop();
     }
   }
 }
