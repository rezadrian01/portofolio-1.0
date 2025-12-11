import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NewNavbar from "./components/new-navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ahmad Reza Adrian – Full-Stack Developer",
  description:
    "Junior full-stack developer specializing in scalable applications and seamless user experiences. Exploring machine learning to enhance software intelligence.",
  authors: [{ name: "Ahmad Reza Adrian" }],
  keywords: [
    "portfolio",
    "web developer",
    "full-stack developer",
    "backend developer",
    "frontend developer",
    "react",
    "nextjs",
    "nodejs",
    "machine learning",
    "ahmad reza adrian",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://rezadrian.my.id",
  },
  applicationName: "Ahmad Reza Adrian",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground relative min-h-screen`}
      >
        <NewNavbar />
        <main className="pt-16">{children}</main>
        <SpeedInsights />
      </body>
    </html>
  );
}
