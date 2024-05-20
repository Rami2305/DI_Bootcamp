const frutas = ["Banana", "Apples", "Oranges", "Blueberries"];
frutas.splice(0,1);
frutas.sort();
frutas.push("Kiwi");
const frutassinmanzana = frutas.filter(frutas => frutas !== "Apples");
frutas.reverse(); 
console.log(frutassinmanzana);

    //Remove Banana from the array.
    //Sort the array in alphabetical order.
    //Add “Kiwi” to the end of the array.
    //Remove “Apples” from the array. Don’t use the same method as in part 1.
    //Sort the array in reverse order. (Not alphabetical, but reverse the current Array i.e. [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’])
    //At the end you should see this outcome: