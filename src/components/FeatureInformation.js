import React from "react";

export default function FeatureInformation() {
  return (
    <section className="bg-lightBackground dark:bg-darkBackground text-white dark:text-darkText py-6  transition-colors duration-100 ease-in-out">
      <div className="container mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4 ml-4 md:ml-0">
        {/* First Column */}
        <div className="bg-paleBlue p-6 rounded-lg shadow-md text-left w-full md:w-[1/2%]">
        
        <div className="flex justify-center p-4">
        <i className="fa-solid fa-chart-column text-white text-3xl text-center" ></i>
        </div>
          <p className="text-lg leading-relaxed whitespace-normal">
            Expenses are easily managed on Mula. You can track and organize them effortlessly.
          </p>
        </div>

        {/* Second Column */}
        <div className="bg-paleBlue p-6 rounded-lg shadow-md text-left w-full md:w-[1/2]">
        <div className="flex justify-center p-4">
        <i className="fa-solid fa-money-bill-wave text-white text-3xl text-center" ></i>
        </div>
          <p className="text-lg leading-relaxed whitespace-normal">
            Mula helps you stay on top of your finances with automated tracking and insights.
          </p>
        </div>

        {/* Third Column (Below First) */}
        <div className="bg-paleBlue p-6 rounded-lg shadow-md text-left w-full md:w-[1/2]">
        <div className="flex justify-center p-4">
        <i className="fa-solid fa-user-group text-white text-3xl text-center" ></i>
        </div>
          <p className="text-lg leading-relaxed whitespace-normal">
          Mula helps you stay on top of your finances with automated tracking and insights.
          </p>
        </div>

        {/* Fourth Column (Below Second) */}
        <div className="bg-paleBlue p-6 rounded-lg shadow-md text-left w-full md:w-[1/2]">
        <div className="flex justify-center p-4">
        <i className="fa-solid fa-robot text-white text-3xl text-center" ></i>
        </div>
          <p className="text-lg leading-relaxed whitespace-normal">
            Gain full control over your expenses with Mula's easy-to-use budgeting tools.
          </p>
        </div>
      </div>
    </section>
  );
}
