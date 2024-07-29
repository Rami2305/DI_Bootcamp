const {db} = require("../config/dbpg.js");

const getAllProducts = () => {
    return db('products').select("id", "name", "price").orderBy("name");
}

module.exports - {
    getAllProducts,
}