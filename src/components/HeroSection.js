"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/bush.jpg",
  "/fishing.jpg",
  "/masai.jpg",
  "/two-men.jpg",
  "/jump.jpg",
  "/bodaboda.jpg",
  "/soko.jpg",
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4500); // Change every 4.5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[calc(100vh-95px)] text-center bg-white flex flex-col mb-24">
      {/* Main Section */}
      <div className="flex flex-col md:flex-row max-w-[1400px] h-screen">
        {/* Left Side - Text Section */}
        <div className="w-full md:w-1/2 bg-pattern p-8 md:p-16 text-white relative flex flex-col justify-center order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span>Rewriting the rules of</span>
            <br />
            <span>Financial Freedom</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl">
            Empowering the unbanked to shape their own future, one dream at a time.
          </p>
          <button className="mt-6 bg-white text-black font-bold text-lg px-6 py-3 rounded-full">
            Begin Your Journey
          </button>
        </div>

        {/* Right Side - Smooth Fading Slideshow */}
        <div className="w-full md:w-1/2 relative h-[400px] md:h-full overflow-hidden order-1 md:order-2">
          <div className="relative w-full h-full">
            {images.map((img, i) => (
              <motion.div
                key={i}
                animate={{ opacity: i === index ? 1 : 0 }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={img}
                  alt="Slideshow Image"
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0 z-0 opacity-80"
                  priority={i === 0} // Prioritize the first image
                  onError={(e) => console.error("Failed to load image:", img)}
                />
              </motion.div>
            ))}
          </div>

          <div className="hidden md:block absolute bottom-0 right-0 bg-white p-6 w-full md:w-1/2 shadow-md">
  <p className="text-lg mt-2 font-semibold text-gray-700">
    Financial Freedom Begins Here
  </p>
</div>

        </div>
      </div>
    </section>
  );
}