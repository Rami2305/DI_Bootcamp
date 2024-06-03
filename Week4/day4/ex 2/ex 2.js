// Using Javascript:
// Add a “light blue” background color and some padding to the <div>.

const div = document.querySelector("div");
div.style.backgroundColor = "lightblue";
div.style.padding = '10px';
// Do not display the <li> that contains the text node “John”. (the first <li> of the <ul>)
const ul = document.querySelector("ul");
const firstLi = ul.children[0];
firstLi.style.display = "none";
// Add a border to the <li> that contains the text node “Pete”. (the second <li> of the <ul>)
const ul2 = document.querySelector("ul")
const lastLi = ul.children[1];
lastLi.style.border = "1px solid red";
// Change the font size of the whole body.
const body = document.querySelector("body");
body.style.fontSize = "20px";
// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” 
//(x and y are the users in the div).


const backgroundColor = window.getComputedStyle(div).backgroundColor;
const users = document.querySelectorAll("li")
console.log("users:", users);

if (backgroundColor === "rgb(173, 216, 230)"){
    console.log("this is lightblue");
    console.log(`Hello ${users[0].textContent} and ${users[1].textContent}`);
}