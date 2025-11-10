import React from "react";
const Foundation = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className=" text-gray-800">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Annapoori Foundation</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nourishing lives, one meal at a time. Join our mission to create a hunger-free world.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Who We Are</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Annapoori is a community-powered non-profit initiative committed to eradicating hunger and restoring dignity through food access.
            We work with local NGOs, volunteers, and compassionate individuals to deliver carefully curated food packages filled with
            essential staples like rice, pulses, oil, and flour.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-10 mb-12">
          <div className="bg-[#f9f9f9] p-6 rounded-xl shadow-sm border border-blue-100">
            <h3 className="text-2xl font-semibold text-blue-800 mb-2">Our Vision</h3>
            <p className="text-gray-600 text-lg italic">“A world where no one sleeps hungry.”</p>
          </div>
          <div className="bg-[#f9f9f9] p-6 rounded-xl shadow-sm border border-blue-100">
            <h3 className="text-2xl font-semibold text-blue-800 mb-2">Our Mission</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Deliver nutritious food packs to families in need</li>
              <li>Collaborate with grassroots communities and NGOs</li>
              <li>Spread awareness on food security and equity</li>
            </ul>
          </div>
        </section>

        {/* Quote */}
        <div className="bg-[#f0f4ff] border-l-4 border-blue-800 p-6 rounded-xl shadow-md mb-12">
          <p className="text-lg italic text-gray-700">
            "You have not lived today until you have done something for someone who can never repay you."
          </p>
          <p className="mt-2 text-right text-blue-800 font-semibold">– John Bunyan</p>
        </div>

      </div>
    </div>
  );
};

export default Foundation;
