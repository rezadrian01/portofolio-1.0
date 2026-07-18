"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { TbSchool } from "react-icons/tb";

import SectionHeading from "@/common/components/elements/SectionHeading";
import { EDUCATION } from "@/common/constants/education";

const EducationSection = () => {
  const t = useTranslations("AboutPage.education");

  return (
    <section className="space-y-6">
      <div>
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-primary">
          {t("label")}
        </p>
        <SectionHeading title={t("heading")} icon={<TbSchool />} />
      </div>

      <div className="space-y-4">
        {EDUCATION.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <Link
              href={item.link}
              target="_blank"
              className="group flex items-start gap-4 rounded-xl border border-neutral-200 bg-neutral-50 p-5 transition-colors hover:border-primary/40 dark:border-neutral-800 dark:bg-neutral-900"
            >
              {/* Logo */}
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-neutral-200 bg-white dark:border-neutral-700">
                <Image
                  src={item.logo}
                  alt={item.school}
                  fill
                  className="object-contain p-1"
                  sizes="48px"
                />
              </div>

              {/* Details */}
              <div className="flex-1">
                <h4 className="font-semibold text-neutral-900 group-hover:text-primary dark:text-neutral-50">
                  {item.school}
                </h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {item.degree} · {item.major}
                </p>
                <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-0.5 text-xs text-neutral-500 dark:text-neutral-500">
                  <span>
                    {item.start_year} - {item.end_year}
                  </span>
                  <span>{item.location}</span>
                  {item.GPA && <span>GPA: {item.GPA}</span>}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
