import SingleCartitem from "../CartItem/Cartitem";
import React from "react";

export default function Cart({ cart, onAddToCart, onRemoveFromCart }) {
  console.log("Cart cart:", cart);
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {!cart.length ? (
          <tr>{/* <td> Cart is empty: last item is removed</td> */}</tr>
        ) : (
          cart.map((item) => (
            <SingleCartitem
              key={item.id}
              item={item}
              onAddToCart={onAddToCart}
              onRemoveFromCart={onRemoveFromCart}
            />
          ))
        )}
      </tbody>
    </table>
  );
}
