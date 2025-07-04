import React from "react";
import { Link } from "react-router-dom";

const SuccessPage = () => {
  return (
    <div className="App">
      <h1>Thank you for your donation!</h1>
      <p>Your support helps us feed more people 🙏</p>
      <Link to="/">
        <button className="donate-button">Go Back to Home</button>
      </Link>
    </div>
  );
};

export default SuccessPage;
