import express from "express";
import cors from "cors";
import Stripe from "stripe";
import dotenv from "dotenv";
dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const app = express();
const PORT = 4242;

app.use(cors());
app.use(express.json());

app.post("/create-checkout-session", async (req, res) => {
  const { amount } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: "Donation to Annapoori",
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000",
    });

    res.json({ id: session.id });
  } catch (err) {
    console.error("Stripe Error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
