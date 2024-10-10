import { NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu';
import Link from 'next/link';
import React from 'react'

const NavbarContact: React.FC = () => {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild className="relative group">
        <Link
          href="/contact"
          className="font-medium text-sm mr-4 before:content-[''] before:w-[150%] before:h-full before:bg-lime-500 before:absolute before:left-1/2 before:-translate-x-1/2 before:top-0 before:-z-10 before:blur-md before:opacity-0 before:hover:opacity-100 before:transition-opacity before:duration-300"
        >
          Contact
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

export default NavbarContact