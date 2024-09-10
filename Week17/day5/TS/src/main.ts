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

let num1: number = 9
let num3: number

/** error */

// let num4: number = "hi"
// num3 = '345'

/**type string */
let str:string;
str = 'hi'

/**error */
//str = true

//** type boolean */
let bol: boolean = true;
bol = false

// //**error */
// bol = 0

/**type any - try not to use any as much as posible */

let anytype: any;
anytype = 1;
anytype = '4';
anytype = true;

/** union type */

let myunion: number | string;
myunion = 1;
myunion = '1'; 
/**error */
// myunion = true


/**RegEx type */
let reg: RegExp= /\w+/g

/**type Array */

let arr = []
arr[0] = 0
arr[1] = 'hi'

let strArray: string[] = [];
strArray[0] = 'a'
/** error */
// strArray[1] = 1 
strArray.push('hi')
/** error */
// strArray.push(true)

let numArr: number[] = []
numArr.push(1)

let numStrArray: (string | number) [] = ['a',1, 'hi']
/**eror */
//numStrArry.push(false)

/**tpe Tuple */

let mytuple: [string, number] = ["a", 1]
mytuple[0] = 'b'
/**error */
// mytuple[0] = 1
// mytuple.push(2)


/**type objetc */
let myObj = {
    name: 'John',
    age: 25,
}

//myObj = []
myObj.age = 15;
/**error */
//myObj = '25'
// myObj.gender = 'male'

/**type */
type User = {
    name:string;
    age:number;
    gender?:string | number;
} 

type strnum = string | number
let user1: User = {
    name: 'Ann',
    age: 33,   
}

user1.name = "Anne"
/**err */
//user1.name = 1

let user2: User = {
    name: 'aaa',
    age: 11,
}

/**
 * create a function
 * @params 
 * number | string
 * return sum / concact
 */

const sum = (a: number , b: number | string): number | string => {
    if (typeof b === 'string') {
        return a + b + ''
    }
    return a + b
} 