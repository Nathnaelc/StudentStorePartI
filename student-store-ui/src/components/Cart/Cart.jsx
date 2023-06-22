import SingleCartitem from "../CartItem/Cartitem";
import React from "react";

export default function Cart({ cart, onAddToCart, onRemoveFromCart }) {
  console.log("Cart cart:", cart);
  return (
    <table>
      <thead>
        <tr>
          <th>Shopping Cart</th>
        </tr>
      </thead>
      <tbody>
        {/* {if cart is empty map this otherwise no} */}
        if (!cart.length)
        {cart.map((item) => (
          <SingleCartitem
            key={item.id}
            item={item}
            addToCart={onAddToCart}
            removeFromCart={onRemoveFromCart}
          />
        ))}
      </tbody>
    </table>
  );
}
