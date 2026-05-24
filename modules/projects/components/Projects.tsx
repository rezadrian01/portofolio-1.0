"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { BsGithub, BsBoxArrowUpRight } from "react-icons/bs";

import EmptyState from "@/common/components/elements/EmptyState";
import SpotlightCard from "@/common/components/elements/SpotlightCard";
import { PROJECTS, type ProjectCategory, type ProjectEntry } from "@/common/constants/projects";

const FILTERS: Array<{ label: string; key: string }> = [
  { label: "filter_all", key: "All" },
  { label: "filter_fullstack", key: "Full-Stack" },
  { label: "filter_frontend", key: "Frontend" },
  { label: "filter_ml", key: "Machine Learning" },
];

const Projects = () => {
  const t = useTranslations("ProjectsPage");
  const [active, setActive] = useState<string>("All");

  const filtered: ProjectEntry[] =
    active === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === (active as ProjectCategory));

  return (
    <div className="space-y-6">
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => setActive(f.key)}
            className={`rounded-lg px-4 py-1.5 text-sm font-medium transition-colors ${
              active === f.key
                ? "bg-primary text-neutral-900"
                : "border border-neutral-200 text-neutral-600 hover:border-primary hover:text-primary dark:border-neutral-700 dark:text-neutral-400"
            }`}
          >
            {t(f.label)}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      {filtered.length === 0 ? (
        <EmptyState message={t("no_data")} />
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, delay: i * 0.05 }}
              >
                <SpotlightCard
                  spotlightColor="rgba(251, 228, 0, 0.12)"
                  className="overflow-hidden"
                >
                    {/* Thumbnail */}
                    <div className="relative h-44 w-full bg-neutral-200 dark:bg-neutral-800">
                      <Image
                        src={project.thumbnail}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>

                    {/* Body */}
                    <div className="flex flex-col gap-3 p-5">
                      <span className="w-fit rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                        {project.category}
                      </span>
                      <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">
                        {project.title}
                      </h3>
                      <p className="line-clamp-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                        {project.description}
                      </p>

                      {/* Tech pills */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md bg-neutral-200 px-2 py-0.5 text-xs text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 4 && (
                          <span className="rounded-md bg-neutral-200 px-2 py-0.5 text-xs text-neutral-500 dark:bg-neutral-800">
                            +{project.techStack.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Links */}
                      <div className="flex items-center gap-3 pt-1">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs text-neutral-500 transition-colors hover:text-primary dark:text-neutral-400"
                          >
                            <BsGithub size={15} />
                            {t("source_code_text")}
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs text-neutral-500 transition-colors hover:text-primary dark:text-neutral-400"
                          >
                            <BsBoxArrowUpRight size={13} />
                            {t("live_demo_text")}
                          </a>
                        )}
                      </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default Projects;
