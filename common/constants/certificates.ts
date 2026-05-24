export interface CertificateItem {
  name: string;
  issuer: string;
  year: number;
  credentialUrl?: string;
}

export const CERTIFICATES: CertificateItem[] = [
  {
    name: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    year: 2023,
    credentialUrl: "https://freecodecamp.org",
  },
  {
    name: "Responsive Web Design",
    issuer: "freeCodeCamp",
    year: 2023,
    credentialUrl: "https://freecodecamp.org",
  },
  {
    name: "Back End Development and APIs",
    issuer: "freeCodeCamp",
    year: 2023,
    credentialUrl: "https://freecodecamp.org",
  },
  {
    name: "React - The Complete Guide",
    issuer: "Udemy",
    year: 2023,
  },
  {
    name: "Node.js, Express, MongoDB & More",
    issuer: "Udemy",
    year: 2023,
  },
  {
    name: "Next.js 14 & React - The Complete Guide",
    issuer: "Udemy",
    year: 2024,
  },
];
