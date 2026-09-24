"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motionVariants";

interface SkillGroup {
  title: string;
  description: string;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    title: "Cloud & identity",
    description: "Design and manage secure, scalable cloud environments.",
    skills: ["AWS", "Azure", "Microsoft 365", "MFA", "Entra ID", "Intune"],
  },
  {
    title: "Network & security",
    description: "Architect resilient, zero-trust network infrastructure.",
    skills: ["Cisco", "Fortinet SASE", "Aruba", "Meraki", "Palo Alto"],
  },
  {
    title: "Cybersecurity",
    description: "Build layered defence and real-time threat visibility.",
    skills: ["Defender", "CrowdStrike", "Essential 8", "Sentinel", "DLP"],
  },
  {
    title: "Data, AI & automation",
    description: "Turn operational data into decision-ready insight.",
    skills: ["Copilot", "Snowflake", "Power BI", "CargoWise"],
  },
  {
    title: "Virtualization & DR",
    description: "Engineer resilient infrastructure with proven recovery.",
    skills: ["VMware", "Hyper-V", "Citrix", "Azure Backup", "Druva"],
  },
  {
    title: "Leadership",
    description: "Lead distributed teams and multi-million dollar budgets.",
    skills: ["Team leadership", "Vendor Operations", "Budget ownership"],
  },
];

// Blue haze at the bottom-left and top-right corners
const backgroundStyle = {
  backgroundImage: `
    radial-gradient(ellipse 45% 55% at 0% 85%, rgba(30, 64, 175, 0.22), transparent),
    radial-gradient(ellipse 35% 40% at 100% 0%, rgba(30, 64, 175, 0.18), transparent)
  `,
};

export default function Expertise() {
  return (
    <section id="expertise" className="relative scroll-mt-[66px] overflow-hidden bg-[#05090d] md:py-20 py-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={backgroundStyle}
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="relative mx-auto max-w-[1440px] px-6 md:px-10 xl:px-20"
      >
        {/* Eyebrow + rule */}
        <motion.h2
          variants={fadeInUp}
          className="pb-2.5 font-mono text-xs font-medium uppercase tracking-widest text-gray-400"
        >
          03 / Expertise
        </motion.h2>

        {/* Skill cards */}
        <motion.div
          variants={staggerContainer}
          className="mt-8 grid gap-x-3 gap-y-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {skillGroups.map((group) => (
            <motion.article
              key={group.title}
              variants={fadeInUp}
              className="rounded-[10px] font-['Manrope'] border border-white/[0.07] bg-[#131821] p-6 transition-colors duration-300 hover:border-white/15"
            >
              <h3 className="text-xl font-['Manrope'] font-semibold leading-7 text-white">
                {group.title}
              </h3>

              <p className="mt-4 font-['Inter'] text-[16px] leading-[30px] text-[#B5B5B5]">
                {group.description}
              </p>

              <ul className="mt-[18px] flex flex-wrap gap-x-3 gap-y-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full bg-white/[0.06] px-[15px] py-2.5 font-mono text-xs leading-4 text-gray-400"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}