import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faArrowRight,
  faDollarSign,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";

export default function Sidebar() {
  // usestate for sidebar to expand and collapse
  const [isExpanded, setIsExpanded] = useState(false);

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
          <span className="placeholder">
            No items added to cart yet. Start shopping now
          </span>
        </div>
      )}
      <div className="menu-item">
        <FontAwesomeIcon icon={faDollarSign} className="icon" />
        <span className="label">Payment Info</span>
      </div>
      <div className="menu-item">
        <FontAwesomeIcon icon={faCheck} className="icon" />
        <span className="label">Checkout Info</span>
      </div>
      {isExpanded && (
        <>
          <form>
            <label htmlFor="name">Name:</label>
            <br />
            <input type="text" id="name" name="name" />
            <br />
            <label htmlFor="email">Email:</label>
            <br />
            <input type="text" id="email" name="email" />
            <br />
            <input type="checkbox" id="agree" name="agree" value="agree" />
            <label htmlFor="agree">
              {" "}
              I agree with the terms and conditions
            </label>
            <br />
            <button className="checkout-btn" type="submit">
              Checkout
            </button>
            <br />
          </form>
          <p>
            A confirmation email will be sent to you so that you can confirm
            this order. Once you have confirmed the order, it will be delivered
            to your dorm room.
          </p>
        </>
      )}
    </section>
  );
}