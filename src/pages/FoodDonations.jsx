import React, { useState } from "react";
import toast from "react-hot-toast";
const FoodDonations = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    foodType: "",
    quantity: "",
    manufactureDate: "",
    expiryDate: "",
    packedOrOpen: "",
  });

  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      name,
      address,
      email,
      foodType,
      quantity,
      manufactureDate,
      expiryDate,
      packedOrOpen,
    } = formData;

    if (
      !name ||
      !address ||
      !email ||
      !foodType ||
      !quantity ||
      !manufactureDate ||
      !expiryDate ||
      !packedOrOpen ||
      !imageFile
    ) {
      toast.error("Please fill in all fields and upload a photo.");
      return;
    }

    setLoading(true);

    try {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result;

        const donationData = {
          ...formData,
          imageUrl,
          quantity: parseInt(quantity),
          date: new Date().toLocaleDateString(),
          timestamp: new Date().toISOString(),
        };

        const existing = JSON.parse(localStorage.getItem("food_donations")) || [];
        existing.push(donationData);

        localStorage.setItem("food_donations", JSON.stringify(existing));

        toast.success("Food donation saved locally!");

        setFormData({
          name: "",
          address: "",
          email: "",
          foodType: "",
          quantity: "",
          manufactureDate: "",
          expiryDate: "",
          packedOrOpen: "",
        });
        setImageFile(null);
      };

      reader.readAsDataURL(imageFile);
    } catch (error) {
      console.error("Error saving donation:", error);
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#f9f9f9] flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white p-8 rounded-xl shadow-lg space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-blue-900">
          Donate Food
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Donor Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md text-gray-700"
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md text-gray-700"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md text-gray-700"
        />
        <input
          type="text"
          name="foodType"
          placeholder="Food Type (e.g. Rice, Biscuits)"
          value={formData.foodType}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md text-gray-700"
        />
        <input
          type="number"
          min="1"
          name="quantity"
          placeholder="Quantity (e.g. 10)"
          value={formData.quantity}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md text-gray-700"
        />
        <input
          type="date"
          name="manufactureDate"
          value={formData.manufactureDate}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md text-gray-700"
        />
        <input
          type="date"
          name="expiryDate"
          value={formData.expiryDate}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md text-gray-700"
        />
        <select
          name="packedOrOpen"
          value={formData.packedOrOpen}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md text-gray-700"
        >
          <option value="">Is the food packed or open?</option>
          <option value="Packed">Packed</option>
          <option value="Open">Open</option>
        </select>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full p-3 border border-gray-300 rounded-md text-gray-700"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-900 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition"
        >
          {loading ? "Submitting..." : "Submit Donation"}
        </button>
      </form>
    </div>
  );
};

export default FoodDonations;
