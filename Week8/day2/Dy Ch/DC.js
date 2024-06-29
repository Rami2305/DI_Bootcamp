let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}
// Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object.
//  Use the forEach method.
const displayGroceries = () => {
    groceries['fruits'].forEach((item) => {
        console.log(item)
    })
}
// displayGroceries()
// Create another arrow function named cloneGroceries.
// In the function, create a variable named user that is a copy of the client variable. 
// (Tip : make the user variable equal to the client variable)

// Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?


// ANSwER
// We dont see the changes because is inside of the function, and a let that is inside,
// it cant replace parameters from another functions

const cloneGroceries = () => {
    let user = client;
    user = 'Betty';
    // console.log(client)

    let shopping = {...groceries};
    shopping.totalPrice = '$35';
    console.log(shopping.totalPrice);
    console.log(shopping.totalPrice, groceries.totalPrice);
    
    groceries.other.paid = false;
    console.log(groceries.other.paid);
    console.log(shopping.other.paid, groceries.other.paid);
}
cloneGroceries() 

// In the function, create a variable named shopping that is equal to the groceries variable.
// Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?


// ANSWER
// We will see the modification, because we made a copy of the groceries variable, 
//  they are independent one of each other so the changes will not affect 



// Change the value of the paid key to false. Will we also see this modification in the shopping object ? Why ?

// ANSWER
// If we modify shopping.other.paid, will also change groceries, because they stil copy by reference that means that they
// share the same memory, so any change that we want to do in shopping, will affect in groceries.

// Invoke the cloneGroceries function.