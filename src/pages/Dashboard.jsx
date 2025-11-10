import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DonationList from "../components/DonationList";
function Dashboard() {
  const [allFoodDonations, setAllFoodDonations] = useState([]);
  const [showExpired, setShowExpired] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [popupMessage, setPopupMessage] = useState(null);

  useEffect(() => {
    const localData = localStorage.getItem("food_donations");
    if (localData) {
      setAllFoodDonations(JSON.parse(localData));
    }
  }, []);

  const handleOpenForm = (item) => {
    setSelectedItem(item);
    setShowForm(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Request submitted! We'll contact you soon.");
    setShowForm(false);
  };

  const showPopup = (message) => {
    setPopupMessage(message);
    setTimeout(() => setPopupMessage(null), 3000);
  };

  const today = new Date();
  const filteredDonations = allFoodDonations.filter((item) => {
    const expiry = new Date(item.expiryDate);
    return showExpired ? true : expiry >= today;
  });

  const isExpiringSoon = (expiryDate) => {
    const expiry = new Date(expiryDate);
    const diff = (expiry - today) / (1000 * 60 * 60 * 24);
    return diff >= 0 && diff <= 3;
  };

  return (
    <div className="min-h-screen bg-[#f9fafa] py-10 px-4 sm:px-6 lg:px-16 relative">
     
      {popupMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
          <div className="bg-white px-6 py-4 rounded-lg shadow-xl text-center text-gray-800 text-sm">
            {popupMessage}
          </div>
        </div>
      )}

      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <form
            onSubmit={handleFormSubmit}
            className="bg-white rounded-lg p-6 w-[90%] max-w-md shadow-xl space-y-4"
          >
            <h3 className="text-xl font-semibold text-blue-900">
              Request for: <span className="text-black">{selectedItem.foodType}</span>
            </h3>
            <input type="text" placeholder="Your Name" required className="w-full text-gray-600 border p-2 rounded" />
            <input type="tel" placeholder="Phone Number" required className="w-full text-gray-600 border p-2 rounded" />
            <textarea placeholder="Why you need this" required className="w-full text-gray-600 border p-2 rounded" />
            <div className="flex justify-end gap-3">
              <button onClick={() => setShowForm(false)} className="px-4 py-2 bg-gray-300 text-sm rounded">Cancel</button>
              <button type="submit" className="px-4 py-2 bg-blue-700 text-white text-sm rounded">Submit</button>
            </div>
          </form>
        </div>
      )}

      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-blue-800 mb-2">Community Dashboard</h1>
        <p className="text-gray-600 text-base">Track and request food & fund donations.</p>
      </motion.div>

      <div className="mb-6 flex items-center gap-3 text-sm text-gray-700">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={showExpired}
            onChange={(e) => setShowExpired(e.target.checked)}
            className="accent-blue-600"
          />
          Show expired food items
        </label>
      </div>

      <section className="mb-14">
        <h2 className="text-2xl font-semibold text-green-800 mb-6">
          Food Donations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDonations.length > 0 ? (
            filteredDonations.map((item, idx) => {
              const isSoon = isExpiringSoon(item.expiryDate);
              const isExpired = new Date(item.expiryDate) < today;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className={`bg-white rounded-xl shadow-md p-4 border flex flex-col gap-3 transition hover:shadow-lg ${
                    isSoon ? "border-yellow-400" : isExpired ? "border-red-400 opacity-70" : ""
                  }`}
                >
                  <img
                    src={item.imageUrl || "https://via.placeholder.com/150"}
                    alt="Food"
                    className="w-full h-40 object-cover rounded-md border"
                  />
                  <div className="space-y-1 text-sm">
                    <h3 className="text-lg font-semibold text-gray-800">{item.foodType}</h3>
                    <p className="text-gray-600">Donor: {item.name}</p>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                    <p className="text-gray-600">Type: {item.packedOrOpen}</p>
                    <p className="text-gray-600">MFD: {item.manufactureDate}</p>
                    <p className="text-gray-600">
                      Expiry: {item.expiryDate}
                      {isSoon && !isExpired && (
                        <span className="ml-2 text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded">
                          ⚠️ Expiring Soon
                        </span>
                      )}
                      {isExpired && (
                        <span className="ml-2 text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded">
                          ❌ Expired
                        </span>
                      )}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 text-sm">
                    <button
                      onClick={() =>
                        showPopup(`📩 SMS to: +91 99999 99999\nMessage: I need ${item.foodType}`)
                      }
                      className="text-blue-600 underline text-left"
                    >
                      Request via SMS
                    </button>
                    <button
                      onClick={() => showPopup("📞 Call us at: +91 99999 99999")}
                      className="text-green-600 underline text-left"
                    >
                      Call for Help
                    </button>
                    <button
                      onClick={() => handleOpenForm(item)}
                      className="text-purple-600 underline text-left"
                    >
                      Fill Request Form
                    </button>
                  </div>
                </motion.div>
              );
            })
          ) : (
            <p className="text-gray-500">No food donations available.</p>
          )}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-blue-800 mb-6">
          Monetary Donations
        </h2>
        <motion.div
          className="bg-white rounded-xl shadow-md p-6 overflow-x-auto border"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <table className="min-w-full divide-y divide-gray-200 text-sm text-left">
            <thead className="bg-blue-50 text-blue-900">
              <tr>
                <th className="px-4 py-2">S.No.</th>
                <th className="px-4 py-2">Donor Name</th>
                <th className="px-4 py-2">Amount (₹)</th>
                <th className="px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-gray-700">
              <DonationList />
            </tbody>
          </table>
        </motion.div>
      </section>
    </div>
  );
}

export default Dashboard;
