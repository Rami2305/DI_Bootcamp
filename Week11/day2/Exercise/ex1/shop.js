const products = require("./product.js");

// console.log(products);

function findProductByName(productName) {
    return products.find(product => product.name === productName);
  }
  
  // Test the function with different product names
  const productNames = ["Rami", "Rami2", "Rami3"];
  
  productNames.forEach(name => {
    const product = findProductByName(name);
    if (product) {
      console.log(`Found product: ${JSON.stringify(product)}`);
    } else {
      console.log(`Product with name "${name}" not found.`);
    }
});
