import Breakline from "@/common/components/elements/Breakline";

import BioSection from "./BioSection";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import CertificatesSection from "./CertificatesSection";

const About = () => {
  return (
    <>
      <BioSection />
      <Breakline className="my-10" />
      <ExperienceSection />
      <Breakline className="my-10" />
      <EducationSection />
      <Breakline className="my-10" />
      <CertificatesSection />
    </>
  );
};

export default About;
