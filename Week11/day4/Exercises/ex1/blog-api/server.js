const express = require('express')
const app = express();
const PORT = 3000;

app.use(express.json());


let posts = [
    { id: 1, title: 'First Post', content: 'This is the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the second post.' },
    { id: 3, title: 'Third Post', content: 'This is the third post.' }
];
// To get all the posts
app.get('/posts', (req, res) => {
    res.json(posts);
});

// to get an specify post by ID

app.get("posts/:id", (req, res) => {
    const id = parseInt(req.params.id); // conver id to a numer
    const post = posts.find((post) => post.id === id);
  
    if (!post) {
      return res.status(404).send("Post not found");
    }
    res.json(post);
});

//to add a new post 

app.post('/posts', (req, res) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title,
        content: req.body.content
    };
    posts.push(newPost);
    res.status(201).json(newPost);
});


//to renew an existant post

app.put('/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);// conver id to a number
    const post = posts.find((post) => post.id === id);
    if (post) {
        post.title = req.body.title || post.title;
        post.content = req.body.content || post.content;
        res.json(post);
    } else {
        res.status(404).send('Post not found');
    }
});

//to delete a post

app.delete('/posts/:id', (req,res) => {
    const id = parseInt(req.params.id);
    const postIndex = posts.findIndex((post) => post.id === id);
    if (postIndex !== -1) {
        posts.splice(postIndex, 1);
        res.status(204).send('succes');
    } else {
        res.status(404).send('post not found');
    }
})

// errros of the server
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Server Error');
});

// start of server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});