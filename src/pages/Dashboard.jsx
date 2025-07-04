import React from "react";
import DonationList from "../components/DonationList";
import { motion } from "framer-motion";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-blue-900 mb-2">
            📊 Donation Dashboard
          </h1>
          <p className="text-gray-600 text-lg">
            Review all your contributions in a clean, tabular format.
          </p>
        </motion.div>

        {/* Donation Table Card */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-6 overflow-x-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <h2 className="text-xl font-semibold text-blue-800 mb-4">Donation Records</h2>

          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-blue-100 text-blue-900">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase">#</th>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase">Donor Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase">Amount (₹)</th>
                <th className="px-6 py-3 text-left text-sm font-semibold uppercase">Date</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 text-gray-700">
              <DonationList />
            </tbody>
          </table>
        </motion.div>
      </div>
    </div>
  );
}

export default Dashboard;
