//Part I - Review About Arrays
//Write code to remove “Greg” from the people array.
//Write code to replace “James” to “Jason”.
//Write code to add your name to the end of the people array.
//Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
//Write code to make a copy of the people array using the slice method.
//The copy should NOT include “Mary” or your name.
//Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
//Hint: Check out the documentation for the slice method
//Write code that gives the index of “Foo”. Why does it return -1 ?
//Create a variable called last which value is the last element of the array.
//Hint: What is the relationship between the index of the last element in the array and the length of the array?

const people = ["Greg", "Mary", "Devon", "James"];

people.shift(0); // removemos a greg del array
people[people.indexOf("James")] = "Jason"; // busco dentro del array james y lo reemplazo por jason
people.push("Ramiro"); //agrego al final del array mi nombre

console.log(people);

let result = people.indexOf("Mary"); //busco en que lugar del array esta "mary", podria hacerlo directamente con console.

console.log(result);

console.log(people.slice(1,3));

console.log(people[people.indexOf("Foo")]); //no lo toma porque no esta definido en el array, pero no me sale -1


let last = (people[people.length - 1]);
console.log(last);
//La relacion entre el indice del ultimo elemento y la longitud del array es que el indice del ultimo elemento
//es igual a la longitud del array menos uno.

//Part II - Loops
//Using a loop, iterate through the people array and console.log each person.
//Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
//Hint: take a look at the break statement in the lesson.


for (const person of people) {
    console.log(person);
} //itera por el array y va a mostrar cada persona que hay adentro
for (const person of people) {
    console.log(person);
    if (person === "Devon") {
        break;
    }
}//aca lo mismo solo que cuando encuentra el nombre DEVON sale de la iteracion.


// EX LOOPS //

//Create an array called colors where the value is a list of your five favorite colors.
//Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
//Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
//Hint : create an array of suffixes to do the Bonus


const colors = ["naranja", "rojo", "blanco", "azul", "verde"];
const suffixes = ["st", "nd", "rd", "th", "th"]
for (let i = 0; i < colors.length; i++) {
    console.log(`My #${i + 1}${suffixes[i]} choice is ${colors[i]}`)
} 

// EX 3 //
//Prompt the user for a number.
//Hint : Check the data type you receive from the prompt (ie. Use the typeof method)
//While the number is smaller than 10 continue asking the user for a new number.
//Tip : Which while loop is more relevant for this situation?

//let number = null
//while (true){
   //const answer = prompt("Por favor, ingresa un número");
    //number = Number(answer);
    //if (number >= 10)
      //  break;
//}


// EX 4 //

//Copy and paste the above object to your Javascript file.
//Console.log the number of floors in the building.
//Console.log how many apartments are on the floors 1 and 3.
//Console.log the name of the second tenant and the number of rooms he has in his apartment.
//Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}
console.log(building.numberOfFloors);
console.log("apartments on first floor:",building.numberOfAptByFloor.firstFloor);
console.log("apartments on third floor:",building.numberOfAptByFloor.thirdFloor);
console.log("second tenant: " + building.nameOfTenants[1] + ", and he has this many rooms:", building.numberOfRoomsAndRent.dan[0]);


const sarahrent = building.numberOfRoomsAndRent.sarah[1];
const davidrent = building.numberOfRoomsAndRent.david[1];
const danrent = building.numberOfRoomsAndRent.dan[1];
if (sarahrent + davidrent > danrent) {
    building.numberOfRoomsAndRent.dan[1] = 1200
}
console.log(building)


// EX 5 //

//Create an object called family with a few key value pairs.
//Using a for in loop, console.log the keys of the object.
//Using a for in loop, console.log the values of the object.

const family = {
    dad: "Martin",
    mom: "Patricia",
    daugther: "Victoria"
}
for (const member in family){
    console.log("member:", member);
    console.log("value:", family[member]);
}
