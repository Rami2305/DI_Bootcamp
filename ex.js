// Exercise 1 : Comparison
// Instructions
// Create a function called compareToTen(num) that takes a number as an argument.
// The function should return a Promise:
// the promise resolves if the argument is less than or equal to 10
// the promise rejects if argument is greater than 10.
// Test:

function compareToTen(Number) {
    return new Promise(function (resolve, reject) {
    if (Number <= 10) {
        resolve('THe number is lower');
    } else {
        reject('The number is bigger')
    }
})
}

compareToTen(15)
    .then(response=> console.log(response))
    .catch(error => console.log(error))
compareToTen(4)
    .then(response=> console.log(response))
    .catch(error => console.log(error))

    
//     🌟 Exercise 2 : Promises
// Instructions
// Create a promise that resolves itself in 4 seconds and returns a “success” string.

function holaPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('success');
        }, 4000);
    });
}

holaPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));

// Exercise 3 : Resolve & Reject
// Instructions
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”


const promise = Promise.resolve(3);

promise.then((res) => console.log(res)).catch((err) => console.error(err))

const promise2 = Promise.reject('Boo');

promise2.then((res) => console.log(res)).catch((err) => console.error(err))