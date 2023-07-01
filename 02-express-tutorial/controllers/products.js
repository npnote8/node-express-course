const { products } = require("../data");

const getProduct = (req, res) => {
  return res.json(products);
};

const getProductId = (req, res) => {
  const { productID } = req.params;
  const idToFind = Number(productID);
  const product = products.find((p) => p.id === idToFind);
  if (!product) {
    return res.status(404).json({ message: "That product was not found" });
  }
  return res.json(product);
};

module.exports = {
  getProduct,
  getProductId,
};
