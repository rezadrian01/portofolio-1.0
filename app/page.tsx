import Image from "next/image";
import Navbar from "./components/navbar";
import { SUBTITLE, TITLE } from "@/data/home-section";
import WrapperSection from "./components/wrapper-section";
import { CONTENTS } from "@/data/about-section";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen overflow-y-auto overflow-x-hidden px-6 snap-y snap-mandatory">
        <Navbar />
        <WrapperSection id="home">
          {/* Absolute elements */}
          <div className="bg-[#83A7B3] absolute -top-[25rem] left-1/2 -translate-x-1/2 w-[40rem] aspect-square rounded-full blur-[15rem] -z-10" />
          <div className="bg-[#9E68B5] absolute top-3/4 -translate-y-1/2 -right-[30rem] w-[45rem] aspect-square rounded-full blur-[15rem] -z-10" />

          {/* Content */}
          <div className="flex flex-col lg:flex-row-reverse items-center justify-start lg:gap-28 lg:justify-between h-full gap-2 md:gap-4 pt-6 md:pt-28 lg:pt-0">
            <div className="aspect-square  rounded-full border-2 border-main-color shadow-md overflow-hidden">
              <Image
                className="w-[15rem] md:w-[500px] mx-auto object-cover"
                src="/images/hero.png"
                alt="profile-photo"
                width={500}
                height={500}
                priority
                draggable={false}
              />
            </div>
            <div className="space-y-2 md:space-y-4 max-w-[40rem]">
              <h1 className="text-3xl md:text-5xl font-bold tracking-wide">
                {TITLE}
              </h1>
              <p className="text-base md:text-xl">{SUBTITLE}</p>
              <div>
                <button className="bg-[#6D96B6] hover:bg-[#5A7B94] py-2 px-8 rounded">
                  Download My CV
                </button>
              </div>
            </div>
          </div>
        </WrapperSection>

        <WrapperSection id="about">
          {/* Absolute elements */}
          <div className="bg-[#FFDFA8] absolute -translate-y-1/2 top-1/2 -left-[10rem] w-[40rem] h-[10rem] -rotate-45 rounded-full blur-[10rem] -z-10" />
          <div className="bg-[#83B3AB] absolute -translate-y-1/2 top-3/4 -translate-x-1/2 left-1/2 w-[80rem] aspect-square rounded-full blur-[10rem] -z-10 opacity-20" />

          {/* Content */}
          <div className="flex flex-col lg:flex-row items-center justify-start lg:gap-28 lg:justify-between h-full gap-2 md:gap-4 pt-6 md:pt-28 lg:pt-0 ">
            <div className="aspect-square rounded-xl shadow-md overflow-hidden">
              <Image
                className="w-[15rem] md:w-[500px] mx-auto object-cover hover:scale-110 transition-all cursor-pointer"
                src="/images/about.jpg"
                alt="profile-photo"
                width={500}
                height={500}
                priority
                draggable={false}
              />
            </div>
            <div className="space-y-2 md:space-y-4 max-w-[40rem]">
              <h1 className="text-3xl md:text-5xl font-bold tracking-wide text-[#6D96B6] underline underline-offset-4 lg:underline-offset-[12px]">
                About Me
              </h1>
              {CONTENTS.map((content, index) => {
                return (
                  <p className="text-base md:text-xl" key={index}>
                    {content.text}
                  </p>
                );
              })}
            </div>
          </div>
        </WrapperSection>

        <WrapperSection id="expertise">
          {/* Absolute elements */}
          <div className="bg-[#83B3AB] absolute -translate-y-1/2 top-1/2 -right-[10rem] w-[40rem] aspect-square rounded-full blur-[10rem] -z-10" />
          Content 3
        </WrapperSection>
        <WrapperSection id="projects">Content 4</WrapperSection>
        <WrapperSection id="contact">
          {/* Absolute elements */}
          <div className="bg-[#83B3AB] absolute -translate-y-1/2 top-1/2 -right-[30rem] w-[40rem] aspect-square rounded-full blur-[10rem] -z-10" />
          <div className="bg-[#DA4DF1] absolute -translate-y-1/2 top-1/2 -left-[30rem] w-[40rem] aspect-square rounded-full blur-[10rem] -z-10 opacity-50" />
          Content 5
        </WrapperSection>
      </div>
    </>
  );
}
