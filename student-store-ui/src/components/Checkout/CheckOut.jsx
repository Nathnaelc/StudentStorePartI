import React, { useState } from "react";
import "./Checkout.css";

export default function Checkout({ onCheckout }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!agree) {
      alert("You must agree to the terms and conditions");
      return;
    }
    onCheckout(name, email);
  };

  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <div>
        <input
          type="checkbox"
          id="agree"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
        />
        <label htmlFor="agree">I agree to the terms and conditions</label>
      </div>
      <button type="submit">Checkout</button>
    </form>
  );
}
