/** function in typescript */
/** default params */
const addDefault = (a: number, b: number = 5): number => {
  return a + b;
};

// optional parameters
const addOptional = (a: number, b?: number): number => {
  return a + (b || 0);
};

// rest parameter
const addRest = (a: number, ...rest: number[]): number => {
  return rest.reduce((total, num) => total + num, a);
};
// console.log(addRest(100, 100, 2, 4, 5));

// never type
const errorMessage = (msg: string): never => {
  throw new Error(msg);
};

// use of never type
const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (typeof value === "number") return "number";
  return errorMessage("value is not a string or a number");
};

// function overload
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number | string, b: number | string): number | string {
  if (typeof a === "string" && typeof b === "string") {
    return a + b + "";
  }
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  return -1;
}
// add(1,2)
// add("a","b")
// add(true, "b")

/** Assertions or Casting */
// as or < >

// aliases
type One = string;
type Two = string | number;
type Three = "hello";

let a: One = "abc";

let b = a as Two;
// console.log("b=>", b);
b = 12;
// console.log("b=>", b);

let c = a as Three;
// console.log("c=>", c);

c = "hello";
// console.log("c=>", c);

// < > - not used in react - tsx
let d = <One>"hi";

let e = <Two>12;
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
  static count: number = 0;

  static getCount(): number {
    return Peeps.count;
  }

  public id: number;

  constructor(public name: string) {
    this.id = ++Peeps.count;
  }
}

// const user1 = new Peeps("John");
// console.log(user1.id, user1.name);
// const user2 = new Peeps("Anne");
// console.log(user2.id, user2.name);
// const user3 = new Peeps("Ann");
// console.log(user3.id, user3.name);

// type UserType = {
//   name: string;
//   age: number;
//   active: boolean;
// };

// type Grade = {
//   grade: number;
// };

// let userJohn: UserType = {
//   name: "John",
//   age: 25,
//   active: true,
// };

// let studentJohn: UserType & Grade = {
//   name: "John",
//   age: 25,
//   active: true,
//   grade: 75,
// };

// class interface

type UserInterface = {
  name: string;
  age: number;
  active: boolean;
  getAge(): number;
};

class User implements UserInterface {
  public _name: string;
  protected _age: number;
  private _active: boolean;

  constructor(name: string, age: number, active: boolean) {
    this._name = name;
    this._age = age;
    this._active = active;
  }

  getAge(): number {
    return this._age;
  }

  get name(): string {
    return this._name;
  }
  get age(): number {
    return this._age;
  }
  get active(): boolean {
    return this._active;
  }
}
