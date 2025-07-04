import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  useStripe,
  useElements,
  CardElement,
} from "@stripe/react-stripe-js";
import axios from "axios";
import toast from "react-hot-toast";

// Load Stripe Publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const Contribution = () => {
  const [showCardForm, setShowCardForm] = useState(false);
  const [paymentId, setPaymentId] = useState(null);
  const [amount, setAmount] = useState(0);

  return (
    <Elements stripe={stripePromise}>
      <div className="lg:mx-12 lg:py-20">
        {showCardForm ? (
          <PaymentForm
            amount={amount}
            setAmount={setAmount}
            setPaymentId={setPaymentId}
          />
        ) : (
          <div className="flex items-center justify-between rounded-2xl bg-[#fff] border border-gray-300 p-8">
            <p className="w-1/2 text-black">
              Support our food donation initiative! Every contribution helps.
            </p>
            <button
              onClick={() => setShowCardForm(true)}
              className="py-3 px-6 bg-white text-black rounded-md shadow-md"
            >
              Pay Now
            </button>
          </div>
        )}
      </div>
    </Elements>
  );
};

// Payment Form Component
const PaymentForm = ({ amount, setAmount, setPaymentId }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      toast.error("Stripe is not loaded yet. Please try again.");
      return;
    }

    setLoading(true);

    try {
      // Create Payment Method
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
        billing_details: { name: "Donor" },
      });

      if (error) {
        throw new Error(error.message);
      }

      console.log("Payment Method Created:", paymentMethod.id);

      // Send Payment Request to Backend
      const { data } = await axios.post(
        "https://food-donation-backend-7sct.vercel.app/food_donation/payment/",
        { amount, payment_id: paymentMethod.id },
        { headers: { "Content-Type": "application/json" } }
      );

      if (!data.clientSecret) {
        throw new Error("Invalid clientSecret received from server.");
      }

      // Confirm Payment
      const { error: paymentError, paymentIntent } =
        await stripe.confirmCardPayment(data.clientSecret, {
          payment_method: paymentMethod.id,
        });

      if (paymentIntent && paymentIntent.status === "succeeded") {
        console.log("Payment successful:", paymentIntent.id);
        toast.success("Payment successful!");
        setPaymentId(paymentIntent.id);
      } else {
        throw new Error(paymentError?.message || "Payment failed.");
      }
    } catch (err) {
      console.error("Payment Error:", err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col gap-4 p-4 rounded-md shadow-lg"
    >
      <input
        type="number"
        value={amount}
        placeholder="Amount in $"
        className="w-full px-4 py-3 border border-gray-300 rounded-md"
        onChange={(e) => setAmount(e.target.valueAsNumber)}
        required
      />

      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              lineHeight: "50px",
              "::placeholder": { color: "#aab7c4" },
            },
            invalid: { color: "#9e2146" },
          },
        }}
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-white rounded-md text-black py-3 px-6 mt-4 shadow-md"
      >
        {loading ? "Processing..." : "Pay"}
      </button>
    </form>
  );
};

export default Contribution;
