"use client";

import React, { FC, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface WrapperSectionProps {
  children: React.ReactNode;
  id: string;
}

const WrapperSection: FC<WrapperSectionProps> = ({ children, id }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
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
        ref={ref}
        className={`min-h-screen relative snap-center lg:w-[75rem] mx-auto flex flex-col items-center border ${
          id === "home" ? "justify-start lg:justify-center" : "justify-center"
        }`}
      >
        {children}
      </motion.section>
    </>
  );
};

export default WrapperSection;
