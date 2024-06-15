// In this exercise we will be creating a webpage with a black background as the solar system and we will fill the solar system with planets and their moons.
// We will provide the HTML page.
// You only have to work with a JS file.

// Create an array which value is the planets of the solar system.
// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
// Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
// Finally append each div to the <section> in the HTML (presented below).
// Bonus: Do the same process to create the moons.
// Be careful, each planet has a certain amount of moons. How should you display them?
// Should you still use an array for the planets ? Or an array of objects ?

const planets = [
    {name: "Mercurio", moons: 0}, 
    {name: "Venus", moons: 0},
    {name: "Tierra", moons: 1},
    {name: "Marte", moons: 2},
    {name: "Jupiter", moons: 3},
    {name: "Saturno", moons: 2},
    {name: "Uranio", moons: 3},
    {name: "Neptuno", moons: 2},
] 
// numer of moons its not real

planets.forEach(function(planet){
    // a new <div>
    var planetDiv = document.createElement('div');
    // add the class to the div
    planetDiv.classList.add('planet', planet.name);
    // set the text content of the div to the name of the planet
    planetDiv.textContent = planet.name;
    // append the new div to the body
   
// TO create moons we need to add objects to our array 
    for (let i = 0; i < planet.moons; i++) {
        const moonDiv = document.createElement('div');
        moonDiv.classList.add("moon"),
    //    This style sentence i copy from the solution video, its for see the moons 
        moonDiv.style.left = i * 10 + "px"
        planetDiv.appendChild(moonDiv)
        
    }
     document.body.appendChild(planetDiv);
})