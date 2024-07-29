const express = require("express");
const { _getAllProducts } = require("../controllers/productsControllers.js");

const router = express.Router();

router.get("/all", _getAllProducts);
// router.post()

module.exports = router;