import React, { FC } from "react";
import { MapPin } from "lucide-react";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";

interface ContactCardProps {
  name: "Address" | "Phone" | "Email";
  content: string;
}

const ContactCard: FC<ContactCardProps> = ({ name, content }) => {
  return (
    <div className="bg-slate-200 flex gap-4 items-center rounded-lg p-4 max-w-[25rem]">
      <div className="bg-[#6D96B6] flex items-center justify-center p-2 rounded">
        {name === "Address" && <MapPin size={24} />}
        {name === "Phone" && <Phone size={24} />}
        {name === "Email" && <Mail size={24} />}
      </div>
      <div className="">
        <h4 className="text-black font-semibold">{name}</h4>
        <p className="text-xs md:text-base text-[#6D96B6]">{content}</p>
      </div>
    </div>
  );
};

export default ContactCard;
