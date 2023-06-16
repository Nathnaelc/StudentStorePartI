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
} from "@fortawesome/free-regular-svg-icons";

export default function Product({
  searchbox,
  setProducts,
  products,
  category,
}) {
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      !searchbox ||
      product.name.toLowerCase().includes(searchbox.toLowerCase());
    const matchesCategory =
      category?.toLowerCase() === "all categories" ||
      product.category?.toLowerCase() === category?.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <div id="products" className="products">
      {filteredProducts.map((product, i) => (
        <Link to={`/product/${product.id}`}>
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h2>{product.name}</h2>
              <div className="product-controls">
                <button id="plus_minus">
                  <FontAwesomeIcon icon={faMinusSquare} />
                </button>
                <button id="plus_minus">
                  <FontAwesomeIcon icon={faPlusSquare} />
                </button>
              </div>
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
        </Link>
      ))}
    </div>
  );
}
