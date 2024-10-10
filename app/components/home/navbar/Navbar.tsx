"use client";
import { useState, useEffect } from "react";
import NavbarBrand from "./NavbarBrand";
import NavbarMenu from "./NavbarMenu";
import ShinyButton from "@/components/ui/shiny-button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100; // Adjust this value as needed
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-8 py-2">
      <div
        className={cn(
          "flex items-center justify-between transition-all duration-300",
          scrolled
            ? "w-[80%] bg-background/50 backdrop-blur-sm rounded-full border border-primary/10 px-5"
            : "w-full"
        )}
      >
        <NavbarBrand />
        <NavbarMenu />
        <ShinyButton
          className={cn(
            "text-xs rounded-md tracking-wider bg-lime-300 hover:bg-lime-400 text-primary font-normal dark:text-primary-foreground transition-all duration-300 ease-in-out before:content-[''] before:absolute before:inset-0 before:bg-lime-400 before:blur-lg before:opacity-0 before:hover:opacity-100 before:transition-opacity before:duration-300",
            scrolled ? "rounded-full px-5" : "hover:rounded-[24px]"
          )}
        >
          Lets Talk With Us
        </ShinyButton>
      </div>
    </nav>
  );
};

export default Navbar;
