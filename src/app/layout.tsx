import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

       
        <main>

        {children}

        </main>
        
        </body>
    </html>
  );
}
