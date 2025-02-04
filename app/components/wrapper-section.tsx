"use client";

import React, { FC } from "react";
import { motion } from "framer-motion";

interface WrapperSectionProps {
  children: React.ReactNode;
  id: string;
}

const WrapperSection: FC<WrapperSectionProps> = ({ children, id }) => {
  return (
    <>
      <motion.section
        variants={{
          hidden: {
            opacity: 0,
            y: 100,
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.3,
            },
          },
        }}
        // initial="hidden"
        // animate={mainControls}
        id={id}
        className={`min-h-screen relative snap-center lg:w-[75rem] mx-auto flex flex-col items-center ${
          id === "home" ? "justify-start lg:justify-center" : "justify-center"
        }`}
      >
        {children}
      </motion.section>
    </>
  );
};

export default WrapperSection;
