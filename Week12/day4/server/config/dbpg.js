// const PGHOST='ep-quiet-bonus-a2jlj3sm.eu-central-1.aws.neon.tech' // si quiero conectarme con psg adming uso: local host, que lo saco de properties de la base de datos
// const PGDATABASE='neondb' // aca pongo el nombre de la tabla de que quiero usar dentro de la base de datos
// const PGUSER='neondb_owner' // postgress
// const PGPASSWORD='R7crSbYLGv1m' // NO ME ACUERDO LA PASSWORD DE PSGADMIND
// const PORT= 5432 // LO CHEQUEO EN PROPERTIES, CONNECTION

const knex = require('knex')
require('dotenv').config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGPORT } = process.env
const db = knex ({
    client:'pg',
    connection: {
        host: PGHOST ,
        port: PGPORT,
        user: PGUSER,
        database: PGDATABASE,
        password: PGPASSWORD,
        ssl: {rejectUnauthorized: false},
    }
})

module.exports = {
    db,
}