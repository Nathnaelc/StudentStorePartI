const express = require("express");
const storeRouter = express.Router();
const data = require("../data/db.json");
const products = data.products;

// storeRouter.route("/").get((req, res) => {
//   res.json({ products: data.products });
// });

// storeRouter.route("/:id").get((req, res) => {
//   const id = req.params.id;
//   const product = products.find((product) => product.id.toString() === id);
//   res.json(product);
// });

storeRouter.route("/").get((req, res) => {
  res.json({ products: data.products });
});

let orderId = 0; // Keep a separate orderId to ensure unique ids for orders

storeRouter.route("/orders").post((req, res) => {
  const order = req.body;
  order.id = orderId++;
  orders.push(order);
  res.json(order);
});

storeRouter.route("/orders/:id").get((req, res) => {
  const order = orders.find((order) => order.id.toString() === req.params.id);
  res.json(order);
});

storeRouter.route("/:id").get((req, res) => {
  const id = req.params.id;
  const product = products.find((product) => product.id.toString() === id);
  res.json(product);
});

module.exports = storeRouter;
