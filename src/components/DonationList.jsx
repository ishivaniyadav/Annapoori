import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const DonationList = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await getDocs(collection(db, "donations"));
      const data = snapshot.docs.map((doc, i) => ({
        id: i + 1,
        ...doc.data(),
      }));
      setDonations(data);
    };
    fetchData();
  }, []);

  return donations.length > 0 ? (
    donations.map((donation) => (
      <tr key={donation.id}>
        <td className="px-6 py-4 whitespace-nowrap">{donation.id}</td>
        <td className="px-6 py-4 whitespace-nowrap">{donation.name || "Anonymous"}</td>
        <td className="px-6 py-4 whitespace-nowrap">₹{donation.amount}</td>
        <td className="px-6 py-4 whitespace-nowrap">{donation.date || "—"}</td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="4" className="text-center text-gray-400 py-6">
        No donation records found.
      </td>
    </tr>
  );
};

export default DonationList;
