const express = require('express');
// const { db } = require('./config/dbpg.js')
require('dotenv').config();


const products_router = require('./routes/productsRoutes.js');

const app = express();

//body parser
app.unsubscribe(express.urlencoded({extended:true}))
app.use(express.json())


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`run on ${PORT}`)
})

// app.use('/products', products_router);
