"use client";

import { motion } from "framer-motion";

import Input from "../../input";
import SendButton from "../../send-button";
import SocialMedia from "../../social-media";
import ContactCard from "../../contact-card";
import WrapperSection from "../../wrapper-section";
import {
  GET_DEFAULT_REVEAL_VARIANTS,
  GET_REVEAL_VARIANTS,
} from "@/app/lib/animation-variants";

import {
  TITLE as CONTACT_TITLE,
  DESC as CONTACT_DESC,
  ADDRESS,
  EMAIL,
  PHONE,
  FORM_DESC,
  FORM_INPUT,
} from "@/data/contact";
import { useState } from "react";

const ContactSection = () => {
  const [sendStatus, setSendStatus] = useState<undefined | boolean>();
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = (e: any) => {
    setIsLoading(true);
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    fetch("/api/send-message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(() => {
        setIsLoading(false);
        setSendStatus(true);
        e.target.reset();
        // Remove status message after 5 seconds
        setTimeout(() => {
          setSendStatus(undefined);
        }, 5000);
      })
      .catch(() => {
        setSendStatus(false);
        // Remove status message after 5 seconds
        setTimeout(() => {
          setSendStatus(undefined);
        }, 5000);
      });
  };

  return (
    <WrapperSection id="contact">
      {/* Absolute elements */}
      <div className="bg-[#83B3AB] absolute -translate-y-1/2 top-1/2 -right-[30rem] w-[40rem] aspect-square rounded-full blur-[10rem] -z-10" />
      <div className="bg-[#DA4DF1] absolute -translate-y-1/2 top-1/2 -left-[30rem] w-[40rem] aspect-square rounded-full blur-[10rem] -z-10 opacity-50" />

      {/* Content */}
      <div className="flex flex-col items-center justify-center h-full gap-2 md:gap-4 pt-10 lg:pt-0 pb-32 md:pb-0 max-w-[40rem] lg:max-w-[70rem]">
        <div className="bg-main-color p-6 md:p-10 rounded shadow grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.h1
            variants={GET_DEFAULT_REVEAL_VARIANTS()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="col-span-1 md:col-span-2 lg:col-span-3 text-3xl mb-2 md:mb-4 md:text-5xl font-bold tracking-wide text-[#6D96B6] relative"
          >
            {CONTACT_TITLE}
            <motion.span
              variants={GET_REVEAL_VARIANTS()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="absolute bg-secondary-color-500 inset-0 lg:-top-6 lg:-bottom-6"
            />
          </motion.h1>
          <div className="flex flex-col gap-4">
            <motion.p
              variants={GET_DEFAULT_REVEAL_VARIANTS(0.4)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-base md:text-xl relative"
            >
              {CONTACT_DESC}
              <motion.span
                variants={GET_REVEAL_VARIANTS(0.6)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="absolute bg-secondary-color-500 inset-0"
              />
            </motion.p>
            <div className="space-y-4 mb-4">
              <ContactCard order={0} name="Address" content={ADDRESS} />
              <ContactCard order={1} name="Email" content={EMAIL} />
              <ContactCard order={2} name="Phone" content={PHONE} />
            </div>
            <SocialMedia />
          </div>
          <div className="flex flex-col items-center justify-start">
            <form onSubmit={sendMessage} className="flex flex-col gap-4">
              <motion.h5
                variants={GET_DEFAULT_REVEAL_VARIANTS(0.6)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-base md:text-lg relative"
              >
                {FORM_DESC}
                <motion.span
                  variants={GET_REVEAL_VARIANTS(0.8)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="absolute bg-secondary-color-500 inset-0"
                />
              </motion.h5>
              <div className="w-full flex flex-col gap-4 mt-4">
                {FORM_INPUT.map((field, index) => {
                  return (
                    <Input
                      index={index}
                      key={index}
                      id={field.id}
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                    />
                  );
                })}
              </div>
              <div className="flex justify-start items-center gap-4">
                <SendButton disabled={isLoading} />
                {sendStatus && (
                  <p className="text-green-500">
                    Your message has been successfully sent!
                  </p>
                )}
                {sendStatus !== undefined && !sendStatus && (
                  <p className="text-red-500">
                    There was an error sending your message. Please try again.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </WrapperSection>
  );
};

export default ContactSection;
