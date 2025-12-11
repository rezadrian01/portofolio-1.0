"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CONTENTS } from "@/data/about-section";

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-green bg-clip-text text-transparent">
              Me
            </span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get to know more about my journey, skills, and passion for
            development
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-brand-blue/30 shadow-2xl shadow-brand-blue/20">
              <Image
                src="/images/about.jpg"
                alt="About Ahmad Reza Adrian"
                width={600}
                height={600}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Gradient Blob */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-cyan/20 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            {CONTENTS.map((content, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="bg-card border border-border rounded-lg p-6 hover:border-brand-blue/50 transition-colors"
              >
                <p className="text-muted-foreground leading-relaxed">
                  {content.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-brand-blue/10 via-brand-cyan/10 to-brand-green/10 border border-brand-blue/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-center">
              My Approach
            </h2>
            <p className="text-muted-foreground text-center leading-relaxed">
              I believe development is about more than just code; it's about
              understanding user needs and creating functional, efficient
              solutions. By continuously learning and adapting, I aim to deliver
              seamless, user-centric experiences in every project I work on.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
