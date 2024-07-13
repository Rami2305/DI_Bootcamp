// Instructions
// You should use this API: https://www.swapi.tech/ to get the data and update it “randomly” in your website by clicking a button.
// Note: The API contains 83 different characters

// Create your HTML file, and add the relevant elements.

// In your JS file, create your functions :
// to retrieve the elements from the DOM.
// to get the data from the API (star wars characters).
// to display the info on the DOM: the name, height, gender, birth year, and home world of the character.

// Display the data using AJAX. Make sure to display a loading message as follows:
// You can use any of these animation icons for the loading message.
// Fontawesome link :
// https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css


// async function infoData(url) {
    
//     const randomNumber = Math.floor(Math.random() * 83) + 1;
//     const url = `https://www.swapi.tech/api/people/${randomNumber}`;
//     const planetUrl = `https://www.swapi.tech/api/planets/${randomNumber}`;
//     // console.log('this is the url', url );
//     fetch(url)
//         .then((res) => res.json())
//         .then((res) => {
//             const character = res.result.properties;
//             // const characterInfo = {
//             //     name: character.name,
//             //     height: character.height,
//             //     birthYear: character.birth_year,
//             //     homeWorld: character.homeworld,
//             // };
//         console.log(character)
//     }) 
//         .catch((err) => console.log(err)) 
          
        
//             // displayInfo(characterInfo)
           
//         fetch(planetUrl)
//                 .then((res) => res.json())
//                 .then((res) => {
//                     const character2 = res.result.properties.name;
//                     const homeworld = character2.homeworld
//                     console.log(homeworld.homeworld)
//             })
//             const container = document.getElementById('container');
//             const characterData = document.createElement('div');
//             characterData.classList.add('properties');
        
//             characterData.innerHTML =  `
//             <h1>${character.name}</h1>
//             <p class="profile-height">Height: ${character.height}</p>
//             <p class="profile-gender">Gender: ${character.gender}</p>
//             <p class="profile-birth-year">Birth Year: ${character.birthYear}</p>
//             <p class="profile-homeworld">Home World: ${character.homeWorld}</p>
//             `;
//             container.appendChild(characterData);      
// }
    

// infoData(url)


// function displayInfo(characterInfo) {
//     const container = document.getElementById('container');
//     const characterData = document.createElement('div');
//     characterData.classList.add('properties');

//     characterData.innerHTML =  `
//     <h1>${characterInfo.name}</h1>
//     <p class="profile-height">Height: ${characterInfo.height}</p>
//     <p class="profile-gender">Gender: ${characterInfo.gender}</p>
//     <p class="profile-birth-year">Birth Year: ${characterInfo.birthYear}</p>
//     <p class="profile-homeworld">Home World: ${characterInfo.homeWorld}</p>
//     `;
//     container.appendChild(characterData);
// }

const randomNumber = Math.floor(Math.random() * 83) + 1;
const characterUrl = `https://www.swapi.tech/api/people/${randomNumber}`;
    

async function infoData() {
    
    try {
        const characterDataDiv = document.createElement('div');
        const characterResponse = await fetch(characterUrl);
        if (!characterResponse.ok) throw new Error(characterDataDiv.innerHTML = '<p> Ohh! That perons isnt available</p>');
        const characterData = await characterResponse.json();
        const character = characterData.result.properties;

       
        const homeworldUrl = character.homeworld;
        const planetResponse = await fetch(homeworldUrl);
        if (!planetResponse.ok) throw new Error('Planet fetch failed');
        const planetData = await planetResponse.json();
        const homeWorldName = planetData.result.properties.name;

       

        const container = document.getElementById('container');
             
        characterDataDiv.classList.add('properties');
        
        characterDataDiv.innerHTML = '';
        characterDataDiv.innerHTML = `
            <h1>${character.name}</h1>
            <p class="profile-height">Height: ${character.height}</p>
            <p class="profile-gender">Gender: ${character.gender}</p>
            <p class="profile-birth-year">Birth Year: ${character.birth_year}</p>
            <p class="profile-homeworld">Home World: ${homeWorldName}</p>
        `;
        container.appendChild(characterDataDiv);

    } catch (err) {
        console.log('Error:', err);
    }

}

document.getElementById('button').addEventListener('click', mousseClick);

function mousseClick(e) {
    const randomId = randomNumber(characterUrl)
    infoData(randomId)
}

infoData();
