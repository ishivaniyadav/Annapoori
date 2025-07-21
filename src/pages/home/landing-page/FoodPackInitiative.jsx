import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Button from "../../../components/Button";
import Image from "../../../components/Image";
import Donation from "../../../components/donation1.png";

const FoodPackInitiative = () => {
  return (
    <div className="w-full py-14 bg-[#eceaea]">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        
        <div className="w-full lg:w-300 flex flex-col gap-6">
          <h2 className="text-4xl font-bold text-gray-800 leading-snug">
            Together, we fight hunger with{" "}
            <span className="text-blue-900">Food Packages</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Our mission is to ensure that no family goes to bed hungry. Each
            food pack contains essential items like rice, flour, lentils, and
            oil—carefully curated to provide balanced nutrition and restore
            hope for those who need it most.
          </p>

          {/* Highlights */}
          <div className="flex flex-col text-black gap-4 md:flex-row">
            <div className="bg-white p-4 rounded-lg text-black shadow-md border-l-4 border-blue-900">
              📦 One pack can feed a family for a week.
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md text-black border-l-4 border-blue-900">
              💙 Your help means nutrition, dignity & care.
            </div>
          </div>
          <div className="flex gap-3">
            <Button
              name="Donate Money"
              link="/stripe"
              classes="w-48 text-white bg-blue-900 hover:bg-blue-700 rounded-md shadow-md"
            />
            <Button
              name="Donate Food"
              link="/food"
              classes="w-48 text-white bg-blue-900 hover:bg-blue-700 rounded-md shadow-md"
            />
          </div>
        </div>

        <div className="w-full flex justify-end">
          <Image
            image={Donation}
            alt="Donation"
            style="rounded-xl w-[100%] max-w-270 h-[420px] object-cover shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default FoodPackInitiative;
