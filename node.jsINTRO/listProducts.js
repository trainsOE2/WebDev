//After installing package "faker", use command "npm install faker"
console.log("====================");
console.log("Welcome to the Shop");
console.log("====================");
var num = 10;
while(num--)
{
  var fakeIt = require("faker");
  var prodName = fakeIt.commerce.productName();
  var prodPrice = fakeIt.commerce.price();
  console.log(prodName + " - $" + prodPrice);
}
