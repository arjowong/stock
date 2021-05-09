

var test = require ('./stock.js');


var a = test.hello();
console.log('a');
console.log(a);


var c = test.hello;
console.log('c');
console.log(c);

// var b = test.stock();
// console.log(b);

// var d = test.stock;
// console.log(d);
