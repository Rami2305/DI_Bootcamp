let comidafav = "pastas"
let momentofav = "almuerzo"
let comidamomento = `Yo como ${comidafav} en el ${momentofav}`;
console.log(comidamomento);

//Store your favorite food into a variable.
//Store your favorite meal of the day into a variable (ie. breakfast, lunch or dinner)
//Console.log I eat <favorite food> at every <favorite meal>


let mywatchedseries = ["black mirror","money heist"," and the big bang theroy"];
let mywatchserieslength = 3
let mywatchseriessentence =`i watched ${mywatchserieslength} series: ${mywatchedseries}`;

console.log(mywatchseriessentence)

mywatchedseries[2] = "friends";
mywatchedseries.push("howimetyourmother");
mywatchedseries.unshift("gameofthrones");
mywatchedseries.splice(mywatchedseries.indexOf("black mirror"),1,);

console.log(mywatchedseries[mywatchedseries.indexOf("money heist")][2]);

console.log(mywatchedseries);

//Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.
//Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
//For example : black mirror, money heist, and the big bang theory
//Console.log a sentence using both of the variables created above
//For example : I watched 3 series : black mirror, money heist, and the big bang theory
//part II
//Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
//Add, at the end of the array, the name of another series you watched.
//Add, at the beginning of the array, the name of your favorite series.
//Delete the series “black mirror”.
//Console.log the third letter of the series “money heist”.
//Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.