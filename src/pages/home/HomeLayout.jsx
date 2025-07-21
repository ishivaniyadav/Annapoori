import React from "react";
import Navbar from "./landing-page/Navbar";
import Main_Section from "./landing-page/Main_Section";
import WhyUs from "./landing-page/WhyUs";
import OurImpact from "./landing-page/OurImpact";
import Contribution from "./landing-page/Contribution";
import FAQ from "./landing-page/FAQ";
import FoodPackInitiative from "./landing-page/FoodPackInitiative";
import OfflineSupport from './landing-page/OfflineSupport.jsx';
import FeedbackForm from './landing-page/FeedbackForm.jsx';
import Footer from "./landing-page/Footer";

const HomeLayout = () => {
  return (
    <div className="bg-[#fff] text-[#00000] overflow-hidden">
      <Main_Section />
      <FoodPackInitiative />
      <OfflineSupport />
      <OurImpact />
      <Contribution />
      <WhyUs />
      <FAQ />
      <FeedbackForm/>
      <Footer />
    </div>
  );
};

export default HomeLayout;
