const express = require("express");

const Product = require("./models/Product");
const app = express();

const db = require("./db");
app.get("/products", async (req, res) => {
  const products = await Product.find({});

  return res.json(products);
});

app.listen(5000, () => {});
