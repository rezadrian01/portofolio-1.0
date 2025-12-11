"use client";

import { motion } from "framer-motion";
import { EXPERTISES } from "@/data/expertise";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ToolsPage() {
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
            My{" "}
            <span className="bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-green bg-clip-text text-transparent">
              Expertise
            </span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            As a junior full-stack developer, I have honed my skills in both
            frontend and backend development, allowing me to build efficient and
            scalable applications.
          </p>
        </motion.div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {EXPERTISES.map((expertise, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group hover:border-brand-blue/50 transition-all duration-300 h-full hover:-translate-y-2">
                <CardHeader>
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-brand-blue/20 to-brand-cyan/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <expertise.icon className="w-8 h-8 text-brand-cyan" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-brand-cyan transition-colors">
                    {expertise.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {expertise.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Technologies Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-brand-blue/10 via-brand-cyan/10 to-brand-green/10 border border-brand-blue/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Technologies I Work With
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "React.js",
                "Next.js",
                "Node.js",
                "Express.js",
                "TypeScript",
                "JavaScript",
                "MongoDB",
                "PostgreSQL",
                "MySQL",
                "Python",
                "TensorFlow",
                "scikit-learn",
                "Tailwind CSS",
                "Framer Motion",
                "Git",
                "Docker",
              ].map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-lg p-4 text-center hover:border-brand-blue/50 hover:-translate-y-1 transition-all"
                >
                  <p className="text-sm font-medium">{tech}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
