import React, { useState } from "react";

const events = [
  {
    title: "Food Pack Distribution Week",
    date: "15–21 July 2025",
    desc: `In collaboration with several grassroots organizations, Food Pack Distribution Week is a dedicated humanitarian initiative aimed at combating hunger in underprivileged communities. From 15th to 21st July 2025, this week-long campaign will see the distribution of nutritious food packs—including rice, lentils, flour, and cooking oil—to more than 1,000 low-income families across Greater Noida and neighboring regions.

The event is powered by the efforts of passionate volunteers from across Delhi NCR, working together to ensure that no family goes to bed hungry. Beyond fulfilling immediate food needs, this campaign fosters a strong sense of unity, compassion, and social responsibility.

Activities during the week will also include awareness sessions on food security, community kitchen setups, and interactive storytelling circles where beneficiaries and volunteers can share experiences. Together, we aim to create a lasting impact and build a more empathetic and resilient community.`,
    image: "/assets/event1.jpg",
    location: "Greater Noida",
  },
  {
    title: "Campus Fundraising Drive",
    date: "5 August 2025",
    desc: `Join hands with passionate students from multiple colleges across Greater Noida for a powerful one-day donation and awareness campaign on 5th August 2025. The Campus Fundraising Drive aims to collect non-perishable food items, raise essential funds, and spread awareness about hunger and food insecurity affecting vulnerable communities.

This dynamic youth-led event will feature:

• Awareness booths showcasing real stories and facts about food scarcity  
• Food collection stations set up across participating campuses  
• Live storytelling sessions by those impacted and volunteers  
• Engaging student performances, creative posters, and interactive activities to promote the cause

The event serves as a vibrant platform for young changemakers to take action, inspire others, and build a culture of compassion and collective responsibility. Whether you're donating a food item or volunteering your time, every effort counts toward making a lasting difference in someone’s life.`,
    image: "/assets/event2.jpg",
    location: "Greater Noida",
  },
  {
    title: "Gratitude Celebration",
    date: "10 September 2025",
    desc: `On 10th September 2025, we invite you to a heartfelt evening dedicated to celebrating the incredible individuals who make our mission possible—our selfless donors, tireless volunteers, and steadfast sponsors. Gratitude Celebration is a special occasion to acknowledge and appreciate the compassion, time, and effort that fuels every initiative we undertake.

The evening will include:

• Touching testimonials and success stories from beneficiaries whose lives have been transformed  
• Cultural performances that reflect the joy and diversity of our community  
• Felicitation ceremonies to honor those who have gone above and beyond  
• A warm community dinner where conversations, connections, and smiles are shared freely

This celebration isn’t just about recognition—it’s about togetherness. It’s about saying thank you to those who give without expecting, support without hesitation, and inspire others through their generosity.

Come be part of an evening that reflects the true spirit of giving, where every applause, every performance, and every shared meal is a symbol of gratitude and unity.`,
    image: "/assets/event3.jpg",
    location: "Greater Noida",
  },
];


const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleCloseModal = () => setSelectedEvent(null);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto text-gray-800">
        <h2 className="text-4xl font-bold text-blue-900 mb-10 text-center">
          Upcoming Events
        </h2>

        {/* Cards */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <div
              key={index}
              onClick={() => setSelectedEvent(event)}
              className="cursor-pointer bg-white shadow-md hover:shadow-xl transition duration-300 rounded-xl overflow-hidden border border-gray-200"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-blue-800 mb-1">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-500">📅 {event.date}</p>
                <p className="text-sm text-gray-500">📍 {event.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedEvent && (
          <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
            <div className="bg-white w-[90%] max-w-2xl rounded-lg shadow-xl overflow-hidden">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 space-y-4">
                <h2 className="text-3xl font-bold text-blue-800">
                  {selectedEvent.title}
                </h2>
                <p className="text-sm text-gray-600">
                  📅 {selectedEvent.date} | 📍 {selectedEvent.location}
                </p>
                <p className="text-gray-700 leading-relaxed text-[15px]">
                  {selectedEvent.desc}
                </p>
                <div className="flex justify-end">
                  <button
                    onClick={handleCloseModal}
                    className="mt-4 px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
