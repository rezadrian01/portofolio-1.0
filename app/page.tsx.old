"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
import { NAVBAR_LINKS } from "@/data/navbar";
import Link from "next/link";
import {
  GET_DEFAULT_REVEAL_VARIANTS,
  GET_REVEAL_VARIANTS,
} from "./lib/animation-variants";
import ContactSection from "./components/Sections/ContactSection";

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
          <div className="flex flex-col lg:flex-row-reverse items-center justify-start lg:justify-between h-full gap-2 md:gap-4 pt-10 md:pt-16 lg:pb-32 lg:w-full">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 100,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.1,
                  },
                },
              }}
              initial="hidden"
              animate="visible"
              className="aspect-square rounded-full border-2 border-main-color shadow-md overflow-hidden relative"
            >
              <Image
                className="w-[15rem] md:w-[500px] mx-auto object-cover"
                src="/images/hero_img_croped.png"
                alt="profile-photo"
                width={500}
                height={500}
                priority
                draggable={false}
              />
              <motion.span
                variants={{
                  hidden: {
                    left: "0%",
                  },
                  visible: {
                    left: "100%",
                    transition: {
                      delay: 0.5,
                    },
                  },
                }}
                initial="hidden"
                animate="visible"
                className="absolute bg-main-color inset-0"
              />
            </motion.div>
            <div className="space-y-2 md:space-y-4 max-w-[40rem]">
              <motion.h1
                variants={GET_DEFAULT_REVEAL_VARIANTS()}
                initial="hidden"
                animate="visible"
                className="text-3xl md:text-6xl font-bold tracking-wide relative"
              >
                {TITLE_HOME_SECTION}
                <motion.span
                  variants={{
                    hidden: {
                      left: "0%",
                    },
                    visible: {
                      left: "100%",
                      transition: {
                        delay: 0.5,
                      },
                    },
                  }}
                  initial="hidden"
                  animate="visible"
                  className="absolute bg-main-color inset-0"
                />
              </motion.h1>
              <motion.p
                variants={GET_DEFAULT_REVEAL_VARIANTS(0.5)}
                initial="hidden"
                animate="visible"
                className="text-base md:text-xl relative"
              >
                {SUBTITLE}
                <motion.span
                  variants={{
                    hidden: {
                      left: "0%",
                    },
                    visible: {
                      left: "100%",
                      transition: {
                        delay: 0.7,
                      },
                    },
                  }}
                  initial="hidden"
                  animate="visible"
                  className="absolute bg-main-color inset-0"
                />
              </motion.p>
              <div>
                <motion.button
                  onClick={() =>
                    window.open("cv/2/2.0.2/Ahmad_Reza_Adrian_CV.pdf", "_blank")
                  }
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 100,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: 0.9,
                      },
                    },
                  }}
                  initial="hidden"
                  animate="visible"
                  className="bg-[#6D96B6] hover:bg-[#5A7B94] py-2 px-8 rounded"
                >
                  Download My CV
                </motion.button>
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
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <motion.div
                variants={GET_DEFAULT_REVEAL_VARIANTS(0.15)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="aspect-square rounded-xl shadow-md overflow-hidden relative"
              >
                <Image
                  className="w-[15rem] md:w-[500px] mx-auto object-cover hover:scale-110 transition-all cursor-pointer"
                  src="/images/about.jpg"
                  alt="profile-photo"
                  width={500}
                  height={500}
                  priority
                  draggable={false}
                />
                <motion.span
                  variants={GET_REVEAL_VARIANTS(0.2)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="absolute bg-main-color inset-0"
                />
              </motion.div>
            </div>

            <div className="flex flex-col gap-2 md:gap-4 lg:w-1/2 max-w-[40rem]">
              <motion.h1
                variants={GET_DEFAULT_REVEAL_VARIANTS(0.2)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-3xl mb-2 md:mb-6 md:text-5xl font-bold tracking-wide text-[#6D96B6] underline underline-offset-4 lg:underline-offset-[12px] relative"
              >
                About Me
                <motion.span
                  variants={GET_REVEAL_VARIANTS(0.4)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="absolute bg-main-color inset-0  lg:-top-6 lg:-bottom-6"
                />
              </motion.h1>
              {CONTENTS.map((content, index) => {
                return (
                  <motion.p
                    variants={GET_DEFAULT_REVEAL_VARIANTS(index * 0.3)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-base md:text-xl relative"
                    key={index}
                  >
                    {content.text}
                    <motion.span
                      variants={GET_REVEAL_VARIANTS(index * 0.65)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="absolute bg-main-color inset-0"
                    />
                  </motion.p>
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
              <motion.h1
                variants={GET_DEFAULT_REVEAL_VARIANTS()}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-3xl mb-2 md:mb-6 md:text-5xl font-bold tracking-wide text-[#6D96B6] underline underline-offset-4 lg:underline-offset-[12px] relative"
              >
                My Expertise
                <motion.span
                  variants={GET_REVEAL_VARIANTS()}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="absolute bg-main-color inset-0 lg:-bottom-6 lg:-top-6"
                />
              </motion.h1>
              <motion.p
                variants={GET_DEFAULT_REVEAL_VARIANTS(0.4)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-base md:text-xl relative"
              >
                {EXPERTISE_TITLE}
                <motion.span
                  variants={GET_REVEAL_VARIANTS(0.45)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="absolute bg-main-color inset-0"
                />
              </motion.p>
              <motion.p
                variants={GET_DEFAULT_REVEAL_VARIANTS(0.4)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-base md:text-xl relative"
              >
                {EXPERTISE_DESC}
                <motion.span
                  variants={GET_REVEAL_VARIANTS(0.65)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="absolute bg-main-color inset-0"
                />
              </motion.p>
            </div>

            <div className="flex flex-col gap-2 md:gap-4 lg:w-1/2 max-w-[40rem] mt-10 lg:mt-0">
              <div className="grid grid-cols-2 gap-4 md:gap-4">
                {EXPERTISES.map((expertise, index) => {
                  return (
                    <motion.div
                      variants={GET_DEFAULT_REVEAL_VARIANTS(
                        (index + 0.2) * 0.2
                      )}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
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
                      <h3 className="text-[#6D96B6] font-bold relative">
                        {expertise.title}
                        <motion.span
                          variants={GET_REVEAL_VARIANTS((index + 0.35) * 0.2)}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          className="absolute bg-secondary-color-500 inset-0"
                        />
                      </h3>
                      <p className="relative">
                        {expertise.description}
                        <motion.span
                          variants={GET_REVEAL_VARIANTS((index + 0.35) * 0.3)}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          className="absolute bg-secondary-color-500 inset-0"
                        />
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </WrapperSection>
        <WrapperSection id="projects">
          {/* Content */}
          <div className="flex flex-col items-center justify-start lg:justify-between h-full gap-2 md:gap-4 pt-10 md:pt-10 lg:pt-0 md:w-full max-w-[40rem] lg:max-w-[70rem]">
            <div className="text-left md:text-center mb-10 md:pt-2">
              <motion.h1
                variants={GET_DEFAULT_REVEAL_VARIANTS()}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-3xl mb-2 md:mb-6 md:text-5xl font-bold tracking-wide text-[#6D96B6] underline underline-offset-4 lg:underline-offset-[12px] relative"
              >
                My Projects
                <motion.span
                  variants={GET_REVEAL_VARIANTS()}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="absolute bg-main-color inset-0 lg:-top-6 lg:-bottom-6"
                />
              </motion.h1>
              <motion.p
                variants={GET_DEFAULT_REVEAL_VARIANTS(0.4)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-base md:text-xl relative"
              >
                {PROJECTS_DESC}
                <motion.span
                  variants={GET_REVEAL_VARIANTS(0.6)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="absolute bg-main-color inset-0"
                />
              </motion.p>
            </div>
            {/* Projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full overflow-hidden">
              {PROJECTS.map((project, index) => {
                return (
                  <ProjectCard key={index} project={project} index={index} />
                );
              })}
            </div>
          </div>
        </WrapperSection>
        <ContactSection />
        {/* Footer */}
        <footer className="bg-main-color absolute inset-x-0 flex flex-col gap-10  px-10 py-24 text-center">
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
        </footer>
      </div>
    </>
  );
}
