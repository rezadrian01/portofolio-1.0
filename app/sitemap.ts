import { MetadataRoute } from "next";

const BASE_URL = "https://www.rezadrian.my.id";
const LOCALES = ["en", "id"];

const staticRoutes = ["/", "/about", "/projects", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of LOCALES) {
    for (const route of staticRoutes) {
      entries.push({
        url: `${BASE_URL}/${locale}${route === "/" ? "" : route}`,
        lastModified: new Date(),
        changeFrequency: route === "/" ? "weekly" : "monthly",
        priority: route === "/" ? 1 : 0.8,
      });
    }
  }

  return entries;
}
