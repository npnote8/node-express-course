const { products } = require("../data");

const getProducts = (req, res) => {
  return res.json(products);
};

const getProductById = (req, res) => {
  const { id } = req.params;
  const idToFind = Number(id);
  const product = products.find((p) => p.id === idToFind);
  if (!product) {
    return res.status(404).json({ message: "That product was not found" });
  }
  return res.json(product);
};

module.exports = {
  getProducts,
  getProductById,
};
