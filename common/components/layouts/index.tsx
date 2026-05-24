"use client";

import dynamic from "next/dynamic";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Notif = dynamic(() => import("../elements/Notif"), { ssr: false });

interface LayoutsProps {
  children: React.ReactNode;
}

const Layouts = ({ children }: LayoutsProps) => {
  useEffect(() => {
    AOS.init({ duration: 800, delay: 50 });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 md:px-8 pt-24 pb-8">
        {children}
      </main>
      <Footer />
      <Notif />
    </div>
  );
};

export default Layouts;
