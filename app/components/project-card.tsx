import Image from "next/image";
import React, { FC } from "react";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  category: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const { title, description, techStack, image } = project;
  return (
    <div className="relative cursor-pointer group overflow-hidden">
      <Image
        className="aspect-[4/3] object-cover mx-auto group-hover:scale-105 transition-all"
        src={image}
        alt={`${title} image`}
        width={500}
        height={500}
      />
      <div className="absolute -translate-y-1/2 transition-all top-[85%] group-hover:top-[55%] md:group-hover:top-[65%] left-4 z-10 flex flex-col">
        <h3 className="text-slate-200 font-bold text-xl">{title}</h3>
        <p className="text-base">Tech stack: {techStack.join(", ")}</p>
        <p className="text-base text-transparent group-hover:text-slate-200 transition-all mt-2 max-w-[90%]">
          {description}
        </p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/15 bg-opacity-30 group-hover:bg-black/50 transition-all" />
    </div>
  );
};

export default ProjectCard;
