

"use client";

import { AnimatedTestimonialsDemo } from "@/components/AnimatedTestimonialsDemo";
import { BentoGridDemo } from "@/components/BentoGridDemo";

import HeroSection from "@/components/HeroSection";
import InformationGrid from "@/components/InformationGrid";
import HowItWorks from "@/components/HowItWorks";
import CallToAction from "@/components/CTA";

import React, { useState } from "react";






export default function HomePage() {

  return (
    <main>
      
      {/* Your page content */}
<HeroSection/>
<InformationGrid/>
<BentoGridDemo/>

<HowItWorks/>

    <AnimatedTestimonialsDemo/>
    <CallToAction/>

    </main>

  );
}
