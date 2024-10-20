import React from "react";
import CardProject from "./CardProject";
import ButtonGooey from "../../ButtonGooey";

const ProjectSection = () => {
  return (
    <section className="container px-5 grid grid-cols-2 gap-10 py-5">
      <div className="flex flex-col gap-5">
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
        <div className="flex flex-col items-center justify-center mt-20">
          <h2 className="text-6xl tracking-tight text-primary leading-none text-balance mb-5">
            Like what <br /> you see?
          </h2>
          <ButtonGooey>Contact Us</ButtonGooey>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="w-full justify-center mb-16 hidden lg:flex lg:mb-20">
          <div className="flex flex-col space-y-3 lg:space-y-5 items-start">
            <div className="inline-flex items-center space-x-2">
              <div className="bg-primary w-1.5 h-1.5 rounded-full"></div>
              <div className="font-light text-sm lg:text-base text-primary">
                Bang Aji Berkata
              </div>
            </div>
            <h2 className="text-2-5xl md:text-3xl lg:text-4xl 2xl:text-6xl 4xl:text-7xl font-sans-primary tracking-tight text-primary leading-none text-balance max-w-sm xl:max-w-md 4xl:max-w-lg">
              "Crafting digital excellence"
            </h2>
          </div>
        </div>
        <CardProject />
        <CardProject />
        <CardProject />
        <CardProject />
      </div>
    </section>
  );
};

export default ProjectSection;
