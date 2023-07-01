const express = require("express");
const router = express.Router();

const { getProduct, getProductId } = require("../controllers/products");

router.get("/", getProduct);

router.get("/:productID", getProductId);

module.exports = router;
