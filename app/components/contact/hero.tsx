import { Dot } from 'lucide-react';
import React from 'react'

const HeroSection = () => {
  return (
    <section className="container relative px-4 sm:px-5 py-12 md:py-16 lg:py-20">
      <span className="absolute top-0 left-4 sm:left-5 flex items-center gap-2 text-sm sm:text-base text-primary">
        <Dot className="w-5 h-5 sm:w-6 sm:h-6" /> Contact Us
      </span>
      
      <div className="mt-10 sm:mt-12 md:mt-16">
        <h1 className="flex flex-col gap-3 sm:gap-4 md:gap-6">
          <span className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-medium sm:ml-[5%] md:ml-[10%] lg:ml-[20%] py-2 sm:py-3 md:py-4">
            It's nice to meet you.
          </span>
          <span className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-left sm:text-left">
            We're excited to connect!
          </span>
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
