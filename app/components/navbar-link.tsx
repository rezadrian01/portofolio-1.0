"use client";

import Link from "next/link";
import React, { FC } from "react";

interface NavbarLinkProps {
  href: string;
  content: string;
  icon: React.ReactNode;
}

const NavbarLink: FC<NavbarLinkProps> = ({ href, content, icon }) => {
  return (
    <li className="hover:scale-110 transition-all">
      <Link href={href}>
        <span className="hidden md:block">{content}</span>
        <span className="block md:hidden">{icon}</span>
      </Link>
    </li>
  );
};

export default NavbarLink;
