/** index signatures / keys */

// interface EmployeeInterface {
//   // [key: string]: string | number | string[] | undefined
//   name: string;
//   age: number;
//   role: string; 
// }


// let employeeJohn: EmployeeInterface = {
//   name:'John',
//   age: 30,
//   role: 'Developer'
// }

// console.log(employeeJohn.name);
// console.log(employeeJohn['age'])

// //employeeJohn['email'] = 'john@gmail.com'
// //employeeJohn.active = true
// // WE CANT DO THIS, BECUASE ITS NOT DEFINE ON THE INTERFACE


// for(let key in employeeJohn) {
//   console.log(`${key} - ${employeeJohn[key as keyof EmployeeInterface]}`)
//   console.log(`${key} - ${employeeJohn[key as keyof typeof employeeJohn]}`)
// }

// /** dynamic keys */

// const prop1: string = 'name'
// employeeJohn[prop1]

// cre