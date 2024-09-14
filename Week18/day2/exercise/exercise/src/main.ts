// // Exercise 1: Class with Access Modifiers
// // What You Will Learn:

// // How to use access modifiers (private, protected, and public) in a class.
// // How to create methods that interact with private and protected properties.


// // Instructions:
// // Create a class Employee with the following properties:

// // A private property name of type string.
// // A private property salary of type number.
// // A public property position of type string.
// // A protected property department of type string.
// // Also, include a constructor to initialize these properties. 
// Create a public method getEmployeeInfo that returns 
// the employee’s name and position.

class Employee {

  private name: string;
  private salary: number;
  public position: string;
  protected department: string;

  constructor(name: string, salary: number, position: string, department: string) {
    this.name = name;
    this.salary = salary;
    this.position = position;
    this.department = department
  }

  getEmployeeInfo(): string {
    return `Name: ${this.name}, Position: ${this.position} and my salary is ${this.salary}` ;
  }
}
const rami2 = new Employee('John Doe', 50000, 'Software Engineer', 'Development');
console.log(rami2.getEmployeeInfo());


// // 🌟 Exercise 2: Readonly Properties in a Class
// // What You Will Learn:
// // How to use the readonly modifier to make class properties immutable.
// // How to prevent modifications to class properties after initialization.
// // Instructions:
// // Create a class Product with the following properties:
// // A readonly property id of type number.
// // A public property name of type string.
// // A public property price of type number.
// // Create a method getProductInfo that returns a string 
// with the product’s name and price. 
// Attempt to modify the id property after creating a new instance of the 
// class and observe the result.

class Product {
  readonly id: number;
  public name: string;
  public price: number;

  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  getProductInfo(): string {
    return `Product ID: ${this.id}, Name: ${this.name}, Cost: ${this.price}`
  }
}

const prod = new Product(1, 'telephone', 300);
// prod.id = 2
console.log(prod.getProductInfo())

//"I CANT MODIFY A READONLY property that was defined inside the class"


// // 🌟 Exercise 3: Class Inheritance
// // What You Will Learn:

// // How to create a base class and extend it using inheritance.
// // How to reuse properties and methods from the base class.

// // Instructions:
// // Create a base class Animal with a public property name and a 
// method makeSound that returns a string. 
// Create a subclass Dog that extends Animal and overrides the makeSound 
// method to return the sound a dog makes (“bark”). 
// Create an instance of the Dog class and call the makeSound method.

class Animal {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
  makeSound(): string {
    return `this animal is ${this.name}`
  }
}

class Dog extends Animal {
 
  makeSound(): string {
    return `the ${this.name} barks `
  }
}
let pet = new Dog('Dog')
console.log(pet.makeSound())

// // 🌟 Exercise 4: Static Properties and Methods
// // What You Will Learn:
// // How to use static properties and methods in a class.
// // How to access static members without creating an instance of the class.
// // Instructions:
// // Create a class Calculator with the following static methods:
// // add(a: number, b: number): number – returns the sum of two numbers.
// // subtract(a: number, b: number): number – returns the difference between 
// two numbers.
// // Call these methods without creating an instance of the class.

class Calculator {
  static add(a: number, b: number): number{
    return a+b
  };
  static subtract(a: number, b: number): number{
    return a-b
  };

  constructor(a: number, b: number) {
    console.log(`Addition: ${Calculator.add(a, b)}`);
    console.log(`Subtraction: ${Calculator.subtract(a, b)}`)
  }
}

const num = new Calculator(9,5)



// // 🌟 Exercise 5: Extending Interfaces with Optional and Readonly Properties
// // What You Will Learn:
// // How to extend an interface to add new properties.
// // How to use optional and readonly properties in interfaces.
// // Instructions:
// // Create an interface User with properties id (readonly), name, and email. 
// Extend the User interface to create a PremiumUser interface with an additional optional property membershipLevel. 
// Create a function printUserDetails 
// that accepts a PremiumUser and logs the details to the console.

interface User {
  readonly id: number;
  name: string;
  email: string;
}

interface PremiumUser extends User {
  membershiplevel?: string;
}

function printUserDetails(user: PremiumUser): void {
  console.log(`ID: ${user.id}`);
  console.log(`Name: ${user.name}`);
  console.log(`Email: ${user.email}`);
  
  // Check if membershipLevel exists and print it
  if (user.membershiplevel) {
      console.log(`Membership Level: ${user.membershiplevel}`);
  } else {
      console.log('Membership Level: Not available');
  }
}

const user1: PremiumUser = {
  id: 1,
  name: "Ramiro",
  email: "rami@ro.com",
  membershiplevel: "Gold"
};

const user2: PremiumUser = {
  id: 2,
  name: "Ramirito",
  email: "rami@rito.com"
};

printUserDetails(user1);
printUserDetails(user2);