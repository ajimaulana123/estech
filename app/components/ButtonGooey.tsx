import { ArrowRightIcon } from "lucide-react";
import React from "react";

interface ButtonGooeyProps {
  children: React.ReactNode;
  className?: string;
}

const ButtonGooey: React.FC<ButtonGooeyProps> = ({ children, className }) => {
  return (
    <div className="w-fit h-10">
      <svg className="absolute h-10 w-10">
        <defs>
          <filter id="inigooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 17 -7"
              result="inigooey"
            />
            <feBlend in="SourceGraphic" in2="inigooey" />
          </filter>
        </defs>
      </svg>

      <div
        className={`relative w-40 h-10 group ${className}`}
        style={{ filter: "url(#inigooey)" }}
      >
        <div className="bg-lime-300 text-background h-10 w-[calc(100%-2rem)] items-center flex absolute z-20 justify-center left-0 top-0 rounded-full" />
        <div className="bg-lime-300 h-10 w-10 rounded-full absolute transition-all right-0 group-hover:-right-4 z-20 top-0 duration-300 flex items-center justify-center">
          <ArrowRightIcon className="w-3 h-3 -rotate-45 group-hover:rotate-0 transition-all duration-300 ease-in-out" />
        </div>
        <div className="h-10 w-[calc(100%-2rem)] items-center flex absolute z-50 justify-center left-0 top-0 rounded-full text-primary text-sm">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ButtonGooey;
