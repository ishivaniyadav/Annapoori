import React, { useState } from "react";
import toast from "react-hot-toast";
const Contact = () => {
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
      toast.error("Please fill all the fields!");
      return;
    }

    const existing = JSON.parse(localStorage.getItem("contact_messages")) || [];
    existing.push({ ...formData, timestamp: new Date().toISOString() });
    localStorage.setItem("contact_messages", JSON.stringify(existing));

    toast.success("Message submitted successfully!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9] flex items-center justify-center py-10 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white p-8 rounded-xl shadow-md space-y-6"
      >
        <h2 className="text-3xl font-bold text-blue-900 text-center">📬 Contact & Feedback</h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md"
        />

        <textarea
          name="message"
          placeholder="Your Message or Feedback"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-900 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
