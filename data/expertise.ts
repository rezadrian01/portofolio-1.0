import { Chrome } from "lucide-react";
import { ChartNetwork } from "lucide-react";
import { BrainCircuit } from "lucide-react";
import { Database } from "lucide-react";

const TITLE = "Blending Technical Expertise with Continuous Learning";
const DESC =
  "As a junior full-stack developer, I have honed my skills in both frontend and backend development, allowing me to build efficient and scalable applications. Additionally, I have recently started exploring the world of machine learning to expand my knowledge. Here are the key areas of expertise I bring to every project:";

const EXPERTISES = [
  {
    title: "Frontend Development",
    description:
      "I can build interactive and responsive web applications using React.js and Next.js.",
    icon: Chrome,
  },
  {
    title: "Backend Development",
    description:
      "I specialize in creating scalable and efficient RESTful APIs using Node.js and Express.js.",
    icon: ChartNetwork,
  },
  {
    title: "Machine Learning",
    description:
      "I have experience in building predictive models and data analysis using Python, scikit-learn, and TensorFlow.",
    icon: BrainCircuit,
  },
  {
    title: "Database Management",
    description:
      "I can design and manage databases using MongoDB, MySQL, and PostgreSQL for optimized data storage and retrieval.",
    icon: Database,
  },
];

export { TITLE, DESC, EXPERTISES };
