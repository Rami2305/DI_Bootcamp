// Exercise

const users = {
    user1: { 
      age: 44, 
      name: "picard" 
    },
    user2: { 
      age: 12, 
      name: "sisko" 
    },
    user3: { 
      age: 109, 
      name: "janeway" 
    },
};

// * Filter for all users older than 30 
// * and store their data in an array of object
// * 
// [
//  { id: 'user1', age: 44, name: 'picard' },
//  { id: 'user3', age: 109, name: 'janeway' }
// ]

const userskeys = Object.keys(users)
console.log(userskeys);
const usersOlder30  = userskeys.filter(key => users[key].age > 30);
console.log(usersOlder30);
const usersdata = usersOlder30.map((id) => ({id, ...users[id]}));
console.log(usersdata);


// Exercise
// *create a user class
// *store the name of the use in a "name" variable
// *add hello mehtod that will log 'Hello' and the name of the user
// *creat a Student class that extends User 
// *Create 3 instances of student class, add them to an Array
// *Loop the array and call hello method 

    