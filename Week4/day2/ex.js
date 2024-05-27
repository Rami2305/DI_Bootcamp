//Create a function called infoAboutMe() that takes no parameter.
//The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
//Call the function.

function infoAbout() {
    const name = "Ramiro";
    const age = 34;
    const hobbies = "games";
    console.log("My name is " + name + " and i am "+ age + " old, my hobbies are " + hobbies);
}

infoAbout();

// //Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
// //The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
// //Call the function twice with the following arguments:
// //infoAboutPerson("David", 45, "blue")
// //infoAboutPerson("Josh", 12, "yellow")

function infoAboutMe(personName, personAge, personFavoriteColor) {
    console.log("My name is: "+ personName+ " ,I am "+ personAge+ " years old"+ " and my favorite color is "+ personFavoriteColor)
}
infoAboutMe("Ramiro", 34, "Orange")

function infoAboutPerson(personName, personAge, personFavoriteColor) {
    console.log("My name is: "+ personName+ " ,I am "+ personAge+ " years old"+ " and my favorite color is "+ personFavoriteColor)
}
infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")

// EX 2 //

// // John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.
// // Create a function named calculateTip() that takes no parameter.
// // Inside the function, use prompt to ask John for the amount of the bill.
// // Here are the rules
// // If the bill is less than $50, tip 20%.
// // If the bill is between $50 and $200, tip 15%.
// // If the bill is more than $200, tip 10%.
// // Console.log the tip amount and the final bill (bill + tip).
// // Call the calculateTip()

function calculateTip(){
    let bill = Number(prompt("Ingrese el monto de la cuenta:")); //prompt es para asignarle un valor numero a un string
    let tipPercent; //porque usamos numeros (decimales)

    if (bill < 50) {
        tipPercent = 0.2
    } if (bill >= 50 && bill < 200) {
        tipPercent = 0.15
    } if (bill > 200) {
        tipPercent = 0.1
    }

    let total = bill * (1 + tipPercent);

    console.log("bill:", bill);
    console.log("total a pagar:", total)
}
calculateTip()


// EX 3 //
// Create a function call isDivisible() that takes no parameter.

// In the function, loop through numbers 0 to 500.

// Console.log all the numbers divisible by 23.

// At the end, console.log the sum of all numbers that are divisible by 23.

// Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 368
// 391 414 437 460 483
// Sum : 5313

function isDivisible() {
    let sum = 0 // va a ser 0 porque no vale nada, solo suma cdo i toma el valor de los divisibles
    for (let i=0; i<= 500; i++){
        if (i % 23 === 0) {
            console.log(i + " es divisible por 23")
            sum = sum + i; 
        }
    }
    console.log("la suma de los numeros divisibles por 23 es: ", sum)
}
isDivisible()

// EX 4 //

// Add the stock and prices objects to your js file.

// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.

// Create a function called myBill() that takes no parameters.

// The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock. (Hint : check out if .. in)
// If the item is in stock find out the price in the prices object.

// Call the myBill() function.

// Bonus: If the item is in stock, decrease the item’s stock by 1

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

const shoppingList = ["banana", "orange", "apple"]
function myBill(){
 for (const item of shoppingList) {   //hace un loop para poder chequear varias opciones sobre el array
   const cantidadenStock = stock[item] // nos va a decir el numero en stock del item que solicitemos
   if (cantidadenStock > 0) { //fijamos condicion para empezar a iterar
    const price = prices[item] // nos va a decir el precio de un item
    console.log("the price of", item, "is", price) //arroja la frase compuesta del item y precio solicitado
    console.log("and we have this many in stock: ", stock[item])
    stock[item] = stock[item] - 1 //agregamos el bonus en el que bajamos una unidad y hay que resetear stock[item]
    console.log("the new quantity of this item in stock is", stock[item])
   } else { //aca probamos is la condicion es falsa
    console.log("there is no", item, "in stock")
   }
 }
}
myBill()

