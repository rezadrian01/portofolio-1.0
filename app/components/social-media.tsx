"use client";

import React from "react";
import { motion } from "framer-motion";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import { SOCIAL_MEDIA } from "@/data/contact";
import { GET_DEFAULT_REVEAL_VARIANTS } from "../lib/animation-variants";

const SocialMedia = () => {
  return (
    <div className="flex gap-4 justify-start max-w-[25rem]">
      {SOCIAL_MEDIA.map((socmed, index) => {
        return (
          <motion.a
            key={index}
            variants={GET_DEFAULT_REVEAL_VARIANTS((index + 3) * 0.2)}
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 1.1 }}
            viewport={{ once: true }}
            className="bg-slate-200 hover:bg-slate-100 rounded p-2 flex items-center justify-center "
            href={socmed.url}
            target="_blank"
          >
            {socmed.name === "Facebook" && (
              <Facebook color="#6D96B6" size={24} />
            )}
            {socmed.name === "Instagram" && (
              <Instagram color="#6D96B6" size={24} />
            )}
            {socmed.name === "Github" && <Github color="#6D96B6" size={24} />}
            {socmed.name === "LinkedIn" && (
              <Linkedin color="#6D96B6" size={24} />
            )}
          </motion.a>
        );
      })}
    </div>
  );
};

export default SocialMedia;
