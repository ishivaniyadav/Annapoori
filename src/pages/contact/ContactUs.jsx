import React, { useState } from "react";
import Button from "../../components/Button";
import Image from "../../components/Image";
import axios from "axios";
import toast from "react-hot-toast";

const ContactUs = () => {
  const [inputs, setInputs] = useState({
    username: "",
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!inputs.username || !inputs.email || !inputs.message || !inputs.name) {
      toast.error("All fields are required");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post("/api/food_donation/contact/", inputs, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.data.error) {
        toast.error(response.data.error);
        setLoading(false);
        return;
      }

      toast.success("Message sent successfully");
      setInputs({ username: "", name: "", email: "", message: "" });
      setSent(true);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#fff] text-black w-full px-6 py-16 flex flex-col gap-16 lg:flex-row lg:px-16 lg:py-20">
      
      {/* Contact Form */}
      <div className="w-full lg:w-2/3 flex flex-col gap-6">
        <h1 className="text-4xl font-bold text-blue-500">Get in Touch</h1>
        <p className="text-gray-300">
          Have a question, feedback, or want to collaborate with us? Fill out the form below, and our team will get back to you as soon as possible.
        </p>

        {sent ? (
          <div className="text-center mt-10">
            <h2 className="text-2xl font-semibold text-green-400">Thank you!</h2>
            <p className="text-gray-300">Your message has been received.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              value={inputs.name}
              onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
              className="p-4 border-b-2 bg-transparent border-gray-600 focus:border-blue-400 outline-none"
            />
            <input
              type="text"
              placeholder="Username"
              value={inputs.username}
              onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
              className="p-4 border-b-2 bg-transparent border-gray-600 focus:border-blue-400 outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              value={inputs.email}
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
              className="p-4 border-b-2 bg-transparent border-gray-600 focus:border-blue-400 outline-none"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              value={inputs.message}
              onChange={(e) => setInputs({ ...inputs, message: e.target.value })}
              className="p-4 border-b-2 bg-transparent border-gray-600 focus:border-blue-400 outline-none resize-none"
            ></textarea>

            <Button
              disabled={loading}
              name={loading ? "Sending..." : "Submit"}
              classes="mt-6 w-44 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded shadow-lg mx-auto"
              onClick={handleSubmit}
            />
          </form>
        )}
      </div>

      {/* Contact Info Section */}
      <div className="w-full lg:w-1/3 flex flex-col gap-4">
        <p className="text-gray-300">
          We're based in Greater Noida, Uttar Pradesh — working locally to make a lasting impact. Reach out to us through the following details or find us on the map below.
        </p>

        <Image image="./contactus-map.jpg" alt="Our Location Map" style="w-full rounded-xl shadow" />

        <div className="flex flex-col gap-4 mt-4 text-sm">
          <div className="flex items-center gap-3">
            <img src="./location.svg" alt="location icon" className="w-6 h-6" />
            <span>Greater Noida, Uttar Pradesh, India</span>
          </div>
          <div className="flex items-center gap-3">
            <img src="./phone.svg" alt="phone icon" className="w-6 h-6" />
            <span>+91 9876543210</span>
          </div>
          <div className="flex items-center gap-3">
            <img src="./email.svg" alt="email icon" className="w-6 h-6" />
            <span>ishivaniyadav7@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
