import { NAVBAR_LINKS } from "@/data/navbar";
import Link from "next/link";
import React from "react";
import NavbarLink from "./navbar-link";

const Navbar = () => {
  return (
    <nav className="fixed -translate-x-1/2 left-1/2 bottom-4 md:top-4 px-4 md:px-[4rem] md:gap-[4rem] flex items-center justify-center h-14 md:h-16 bg-main-color/40 text-slate-200 backdrop-blur-sm z-20 rounded-full">
      <ul className="flex items-center justify-center gap-8 md:gap-[4rem] text-xs md:text-lg">
        {NAVBAR_LINKS.map((link, index) => {
          return (
            <NavbarLink
              key={index}
              content={link.content}
              href={link.href}
              icon={<link.icon />}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
