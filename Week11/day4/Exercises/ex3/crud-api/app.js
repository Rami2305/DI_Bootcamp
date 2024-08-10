const express = require('express')
const app = express();
const PORT = 3000;

const { fetchPosts } = require('./data/dataService.js');


app.use(express.json());
app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "default-src 'self'; font-src 'self'");
    next();
});
app.get('/api/posts', async (req, res) => {
    try {
        const posts = await fetchPosts();
        res.json(posts);
        console.log('Data has been successfully retrieved and sent as a response.');
    } catch (error) {
        
        res.status(500).send('Error retrieving data.');
        console.error('Error retrieving data:', error);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});