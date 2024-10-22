import Link from "next/link";
import React from "react";

const NavbarBrand = () => {
  return (
    <Link href="/">
      <img src="/brand.svg" alt="logo" className="w-28" />;
    </Link>
  );
};

export default NavbarBrand;
