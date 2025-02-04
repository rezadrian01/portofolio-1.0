"use client";

import React, { FC } from "react";

import { motion } from "framer-motion";
import {
  GET_DEFAULT_REVEAL_VARIANTS,
  GET_REVEAL_VARIANTS,
} from "../lib/animation-variants";

interface InputProps {
  name: string;
  placeholder: string;
  id: string;
  type: "text" | "phone" | "email";
  index: number;
}

const Input: FC<InputProps> = ({ id, name, placeholder, type, index }) => {
  return (
    <motion.div
      variants={GET_DEFAULT_REVEAL_VARIANTS((index + 0.35) * 0.2)}
      initial="hidden"
      whileInView="visible"
      className="relative"
      // viewport={{ once: true }}
    >
      <input
        className="bg-transparent outline-none border-b-2 border-slate-400 focus:border-slate-200 w-full p-2 text-white"
        placeholder={placeholder}
        id={id}
        name={name}
        required={type === "phone" ? false : true}
        type={type === "phone" ? "string" : type}
        inputMode={type === "phone" ? "tel" : "none"}
      />
      <motion.span
        variants={GET_REVEAL_VARIANTS((index + 2.5) * 0.2)}
        initial="hidden"
        whileInView="visible"
        // viewport={{ once: true }}
        className="absolute bg-secondary-color-500 inset-0 z-50"
      />
    </motion.div>
  );
};

export default Input;
