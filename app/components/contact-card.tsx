"use client";

import React, { FC } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import {
  GET_DEFAULT_REVEAL_VARIANTS,
  GET_REVEAL_VARIANTS,
} from "../lib/animation-variants";

interface ContactCardProps {
  name: "Address" | "Phone" | "Email";
  content: string;
  order: number;
}

const ContactCard: FC<ContactCardProps> = ({ name, content, order }) => {
  return (
    <motion.div
      variants={GET_DEFAULT_REVEAL_VARIANTS(0.5)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-slate-200 flex gap-4 items-center rounded-lg p-4 max-w-[25rem] relative"
    >
      <div className="bg-[#6D96B6] flex items-center justify-center p-2 rounded">
        {name === "Address" && <MapPin size={24} />}
        {name === "Phone" && <Phone size={24} />}
        {name === "Email" && <Mail size={24} />}
      </div>
      <div className="">
        <h4 className="text-black font-semibold">{name}</h4>
        <p className="text-xs md:text-base text-[#6D96B6]">{content}</p>
      </div>
      <motion.span
        variants={GET_REVEAL_VARIANTS((order + 2) * 0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="absolute bg-secondary-color-500 inset-0 z-50"
      />
    </motion.div>
  );
};

export default ContactCard;
