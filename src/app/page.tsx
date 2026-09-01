import About from "@/components/About";
import Certificates from "@/components/Certifications";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import MarquePage from "@/components/Marque";

import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Qualifications from "@/components/Qualifications";
import Skills from "@/components/Skill";
import Marquee from "react-fast-marquee";


export default function Home() {
  return (
    <div>
        <Navbar/>
      <Hero/>
      <Marquee>
     <MarquePage/>
      </Marquee>
      <About/>
      <Skills/>
<Projects/>
<Experience/> 

   <Certificates />

      <Qualifications />

      <Contact />
    </div>
  );
}
