const _ = require ("lodash");
const { add, multiply } = require ("./math.js");



const numbers = [1, 2, 3, 4, 5];

//basics maths operations

const sum = add(5, 10);
const product = multiply(4, 7);

// we use here some of the functionality of lodash

const max = _.max(numbers);
const min = _.min(numbers)

// we call all const to check the right answer

console.log(`Sum: ${sum}`); 
console.log(`Product: ${product}`)

console.log(`Max number: ${max}`);
console.log(`Min number: ${min}`);