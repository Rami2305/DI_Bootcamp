// const {hello, sum} = require("./apps.js")

// hello('Rami')

// console.log(sum(3,5))


/** */
/* creat a module
function getUsers -> return the array of users / hint? use async function
module.exports / getUsers

create a new file server.js / 

math module
function * / + - */

const {add, subtract, multiply, divide} = require("./apps.js")

console.log(add(4,2));
console.log(subtract(4,2));
console.log(multiply(4,2));
console.log(divide(4,2))