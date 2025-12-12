const SKILLS_TITLE = "These are my skills to improve";
const SKILLS_SUBTITLE = "My Tech Stack";
const SKILLS_DESC = "These are my tech stack I usually used.";

interface Skill {
    name: string;
    icon: string;
    category: string;
}

const SKILLS: Skill[] = [
    {
        name: "CSS",
        icon: "/icons/css.svg",
        category: "Frontend",
    },
    {
        name: "HTML",
        icon: "/icons/html.svg",
        category: "Frontend",
    },
    {
        name: "JavaScript",
        icon: "/icons/javascript.svg",
        category: "Frontend",
    },
    {
        name: "TypeScript",
        icon: "/icons/typescript.svg",
        category: "Frontend",
    },
    {
        name: "React.js",
        icon: "/icons/react.svg",
        category: "Frontend",
    },
    {
        name: "Next.js",
        icon: "/icons/nextjs.svg",
        category: "Frontend",
    },
    {
        name: "Tailwind CSS",
        icon: "/icons/tailwind.svg",
        category: "Frontend",
    },
    {
        name: "ExpressJS",
        icon: "/icons/express.svg",
        category: "Backend",
    },
    {
        name: "MongoDB",
        icon: "/icons/mongodb.svg",
        category: "Database",
    },
    {
        name: "MySQL",
        icon: "/icons/mysql.svg",
        category: "Database",
    },
    {
        name: "PostgreSQL",
        icon: "/icons/postgresql.svg",
        category: "Database",
    },
    {
        name: "Prisma",
        icon: "/icons/prisma.svg",
        category: "Backend",
    },
    {
        name: "Node.js",
        icon: "/icons/nodejs.svg",
        category: "Backend",
    },
    {
        name: "Python",
        icon: "/icons/python.svg",
        category: "Backend",
    },
    {
        name: "Git",
        icon: "/icons/git.svg",
        category: "Tools",
    },
    {
        name: "Docker",
        icon: "/icons/docker.svg",
        category: "Tools",
    },
];

export { SKILLS_TITLE, SKILLS_SUBTITLE, SKILLS_DESC, SKILLS, type Skill };
