import React from 'react'

const ButtonGooey = () => {
  return (
    <div className="w-fit bg-red-500">
      <svg className="absolute">
        <defs>
          <filter id="inigooey">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="inigooey"
            />
            <feBlend in="SourceGraphic" in2="inigooey" />
          </filter>
        </defs>
      </svg>

      <div className="relative w-44 h-12 group" style={{ filter: "url(#inigooey)" }}>
        <div className="bg-primary text-background h-12 w-32 items-center flex absolute z-20 justify-center left-0 top-0 rounded-full"></div>
        <div className="bg-primary h-12 w-12 rounded-full absolute transition-all -right-1 group-hover:-right-5 z-20 top-0"></div>
        <div className="text-background h-12 w-32 items-center flex absolute z-50 justify-center left-0 top-0 rounded-full">
          CIHUY
        </div>
      </div>
    </div>
  );
}

export default ButtonGooey