import { ProjectItem } from "@/common/types/projects";

export const getProjectsData = async (): Promise<ProjectItem[]> => {
  const baseUrl =
    process.env.DOMAIN ||
    (process.env.NODE_ENV === "development" ? "http://localhost:3000" : "");

  const res = await fetch(`${baseUrl}/api/projects`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) return [];

  return res.json();
};

export const getProjectsDataBySlug = async (
  slug: string,
): Promise<ProjectItem> => {
  const baseUrl =
    process.env.DOMAIN ||
    (process.env.NODE_ENV === "development" ? "http://localhost:3000" : "");

  const res = await fetch(`${baseUrl}/api/projects/${slug}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) throw new Error(`Project not found: ${slug}`);

  return res.json();
};
