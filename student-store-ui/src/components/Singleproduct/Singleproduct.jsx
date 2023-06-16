// Desc: SingleProduct component to render the single product with details
// imports necessary components and libraries
import React from "react";
import { useParams } from "react-router-dom";
import "./Singleproduct.css";

// SingleProduct component to render the single product with details
export default function SingleProduct({ products }) {
  const { id } = useParams();
  const product = products.find((product) => product.id.toString() === id);

  return (
    <div className="single-product">
      <h1>Product #{product.id}</h1>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
    </div>
  );
}
