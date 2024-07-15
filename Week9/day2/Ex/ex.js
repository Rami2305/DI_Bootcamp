// Exercise 1 : Location
// Instructions
// Analyze the code below. What will be the output?
// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }

// const {name, location: {country, city, coordinates: [lat, lng]}} = person;
// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// The ouput will be the sentence inside de log, first destructred the array to extract properties and log the sentences.

// Exercise 2: Display Student Info
// Instructions

const objUser = {
    name: 'Elie',
    last: 'Schoppik'
}


function displayStudentInfo({name, last}) {
    console.log(`Your full name is ${name} ${last} `)   
    //destructuring
}

displayStudentInfo(objUser);


// Using the code above, destructure the parameter inside the function and return a string as the example seen below:
//output : 'Your full name is Elie Schoppik'

// Exercise 3: User & Id
// Instructions
// Using this object 

const users = {
    user1: 18273, 
    user2: 92833, 
    user3: 90315
};

console.log(Object.entries(users));

// Using methods taught in class, turn the users object into an array:
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI : The number is their ID number.

// Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
const users2 = {
    user1: 18273, 
    user2: 92833, 
    user3: 90315
};
for (let [key, value] of Object.entries(users2)) {
    console.log(`${key}: ${value * 2}`)
};
// console.log(Object.entries(users2));


// Exercise 4 : Person Class
// Instructions
// Analyze the code below. What will be the output?

class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member);

// My first answer was personal, because member is an instance of person.
// The real answer is object because the "typeof", alwas return object when
// we call typeof to a class

// Exercise 5 : Dog Class
// Instructions
// Using the Dog class below:

class Dog {
  constructor(name) {
    this.name = name;
  }
};

// Analyze the options below. Which constructor will successfully extend the Dog class?

// A N S W E R
// The correct answer is number 2, because it call the extend with super
// and define the new parameter 

// // 1
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.size = size;
//   }
// }; // 2
// class Labrador extends Dog {
//   constructor(name, size) {
//     super(name);
//     this.size = size;
//   }
// };
//  // 3
// class Labrador extends Dog {
//   constructor(size) {
//     super(name);
//     this.size = size;
//   }
// };
// // 4
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.name = name;
//     this.size = size;
//   }
// };


// Evaluate these (ie True or False)

// [2] === [2] 
// {} === {}
// BOth of them are false, because in js objects are compared by references, not by value
// and in this cases, are different objects.

// What is, for each object below, the value of the property number and why?

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
// console.log(object2.number)
// console.log(object3.number)
// console.log(object4.number)

// The answer will be:
// object2 = 4
// object3 = 4
// object4 = 5

// It change to 4, when object1.number = 4 modify the value of const object1




// Create a class Animal with the attributes name, type and color.
// The type is the animal type, for example: dog, cat, dolphin ect …
class Animal {
  constructor (name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}
class Mamal extends Animal {
  constructor (name, type, color, ) {
    super(name, type, color);
    
  }
  sound(sound) {
    return `${sound} Im a ${this.type}, named ${this.name} and Im ${this.color}`
  }
}
const farmerCow =   new Mamal ('Lily', 'cow', 'brown and white')
console.log(farmerCow.sound('Mooo'))
// Create a class Mamal that extends from the Animal class. 
// Inside the class, add a method called sound(). 
// This method takes a parameter: the sound the animal makes, 
// and returns the details of the animal (name, type and color)
//  as well as the sound it makes.

// Create a farmerCow object that is an instance of the class Mamal. 
// The object accepts a name, a type and a color and calls the sound method that “moos” her information.
// For example: Moooo I'm a cow, named Lily and I'm brown and white
