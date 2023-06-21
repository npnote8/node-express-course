// console.log('Express Tutorial')
const express = require("express");
const app = express();
const { products } = require("./data");

app.use(express.static("./public"));

app.get("/api/v1/products", (req, res) => {
  return res.json(products);
});

app.get("/api/v1/products/:productID", (req, res) => {
  const { productID } = req.params;
  const idToFind = Number(productID);
  const product = products.find((p) => p.id === idToFind);
  if (!product) {
    return res.status(404).json({ message: "That product was not found" });
  }
  return res.json(product);
});

app.get("/api/v1/query", (req, res) => {
  const { search, limit, price } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }

  if (price) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.price > price;
    });
  }
  if (limit) {
    sortedProducts =
      sortedProducts.length == 1
        ? sortedProducts
        : sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    return res.status(200).json({ success: true, data: [] });
  }
  return res.json(sortedProducts);
});

app.get("/api/v1/test", (req, res) => {
  return res.json({ message: "It worked!" });
});

app.all("*", (req, res) => {
  res.status(404).send("page not found");
});

app.listen(3000, () => {
  console.log("Server 1 is listening on port 3000...");
});
