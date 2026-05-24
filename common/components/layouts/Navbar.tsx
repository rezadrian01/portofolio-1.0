"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useTranslations } from "next-intl";

import { MENU_ITEMS } from "@/common/constants/menu";
import { PERSONAL } from "@/common/constants/personal";
import ThemeSwitcher from "../elements/ThemeSwitcher";
import IntlToggle from "@/common/components/layouts/IntlToggle";

export default function Navbar() {
  const t = useTranslations("Navigation");
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const visibleItems = MENU_ITEMS.filter((item) => item.isShow);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/" || pathname === "/en" || pathname === "/id";
    }
    return pathname.includes(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-white/95 dark:bg-dark/95 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-semibold text-lg text-neutral-900 dark:text-neutral-100 hover:text-primary transition-colors duration-200"
        >
          {PERSONAL.shortName}
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-1">
          {visibleItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg
                  ${
                    isActive(item.href)
                      ? "text-neutral-900 dark:text-neutral-100"
                      : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
                  }`}
              >
                {t(item.title as any)}
                {isActive(item.href) && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-0 rounded-lg bg-primary/10 dark:bg-primary/15"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop controls */}
        <div className="hidden md:flex items-center gap-2">
          <IntlToggle />
          <ThemeSwitcher />
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden p-2 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.18 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-white/95 dark:bg-dark/95 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 shadow-md px-4 pb-4"
          >
            <ul className="flex flex-col gap-1 pt-2">
              {visibleItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200
                      ${
                        isActive(item.href)
                          ? "bg-primary/10 text-neutral-900 dark:text-neutral-100"
                          : "text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-neutral-100"
                      }`}
                  >
                    <span>{item.icon}</span>
                    {t(item.title as any)}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-3 pt-3 px-4 border-t border-neutral-100 dark:border-neutral-800 mt-2">
              <IntlToggle />
              <ThemeSwitcher />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
