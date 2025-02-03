import Image from "next/image";
import WrapperSection from "./components/wraper-section";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <>
      <div className="h-[500vh] w-full overflow-hidden">
        <Navbar />
        <WrapperSection>
          {/* Absolute elements */}
          <div className="bg-[#83A7B3] absolute -top-[25rem] left-1/2 -translate-x-1/2 w-[40rem] aspect-square rounded-full blur-[15rem] -z-10" />
          <div className="bg-[#9E68B5] absolute top-3/4 -translate-y-1/2 -right-[30rem] w-[45rem] aspect-square rounded-full blur-[15rem] -z-10" />
          Content 1
        </WrapperSection>

        <WrapperSection>
          {/* Absolute elements */}
          <div className="bg-[#FFDFA8] absolute -translate-y-1/2 top-1/2 -left-[10rem] w-[40rem] h-[10rem] -rotate-45 rounded-full blur-[10rem] -z-10" />
          <div className="bg-[#83B3AB] absolute -translate-y-1/2 top-3/4 -translate-x-1/2 left-1/2 w-[80rem] aspect-square rounded-full blur-[10rem] -z-10 opacity-20" />
          Content 2
        </WrapperSection>

        <WrapperSection>
          {/* Absolute elements */}
          <div className="bg-[#83B3AB] absolute -translate-y-1/2 top-1/2 -right-[10rem] w-[40rem] aspect-square rounded-full blur-[10rem] -z-10" />
          Content 3
        </WrapperSection>
        <WrapperSection>Content 4</WrapperSection>
        <WrapperSection>
          {/* Absolute elements */}
          <div className="bg-[#83B3AB] absolute -translate-y-1/2 top-1/2 -right-[30rem] w-[40rem] aspect-square rounded-full blur-[10rem] -z-10" />
          <div className="bg-[#DA4DF1] absolute -translate-y-1/2 top-1/2 -left-[30rem] w-[40rem] aspect-square rounded-full blur-[10rem] -z-10 opacity-50" />
          Content 5
        </WrapperSection>
      </div>
    </>
  );
}
