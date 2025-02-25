import React from "react";
import { TextGenerateEffectDemo } from "./TextGenerateEffectDemo";
import Processes  from "./Processes";

export default function InformationGrid() {
  return (
    <section className="bg-info text-lightText dark:text-darkText py-6 px-4 md:px-12  transition-colors duration-100 ease-in-out ">
      <div className="container mx-auto  max-w-[1200px] mt-18">
        
        {/* Left Section */}
          <TextGenerateEffectDemo />
      

        {/* Right Section */}
          <Processes />
       

      </div>
    </section>
  );
}
