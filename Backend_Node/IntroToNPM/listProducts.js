var faker = require("D:/node_modules/npm/node_modules/faker");
var num = 10;
console.log("================================");
console.log("WELCOME TO MY SHOP");
console.log("================================");
while (num--)
{
  console.log(faker.fake("{{commerce.productName}}") + " - $" + faker.fake("{{commerce.price}}"));
}
