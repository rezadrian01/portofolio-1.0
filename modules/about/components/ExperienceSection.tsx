"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { BsBriefcase, BsBoxArrowUpRight } from "react-icons/bs";
import { format } from "date-fns";

import SectionHeading from "@/common/components/elements/SectionHeading";
import EmptyState from "@/common/components/elements/EmptyState";
import { EXPERIENCE } from "@/common/constants/experience";

const ExperienceSection = () => {
  const t = useTranslations("AboutPage.experience");
  const visible = EXPERIENCE.filter((e) => e.isShow);

  return (
    <section className="space-y-6">
      <div>
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-primary">
          {t("label")}
        </p>
        <SectionHeading title={t("heading")} icon={<BsBriefcase />} />
      </div>

      {visible.length === 0 ? (
        <EmptyState message={t("no_data")} />
      ) : (
        <div className="relative space-y-6 pl-8 before:absolute before:inset-y-2 before:left-[7px] before:w-0.5 before:bg-neutral-200 dark:before:bg-neutral-800">
          {visible.map((item, i) => {
            const start = format(new Date(item.startDate + "-01"), "MMM yyyy");
            const end = item.endDate
              ? format(new Date(item.endDate + "-01"), "MMM yyyy")
              : "Present";

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-8 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-primary bg-white dark:bg-neutral-950" />

                <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-5 dark:border-neutral-800 dark:bg-neutral-900">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h4 className="font-semibold text-neutral-900 dark:text-neutral-50">
                        {item.title}
                      </h4>
                      <div className="mt-0.5 flex flex-wrap items-center gap-1.5 text-sm text-neutral-600 dark:text-neutral-400">
                        {item.companyUrl ? (
                          <Link
                            href={item.companyUrl}
                            target="_blank"
                            className="flex items-center gap-1 hover:text-primary"
                          >
                            {item.company} <BsBoxArrowUpRight size={11} />
                          </Link>
                        ) : (
                          <span>{item.company}</span>
                        )}
                        <span className="text-neutral-300 dark:text-neutral-700">
                          ·
                        </span>
                        <span>{item.location}</span>
                      </div>
                    </div>
                    <div className="text-right text-xs text-neutral-500 dark:text-neutral-400">
                      <div>
                        {start} — {end}
                      </div>
                      <span className="mt-0.5 inline-block rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
                        {item.type}
                      </span>
                    </div>
                  </div>
                  {item.description.length > 0 && (
                    <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                      {item.description.map((line, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span className="mt-0.5 shrink-0 text-primary">✓</span>
                          {line}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default ExperienceSection;
