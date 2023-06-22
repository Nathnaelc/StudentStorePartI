// Desc: This file contains the Product component which is used to display the products in the ProductGrid component.
// imports necessary components and libraries
import * as React from "react";
import { Link } from "react-router-dom";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import {
  faPlusSquare,
  faMinusSquare,
} from "@fortawesome/fontawesome-free-regular";

// Product component to render the products
export default function Product({
  searchbox,
  setProducts,
  products,
  category,
  onAddToCart,
  onRemoveFromCart,
}) {
  console.log("products:", products);
  // This function filters the products based on the searchbox and category
  const filteredProducts = products.filter((product) => {
    // If the searchbox is empty, all products are shown
    const matchesSearch =
      !searchbox ||
      product.name.toLowerCase().includes(searchbox.toLowerCase());
    // If the category is "All Categories", all products are shown
    const matchesCategory =
      category?.toLowerCase() === "all categories" ||
      product.category?.toLowerCase() === category?.toLowerCase();
    return matchesSearch && matchesCategory; // returns the products that match the searchbox and category
  });

  return (
    <div id="products" className="products">
      {filteredProducts.map((product, i) => (
        <div className="product-card" key={product.id}>
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h2>{product.name}</h2>
            </div>
          </Link>

          <div className="product-controls">
            <button
              id="plus"
              onClick={() => {
                console.log("product id:" + product.id);
                onAddToCart(product.id);
              }}
            >
              <FontAwesomeIcon icon={faPlusSquare} />
            </button>
            <button id="minus" onClick={() => onRemoveFromCart(product.id)}>
              <FontAwesomeIcon icon={faMinusSquare} />
            </button>
          </div>
          <div className="product-rating">
            <FontAwesomeIcon icon={faStar} color="gold" />
            <FontAwesomeIcon icon={faStar} color="gold" />
            <FontAwesomeIcon icon={faStar} color="gold" />
            <FontAwesomeIcon icon={faStar} color="gold" />
            <FontAwesomeIcon icon={faStar} color="gold" />
          </div>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
}
