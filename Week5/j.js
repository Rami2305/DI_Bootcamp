// script.js

// Array de comidas con sus traducciones en hebreo
const foods = [
    { english: 'apple', hebrew: 'תפוח' },
    { english: 'banana', hebrew: 'בננה' },
    { english: 'carrot', hebrew: 'גזר' },
    { english: 'bread', hebrew: 'לחם' },
    { english: 'cheese', hebrew: 'גבינה' },
    { english: 'orange', hebrew: 'תפוז' }
];

let currentFood = foods[Math.floor(Math.random() * foods.length)];

// Referencias a los elementos HTML
const hebrewWord = document.getElementById('hebrewWord');
const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const message = document.getElementById('message');

// Mostrar la palabra en hebreo
hebrewWord.textContent = currentFood.hebrew;

// Event listener para el botón de adivinar
guessButton.addEventListener('click', () => {
    const userGuess = guessInput.value.trim().toLowerCase();
    
    if (userGuess === currentFood.english.toLowerCase()) {
        message.textContent = 'Correct!';
        // Reset para una nueva palabra
        currentFood = foods[Math.floor(Math.random() * foods.length)];
        hebrewWord.textContent = currentFood.hebrew;
        guessInput.value = '';
    } else {
        message.textContent = 'Try again!';
    }
});