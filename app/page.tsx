import Image from "next/image";
import Navbar from "./components/navbar";
import { SUBTITLE, TITLE as TITLE_HOME_SECTION } from "@/data/home-section";
import WrapperSection from "./components/wrapper-section";
import { CONTENTS } from "@/data/about-section";
import {
  DESC as EXPERTISE_DESC,
  EXPERTISES,
  TITLE as EXPERTISE_TITLE,
} from "@/data/expertise";
import { DESC as PROJECTS_DESC, PROJECTS } from "@/data/projects";
import ProjectCard from "./components/project-card";
import {
  TITLE as CONTACT_TITLE,
  DESC as CONTACT_DESC,
  ADDRESS,
  EMAIL,
  PHONE,
  FORM_DESC,
  FORM_INPUT,
} from "@/data/contact";
import ContactCard from "./components/contact-card";
import SocialMedia from "./components/social-media";
import Input from "./components/input";
import SendButton from "./components/send-button";
import { NAVBAR_LINKS } from "@/data/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="relative w-full h-screen overflow-y-auto overflow-x-hidden px-6 snap-mandatory space-y-10">
        <Navbar />
        <WrapperSection id="home">
          {/* Absolute elements */}
          <div className="bg-[#83A7B3] absolute -top-[25rem] left-1/2 -translate-x-1/2 w-[40rem] aspect-square rounded-full blur-[15rem] -z-10" />
          <div className="bg-[#9E68B5] absolute top-3/4 -translate-y-1/2 -right-[30rem] w-[45rem] aspect-square rounded-full blur-[15rem] -z-10" />

          {/* Content */}
          <div className="flex flex-col lg:flex-row-reverse items-center justify-start lg:justify-between h-full gap-2 md:gap-4 pt-10 md:pt-28 lg:pb-32 lg:w-full">
            <div className="aspect-square rounded-full border-2 border-main-color shadow-md overflow-hidden">
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
                {TITLE_HOME_SECTION}
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
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between h-full gap-2 md:gap-4 pt-6 md:pt-28 lg:pt-0 lg:w-full">
            <div className="w-1/2 flex items-center justify-center">
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
            </div>

            <div className="flex flex-col gap-2 md:gap-4 lg:w-1/2 max-w-[40rem]">
              <h1 className="text-3xl mb-2 md:mb-6 md:text-5xl font-bold tracking-wide text-[#6D96B6] underline underline-offset-4 lg:underline-offset-[12px]">
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

          {/* Content */}
          <div className="flex flex-col lg:flex-row items-center justify-start lg:justify-between h-full gap-2 md:gap-4 pt-10 md:pt-28 lg:pt-0 lg:w-full">
            <div className="lg:w-1/2 max-w-[40rem] flex flex-col gap-4 text-left">
              <h1 className="text-3xl mb-2 md:mb-6 md:text-5xl font-bold tracking-wide text-[#6D96B6] underline underline-offset-4 lg:underline-offset-[12px]">
                My Expertise
              </h1>
              <p className="text-base md:text-xl">{EXPERTISE_TITLE}</p>
              <p className="text-base md:text-xl">{EXPERTISE_DESC}</p>
            </div>

            <div className="flex flex-col gap-2 md:gap-4 lg:w-1/2 max-w-[40rem] mt-10 lg:mt-0">
              <div className="grid grid-cols-2 gap-4 md:gap-4">
                {EXPERTISES.map((expertise, index) => {
                  return (
                    <div
                      className="bg-main-color flex flex-col gap-1 p-3 lg:p-6 rounded-md text-base md:text-xl"
                      key={index}
                      style={{
                        marginBottom: index % 2 === 0 ? "1.5rem" : "0",
                        marginTop: index % 2 === 0 ? "-1.5rem" : "0",
                      }}
                    >
                      <div className="bg-slate-200 aspect-square max-w-[4rem] flex items-center justify-center rounded">
                        <expertise.icon color="#6D96B6" size={30} />
                      </div>
                      <h3 className="text-[#6D96B6] font-bold">
                        {expertise.title}
                      </h3>
                      <p>{expertise.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </WrapperSection>
        <WrapperSection id="projects">
          {/* Content */}
          <div className="flex flex-col items-center justify-start lg:justify-between h-full gap-2 md:gap-4 pt-10 md:pt-10 lg:pt-0 md:w-full max-w-[40rem] lg:max-w-[70rem]">
            <div className="text-left md:text-center mb-10 md:pt-20">
              <h1 className="text-3xl mb-2 md:mb-6 md:text-5xl font-bold tracking-wide text-[#6D96B6] underline underline-offset-4 lg:underline-offset-[12px]">
                My Projects
              </h1>
              <p className="text-base md:text-xl">{PROJECTS_DESC}</p>
            </div>
            {/* Projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
              {PROJECTS.map((project, index) => {
                return <ProjectCard key={index} project={project} />;
              })}
            </div>
          </div>
        </WrapperSection>
        <WrapperSection id="contact">
          {/* Absolute elements */}
          <div className="bg-[#83B3AB] absolute -translate-y-1/2 top-1/2 -right-[30rem] w-[40rem] aspect-square rounded-full blur-[10rem] -z-10" />
          <div className="bg-[#DA4DF1] absolute -translate-y-1/2 top-1/2 -left-[30rem] w-[40rem] aspect-square rounded-full blur-[10rem] -z-10 opacity-50" />
          {/* Content */}
          <div className="flex flex-col items-center justify-center h-full gap-2 md:gap-4 pt-10 lg:pt-0 pb-32 md:pb-0 max-w-[40rem] lg:max-w-[70rem]">
            <div className="bg-main-color p-6 md:p-10 rounded shadow grid grid-cols-1 md:grid-cols-2 gap-4">
              <h1 className="col-span-1 md:col-span-2 lg:col-span-3 text-3xl mb-2 md:mb-4 md:text-5xl font-bold tracking-wide text-[#6D96B6] ">
                {CONTACT_TITLE}
              </h1>
              <div className="flex flex-col gap-4">
                <p className="text-base md:text-xl">{CONTACT_DESC}</p>
                <div className="space-y-4 mb-4">
                  <ContactCard name="Address" content={ADDRESS} />
                  <ContactCard name="Email" content={EMAIL} />
                  <ContactCard name="Phone" content={PHONE} />
                </div>
                <SocialMedia />
              </div>
              <div className="flex flex-col items-center justify-start">
                <form className="flex flex-col gap-4">
                  <h5 className="text-base md:text-lg">{FORM_DESC}</h5>
                  <div className="w-full flex flex-col gap-4 mt-4">
                    {FORM_INPUT.map((field, index) => {
                      return (
                        <Input
                          key={index}
                          id={field.id}
                          type={field.type}
                          name={field.name}
                          placeholder={field.placeholder}
                        />
                      );
                    })}
                  </div>
                  <div className="flex justify-start">
                    <SendButton />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </WrapperSection>
        <div className="bg-main-color absolute inset-x-0 flex flex-col gap-10  px-10 py-24 text-center">
          <ul className="flex justify-center items-center gap-4 md:gap-16">
            {NAVBAR_LINKS.map((link, index) => {
              return (
                <li className="hover:underline" key={index}>
                  <Link href={link.href}>{link.content}</Link>
                </li>
              );
            })}
          </ul>
          <p>Copyright &#169; 2025 Ahmad Reza Adrian</p>
        </div>
      </div>
    </>
  );
}
