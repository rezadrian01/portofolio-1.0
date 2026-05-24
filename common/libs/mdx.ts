import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface MdxFile {
  slug: string;
  content: string;
  frontmatter: Record<string, unknown>;
}

export const loadMdxFiles = (dir = "contents/projects"): MdxFile[] => {
  const contentDir = path.join(process.cwd(), dir);

  if (!fs.existsSync(contentDir)) return [];

  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"));

  return files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(contentDir, file), "utf-8");
    const { content, data } = matter(raw);
    return { slug, content, frontmatter: data };
  });
};
