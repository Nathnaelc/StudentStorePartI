import React from "react";
import "./Cartitem.css";

export default function SingleCartitem({ item }) {
  //   console.log("SingleCartItem item:", item);

  return (
    <tr className="cart-items">
      <td>{item.name}</td>
      <td> {item.quantity}</td>
      <td>$ {item.price.toFixed(2)}</td>
      <td>$ {(item.price * item.quantity).toFixed(2)}</td>
    </tr>
  );
}
