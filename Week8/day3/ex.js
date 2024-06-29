/* Exercise
 * Create an function that get an array of Numbers as input
 * and return a new array with all numbers multiply by 2
 * For example:
 * Give this array [1,2,3,4]
 * result [2,4,6,8]
 */


// function map(arr) {
//     arr.forEach((item, i, arr2) => {
//         arr2[i] = item * 2;
//     });
//     return [...arr];
// }

// function map2(arr) {
//     let result = []; 
//     for (let i = 0; i < arr.length; i++) {
//         result.push(arr[i] * 2);
//     }
//     return result;
// }

// let users = [
//     { userid: 1, name: "John", email: "jjj@gmail.com" },
//     { userid: 2, name: "Marry", email: "mmm@gmail.com" },
//     { userid: 3, name: "Anne", email: "aaa@gmail.com" },
//     { userid: 3, name: "Anne", email: "aaa@gmail.com" },
//   ];

// let html = users.map ((item) => {
//     return `<div style="display:inline-block'>
//         <h2>${item.userid}</h2> 
//         <h2>${item.name}</h2>
//         <h2>${item.email}</h2>
//     </div>`
// })
//     document.getElementById('root').innerHTML = html.join('')

    // * Create an function that get an array of Numbers as input
    // * and return a new array with all numbers greater than 3
    // * For example:
    // * Give this array [0,1,1,2,3,5,8]
    // * result [5,8]
    // */

    // function filter(arr) {
    //     let newArr = [];
    //     for(item of arr) {
    //         if (item > 3) newArr.push(item);
    //     }
    //     return newArr;
    // }
    const users = [
        { id: 1, name: "John", email: "jjj@gmail.com" },
        { id: 2, name: "Mor", email: "mmm@gmail.com" },
        { id: 3, name: "Marry", email: "marry@gmail.com" },
        { id: 4, name: "Ron", email: "ron@gmail.com" },
      ];

    // function filter2(users) {
    //     let newfilter = [];
    //     for(item of users) {
    //         if (users.includes'r')
    //         return.push(name, email)

    //     }
    // }

// // this is the correct answr

    // let filterArr = users.filter((item) => {
    //     return item.name.toLowerCase().includes("r") && item.email.toLowerCase().includes("r");
    // });
    // console.log(filterArr);

    // get the user object with id equal to 3

    let findArr = users.find((item) => {
        return item.id ===3;;
    });
    console.log(findArr)

    // const filterArr = users.find((item) => item.id === 3);
    //console.log(findArr) esta es la misma funcion de arriba pero escrita en una sola linea

    //findIndex//

    const find2 = users.findIndex((item)=> item.id === 3);
    console.log(find2);

    /**  Exercise
 * Create an function that get an array of Numbers as input
 * and return the sum of all numbers
 * For example:
 * Give this array [2, 5, 10,100]
 * result 117
 */

function reduce(arr, num = 0) {
    let sum = num;
    arr.forEach((item) => {
        sum += item;
    });
    return sum;
}
console.log(reduce([2, 5, 10,100]))

/** reduce **/

let arr5 = [2, 5, 10,100]
let sumOfArr5 = arr5.reduce((a, b) => {
    return a + b;
}, 100);
console.log(sumOfArr5);

