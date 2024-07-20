// for (let i = 0; i < 5; i++){
//     // console.log(i)
// }

// // let obj = {
// //     a: 'a',
// //     b:'b',
// // }
// // console.log(obj)
// const hello = (name) => {
//     console.log(`hello, ${name}`)
// }

// const sum = (a, b)=>{
//     console.log(a + b)
// }

// module.exports = {com
//     hello, sum
// }


function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero.");
    }
    return a / b;
}
module.exports = {
    add, 
    subtract, 
    multiply, 
    divide,
}



