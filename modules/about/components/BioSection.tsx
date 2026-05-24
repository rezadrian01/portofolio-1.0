import Image from "next/image";
import { useTranslations } from "next-intl";
import { BsDownload } from "react-icons/bs";

import SectionHeading from "@/common/components/elements/SectionHeading";
import { PERSONAL } from "@/common/constants/personal";

const BioSection = () => {
  const t = useTranslations("AboutPage.bio");

  return (
    <section className="flex flex-col-reverse gap-8 md:flex-row md:items-start md:gap-14">
      {/* Text */}
      <div className="flex-1 space-y-5">
        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-primary">
            {t("label")}
          </p>
          <SectionHeading title={t("heading")} />
        </div>
        <div className="space-y-4 leading-7 text-neutral-600 dark:text-neutral-400">
          <p>{t("paragraph_1")}</p>
          <p>{t("paragraph_2")}</p>
          <p>{t("paragraph_3")}</p>
        </div>
        <a
          href={PERSONAL.cvUrl}
          download
          className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-800 transition-colors hover:border-primary hover:text-primary dark:border-neutral-700 dark:text-neutral-200 dark:hover:border-primary dark:hover:text-primary"
        >
          <BsDownload size={15} />
          {t("download_cv")}
        </a>
      </div>

      {/* Profile Photo */}
      <div className="mx-auto shrink-0 md:mx-0">
        <div className="relative h-56 w-56 overflow-hidden rounded-2xl border-2 border-primary/20 shadow-md">
          <Image
            src="/images/reza.jpg"
            alt={PERSONAL.name}
            fill
            className="object-cover object-top"
            sizes="224px"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default BioSection;
