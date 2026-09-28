import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Manrope,
  Inter,
  IBM_Plex_Mono,
} from "next/font/google";


import "./globals.css";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mazidul Hakim | Full Stack Developer",
  description:
    "Mazidul Hakim is a full stack developer specializing in modern web applications using React, Next.js, TypeScript, and Node.js.",
  keywords: [
    "Mazidul Hakim",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Web Developer",
  ],
  authors: [
    {
      name: "Mazidul Hakim",
    },
  ],
  creator: "Mazidul Hakim",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        ${manrope.variable}
        ${inter.variable}
        ${ibmPlexMono.variable}
        {tusker4500.variable}
         
        h-full
        antialiased
      `}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScrollProvider>
          <main>{children}</main>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}