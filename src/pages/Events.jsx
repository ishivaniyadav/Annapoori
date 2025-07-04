import React from "react";

const events = [
  {
    title: "Food Pack Distribution Week",
    date: "15–21 July 2025",
    desc: "Distributing food packs to over 1,000 families across Delhi NCR. Volunteers and local groups will come together to support those in need.",
    image: "/assets/event1.jpg",
  },
  {
    title: "Campus Fundraising Drive",
    date: "5 August 2025",
    desc: "Students from various colleges will participate in this donation and awareness drive to collect food and funds.",
    image: "/assets/event2.jpg",
  },
  {
    title: "Gratitude Celebration",
    date: "10 September 2025",
    desc: "A special evening dedicated to our donors, sponsors, and volunteers, celebrating their contributions to the cause.",
    image: "/assets/event3.jpg",
  },
];

const Events = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-gray-800">
        <h2 className="text-4xl font-bold text-blue-900 mb-10 text-center">Upcoming Events</h2>
        <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-2xl overflow-hidden transition transform hover:scale-105 duration-300 border border-gray-200"
            >
              <img src={event.image} alt={event.title} className="w-full h-52 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-blue-800 mb-2">{event.title}</h3>
                <p className="text-sm text-gray-500 mb-2">📅 {event.date}</p>
                <p className="text-gray-700 text-sm">{event.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
