// Exercise 1 : Analyzing


// Instructions
// Analyze these pieces of code before executing them. What will be the outputs ?


// // ------1------
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);

// // The output will be : ['bread', "carrot", "potato", 'chicken', "apple", "orange"], because we are cloning
// // the two const inside the array of objects. 

// // ------2------
// const country = "USA";
// console.log([...country]);

// // The output will be an array of the letters ['U', 'S', 'A'], because "usa" its text so it will decompose one by one.

// // ------Bonus------
// let newArray = [...[,,]];
// console.log(newArray);

// the output will be an array of variables undefined, because "..." will keep the empty positions on the newArray



// Exercise 2 : Employees
// Instructions
// Using this array:

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];
// Using the map() method, push into a new array the firstname of the user and a welcome message. 
// You should get an array that looks like this :
const welcomeStudents = ["Hello Bradley", "Hello Chloe", "Hello Jonathan", "Hello Michael", "Hello Robert", "Hello Wes", "Hello Zach"]

const users2 = users.map(users => 'Hello ' + users.firstName);
console.log(users2)
    
// 2. Using the filter() method, create a new array, containing only the Full Stack Residents.
const users3 = users.filter(users => users.role === 'Full Stack Resident');
console.log(users3)

// 3. Bonus : Chain the filter method with a map method, to return an array containing only the lastName of the Full Stack Residents.

const users4 = users 
    .filter(users => users.role === 'Full Stack Resident')
    .map(users => users.lastName);
console.log(users4)


// Exercise 4 : Employees #2
// Instructions
// Using this object:

const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];
// Using the filter() method, create a new array, containing the students that passed the course.
// Bonus : Chain the filter method with a forEach method, to congratulate the students with their name and course name 
// (ie. “Good job Jenner, you passed the course in Information Technology”, “Good Job Marco you passed the course in Robotics” ect…)


const studentsApp = students.filter(students => students.isPassed === true)
console.log(studentsApp) 

const students3 = studentsApp.forEach(students => console.log('Good job '+ students.name +' you passed the course in ' + students.course))