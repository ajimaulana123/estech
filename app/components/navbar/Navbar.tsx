"use client";
import { useState, useEffect } from "react";
import NavbarBrand from "./NavbarBrand";
import NavbarMenu from "./NavbarMenu";
import ShinyButton from "@/components/ui/shiny-button";
import { cn } from "@/lib/utils";
import ButtonGooey from "../ButtonGooey";

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
        <ButtonGooey className="w-48">Lets Talk With Us</ButtonGooey>
      </div>
    </nav>
  );
};

export default Navbar;
