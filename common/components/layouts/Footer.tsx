import Link from "next/link";
import { useTranslations } from "next-intl";
import { BsGithub, BsInstagram, BsLinkedin, BsFacebook } from "react-icons/bs";

import { MENU_ITEMS } from "@/common/constants/menu";
import { PERSONAL } from "@/common/constants/personal";

const SOCIAL_ICONS = [
  {
    name: "GitHub",
    href: `https://github.com/${PERSONAL.githubUsername}`,
    icon: <BsGithub size={18} />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ahmad-reza-adrian/",
    icon: <BsLinkedin size={18} />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/rezadrian._",
    icon: <BsInstagram size={18} />,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/reza.adrian.5458498",
    icon: <BsFacebook size={18} />,
  },
];

const Footer = () => {
  const t = useTranslations("Footer");
  const tNav = useTranslations("Navigation");
  const visibleItems = MENU_ITEMS.filter((item) => item.isShow);

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 mt-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8">
        {/* Main row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link
            href="/"
            className="font-semibold text-lg text-neutral-900 dark:text-neutral-100 hover:text-primary transition-colors"
          >
            {PERSONAL.shortName}
          </Link>

          {/* Nav links */}
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {visibleItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                >
                  {tNav(item.title as any)}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {SOCIAL_ICONS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t border-neutral-100 dark:border-neutral-800 flex flex-wrap items-center justify-center gap-1 text-center text-sm text-neutral-500 dark:text-neutral-400">
          <p>{t("copyright_1")}</p>
          <span>{new Date().getFullYear()}</span>
          <p>{t("copyright_2")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
