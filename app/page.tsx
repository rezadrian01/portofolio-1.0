"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-brand-cyan font-medium"
              >
                Hi, I'm Ahmad Reza Adrian
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                FULL-STACK
                <br />
                <span className="bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-green bg-clip-text text-transparent">
                  DEVELOPER
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg text-muted-foreground max-w-xl"
              >
                A junior full-stack developer passionate about scalable
                applications and crafting impactful solutions. Specializing in
                both frontend and backend, I create seamless digital
                experiences.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-brand-blue to-brand-cyan hover:opacity-90 transition-opacity"
              >
                <Link href="/work">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-brand-blue text-brand-blue hover:bg-brand-blue/10"
                onClick={() =>
                  window.open("cv/2/2.0.2/Ahmad_Reza_Adrian_CV.pdf", "_blank")
                }
              >
                <a>
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Gradient Blobs */}
              <div className="absolute -top-20 -left-20 w-72 h-72 bg-brand-blue/30 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-brand-green/30 rounded-full blur-3xl" />

              {/* Profile Image */}
              <div className="relative z-10 rounded-full overflow-hidden border-4 border-brand-blue/50 shadow-2xl shadow-brand-blue/20">
                <Image
                  src="/images/hero_img_croped.png"
                  alt="Ahmad Reza Adrian"
                  width={500}
                  height={500}
                  priority
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats or Features */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Years Experience", value: "2+" },
            { label: "Projects Completed", value: "10+" },
            { label: "Technologies", value: "15+" },
            { label: "Happy Clients", value: "5+" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-lg p-6 text-center hover:border-brand-blue/50 transition-colors"
            >
              <h3 className="text-3xl font-bold bg-gradient-to-r from-brand-blue to-brand-cyan bg-clip-text text-transparent">
                {stat.value}
              </h3>
              <p className="text-sm text-muted-foreground mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
