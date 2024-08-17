const express = require('express');
// const { db } = require('./config/dbpg.js')
require('dotenv').config();


const products_router = require('./routes/productsRoutes.js');

const app = express();

//body parser
app.unsubscribe(express.urlencoded({extended:true}))
app.use(express.json())




// app.use('/products', products_router);
