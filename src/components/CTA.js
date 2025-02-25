import React from "react";

export default function CallToAction() {
  return (
    <section className="bg-info text-white py-16 px-6 mb-12">
        <h2 className="text-4xl  font-bold text-center ">Join the Movement</h2>
      <div className="container mx-auto max-w-[1200px] flex flex-col md:flex-row items-center justify-between lg:space-y-12 md:space-y-0 gap-6 lg:gap-12">
       
        <div className="w-full flex flex-col items-center text-left md:text-center space-y-6 lg:mt-8 sm:mt-0">
            <p className="text-sm sm:text-sm text-center md:text-xl  leading-relaxed">
              Chamas across Kenya are rewriting the rules of financial freedom. It’s your turn.
            </p>
            <button className="bg-white text-[15px] md:text-[15px] text-black px-6 py-3 rounded-lg font-semibold ">
              Start Now
            </button>
          </div>

      </div>
    </section>
  );
}