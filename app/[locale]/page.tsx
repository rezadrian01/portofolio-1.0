import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import Home from "@/modules/home";
import { METADATA } from "@/common/constants/metadata";

interface HomePageProps {
  params: { locale: string };
}

export async function generateMetadata({
  params: { locale },
}: HomePageProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "HomePage" });

  return {
    title: `${METADATA.creator} | Portfolio`,
    description: t("hero.tagline"),
    alternates: {
      canonical: `${process.env.DOMAIN}/${locale}`,
    },
    openGraph: {
      title: `${METADATA.creator} | Personal Website`,
      description: t("hero.tagline"),
      url: `${process.env.DOMAIN}/${locale}`,
      siteName: METADATA.openGraph.siteName,
      locale: locale === "id" ? "id_ID" : "en_US",
      type: "website",
    },
  };
}

const HomePage = async (_props: HomePageProps) => {
  return <Home />;
};

export default HomePage;
