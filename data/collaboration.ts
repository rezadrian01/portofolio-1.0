const COLLABORATION_TITLE = "LET'S WORK";
const COLLABORATION_SUBTITLE = "TOGETHER";
const COLLABORATION_DESC = "Available for full-time and freelance projects.";

const COLLABORATION_CTA = "Ready to start your project?";
const COLLABORATION_EMAIL = "ahmadadrian324@gmail.com";

const MARQUEE_TEXTS = [
    "NOW AVAILABLE",
    "LET'S COLLABORATE",
    "NOW AVAILABLE",
    "LET'S COLLABORATE",
];

interface SocialLink {
    name: string;
    url: string;
    icon: string;
}

const SOCIAL_LINKS: SocialLink[] = [
    {
        name: "GitHub",
        url: "https://github.com/rezadrian01",
        icon: "github"
    },
    {
        name: "LinkedIn",
        url: "https://linkedin.com/in/ahmad-reza-adrian",
        icon: "linkedin"
    },
    {
        name: "Instagram",
        url: "https://instagram.com/rezadrian01",
        icon: "instagram"
    },
    {
        name: "Discord",
        url: "https://discord.com/users/rezadrian",
        icon: "discord"
    }
];

export {
    COLLABORATION_TITLE,
    COLLABORATION_SUBTITLE,
    COLLABORATION_DESC,
    COLLABORATION_CTA,
    COLLABORATION_EMAIL,
    MARQUEE_TEXTS,
    SOCIAL_LINKS,
    type SocialLink
};
