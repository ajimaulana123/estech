import React from "react";
import Link from "next/link";
import {
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

const NavbarWork: React.FC = () => {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild className="relative group">
        <Link href="/work" className="font-medium text-sm mr-4 before:content-[''] before:w-[150%] before:h-full before:bg-lime-500 before:absolute before:left-1/2 before:-translate-x-1/2 before:top-0 before:-z-10 before:blur-md before:opacity-0 before:hover:opacity-100 before:transition-opacity before:duration-300">
          Pekerjaan
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

export default NavbarWork;