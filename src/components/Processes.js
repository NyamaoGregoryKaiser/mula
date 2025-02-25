import React from "react";

export default function Processes() {
  return (
    <section className="bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText py-6 px-4 md:px-12 transition-colors duration-100 ease-in-out">
      <div className="container mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4 grid-auto-rows: 1fr;">
        {/* First Column */}
        <div className="bg-paleBlue p-6  shadow-md text-left flex flex-col justify-between h-[150px] w-[460px]">
          <p className="text-lg text-white leading-relaxed whitespace-normal mt-6">
            <span className="p-4">01</span>{" "}
            <i className="fa-solid fa-user-group text-paleBlue text-xl text-center p-2 mr-2"></i> Save & Grow
          </p>
        </div>

        {/* Second Column */}
        <div className="bg-paleWhite p-6  shadow-md text-left flex flex-col justify-between h-[150px]">
          <p className="text-lg text-black leading-relaxed whitespace-normal">
            Join a chama, invite Mula, and watch your financial power grow.
          </p>
        </div>

        {/* Third Column (Below First) */}
        <div className="bg-paleBlue p-6  shadow-md text-left flex flex-col justify-between h-[150px] w-[460px]">
          <p className="text-lg text-white leading-relaxed whitespace-normal mt-6">
            <span className="p-4">02</span>{" "}
            <i className="fa-solid fa-user-group text-paleBlue text-xl text-center p-2 mr-2"></i> Access Seed Capital
          </p>
        </div>

        {/* Fourth Column (Below Second) */}
        <div className="bg-paleWhite p-6  shadow-md text-left flex flex-col justify-between h-[150px]">
          <p className="text-lg text-black leading-relaxed whitespace-normal">
            Get funding to expand your opportunities without the barriers of traditional banking.
          </p>
        </div>

        {/* Fifth Column */}
        <div className="bg-paleBlue p-6 rounded-lg shadow-md text-left flex flex-col justify-between h-[150px] w-[460px]">
          <p className="text-lg text-white leading-relaxed whitespace-normal mt-6">
            <span className="p-4">03</span>{" "}
            <i className="fa-solid fa-user-group text-paleBlue text-xl text-center p-2 mr-2"></i> Simple Digital Wallet
          </p>
        </div>

        {/* Sixth Column */}
        <div className="bg-paleWhite p-6  shadow-md text-left flex flex-col justify-between h-[150px]">
          <p className="text-lg text-black leading-relaxed whitespace-normal">
            Gain full control over your expenses with Fundjar’s easy-to-use budgeting tools.
          </p>
        </div>

        {/* Seventh Column */}
        <div className="bg-paleBlue p-6  shadow-md text-left flex flex-col justify-between h-[150px] w-[460px]">
          <p className="text-lg text-white leading-relaxed whitespace-normal mt-6">
            <span className="p-4">04</span>{" "}
            <i className="fa-solid fa-user-group text-paleBlue text-xl text-center p-2 mr-2"></i> Access to Mula Plus+
          </p>
        </div>

        {/* Eighth Column */}
        <div className="bg-paleWhite p-6  shadow-md text-left flex flex-col justify-between h-[150px]">
          <p className="text-lg text-black leading-relaxed whitespace-normal">
            We will be there for you when the unfortunate event occurs to you or any of your beloved ones.
          </p>
        </div>

        {/* Ninth Column */}
        <div className="bg-paleBlue p-6  shadow-md text-left flex flex-col justify-between h-[150px] w-[460px]">
          <p className="text-lg text-white leading-relaxed whitespace-normal mt-6">
            <span className="p-4">05</span>{" "}
            <i className="fa-solid fa-user-group text-paleBlue text-xl text-center p-2 mr-2"></i> Access to Manna
          </p>
        </div>

        {/* Tenth Column */}
        <div className="bg-paleWhite p-6 shadow-md text-left flex flex-col justify-between h-[150px]">
          <p className="text-lg text-black leading-relaxed whitespace-normal">
            A monthly package that has common household items like sugar, cooking oil, salt, soap, at an affordable rate helping you save thousands of shillings annually.
          </p>
        </div>
      </div>
    </section>
  );
}