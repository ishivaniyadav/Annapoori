import React, { useState } from "react";
import toast from "react-hot-toast";
const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;
    if (!name || !email || !phone || !message) {
      toast.error("Please fill all fields");
      return;
    }

    const existing = JSON.parse(localStorage.getItem("contact_messages")) || [];
    existing.push({ ...formData, timestamp: new Date().toISOString() });
    localStorage.setItem("contact_messages", JSON.stringify(existing));

    toast.success("Message submitted successfully!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="bg-blue-50 py-12 px-4 sm:px-6 lg:px-20">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-xl">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">Contact & Feedback</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 text-gray-700 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 border text-gray-700 border-gray-300 rounded-md"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 border text-gray-700 border-gray-300 rounded-md"
            />
          </div>

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 text-gray-700 border border-gray-300 rounded-md"
          />

          <textarea
            name="message"
            placeholder="Your Message or Feedback"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border text-gray-700 border-gray-300 rounded-md"
          ></textarea>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-900 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
