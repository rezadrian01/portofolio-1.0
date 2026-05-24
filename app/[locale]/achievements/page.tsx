import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Suspense } from "react";

import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import Achievements from "@/modules/achievements";
import { METADATA } from "@/common/constants/metadata";

type Props = { params: { locale: string } };

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "AchievementsPage" });
  return {
    title: `${t("title")} ${METADATA.exTitle}`,
    description: t("description"),
    keywords: "ahmad reza adrian achievements, certificates, programming awards",
    alternates: { canonical: `${process.env.DOMAIN}/${locale}/achievements` },
    openGraph: {
      title: `${t("title")} ${METADATA.exTitle}`,
      description: t("description"),
      url: `${process.env.DOMAIN}/${locale}/achievements`,
      siteName: METADATA.openGraph.siteName,
      locale: locale === "id" ? "id_ID" : "en_US",
      type: "website",
    },
  };
}

const AchievementsPage = async ({ params: { locale } }: Props) => {
  const t = await getTranslations({ locale, namespace: "AchievementsPage" });
  return (
    <Container data-aos="fade-up">
      <PageHeading title={t("title")} description={t("description")} />
      <Suspense>
        <Achievements />
      </Suspense>
    </Container>
  );
};

export default AchievementsPage;
