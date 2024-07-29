const knex = require('knex');

const PGHOST='ep-quiet-bonus-a2jlj3sm.eu-central-1.aws.neon.tech' // si quiero conectarme con psg adming uso: local host, que lo saco de properties de la base de datos
const PGDATABASE='neondb' // aca pongo el nombre de la tabla de que quiero usar dentro de la base de datos
const PGUSER='neondb_owner' // postgress
const PGPASSWORD='R7crSbYLGv1m' // NO ME ACUERDO LA PASSWORD DE PSGADMIND
const PORT = 5432 // LO CHEQUEO EN PROPERTIES, CONNECTION

const db = knex ({
    client:'pg',
    connection: {
        host: PGHOST ,
        port: PORT,
        user: PGUSER,
        database: PGDATABASE,
        password: PGPASSWORD,
        ssl: {rejectUnauthorized: false},
    }
})

async function getVersion(){
    try {
        const result = await db.raw('select version()');
        console.log(result)
    } catch (error) {
        console.log(error);
    }
}
// getVersion()

// select
// db.raw('select * from products')
// .then(data => console.log(data.rows))
// .catch (err => console.log(err));


//query bulder. Siempre que usamos este, nos devuelve una promesa! 
// db('products')
// .select('id', 'name', 'price')
// .whereIn('id', [2,3])
// .whereNot('price', '<=', 200)
// .then((data) => {
//     console.log(data);
// }) 
// .catch((e) =>{
//     console.log(e)
// })


//insert
// db('products')
// .insert([
//     {name:'prod 600', price:345},
//     {name:'prod 700', price:456}
// ])
// .returning(['id', 'price'])
// .then((data) => {
//     console.log(data);
// }) 
// .catch((e) =>{
//     console.log(e)
// })

//update
// db('products')
// .update({name:" Ramirito 23", price:'150'}, ['name'])
// .where({ id: 1})
// .returning(['id', 'price'])
// .then((data) => {
//     console.log(data);
// }) 
// .catch((e) =>{
//     console.log(e)
// })


// delete
db('products')
.del()
.whereIn('id', [7,8,9,10,11,12,13,14,15])
.then((data) => {
    console.log(data);
}) 
.catch((e) =>{
    console.log(e)
})