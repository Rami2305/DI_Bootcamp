"use strict";
// let username = 'John'
// let x = 0
// username = 'Dan'
// console.log(username)
// let a = 12;
// let b = '7';
// let c = 2;
// let result = a + b;
// let result1 = a - b;
// let result2 = a / b;
// console.log(result,result1)/
/** type number */
let num = 9;
let num1 = 9;
let num3;
/** error */
// let num4: number = "hi"
// num3 = '345'
/**type string */
let str;
str = 'hi';
/**error */
//str = true
//** type boolean */
let bol = true;
bol = false;
// //**error */
// bol = 0
/**type any - try not to use any as much as posible */
let anytype;
anytype = 1;
anytype = '4';
anytype = true;
/** union type */
let myunion;
myunion = 1;
myunion = '1';
/**error */
// myunion = true
/**RegEx type */
let reg = /\w+/g;
/**type Array */
let arr = [];
arr[0] = 0;
arr[1] = 'hi';
let strArray = [];
strArray[0] = 'a';
/** error */
// strArray[1] = 1 
strArray.push('hi');
/** error */
// strArray.push(true)
let numArr = [];
numArr.push(1);
let numStrArray = ['a', 1, 'hi'];
/**eror */
//numStrArry.push(false)
/**tpe Tuple */
let mytuple = ["a", 1];
mytuple[0] = 'b';
/**error */
// mytuple[0] = 1
// mytuple.push(2)
/**type objetc */
let myObj = {
    name: 'John',
    age: 25,
};
//myObj = []
myObj.age = 15;
let user1 = {
    name: 'Ann',
    age: 33,
};
user1.name = "Anne";
/**err */
//user1.name = 1
let user2 = {
    name: 'aaa',
    age: 11,
};
/**
 * create a function
 * @params
 * number | string
 * return sum / concact
 */
const sum = (a, b) => {
    if (typeof b === 'string') {
        return a + b + '';
    }
    return a + b;
};
