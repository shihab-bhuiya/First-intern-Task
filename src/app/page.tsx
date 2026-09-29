import type { Metadata } from "next";
import About from "@/components/About";
import Certificates from "@/components/Certifications";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import MarquePage from "@/components/Marque";
import Navbar from "@/components/Navbar";
import Projects from "@/components/CaseFile";
import Qualifications from "@/components/Qualifications";
  
import Marquee from "react-fast-marquee";
import Expertise from "@/components/Expertise";

const homepageDescription =
  "Explore Mazidul Hakim's IT leadership experience across cybersecurity, cloud migration, network modernisation, and technology strategy.";

export const metadata: Metadata = {
  title: "Senior IT Leader in Cloud & Cybersecurity",
  description: homepageDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Mazidul Hakim",
    title: "Mazidul Hakim | Senior IT Leader",
    description: homepageDescription,
  },
  twitter: {
    card: "summary",
    title: "Mazidul Hakim | Senior IT Leader",
    description: homepageDescription,
  },
};

// bg-[#0A0E12]
export default function Home() {
  return (
    <div className="mx-auto  max-w[1440px] w-full">
      <Navbar />
      <Hero />
      <Marquee>
        <MarquePage />
      </Marquee>
      <About />
      <Expertise />
      <Projects />
      <Experience />
      <Certificates />
      <Qualifications />
      <Contact />
    </div>
  );
}