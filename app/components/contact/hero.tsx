import { Dot } from 'lucide-react';
import React from 'react'

const HeroSection = () => {
  return (
    <section className="container relative">
      <h1 className="text-8xl flex flex-col">
        <span className="inline-block ml-[20%] py-5 whitespace-nowrap overflow-hidden text-ellipsis">
          It's nice to meet you.
        </span>
        <span className="block">We're excited to connect!</span>
      </h1>
      <span className="absolute top-10 left-0 flex items-center gap-2">
        <Dot className="w-10 h-10 text-primary" /> Contact Us
      </span>
    </section>
  );
};

export default HeroSection;
