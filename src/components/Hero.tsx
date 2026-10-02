/** @format */

"use client";

import Link from "next/link";
import { LuBriefcase, LuMail } from "react-icons/lu";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/motionVariants";
import { useLenis } from "@/components/SmoothScrollProvider";
import Image from "next/image";

/**
 * Graph coordinates live in a 656 × 554 box, which is the size of the
 * right column in the 1440px Figma frame. Everything scales from there.
 */
const GRAPH_W = 656;
const GRAPH_H = 554;

interface GraphNode {
  id: string;
  title: string;
  subtitle?: string;
  x: number;
  y: number;
  size: number;
  dotClass: string;
}

const nodes: GraphNode[] = [
  {
    id: "hq",
    title: "Singapore HQ",
    x: 345,
    y: 82,
    size: 22,
    dotClass: "bg-[#CCFF00] shadow-[0_0_24px_rgba(204,255,0,0.35)]",
  },
  {
    id: "aus",
    title: "Australia",
    subtitle: "8 Branches",
    x: 44,
    y: 310,
    size: 18,
    dotClass: "bg-white",
  },
  {
    id: "ph",
    title: "Philippines",
    subtitle: "Offshore Team",
    x: 196,
    y: 388,
    size: 18,
    dotClass: "bg-blue-400",
  },
  {
    id: "nz",
    title: "Auckland",
    subtitle: "New Zealand",
    x: 229,
    y: 494,
    size: 18,
    dotClass: "bg-white",
  },
  {
    id: "in",
    title: "India",
    subtitle: "Offshore Team",
    x: 448,
    y: 252,
    size: 18,
    dotClass: "bg-blue-400",
  },
];

// Quadratic curves: [controlX, controlY] are in the same 656 × 554 space
const connections: {
  from: string;
  to: string;
  control: [number, number];
}[] = [
    { from: "hq", to: "aus", control: [206, 150] },
    { from: "hq", to: "ph", control: [264, 210] },
    { from: "hq", to: "in", control: [417, 57] },
    { from: "aus", to: "nz", control: [86, 430] },
  ];

const nodeById = Object.fromEntries(nodes.map((n) => [n.id, n]));

const gridStyle = {
  backgroundImage: `
    linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
  `,
  backgroundSize: "72px 72px",
  maskImage:
    "radial-gradient(ellipse 75% 85% at 60% 50%, black 25%, transparent 100%)",
  WebkitMaskImage:
    "radial-gradient(ellipse 75% 85% at 60% 50%, black 25%, transparent 100%)",
};

export default function Hero() {
  const lenis = useLenis();

  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      if (lenis) {
        lenis.scrollTo(targetElement as HTMLElement);
      } else {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
      window.history.pushState({}, "", href);
    }
  };
  // bg-[#05090d]
  return (
    <section className="relative flex items-center pt-12 scroll-pb-80 overflow-hidden  lg:min-h-[500px]">
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={gridStyle}
      />

      {/* Soft indigo tint, bottom right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(99,102,241,0.09),transparent_55%)] "
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-6 md:px-10 xl:px-20">
        <div className="grid items-center gap-12 py-4 lg:grid-cols-2 xl:grid-cols-[600px_1fr] xl:gap-6 xl:py-10">
          {/* Left content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative z-10 order-2 flex min-w-0 flex-col lg:order-none">
            {/* Status line */}
            <motion.div
              variants={fadeInUp}
              className="order-1 mb-4 flex items-center gap-2 font-ibm text-[14px] text-gray-300 lg:text-sm">
              <span
                aria-hidden="true"
                className="flex h-3.5 w-3.5 items-center justify-center rounded-full border border-[#CCFF00]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#CCFF00]" />
              </span>
              IT Leadership · Cloud · AI · Cybersecurity
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeInUp}
              className="order-2 font-manrope text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl xl:text-[80px] lg:text-[84px]"
            >
              Mazidul
              <br />
              <span className="bg-gradient-to-r from-[#3BBDFB] via-[#A3E1FC] to-[#3BBDFB] bg-clip-text text-transparent">
                Hakim
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="order-4 mt-4 max-w-[600px] font-manrope text-[14px] lg:text[16px] leading-7 text-[#ABABAB] lg:order-3">
              Senior IT leader with 17+ years turning technology functions
              around — network modernisation, cloud migration and cybersecurity
              uplift across complex, multi-site organisations.
            </motion.p>

            {/* Pills */}
            <motion.div
              variants={fadeInUp}
              className="order-3 mt-4 flex flex-wrap gap-3 sm:gap-4 lg:order-4">
              <span className="inline-flex h-10 text-[10px] items-center whitespace-nowrap rounded-full bg-[#131A22] px-4 font-ibm lg:text-[16px] font-semibold text-white sm:px-5">
                IT Leadership
              </span>

              <span className="inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-full border border-[#CCFF00]/40 bg-[#CCFF00]/5 px-3 font-ibm font-semibold text-[10px]  lg:text-[16px] text-[#CCFF00] sm:px-6 lg:text-base">
                <span
                  aria-hidden="true"
                  className="h-2.5 w-2.5 font-ibm text-[16px] lg:text-[16px] font-semibold rounded-full bg-[#CCFF00]"
                />
                Open to Sr.IT & Security Leadership roles
              </span>
            </motion.div>

            {/* Action buttons */}
            <motion.div
              variants={fadeInUp}
              className="order-5 mt-10 md:mb-0 mb-5 flex w-full max-w-[1312px] lg:justify-start gap-4 justify-between flex-nowrap lg:gap-2.5 sm:gap-4">
              <Link
                href="#experience"
                onClick={(e) => handleScrollTo(e, "#experience")}
                className="flex items-center justify-center h-[56px] text-[14px]  w-full lg:w-[194px] gap-2 font-manrope  rounded-[12px] bg-[#131A22] px-4 lg:text-[16px] font-semibold lg:px-6 text-white transition-colors hover:bg-[#1B2430] sm:h-14 sm:gap-2.5  sm:text-lg">
                <Image
                  src={"/carrer-infosvg.svg"}
                  width={24}
                  height={24}
                  alt="carrer"
                  className=""
                />
                Career Info
              </Link>

              <Link
                href="#contact"
                onClick={(e) => handleScrollTo(e, "#contact")}
                className="flex items-center justify-center h-[56px] text-[14px] w-full lg:w-[194px]  gap-2 font-manrope rounded-[12px] bg-[#38BDF8] px-4 lg:text-[16px] font-semibold lg:px-6 text-[#05090d] transition-colors hover:bg-[#7DD3FC] sm:h-14 sm:gap-2.5 sm:text-lg"
                >
                <Image src={"/mail.svg"} alt="mail" width={24} height={24} />
                Contact Now
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: network map */}
<div className="netmap-wrap" aria-hidden="true"> 
  <svg viewBox="0 0 380 340"> 
    {/* <!-- connecting lines --> */} 
    <path id="line1" d="M 70 220 C 130 140, 160 110, 206 93" fill="none" stroke="rgba(244,241,234,0.16)" strokeWidth="1.4" /> 
    <path id="line2" d="M 214 93 C 255 105, 275 155, 296 186" fill="none" stroke="rgba(244,241,234,0.16)" strokeWidth="1.4" /> 
    <path id="line3" d="M 207 95 C 175 145, 145 205, 133 255" fill="none" stroke="rgba(244,241,234,0.16)" strokeWidth="1.4" /> 
    <path id="line4" d="M 73 223 C 103 253, 123 278, 146 297" fill="none" stroke="rgba(244,241,234,0.16)" strokeWidth="1.4" /> 

    {/* travelling pulses */} 
    <circle r="3" fill="#CCFF00"> 
      <animateMotion dur="4.5s" repeatCount="indefinite" path="M 70 220 C 130 140, 160 110, 206 93" /> 
    </circle> 

    <circle r="3" fill="#60A5FA"> 
      <animateMotion dur="5.2s" repeatCount="indefinite" path="M 214 93 C 255 105, 275 155, 296 186" /> 
    </circle> 

    <circle r="3" fill="#60A5FA"> 
      <animateMotion dur="6s" repeatCount="indefinite" path="M 207 95 C 175 145, 145 205, 133 255" /> 
    </circle> 

    <circle r="3" fill="#F8FAFC"> 
      <animateMotion dur="5.6s" repeatCount="indefinite" path="M 73 223 C 103 253, 123 278, 146 297" /> 
    </circle> 

    {/* node: Head Office */} 
    <circle cx="210" cy="90" r="5.5" fill="#CCFF00" /> 

    <circle 
      cx="210" 
      cy="90" 
      r="5.5" 
      fill="none" 
      stroke="#CCFF00" 
      strokeWidth="1.5" 
      opacity="0.6" 
    > 
      <animate attributeName="r" values="5.5;16;5.5" dur="3s" repeatCount="indefinite" /> 
      <animate attributeName="opacity" values="0.6;0;0.6" dur="3s" repeatCount="indefinite" /> 
    </circle> 

    <text x="222" y="86" className="netmap-node-label"> 
      Singapore HQ 
    </text> 

    {/* node: Australia */} 
    <circle cx="70" cy="220" r="5" fill="#F8FAFC" /> 
    <text x="82" y="216" className="netmap-node-label"> 
      Australia 
    </text> 
    <text x="82" y="230" className="netmap-label"> 
      8 branches 
    </text> 

    {/* node: India offshore */} 
    <circle cx="300" cy="190" r="4.5" fill="#60A5FA" /> 
    <text x="312" y="186" className="netmap-node-label"> 
      India 
    </text> 
    <text x="312" y="200" className="netmap-label"> 
      offshore team 
    </text> 

    {/* node: Philippines offshore */} 
    <circle cx="130" cy="260" r="4.5" fill="#60A5FA" /> 
    <text x="142" y="256" className="netmap-node-label"> 
      Philippines 
    </text> 
    <text x="142" y="270" className="netmap-label"> 
      offshore team 
    </text> 

    {/* node: Auckland, NZ */} 
    <circle cx="150" cy="300" r="4.5" fill="#F8FAFC" /> 
    <text x="162" y="296" className="netmap-node-label"> 
      Auckland 
    </text> 
    <text x="162" y="310" className="netmap-label"> 
      New Zealand 
    </text> 
  </svg> 
</div>

        </div>
      </div>
    </section>
  );
}
