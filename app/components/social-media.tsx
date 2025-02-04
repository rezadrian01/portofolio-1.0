import React from "react";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import Link from "next/link";
import { SOCIAL_MEDIA } from "@/data/contact";

const SocialMedia = () => {
  return (
    <div className="flex gap-4 justify-start max-w-[25rem]">
      {SOCIAL_MEDIA.map((socmed, index) => {
        return (
          <Link
            className="bg-slate-200 hover:bg-slate-300 rounded p-2"
            key={index}
            href={socmed.url}
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
          </Link>
        );
      })}
    </div>
  );
};

export default SocialMedia;
