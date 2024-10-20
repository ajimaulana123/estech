import React from "react";
import ButtonFounder from "./ButtonFounder";

const HeroSection = () => {
  return (
    <section className="container w-full aspect-video relative p-5">
      <div className="container w-full aspect-video grid grid-cols-1 md:grid-cols-2 items-end rounded-3xl relative">
        <div className="relative hidden md:block w-full h-[70%] rounded-l-3xl">
          <div className="absolute z-10 -top-[calc(40%+1rem)] left-0 w-fit h-fit rounded-br-3xl bg-transparent text-primary">
            <h1 className="text-6xl lg:text-8xl flex flex-col">
              <span className="bg-background p-2 w-fit relative text-ellipsis text-nowrap">
                A web design and
                <svg
                  id="Layer_1"
                  className="w-9 h-9 text-background z-30 fill-current absolute top-1 lg:top-0 -right-[35px]"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  y="0"
                  viewBox="0 0 100 100"
                >
                  <path d="M51.9 0v1.9c-27.6 0-50 22.4-50 50H0V0h51.9z"></path>
                </svg>
                <svg
                  id="Layer_1"
                  className="w-9 h-9 text-background z-30 fill-current absolute -bottom-2.5 md:-bottom-0.5 lg:bottom-0 -right-[35px] -rotate-90"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  y="0"
                  viewBox="0 0 100 100"
                >
                  <path d="M51.9 0v1.9c-27.6 0-50 22.4-50 50H0V0h51.9z"></path>
                </svg>
              </span>
              <span className="bg-background p-2 w-fit rounded-r-3xl text-ellipsis text-nowrap">
                branding agency in
              </span>
              <span className="relative bg-background p-2 w-fit text-ellipsis text-nowrap rounded-br-3xl">
                Manchester
                <svg
                  id="Layer_1"
                  className="w-9 h-9 text-background z-30 fill-current absolute top-0 -right-[36px]"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  y="0"
                  viewBox="0 0 100 100"
                >
                  <path d="M51.9 0v1.9c-27.6 0-50 22.4-50 50H0V0h51.9z"></path>
                </svg>
                <svg
                  id="Layer_1"
                  className="w-9 h-9 text-background z-30 fill-current absolute -bottom-[36px] left-0"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  y="0"
                  viewBox="0 0 100 100"
                >
                  <path d="M51.9 0v1.9c-27.6 0-50 22.4-50 50H0V0h51.9z"></path>
                </svg>
              </span>
            </h1>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-full h-full rounded-3xl">
          <ButtonFounder />
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
