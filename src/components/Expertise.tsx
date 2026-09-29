"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motionVariants";
import Image from "next/image";

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

// bg-[#070b10]

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="relative scroll-mt-[66px]  pt-8 pb-10 md:pt-10 md:pb-16"
    >
      {/* Soft continuous radial background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 "
      />
      
{/* bg-[radial-gradient(ellipse_60%_50%_at_0%_50%,rgba(30,64,175,0.18),transparent_100%),radial-gradient(ellipse_50%_50%_at_100%_100%,rgba(30,64,175,0.12),transparent_100%)] */}

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 xl:px-20"
      >
        {/* Eyebrow + rule */}
        <motion.h2
          variants={fadeInUp}
          className="border-b border-white/10 pb-2.5 font-mono text-xs font-medium uppercase tracking-widest text-gray-400"
        >
          03 / Expertise
        </motion.h2>

        {/* Skill cards */}
        <motion.div
          variants={staggerContainer}
          className="mt-5 grid gap-x-3 gap-y-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {skillGroups.map((group) => (
            <motion.article
              key={group.title}
              variants={fadeInUp}
              className="rounded-[10px] border border-white/[0.07] bg-[#131821] p-6 font-manrope transition-colors duration-300 hover:border-white/15"
            >
              <h3 className="font-manrope text-xl font-semibold leading-7 text-white">
                {group.title}
              </h3>

              <p className="mt-4 font-inter text-[16px] leading-[30px] text-[#B5B5B5]">
                {group.description}
              </p>

              <ul className="mt-[18px] flex flex-wrap gap-x-3 gap-y-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full bg-white/[0.06] px-[15px] py-2.5 font-ibm text-xs leading-4 text-gray-400"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
        <div className="absolute z-10 h-[900px] w-[900px] -bottom-[490px] -left-[380px] ">
          <Image src={'/expertice-gradient.svg'} alt="expertice-gradient" width={1700} height={1700} />
        </div>
      </motion.div>
    </section>
  );
}