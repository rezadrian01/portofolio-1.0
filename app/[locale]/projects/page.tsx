import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import Projects from "@/modules/projects";
import { METADATA } from "@/common/constants/metadata";

type Props = { params: { locale: string } };

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "ProjectsPage" });
  return {
    title: `${t("title")} ${METADATA.exTitle}`,
    description: t("description"),
    keywords: "ahmad reza adrian projects, full-stack projects, next.js react portfolio",
    alternates: { canonical: `${process.env.DOMAIN}/${locale}/projects` },
    openGraph: {
      title: `${t("title")} ${METADATA.exTitle}`,
      description: t("description"),
      url: `${process.env.DOMAIN}/${locale}/projects`,
      siteName: METADATA.openGraph.siteName,
      locale: locale === "id" ? "id_ID" : "en_US",
      type: "website",
    },
  };
}

const ProjectsPage = async ({ params: { locale } }: Props) => {
  const t = await getTranslations({ locale, namespace: "ProjectsPage" });
  return (
    <Container data-aos="fade-up">
      <PageHeading title={t("title")} description={t("description")} />
      <Projects />
    </Container>
  );
};

export default ProjectsPage;
