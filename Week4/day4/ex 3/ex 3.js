// Add the code above, to your HTML file

// Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation,
// using the setAttribute method.Element.setAttribute("navBar", socialnetworknavigation)

const navBar = document.getElementById("navBar")
navBar.setAttribute("id","socialNetworkNavigation")


// We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).
const li = document.createElement("li")

// Create a new text node with “Logout” as its specified text.
const logout = document.createTextNode("Logout");
console.log("Logout:", logout);
// Append the text node to the newly created list node (<li>).
li.appendChild(logout);
console.log("li:", li)
// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
// Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>).
// Display the text of each link. (Hint: use the textContent property).
const ul = navBar.firstElementChild
ul.appendChild(li)

//Use the firstElementChild and the lastElementChild properties to retrieve 
//the first and last <li> elements from their parent element (<ul>). 
//Display the text of each link. 
//(Hint: use the textContent property).

const firstli = ul.firstElementChild
const lastli = ul.lastElementChild

console.log("firstli:", firstli)
console.log("lastli:", lastli)

console.log("first li content")
console.log(firstli.textContent)
console.log("second li content")
console.log(lastli.textContent)