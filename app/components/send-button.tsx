"use client";

import React, { FC } from "react";
import { SendHorizontal } from "lucide-react";
import { motion } from "framer-motion";
import { GET_DEFAULT_REVEAL_VARIANTS } from "../lib/animation-variants";

interface SendButtonProps {
  onClick?: () => void;
  disabled: boolean;
}

const SendButton: FC<SendButtonProps> = ({ disabled = false }) => {
  return (
    <motion.button
      variants={GET_DEFAULT_REVEAL_VARIANTS(1.25)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      type="submit"
      disabled={disabled}
      className="flex gap-4 items-center bg-[#6D96B6] hover:bg-[#5A7B94] px-4 py-2 rounded"
    >
      Send
      <SendHorizontal size={15} />
    </motion.button>
  );
};

export default SendButton;
