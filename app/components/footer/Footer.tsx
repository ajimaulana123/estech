import { ArrowUpRight, Github, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import ButtonGooey from "../ButtonGooey";
import LinkItem from "./LinkItem";

const Footer = () => {
  return (
    <footer className="px-5">
      <div className="bg-primary w-full container my-10 rounded-3xl relative overflow-hidden py-20">
        <div className="w-fit h-fit p-2 pl-10 bg-background absolute top-0 right-0 rounded-bl-3xl">
          <div className="h-full aspect-square bg-primary z-10 absolute top-0 -left-[calc(10%+1.45rem)] rounded-tr-3xl"></div>
          <div className="h-full aspect-square bg-primary z-10 absolute right-0 -bottom-[calc(60%+1.45rem)] rounded-tr-3xl"></div>
          <div className="h-full aspect-square bg-background absolute top-0 -left-[calc(10%+1.45rem)]"></div>
          <div className="h-full aspect-square bg-background absolute right-0 -bottom-[calc(60%+1.45rem)]"></div>
          <a
            href="#"
            className="inline-flex items-center space-x-1 font-light group transition-none pt-3 pb-1.5 | lg:pt-1.5 lg:pb-3"
          >
            <div className="text-xs | lg:text-base">
              Sh*t I've gone too far, send me back up
            </div>
            <div className="animate-bounce">👆</div>
          </a>
        </div>
        <div className="w-fit h-fit p-2 bg-background absolute top-0 left-0 flex flex-col items-center gap-2 rounded-br-3xl">
          <div className="w-full aspect-square bg-background absolute top-0 -right-full"></div>
          <div className="w-full aspect-square bg-primary z-10 rounded-tl-3xl absolute top-0 -right-full"></div>
          <div className="w-full aspect-square bg-primary z-10 absolute right-0 -bottom-[calc(40%-0.3rem)] rounded-tl-3xl"></div>
          <div className="w-full aspect-square bg-background absolute right-0 -bottom-[calc(40%-0.3rem)]"></div>

          {/* main content */}
          <div className="w-10 h-10 bg-lime-300 text-primary hover:bg-primary hover:text-background transition-all duration-300 ease-in-out rounded-full flex items-center justify-center">
            <Github className="w-5 h-5" />
          </div>
          <div className="w-10 h-10 bg-lime-300 text-primary hover:bg-primary hover:text-background transition-all duration-300 ease-in-out rounded-full flex items-center justify-center">
            <Linkedin className="w-5 h-5" />
          </div>
          <div className="w-10 h-10 bg-lime-300 text-primary hover:bg-primary hover:text-background transition-all duration-300 ease-in-out rounded-full flex items-center justify-center">
            <Instagram className="w-5 h-5" />
          </div>
        </div>

        {/* main content footer */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center py-20 lg:py-32 px-5 lg:px-20 lg:ml-10 gap-10 lg:gap-5">
          <div className="w-full lg:w-fit lg:mr-40 flex flex-col items-center lg:items-start">
            <h2 className="text-3xl md:text-4xl lg:text-6xl text-background leading-tight mb-8 text-balance max-w-[300px] md:max-w-none text-center lg:text-left">
              Do you like what you see?
            </h2>
            <ButtonGooey className="w-[260px] sm:w-[200px]">Start a Project</ButtonGooey>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-5">
            <div className="">
              <div className="text-gray-200 font-light mb-5 lg:mb-3 text-sm md:text-base">
                Learn
              </div>
              <LinkItem>About</LinkItem>
              <LinkItem>Cultures</LinkItem>
              <LinkItem>Testimonials</LinkItem>
              <LinkItem>Processes</LinkItem>
              <LinkItem>FAQs</LinkItem>
            </div>
            <div className="">
              <div className="text-gray-200 font-light mb-5 lg:mb-3 text-sm md:text-base">
                Explore
              </div>
              <LinkItem>Home</LinkItem>
              <LinkItem>Works</LinkItem>
              <LinkItem>Services</LinkItem>
              <LinkItem>Careers</LinkItem>
              <LinkItem>Sectors</LinkItem>
              <LinkItem>Contracts</LinkItem>
            </div>
            <div className="col-span-1 sm:col-span-2 lg:col-span-1">
              <div className="text-gray-200 font-light mb-5 lg:mb-3 text-sm md:text-base">
                Get in Touch
              </div>
              <LinkItem icon={<Phone className="w-4 h-4" />}>
                01942 894 596
              </LinkItem>
              <LinkItem icon={<Mail className="w-4 h-4" />}>
                info@example.com
              </LinkItem>
              <LinkItem icon={<MapPin className="w-4 h-4" />}>
                1234 Main St, Anytown, USA
              </LinkItem>
            </div>
          </div>
        </div>

        <div className="w-full justify-center pb-10 px-5">
          <div className="text-background leading-none tracking-tight text-4xl md:text-6xl lg:text-9xl text-center">
            Crafting since 2024
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
