export type ProjectCategory = "Full-Stack" | "Frontend" | "Machine Learning";

export interface ProjectItem {
  slug: string;
  title: string;
  description: string;
  category: ProjectCategory;
  techStack: string[];
  thumbnail: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export const PROJECTS: ProjectItem[] = [
  {
    slug: "laundry-management",
    title: "Laundry Management",
    description:
      "A full-stack web application for managing laundry orders, customers, and payments with a dashboard for business owners.",
    category: "Full-Stack",
    techStack: ["Next.js", "TypeScript", "PostgreSql", "Prisma", "TailwindCSS"],
    thumbnail: "/images/projects/laundry-management.png",
    githubUrl: "https://github.com/rezadrian01",
    featured: true,
  },
  {
    slug: "book-worm",
    title: "Book Worm",
    description:
      "An online bookstore application with user authentication, shopping cart, order management, and admin panel.",
    category: "Full-Stack",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDb", "TailwindCSS"],
    thumbnail: "/images/projects/book-worm.png",
    githubUrl: "https://github.com/rezadrian01",
    featured: true,
  },
  {
    slug: "sijawi",
    title: "SiJawi",
    description:
      "A frontend application for a Javanese cultural education platform, featuring interactive lessons and quizzes.",
    category: "Frontend",
    techStack: ["React.js", "TypeScript", "TailwindCSS", "Vite"],
    thumbnail: "/images/projects/sijawi.png",
    githubUrl: "https://github.com/rezadrian01",
    featured: true,
  },
  {
    slug: "task-manager-api",
    title: "Task Manager API",
    description:
      "A RESTful API for task and project management with authentication, role-based access control, and team collaboration features.",
    category: "Full-Stack",
    techStack: ["Node.js", "Express.js", "MongoDb", "TypeScript"],
    thumbnail: "/images/projects/task-manager.png",
    githubUrl: "https://github.com/rezadrian01",
    featured: false,
  },
  {
    slug: "mern-online-shop",
    title: "MERN Online Shop",
    description:
      "A full-featured e-commerce platform built with the MERN stack, including product management, cart, and payment integration.",
    category: "Full-Stack",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDb"],
    thumbnail: "/images/projects/online-shop.png",
    githubUrl: "https://github.com/rezadrian01",
    featured: false,
  },
];
