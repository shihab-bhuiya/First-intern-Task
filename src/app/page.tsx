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


export default function Home() {
  return (
    <div className="mx-auto bg-[#0a0e14] max-w[1440px] w-full">
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