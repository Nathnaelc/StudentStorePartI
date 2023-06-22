import React from "react";

export default function SingleCartitem({ item }) {
  console.log("SingleCartItem item:", item);

  return (
    <tr className="cart-items">
      <td>{item.name}</td>
      <td>Quantity: {item.quantity}</td>
      <td>Unit price: ${item.price}</td>
      <td>Cost: ${item.price * item.quantity}</td>
    </tr>
  );
}
