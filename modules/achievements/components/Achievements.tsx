"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { BsBoxArrowUpRight } from "react-icons/bs";

import EmptyState from "@/common/components/elements/EmptyState";
import {
  ACHIEVEMENTS,
  type AchievementType,
  type Achievement,
} from "@/common/constants/achievements";

const FILTERS: Array<{ label: string; key: string }> = [
  { label: "filter_all", key: "All" },
  { label: "filter_certificate", key: "Certificate" },
  { label: "filter_award", key: "Award" },
  { label: "filter_competition", key: "Competition" },
];

const TYPE_COLORS: Record<AchievementType, string> = {
  Certificate:
    "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400",
  Award:
    "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  Competition:
    "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400",
};

const Achievements = () => {
  const t = useTranslations("AchievementsPage");
  const [active, setActive] = useState<string>("All");

  const filtered: Achievement[] =
    active === "All"
      ? ACHIEVEMENTS
      : ACHIEVEMENTS.filter((a) => a.type === (active as AchievementType));

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

      {/* Grid */}
      {filtered.length === 0 ? (
        <EmptyState message={t("no_data")} />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={`${item.name}-${i}`}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.25, delay: i * 0.04 }}
                className="flex flex-col justify-between rounded-xl border border-neutral-200 bg-neutral-50 p-5 dark:border-neutral-800 dark:bg-neutral-900"
              >
                <div className="space-y-2">
                  <span
                    className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${TYPE_COLORS[item.type]}`}
                  >
                    {item.type}
                  </span>
                  <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">
                    {item.name}
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    {item.issuer}
                  </p>
                  {item.description && (
                    <p className="text-xs leading-relaxed text-neutral-500 dark:text-neutral-500">
                      {item.description}
                    </p>
                  )}
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-neutral-400 dark:text-neutral-500">
                    {item.date}
                  </span>
                  {item.credentialUrl && (
                    <Link
                      href={item.credentialUrl}
                      target="_blank"
                      className="flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
                    >
                      {t("show_credential")}{" "}
                      <BsBoxArrowUpRight size={11} />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default Achievements;
