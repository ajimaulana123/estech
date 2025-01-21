import Link from "next/link";
import Image from "next/image";
import React from "react";

const NavbarBrand = () => {
  return (
    <Link href="/" className="flex items-center">
      <Image 
        src="/logo.jpg" 
        alt="Brand Logo"
        width={120}
        height={40}
        className="h-10 w-10 rounded-full object-cover"
        priority
      />
    </Link>
  );
};

export default NavbarBrand;
