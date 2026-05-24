import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
      <ContactInfo />
      <ContactForm />
    </div>
  );
};

export default Contact;
