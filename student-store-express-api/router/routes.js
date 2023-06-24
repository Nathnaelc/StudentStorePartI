const express = require("express");
const debug = require("debug")("app");
const storeRouter = express.Router();
const data = require("../data/db.json");
const products = data.products;
let orders = [];

storeRouter.route("/").get((req, res) => {
  res.json({ products: data.products });
});

storeRouter.route("/:id").get((req, res) => {
  const id = req.params.id;
  const product = products.find((product) => product.id.toString() === id);
  res.json(product);
});

storeRouter.route("/orders/:id").get((req, res) => {
  const order = orders.find((order) => order.id.toString() === req.params.id);
  res.json(order);
});

storeRouter.route("/orders").post((req, res) => {
  const newOrder = req.body;
  newOrder.id = orders.length + 1; // Assigning an ID to the new order
  orders.push(newOrder); // Adding the new order to the orders array
  res.status(201).json(newOrder); // Returning the new order as a response
});

module.exports = storeRouter;
