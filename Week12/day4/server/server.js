const express = require('express');
require('dotenv').config();


const products_router = require('./routes/productRoutes.js');

const app = express();

//body parser
app.unsubscribe(express.urlencoded({extended:true}))
app.use(express.json())


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`run on ${PORT}`)
})

app.use('/products', products_router);


// const PGHOST='ep-quiet-bonus-a2jlj3sm.eu-central-1.aws.neon.tech' // si quiero conectarme con psg adming uso: local host, que lo saco de properties de la base de datos
// const PGDATABASE='neondb' // aca pongo el nombre de la tabla de que quiero usar dentro de la base de datos
// const PGUSER='neondb_owner' // postgress
// const PGPASSWORD='R7crSbYLGv1m' // NO ME ACUERDO LA PASSWORD DE PSGADMIND
// const PORT = 5432 // LO CHEQUEO EN PROPERTIES, CONNECTION