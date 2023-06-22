const express = require("express");
const debug = require("debug")("app");
const storeRouter = express.Router();
const data = require("../data/db.json");
const products = data.products;

storeRouter.route("/").get((req, res) => {
  res.json({ products: data.products });
});

storeRouter.route("/:id").get((req, res) => {
  const id = req.params.id;
  const product = products.find((product) => product.id.toString() === id);
  res.json(product);
});

module.exports = storeRouter;
