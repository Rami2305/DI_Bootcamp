const express = require('express');
const app = express();
const PORT = 5000


let books = [
    { id: 1, title: 'Martin Fierro', author: 'Jose Hernandez', publishedYear: 1999},
    { id: 2, title: 'Harry Potter', author: 'J.K. Rowling', publishedYear: 2000},
    { id: 3, title: 'Lord of the Rings', author: 'J.R.R. Tolkien', publishedYear: 2001}
];


app.use(express.json());

app.get('/books', (req, res) => {
    res.json(books);
});

app.get('/books/:bookId', (req, res) => {
    const bookId = parseInt(req.params.bookId); // conver bookid to number
    const book = books.find(b => b.id === bookId);

    if (book) {
        res.json(book);
    } else {
        res.status(404).send('Book not found');
    }
});


app.post('/books', (req, res) => {
    const newBook = {
        id: books.length + 1, // to rise ID automatically
        title: req.body.title,
        author: req.body.author,
        publishedYear: req.body.publishedYear
    };

    books.push(newBook);
    res.status(201).json(newBook); // 201 = the book was added
});




app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});