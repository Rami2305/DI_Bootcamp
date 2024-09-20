"use strict";
/** function in typescript */
/** default params */
const addDefault = (a, b = 5) => {
    return a + b;
};
// optional parameters
const addOptional = (a, b) => {
    return a + (b || 0);
};
// rest parameter
const addRest = (a, ...rest) => {
    return rest.reduce((total, num) => total + num, a);
};
// console.log(addRest(100, 100, 2, 4, 5));
// never type
const errorMessage = (msg) => {
    throw new Error(msg);
};
// use of never type
const numberOrString = (value) => {
    if (typeof value === "string")
        return "string";
    if (typeof value === "number")
        return "number";
    return errorMessage("value is not a string or a number");
};
function add(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        return a + b + "";
    }
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    return -1;
}
let a = "abc";
let b = a;
// console.log("b=>", b);
b = 12;
// console.log("b=>", b);
let c = a;
// console.log("c=>", c);
c = "hello";
// console.log("c=>", c);
// < > - not used in react - tsx
let d = "hi";
let e = 12;
// let f = <Three>"ggg"
/** Dom elements */
// const img = document.querySelector("img") as HTMLImageElement; // ! not null;
// // if (img) {
//   img.src = "....";
// // }
// const img2 = <HTMLImageElement>document.querySelector("img")
// const input = document.getElementById('nameInput') as HTMLInputElement
// // input.type
// const input2 = <HTMLInputElement>document.getElementById('nameInput')
// input2.value
// console.log( new Date().getFullYear());
// const year = document.getElementById('year') as HTMLSpanElement;
// let thisYear: string = new Date().getFullYear().toString();
// year.textContent = thisYear
/** Classes */
// access modifiers
/**
 * public - anywhere
 * private - within the class
 * protected - within the class and within a method in a subclass
 * readonly - set readonly in the constructor
 */
// class User {
//   //   public name: string;
//   //   private age: number;
//   //   protected active: boolean;
//   constructor(
//     public name: string,
//     private age: number,
//     protected active: boolean
//   ) {
//     // this.name = name;
//     // this.age = age;
//     // this.active = active;
//   }
//   public getAge(): string {
//     return `my age is ${this.age}`;
//   }
//   getActive() {
//     return `Am I active? ${this.active}`;
//   }
//   setAge(age: number) {
//     this.age = age;
//   }
// }
// let user = new User("John", 25, true);
// console.log(user.getAge());
// console.log(user.getActive());
// console.log(user.name);
// class Student extends User {
//   //   public classes: string[];
//   constructor(
//     name: string,
//     age: number,
//     active: boolean,
//     public classes: string[]
//   ) {
//     super(name, age, active);
//     // this.classes = classes;
//   }
//   getStudentAge() {
//     return `Student age is ${this.getAge()}`;
//   }
//   getStudentActive() {
//     return `Is Student active? ${this.active}`;
//   }
// }
// let student = new Student("Anne", 22, true, ["JS", "NODEJS"]);
// console.log(student.name);
// console.log(student.getAge());
// static methods
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
class User {
    constructor(name, age, active) {
        this._name = name;
        this._age = age;
        this._active = active;
    }
    getAge() {
        return this._age;
    }
    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
    get active() {
        return this._active;
    }
}
