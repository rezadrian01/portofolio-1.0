"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Github,
  Linkedin,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ADDRESS, EMAIL, PHONE, SOCIAL_MEDIA } from "@/data/contact";

const socialIcons: Record<string, any> = {
  Facebook: Facebook,
  Instagram: Instagram,
  Github: Github,
  LinkedIn: Linkedin,
};

export default function BookACallPage() {
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
            Let's{" "}
            <span className="bg-gradient-to-r from-brand-blue via-brand-cyan to-brand-green bg-clip-text text-transparent">
              Connect
            </span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Whether you're looking for a skilled full-stack developer or want to
            explore collaboration opportunities, feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="hover:border-brand-blue/50 transition-all h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-brand-blue/20 flex items-center justify-center mb-2">
                    <Mail className="w-6 h-6 text-brand-cyan" />
                  </div>
                  <CardTitle className="text-lg">Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="text-muted-foreground hover:text-brand-cyan transition-colors"
                  >
                    {EMAIL}
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="hover:border-brand-blue/50 transition-all h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-brand-cyan/20 flex items-center justify-center mb-2">
                    <Phone className="w-6 h-6 text-brand-green" />
                  </div>
                  <CardTitle className="text-lg">Phone</CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href={`tel:${PHONE}`}
                    className="text-muted-foreground hover:text-brand-cyan transition-colors"
                  >
                    {PHONE}
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="hover:border-brand-blue/50 transition-all h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-brand-green/20 flex items-center justify-center mb-2">
                    <MapPin className="w-6 h-6 text-brand-blue" />
                  </div>
                  <CardTitle className="text-lg">Location</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{ADDRESS}</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Social Media Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="bg-gradient-to-br from-card to-card/50 border-brand-blue/30">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Follow Me On</CardTitle>
                <CardDescription>
                  Connect with me on social media platforms
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {SOCIAL_MEDIA.map((social, index) => {
                    const Icon = socialIcons[social.name];
                    return (
                      <motion.div
                        key={social.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      >
                        <Button
                          asChild
                          variant="outline"
                          className="w-full h-24 flex-col gap-2 hover:border-brand-blue hover:bg-brand-blue/10 group"
                        >
                          <a
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Icon className="w-6 h-6 group-hover:text-brand-cyan transition-colors" />
                            <span className="text-sm">{social.name}</span>
                          </a>
                        </Button>
                      </motion.div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="bg-gradient-to-r from-brand-blue/10 via-brand-cyan/10 to-brand-green/10 border border-brand-blue/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">Ready to Collaborate?</h2>
              <p className="text-muted-foreground mb-6">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-brand-blue to-brand-cyan hover:opacity-90 transition-opacity"
              >
                <a href={`mailto:${EMAIL}`}>Send Me an Email</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
