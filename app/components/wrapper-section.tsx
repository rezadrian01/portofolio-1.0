import React, { FC } from "react";

interface WrapperSectionProps {
  children: React.ReactNode;
  id: string;
  last?: boolean;
}

const WrapperSection: FC<WrapperSectionProps> = ({
  children,
  id,
  last = false,
}) => {
  return (
    <>
      <section
        id={id}
        className={`min-h-screen relative snap-center lg:w-[75rem] mx-auto flex flex-col items-center ${
          id === "home" ? "justify-start lg:justify-center" : "justify-center"
        }`}
      >
        {children}
      </section>
    </>
  );
};

export default WrapperSection;
