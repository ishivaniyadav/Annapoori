import React from "react";
import DonateButton from "../components/DonateButton";
import "../styles/StripePage.css";

const Stripe = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Annapoori</h1>
      <DonateButton />
    </div>
  );
};

export default Stripe;
