// Exercise 1 : Find The Sum
// Instructions
// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.
const sum = (x,y) => x + y;
console.log(sum(1,2))

// 🌟 Exercise 2 : Kg And Grams
// Instructions
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)
const grams = (kilos) => kilos * 1000;
console.log(grams(5))
// First, use function declaration and invoke it.
// Then, use function expression and invoke it.
// Write in a one line comment, the difference between function declaration and function expression.
// Finally, use a one line arrow function and invoke it.


// Exercise 3 : Fortune Teller
// Instructions
// Create a self invoking function that takes 4 arguments: number of children, partner’s name, 
// geographic location, job title.
// // The function should display in the DOM a sentence like 
// "You will be a <job title> in <geographic location>, and married to <partner s name> with <number of children> kids."

(function (jobTitle, geographicLocation, partnersName, numberOfChildren) {

const sentence = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnersName} with ${numberOfChildren} kids.`;  
console.log('sentence:', sentence)
    const p = document.createElement("p");
    p.innerText = sentence;
    document.body.appendChild(p);
})("coder", "Tel Aviv", "Dana", 0);

// Exercise 4 : Welcome
// Instructions
// John has just signed in to your website and you want to welcome him.

// Create a Bootstrap Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.


