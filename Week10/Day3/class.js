// https://users-18kl.onrender.com/userjson
// inputs on html page
// POST -> name, username, email
// log -> data
// display data on html page


const url = 'https://jsonplaceholder.typicode.com/users';
const data = {name:'Ramiro', username: 'RamiroN', email: 'ramironievad@gmail.com'};

// fetch(url, {
//     method: 'POST', // Método HTTP
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data) // Cuerpo de la solicitud
//   })

// .then(response => {
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('There was a problem with the fetch operation:', error);
//   });

