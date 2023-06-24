import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faArrowRight,
  faDollarSign,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";
import Cart from "../Cart/Cart";
import CartSummary from "../Cartsummary/CartSummary";

export default function Sidebar({
  cart,
  onAddToCart,
  onRemoveFromCart,
  setCart,
}) {
  // usestate for sidebar to expand and collapse
  const [isExpanded, setIsExpanded] = useState(false);
  const [receipt, setReceipt] = useState(null);
  const [hasCheckedOut, setHasCheckedOut] = useState(false);

  const handleCheckout = (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    setHasCheckedOut(true);
    let receipt = `Receipt\nShowing receipt for ${name} available at ${email}:\n`;
    let subtotal = 0;
    cart.forEach((item) => {
      const cost = item.price * item.quantity;
      receipt += `${item.quantity} total ${
        item.name
      } purchased at a cost of $${item.price.toFixed(
        2
      )} for a total cost of $${cost.toFixed(2)}.\n`;
      subtotal += cost;
    });

    receipt += `Before taxes, the subtotal was $${subtotal.toFixed(2)}`;

    setReceipt(receipt);
  };
  const exitReceipt = () => {
    setReceipt(null);
    setCart([]);
    setIsExpanded(false);
  };

  return (
    <section className={`sidebar ${isExpanded ? "open" : ""}`}>
      <button
        className="toggle-button"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
      <div className="menu-item">
        <FontAwesomeIcon icon={faShoppingCart} className="icon" />
        <span className="label">Shopping Cart</span>
      </div>
      {isExpanded && (
        <div className="cart-info">
          {cart.length === 0 ? (
            <span className="placeholder">
              No items added to cart yet. Start shopping now
            </span>
          ) : (
            <Cart
              cart={cart}
              onAddToCart={onAddToCart}
              onRemoveFromCart={onRemoveFromCart}
            />
          )}
        </div>
      )}

      <div className="menu-item">
        <FontAwesomeIcon icon={faDollarSign} className="icon" />
        <span className="label">Payment Info</span>
      </div>
      {cart.length > 0 && isExpanded && (
        <div className="payment-info">
          <CartSummary cart={cart} />
        </div>
      )}
      <div className="menu-item">
        <FontAwesomeIcon icon={faCheck} className="icon" />
        <span className="label">Checkout Info</span>
      </div>
      {isExpanded && (
        <>
          <form>
            <label htmlFor="name">Name:</label>
            <br />
            <input type="text" id="name" name="name" required />
            <br />
            <label htmlFor="email">Email:</label>
            <br />
            <input type="text" id="email" name="email" required />
            <br />
            <input
              type="checkbox"
              id="agree"
              name="agree"
              value="agree"
              required="True"
            />
            <label htmlFor="agree">
              {" "}
              I agree with the terms and conditions
            </label>
            <br />
            <button
              className="checkout-btn"
              type="submit"
              disabled={cart.length === 0}
              onClick={handleCheckout}
            >
              Checkout
            </button>
            <br />
          </form>
          {hasCheckedOut && (
            <p>
              A confirmation email will be sent to you so that you can confirm
              this order. Once you have confirmed the order, it will be
              delivered to your dorm room.
            </p>
          )}
          {receipt && (
            <pre>
              {receipt}
              <br />
              <button onClick={exitReceipt} className="exit-btn">
                Exit
              </button>
            </pre>
          )}
        </>
      )}
    </section>
  );
}
