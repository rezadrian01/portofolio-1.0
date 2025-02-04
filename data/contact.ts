const TITLE = "Let's Build Something Amazing Together";
const DESC =
  "Whether you're looking for a skilled full-stack developer, need backend expertise, or want to explore the possibilities of machine learning, feel free to reach out. I’m here to collaborate and bring your ideas to life with efficient and scalable solutions.";
const ADDRESS = "Jln. Tlogo Indah No.66B Lowokwaru Malang";
const PHONE = "+62 878-4083-7719";
const EMAIL = "ahmadadrian324@gmail.com";

const FORM_DESC =
  "Feel free to reach out to me for any inquiries or collaboration opportunities. I'll get back to you as soon as possible.";

const SOCIAL_MEDIA = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/reza.adrian.5458498",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/rezadrian._",
  },
  {
    name: "Github",
    url: "https://github.com/rezadrian01",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ahmad-reza-adrian/ahmadadrian324",
  },
];

const FORM_INPUT: {
  id: string;
  type: "text" | "email" | "phone";
  placeholder: string;
  name: string;
}[] = [
  {
    id: "name",
    type: "text",
    placeholder: "Name*",
    name: "name",
  },
  {
    id: "email",
    type: "email",
    placeholder: "Email*",
    name: "email",
  },
  {
    id: "phone",
    type: "phone",
    placeholder: "Phone Number (Optional)",
    name: "phone",
  },
  {
    id: "message",
    type: "text",
    placeholder: "Message*",
    name: "message",
  },
];

export {
  TITLE,
  DESC,
  ADDRESS,
  PHONE,
  EMAIL,
  FORM_DESC,
  SOCIAL_MEDIA,
  FORM_INPUT,
};
