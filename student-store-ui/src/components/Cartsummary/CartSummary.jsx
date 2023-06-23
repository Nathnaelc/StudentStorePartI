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
      <div>Subtotal: ${subtotal.toFixed(2)}</div>
      <div>Tax: ${tax.toFixed(2)}</div>
      <div>Fees: ${fees.toFixed(2)}</div>
      <div>Total: ${grandTotal.toFixed(2)}</div>
    </div>
  );
}
