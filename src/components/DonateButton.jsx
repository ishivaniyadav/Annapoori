import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { FaRupeeSign, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

function DonateButton() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");

  const handleDonate = async () => {
    setError("");

    if (!agreed) {
      setError("Please confirm the donation by checking the box.");
      return;
    }

    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }

    const amountInPaise = parseFloat(amount) * 100;
    if (!amountInPaise || amountInPaise < 100) {
      setError("Enter a valid amount (₹1 or more).");
      return;
    }

    try {
      await addDoc(collection(db, "donations"), {
        name: name.trim(),
        amount: parseFloat(amount),
        date: new Date().toLocaleString("en-IN"),
        timestamp: serverTimestamp(),
      });

    const stripe = await stripePromise;

    const response = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amountInPaise }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData?.error || "Something went wrong.");
    }

    const session = await response.json();

    const result = await stripe.redirectToCheckout({ sessionId: session.id });

      if (result.error) {
        setError(result.error.message);
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="flex items-center justify-center px-4 py-">
      <div className="w-full max-w-md text-black bg-white p-8 rounded-3xl shadow-xl border border-gray-200">
        <h2 className="text-3xl font-bold text-center mb-2 text-blue-900">Support Annapoori</h2>
        <p className="text-center text-sm text-gray-600 mb-6">
          Your kindness can fill plates and hearts ❤️
        </p>

        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 text-lg border text-black border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition"
          />
        </div>

        <div className="relative mb-4">
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full pl-10 pr-4 py-3 text-lg border text-black border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition"
          />
          <FaRupeeSign className="absolute left-3 top-3.5 text-gray-400 text-xl" />
        </div>

        <label className="flex items-center text-sm text-gray-700 mb-6 cursor-pointer">
          <input
            type="checkbox"
            checked={agreed}
            onChange={() => setAgreed(!agreed)}
            className="mr-2 w-4 h-4 text-blue-600"
          />
          I confirm I want to donate
        </label>

        <button
          onClick={handleDonate}
          disabled={!agreed}
          className={`w-full py-3 rounded-lg font-medium shadow-md transition-all ${
            agreed
              ? "bg-blue-900 text-white hover:bg-blue-800 hover:shadow-lg"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Donate Money
        </button>

        {error && (
          <div className="flex items-center justify-center mt-4 text-red-600 text-sm">
            <FaTimesCircle className="mr-2" />
            {error}
          </div>
        )}

        {agreed && !error && amount >= 1 && name.trim() && (
          <div className="flex items-center justify-center mt-4 text-green-600 text-sm animate-pulse">
            <FaCheckCircle className="mr-2" />
            Ready to redirect to secure payment
          </div>
        )}
      </div>
    </div>
  );
}

export default DonateButton;
