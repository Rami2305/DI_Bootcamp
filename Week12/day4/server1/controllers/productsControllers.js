const {getAllProducts} = require("../models/productsModels.js");

const _getAllProducts = async(req,res) => {
    try {
        const result = await getAllProducts();
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(404).json({message:'something went wrong'})
    }
}
module.exports - {
    _getAllProducts,
}