export const getAchievementsData = async (
  params?: { category?: string; search?: string } | string,
) => {
  const baseUrl =
    process.env.DOMAIN ||
    (process.env.NODE_ENV === "development" ? "http://localhost:3000" : "");

  let queryString = "";
  if (typeof params === "string") {
    queryString = params;
  } else if (params) {
    const q = new URLSearchParams();
    if (params.category) q.set("category", params.category);
    if (params.search) q.set("search", params.search);
    queryString = q.toString();
  }

  const url = queryString
    ? `${baseUrl}/api/achievements?${queryString}`
    : `${baseUrl}/api/achievements`;

  const res = await fetch(url, { next: { revalidate: 3600 } });
  if (!res.ok) return [];
  return res.json();
};

export const getAchivementCategories = async () => {
  const baseUrl =
    process.env.DOMAIN ||
    (process.env.NODE_ENV === "development" ? "http://localhost:3000" : "");

  const res = await fetch(`${baseUrl}/api/achievements/categories`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) return [];
  return res.json();
};

export const getAchivementTypes = async () => {
  const baseUrl =
    process.env.DOMAIN ||
    (process.env.NODE_ENV === "development" ? "http://localhost:3000" : "");

  const res = await fetch(`${baseUrl}/api/achievements/types`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) return [];
  return res.json();
};
