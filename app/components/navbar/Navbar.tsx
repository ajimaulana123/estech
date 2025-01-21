"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import NavbarBrand from "./NavbarBrand";
import NavbarMenu from "./NavbarMenu";
import { cn } from "@/lib/utils";
import ButtonGooey from "../ButtonGooey";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.getElementById('mobile-menu');
      if (isOpen && nav && !nav.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Handle scroll lock when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close menu when route changes
  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false);
    };

    window.addEventListener('popstate', handleRouteChange);
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return (
    <>
      {/* Backdrop and Mobile Menu */}
      {isOpen && (
        <>
          {/* Backdrop - acts as click outside area */}
          <div 
            className="fixed inset-0 bg-transparent z-[99997]"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Mobile Menu */}
          <div 
            id="mobile-menu"
            className="fixed inset-y-0 left-0 w-[80%] max-w-sm bg-background/95 backdrop-blur-sm z-[99998] md:hidden border-r border-primary/10 shadow-xl overflow-y-auto"
          >
            <div className="h-full px-6">
              <div className="flex flex-col h-full pt-20 pb-6">
                <div className="flex-1">
                  <NavbarMenu 
                    className="flex flex-col items-stretch gap-4" 
                    onNavigate={() => setIsOpen(false)} 
                  />
                </div>
                <div className="border-t border-primary/10 pt-6">
                  <ButtonGooey className="w-48 h-12 text-base">Let's Talk With Us</ButtonGooey>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Main Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[99999] flex justify-center px-4 md:px-8 py-2">
        <div className={cn(
          "flex items-center justify-between transition-all duration-300 relative w-full",
          scrolled
            ? "md:w-[80%] bg-background/50 backdrop-blur-sm rounded-full border border-primary/10 px-3 md:px-5"
            : "w-full"
        )}>
          <NavbarBrand />
          
          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden relative z-[99999]">
            <button 
              className="p-2.5 hover:bg-accent/80 rounded-xl border border-primary/10 backdrop-blur-sm"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <Menu size={20} />
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4">
            <NavbarMenu />
            <ButtonGooey className="w-48 h-11">Let's Talk With Us</ButtonGooey>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
