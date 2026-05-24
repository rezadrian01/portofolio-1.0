export const getGithubData = async () => {
  const baseUrl =
    process.env.DOMAIN ||
    (process.env.NODE_ENV === "development" ? "http://localhost:3000" : "");

  const res = await fetch(`${baseUrl}/api/github`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) return null;
  return res.json();
};
