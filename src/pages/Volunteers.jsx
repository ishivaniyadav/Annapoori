import React from "react";

const volunteers = [
  {
    name: "Shivani Yadav",
    role: "Fundraising & Outreach",
    image: "/assets/volunteer1.jpg",
  },
  {
    name: "Soumyadeep Dey",
    role: "Field Distribution",
    image: "/assets/volunteer2.jpg",
  },
  {
    name: "Sayra Singh",
    role: "Logistics & Packing",
    image: "/assets/volunteer3.jpg",
  },
];

const Volunteers = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-gray-800">
        <h2 className="text-4xl font-bold text-blue-900 mb-8 text-center">Our Volunteers</h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          Meet the kind-hearted individuals who dedicate their time and energy to fight hunger.
        </p>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {volunteers.map((vol, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 text-center transition transform hover:scale-105 duration-300"
            >
              <img
                src={vol.image}
                alt={vol.name}
                className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-900">{vol.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{vol.role}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-blue-800 mt-10 font-semibold">
          Want to volunteer? Join our team and make a difference today!
        </p>
      </div>
    </div>
  );
};

export default Volunteers;
