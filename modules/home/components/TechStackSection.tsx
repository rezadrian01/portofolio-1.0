import { useTranslations } from "next-intl";

import SectionHeading from "@/common/components/elements/SectionHeading";
import MarqueeElement from "@/common/components/elements/MarqueeElement";
import { STACKS } from "@/common/constants/stacks";
import { SKILLS_ROW_1, SKILLS_ROW_2 } from "@/common/constants/skills";

interface SkillPillProps {
  iconKey: string;
  name: string;
}

const SkillPill = ({ iconKey, name }: SkillPillProps) => {
  const stack = STACKS[iconKey];

  return (
    <div className="mx-2 flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm text-neutral-700 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300">
      {stack && (
        <span className={stack.color}>{stack.icon}</span>
      )}
      <span>{name}</span>
    </div>
  );
};

const TechStackSection = () => {
  const t = useTranslations("HomePage.tech_stack");

  return (
    <section className="py-20" data-aos="fade-up">
      <div className="mb-8 text-center">
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-primary">
          {t("label")}
        </p>
        <SectionHeading title={t("heading")} className="justify-center" />
      </div>

      <div className="space-y-3 overflow-hidden">
        <MarqueeElement direction="left">
          {SKILLS_ROW_1.map((skill) => (
            <SkillPill key={skill.iconKey} iconKey={skill.iconKey} name={skill.name} />
          ))}
        </MarqueeElement>
        <MarqueeElement direction="right">
          {SKILLS_ROW_2.map((skill) => (
            <SkillPill key={skill.iconKey} iconKey={skill.iconKey} name={skill.name} />
          ))}
        </MarqueeElement>
      </div>
    </section>
  );
};

export default TechStackSection;
