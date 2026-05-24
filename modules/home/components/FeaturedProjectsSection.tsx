import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { BsGithub, BsBoxArrowUpRight, BsArrowRight } from "react-icons/bs";

import SectionHeading from "@/common/components/elements/SectionHeading";
import SpotlightCard from "@/common/components/elements/SpotlightCard";
import { PROJECTS } from "@/common/constants/projects";

const FeaturedProjectsSection = () => {
  const t = useTranslations("HomePage.featured_projects");
  const featuredProjects = PROJECTS.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="py-20" data-aos="fade-up">
      <div className="mb-2">
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-primary">
          {t("label")}
        </p>
        <SectionHeading title={t("heading")} />
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <SpotlightCard
            key={project.slug}
            className="flex flex-col"
            spotlightColor="rgba(251, 228, 0, 0.12)"
          >
            {/* Thumbnail */}
            <div className="relative h-44 w-full overflow-hidden rounded-t-2xl bg-neutral-200 dark:bg-neutral-800">
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>

            {/* Card Body */}
            <div className="flex flex-1 flex-col gap-3 p-5">
              {/* Category Badge */}
              <span className="w-fit rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                {project.category}
              </span>

              <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">
                {project.title}
              </h3>
              <p className="line-clamp-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                {project.description}
              </p>

              {/* Tech Pills */}
              <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                {project.techStack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-neutral-200 px-2 py-0.5 text-xs text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="rounded-md bg-neutral-200 px-2 py-0.5 text-xs text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400">
                    +{project.techStack.length - 3}
                  </span>
                )}
              </div>

              {/* Links */}
              <div className="flex items-center gap-3 pt-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-500 transition-colors hover:text-primary dark:text-neutral-400"
                    aria-label="Source code"
                  >
                    <BsGithub size={18} />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-500 transition-colors hover:text-primary dark:text-neutral-400"
                    aria-label="Live demo"
                  >
                    <BsBoxArrowUpRight size={16} />
                  </a>
                )}
              </div>
            </div>
          </SpotlightCard>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-gap hover:gap-2.5"
        >
          {t("cta")} <BsArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
