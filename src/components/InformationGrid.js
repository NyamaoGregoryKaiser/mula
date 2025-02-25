import React from "react";
import { FlipWordsDemo } from "./FlipWordsDemo";
import FeatureInformation from "./FeatureInformation";

export default function InformationGrid() {
  return (
    <section className="text-lightText dark:text-darkText py-6 px-4 md:px-12 transition-colors duration-100 ease-in-out ">
      <h1 className="text-5xl font-bold text-center  mb-8">Why Mula?</h1>

      <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1200px] ">
        {/* Left Section */}
        <div className="col-span-1">
          <FlipWordsDemo />
        </div>

        {/* Right Section */}
        <div className="col-span-1">
          <FeatureInformation />
        </div>
      </div>
    </section>
  );
}
