export interface ExperienceItem {
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  type: "Full-time" | "Part-time" | "Internship" | "Freelance";
  startDate: string;
  endDate: string | null;
  description: string[];
  isShow: boolean;
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    title: "Full-Stack Developer",
    company: "Freelance",
    location: "Remote",
    type: "Freelance",
    startDate: "2023-01",
    endDate: null,
    description: [
      "Developed full-stack web applications for clients using Next.js, Node.js, and MongoDB.",
      "Implemented REST APIs, responsive UI with Tailwind CSS, and database schemas.",
    ],
    isShow: true,
  },
];
