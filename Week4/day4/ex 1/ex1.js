// Add the code above, to your HTML file

// Using Javascript:
// Retrieve the div and console.log it




// Bonus - Using Javascript:
// Add a class called student_list to both of the <ul>'s.
// Add the classes university and attendance to the first <ul>.

const container = document.getElementById ("container")
console.log("container: ", container)

// Change the name “Pete” to “Richard”.
document.querySelector(".list").children[1].textContent = "Richard"

// Delete the <li> that contains the text node “Sarah”.
//(It’s the second <li> of the second <ul>)

const lists2 = document.getElementsByClassName("list")
const ItemRemove = lists2[1].children[1]
ItemRemove.remove()
//Change each first name of the two <ul>'s to your name
//(Hint : use a loop)

const lists =document.querySelectorAll(".list")
lists.forEach(list => {list.firstElementChild.textContent = "Ramiro"
});