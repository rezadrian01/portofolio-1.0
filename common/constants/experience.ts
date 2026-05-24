export interface ExperienceItem {
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  type: "Full-time" | "Part-time" | "Internship" | "Freelance" | "Contract" | "Volunteer";
  startDate: string;
  endDate: string | null;
  description: string[];
  isShow: boolean;
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    title: "Application Security Intern",
    company: "PT PLN (Persero)",
    location: "Jakarta, Indonesia",
    type: "Internship",
    startDate: "2026-03",
    endDate: "2026-06",
    description: [
      "Performed security assessments and vulnerability testing on internal web applications.",
      "Assisted in implementing security controls and documenting findings for the security team.",
    ],
    isShow: true,
  },
  {
    title: "Software Engineer",
    company: "Intervyou.me · PT Intervyou Labs Indonesia",
    companyUrl: "https://intervyou.me",
    location: "Malang, East Java, Indonesia",
    type: "Full-time",
    startDate: "2025-05",
    endDate: null,
    description: [
      "Building and maintaining the AI-powered interview preparation platform backend using NestJS and TypeScript.",
      "Designed RESTful APIs, integrated AI services, and contributed to frontend features with Next.js.",
      "Collaborated closely with product and design teams to ship user-facing features in iterative sprints.",
    ],
    isShow: true,
  },
  {
    title: "Full Stack Developer",
    company: "PT. Transpo Indonesia Mandiri",
    location: "Malang, East Java, Indonesia",
    type: "Contract",
    startDate: "2025-04",
    endDate: "2025-09",
    description: [
      "Developed and maintained full-stack web features for logistics and transportation management systems.",
      "Built backend services with Node.js and integrated with React.js frontends.",
    ],
    isShow: true,
  },
  {
    title: "Teaching Assistant — Information Systems",
    company: "Universitas Negeri Malang",
    companyUrl: "https://um.ac.id",
    location: "Malang, East Java, Indonesia",
    type: "Part-time",
    startDate: "2025-09",
    endDate: "2025-12",
    description: [
      "Assisted students in understanding information systems concepts and practical lab exercises.",
      "Graded assignments and provided feedback to improve student understanding.",
    ],
    isShow: true,
  },
  {
    title: "Teaching Assistant — Database Systems",
    company: "Universitas Negeri Malang",
    companyUrl: "https://um.ac.id",
    location: "Malang, East Java, Indonesia",
    type: "Part-time",
    startDate: "2025-01",
    endDate: "2025-05",
    description: [
      "Guided students through relational database design, SQL querying, and normalization concepts.",
      "Conducted lab sessions and supported students in completing database projects.",
    ],
    isShow: true,
  },
  {
    title: "Core Team Member",
    company: "GDGoC Universitas Negeri Malang",
    location: "Malang, East Java, Indonesia",
    type: "Volunteer",
    startDate: "2024-10",
    endDate: "2025-06",
    description: [
      "Organized and facilitated Google Developer Group events, workshops, and hackathons for university students.",
      "Contributed to community growth by mentoring junior members in web and cloud technologies.",
    ],
    isShow: true,
  },
  {
    title: "Full-Stack Web Development Bootcamp",
    company: "Dicoding Indonesia",
    companyUrl: "https://dicoding.com",
    location: "Remote",
    type: "Part-time",
    startDate: "2024-01",
    endDate: "2024-06",
    description: [
      "Completed an intensive bootcamp covering front-end and back-end development with JavaScript and Node.js.",
      "Built several portfolio projects applying RESTful API design and cloud deployment principles.",
    ],
    isShow: true,
  },
];
