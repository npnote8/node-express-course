const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

const peopleRouter = require("./routes/people");
const productRouter = require("./routes/products");

const { products } = require("./data");

const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  next();
};

// static assets
app.use(express.static("./public"));

//app.use(express.static("./methods-public"));
// parse form data
app.use(express.urlencoded({ extended: false }));
//parse json
app.use(express.json());
app.use(cookieParser());
app.use("/api", logger);

app.use("/api/v1/people", peopleRouter);
app.use("/api/v1/products", productRouter);

const auth = (req, res, next) => {
  console.log("req.cookies", req.cookies);
  if (req.cookies.name) {
    req.user = req.cookies.name;
    next();
    return req.user;
  }
  res.status(401).json({ message: "unauthorized" });
};

app.post("/logon", auth, (req, res) => {
  if (req.user) {
    return res
      .status(201)
      .cookie("name", req.user)
      .json({ message: `hello, ${req.user}` });
  }
  res.status(400).json({ message: "error occurred" });
});

app.delete("/logoff", auth, (req, res) => {
  res
    .status(200)
    .clearCookie("name")
    .json({ message: `${req.user} is logged off` });
});

app.get("/test", auth, (req, res) => {
  res.status(200).json({ message: `Welcome ${req.user}` });
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

//console.log("All routes", app._router.stack);
