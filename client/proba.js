const data = require('./src/products.json');

let id = 2;

let el = data.find(item => item.id === id);
console.log(el);