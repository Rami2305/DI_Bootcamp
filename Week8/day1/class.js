// let b = 3, d = b, u = b;

// const tree = ++d * d*b * b++ +
//  + --d+ + +b-- +
//  + +d*b+ +
//  u

// console.log(tree); // 163


const yearuser = (year) => year >= 2000 ? '21 cent' : 'middleeasrt'
console.log(yearuser(2002))

// const yearGiven = (year) =>year > 2000 ? `You are in the 21st centurart` : `You live in the Middle Age `

// console.log(yearGiven(2001))

// const calculate = (a, op, b) => op === "+" ? a + b : op === "-" ? a - b : op === "*" ? a * b : op === "/" ? a / b : null

const calculate = (a,b, operator) => 
    operator === '+' ? a + b :
    operator === '-' ? a - b :
    operator === '*' ? a * b :
    operator === '/' ? (b !== 0 ? a / b : 'Division by zero') : 'Invalid operator';


// Creat an new arr withe element duplicate by 2
let arr = [1, 2, 3, 4, 5]
let arr2 = []
arr.forEach((element) => {
    arr2.push(element * 2)
});
// console.log(arr2)

const numbers = [10, 11, 12, 15, 20, 25, 30, 35, 40, 45, 50];
// using theforeach method, display only the elements in the even index
numbers.forEach((element, i) => {
    if (i % 2 === 0){
        console.log(element)
    }
});


const myArr = [1, 2, 3, 4, 5, 6, 7, 8];
// if one of the element equal to 5, return true else return false
myArr.forEach((element) => {
    if (element  === 5){
        return true;
    } else {
        return false;
    }
});

// **some **//
myArr.some((element) => {
    return element === 5;
});

const words = ['wow', 'hey', 'bye'];
// Checj if at least one element of the array starts with the letter h
words.some((element) =>{
    return element.startsWith('h');
})

// all elements are greater than 0 return true else return false

const myArr3 = [1, 2, 3, 4, 5, 6, 7, 8];
const somePositive = myArr3.some(element => element > 0);
console.log(somePositive); 

const words2 = ["hello","hey","hola"];

// Check if all the elements of the array start with the letter 'h'

const words3= words2.every ((element) => {
    return element.startsWith('h')
})
console.log(words3)