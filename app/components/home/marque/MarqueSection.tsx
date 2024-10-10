import Marquee from '@/components/ui/marquee';
import React from 'react'

const MarqueSection = () => {
  return (
    <div className="relative py-10">
      <Marquee className="[--duration:180s]">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="flex items-center justify-center">
            <h2
              className="
                text-8xl tracking-tight
                text-primary
                leading-tighter
                text-balance
              "
            >
              Lets work together.
            </h2>
          </div>
        ))}
      </Marquee>
      <Marquee reverse className="[--duration:180s]">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="flex items-center justify-center">
            <h2
              className="
                text-8xl tracking-tight
                text-primary
                leading-tighter
                text-balance
              "
            >
              Lets work together.
            </h2>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueSection;