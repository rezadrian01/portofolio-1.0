import React, { FC } from "react";

interface WrapperSectionProps {
  children: React.ReactNode;
  id: string;
}

const WrapperSection: FC<WrapperSectionProps> = ({ children, id }) => {
  return (
    <section id={id} className="h-screen relative snap-center ">
      {children}
    </section>
  );
};

export default WrapperSection;
