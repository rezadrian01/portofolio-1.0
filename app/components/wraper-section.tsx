import React, { FC } from "react";

interface WrapperSectionProps {
  children: React.ReactNode;
}

const WrapperSection: FC<WrapperSectionProps> = ({ children }) => {
  return (
    <section className="h-[100vh] relative border border-black">
      {children}
    </section>
  );
};

export default WrapperSection;
