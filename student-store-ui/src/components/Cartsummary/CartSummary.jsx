import React from "react";
import "./CartSummary.css";

export default function CartSummary({ cart }) {
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1;
  const fees = 10;
  const grandTotal = subtotal + tax + fees;

  return (
    <div className="cart-summary">
      <div>
        <span>Subtotal:</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div>
        <span>Tax:</span>
        <span>${tax.toFixed(2)}</span>
      </div>
      <div>
        <span>Fees:</span>
        <span>${fees.toFixed(2)}</span>
      </div>
      <div>
        <span>Total:</span>
        <span>${grandTotal.toFixed(2)}</span>
      </div>
    </div>
  );
}
