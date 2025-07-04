import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import "../App.css"; 

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

function DonateButton() {
  const [amount, setAmount] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");

  const handleDonate = async () => {
    setError("");

    if (!agreed) {
      setError("Please confirm the donation by checking the box.");
      return;
    }

    const amountInPaise = parseFloat(amount) * 100;
    if (!amountInPaise || amountInPaise < 100) {
      setError("Enter a valid amount (₹1 or more).");
      return;
    }

    const stripe = await stripePromise;

    const response = await fetch("http://localhost:4242/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: amountInPaise }),
    });

    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      setError(result.error.message);
    }
  };

  return (
    <div className="donate-container">
      <h2>Donate to Annapoori</h2>
      <input
        type="number"
        placeholder="Enter amount in ₹"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="amount-input"
      />
      <label className="checkbox-label">
        <input
          type="checkbox"
          checked={agreed}
          onChange={() => setAgreed(!agreed)}
        />
        I confirm I want to donate
      </label>
      <button onClick={handleDonate} className="donate-button">
        Donate
      </button>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default DonateButton;
