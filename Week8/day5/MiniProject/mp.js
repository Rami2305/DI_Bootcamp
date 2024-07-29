const quotes = [
    { id: 0, author: "Zeus Allmighty", quote: "Release the Kraken" },
    { id: 1, author: "Gandalf the Gray", quote: "You shall not pass" },
    { id: 2, author: "Rafiki The Monkey", quote: "Oh yes... The past may hurt, but the way I see it you can either run from it or learn." },
    { id: 3, author: "Gandalf the Gray", quote: "Only you can decide what to do with the time you have been given" },
    { id: 4, author: "Dory the Fish", quote: "Keep swimming" },
];

// Variable para seleccionar el botón "generate quote"
const btnQuotes = document.getElementById('generateQuoteBtn');
// console.log(btnQuotes);

// Variable para seleccionar el elemento donde se mostrará la cita
const quoteDisplay = document.getElementById('quote-display');
// console.log(quoteDisplay);

// Variable para seleccionar el elemento donde se mostrará el autor de la cita
const authorDisplay = document.getElementById('author-display');
// console.log(authorDisplay);

// Variable para seleccionar el botón "Add quotes"
const addNewQuotes = document.getElementById('addquotesbutton');
// console.log(addNewQuotes);


document.getElementById('charCountWithSpaces').addEventListener('click', () => countCharacters(true));
document.getElementById('charCountWithoutSpaces').addEventListener('click', () => countCharacters(false));

// Función para mostrar el contenido del array "quotes" al hacer clic en el botón "generate quote"
btnQuotes.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);
    // console.log(random);
    quoteDisplay.innerText = quotes[random].quote;
    authorDisplay.innerText = quotes[random].author;
});

// Función para agregar nuevas citas al array "quotes" al hacer clic en el botón "add quotes"
addNewQuotes.addEventListener('click', () => {
    const authorInput = document.getElementById('newAuthor').value;
    // console.log(authorInput);
    const quoteInput = document.getElementById('newQuote').value;
    // console.log(quoteInput);

    if (authorInput && quoteInput) {
        quotes.push({ id: quotes.length, author: authorInput, quote: quoteInput });
        // Limpiar los campos del formulario
       
        document.getElementById('newAuthor').value = '';
        document.getElementById('newQuote').value = '';
        console.log("Quotes array after adding new quote:", quotes);
    }
});

function countCharacters(withSpaces) {
    const currentQuote = quotes[random];
    if (!currentQuote) {
        alert('No quote to count characters from.');
        return;
    }

    let count;
    if (withSpaces) {
        count = currentQuote.quote.length;
    } else {
        count = currentQuote.quote.replace(/\s/g, '').length;
    }

    alert(`Character count: ${count}`);
}