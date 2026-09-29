"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motionVariants";
import Image from "next/image";

const accents = {
  orange: {
    badge: "border-orange-400/60 text-orange-400",
    caseNo: "text-orange-400/80",
  },
  cyan: {
    badge: "border-cyan-400/60 text-cyan-400",
    caseNo: "text-cyan-400/80",
  },
  green: {
    badge: "border-emerald-400/60 text-emerald-400",
    caseNo: "text-emerald-400/80",
  },
};

const caseFiles = [
  {
    category: "Infrastructure / Resilience",
    caseNo: "CASE-001",
    title: "Infrastructure Modernization",
    description:
      "Aging on-prem server and storage infrastructure with no disaster recovery. Replaced legacy infrastructure with Dell modular servers and EMC storage, introduced new L3 Cisco switching, repurposed legacy hardware into a dedicated DR site, and deployed Veeam backup.",
    accent: "orange",
    results: [
      ["eliminated single points of hardware failure", "Dell / EMC"],
      ["established working disaster recovery", "DR Site"],
      ["modernized core network infrastructure", "Cisco L3"],
      ["deployed reliable backup and recovery", "VEEAM"],
    ],
  },
  {
    category: "Security / Risk",
    caseNo: "CASE-002",
    title: "Cybersecurity Uplift",
    description:
      "Fragmented security tooling and inconsistent access control across a distributed workforce. Deployed Fortinet NGFW, client VPN, organization-wide MFA, password management, and migrated email security to a cloud platform.",
    accent: "cyan",
    results: [
      ["consolidated fragmented security tooling", "Fortinet NGFW"],
      ["secured remote workforce access", "Client VPN"],
      ["strengthened identity protection", "Org-wide MFA"],
      ["improved credential security", "Password Management"],
      ["modernized email security", "Cloud Platform"],
    ],
  },
  {
    category: "Collaboration",
    caseNo: "CASE-003",
    title: "Cloud & Collaboration Migration",
    description:
      "On-prem Exchange was a single point of failure with no modern collaboration tooling. Migrated to Microsoft 365, including Exchange Online, Teams and SharePoint — rolled out Azure AD, and introduced hybrid cloud storage.",
    accent: "cyan",
    results: [
      ["removed dependency on aging on-prem Exchange", "Exchange Online"],
      ["modernized company-wide collaboration", "Microsoft Teams"],
      ["centralised document collaboration", "SharePoint"],
      ["strengthened cloud identity management", "Azure AD"],
      ["introduced flexible hybrid cloud storage", "Hybrid Storage"],
    ],
  },
  {
    category: "Data / Continuity",
    caseNo: "CASE-004",
    title: "Cloud Backup & Disaster Recovery",
    description:
      "Backup and recovery was manual, slow, and not cloud-resilient. Implemented cloud-based backup integrating with AWS, alongside SaaS backup for Office 365 data, creating a more resilient and scalable data protection strategy.",
    accent: "cyan",
    results: [
      ["automated cloud-based backup", "AWS"],
      ["protected critical Office 365 data", "SaaS Backup"],
      ["reduced manual backup dependency", "Cloud Recovery"],
      ["improved recovery speed and reliability", "Disaster Recovery"],
      ["strengthened compliance readiness", "Data Protection"],
    ],
  },
  {
    category: "Network / Connectivity",
    caseNo: "CASE-005",
    title: "Network & WAN Redesign",
    description:
      "Legacy managed WAN limited flexibility and reliability across branches. Directed the upgrade to fibre connectivity across all sites and transitioned network operations to a cloud-managed gateway for greater control, availability, and scalability.",
    accent: "cyan",
    results: [
      ["upgraded branch connectivity across all network sites", "Fibre"],
      ["reduced dependency on legacy managed WAN", "WAN Redesign"],
      ["centralised network management", "Cloud Gateway"],
      ["improved network availability", "High Availability"],
      ["simplified operations across branches", "Central Management"],
    ],
  },
  {
    category: "Infrastructure / Performance",
    caseNo: "CASE-006",
    title: "Virtualisation Overhaul",
    description:
      "Aging server hardware and a legacy virtualisation platform were constraining performance. Replaced the infrastructure with Tier 1 hardware, migrated to Hyper-V, and upgraded the server OS and mail platform to improve overall system performance and stability.",
    accent: "green",
    results: [
      ["replaced server hardware infrastructure", "Tier 1 Hardware"],
      ["modernised virtualisation platform", "Hyper-V"],
      ["upgraded server operating environment", "Server OS"],
      ["upgraded enterprise mail platform", "Mail Platform"],
      ["improved system stability by up to 50%", "Performance"],
    ],
  },
] as const;

export default function CaseFiles() {
  const [activeCard, setActiveCard] = useState<string>(caseFiles[0].caseNo);
  // First card is open by default (affects mobile only; desktop always shows details)
  const [openCard, setOpenCard] = useState<string | null>(caseFiles[0].caseNo);

  const toggleCard = (caseNo: string) => {
    setActiveCard(caseNo);
    setOpenCard((prev) => (prev === caseNo ? null : caseNo));
  };

  return (
    <section
      id="impact"
      className="relative w-full overflow-x-clip px-6 pt-4 pb-16 md:pt-6"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="relative z-10 mx-auto max-w-[1312px]"
      >
        {/* Heading */}
        <motion.div variants={fadeInUp} className="mb-5 pb-2.5">
          <h2 className="font-ibm text-[14px] uppercase tracking-[0.12em] text-gray-400">
            04 / Case Files
          </h2>
        </motion.div>

        {/* Case Files */}
        <motion.div
          variants={staggerContainer}
          className="grid gap-4 md:grid-cols-2"
        >
          {caseFiles.map((item) => {
            const accent = accents[item.accent];
            const isOpen = openCard === item.caseNo;
            const isActive = activeCard === item.caseNo;

            return (
              <motion.article
                key={item.caseNo}
                variants={fadeInUp}
                onClick={() => setActiveCard(item.caseNo)}
                className={`flex flex-col font-ibm rounded-2xl border-2 bg-[#131820] p-8 pb-10 transition-colors duration-300 md:border-transparent md:hover:border-white/20 lg:border-none ${
                  isActive ? "border-[#38BDF8]" : "border-transparent"
                }`}
              >
                {/* Top */}
                <div className="mb-8 flex items-center justify-between gap-3 rounded-[6px]">
                  <span
                    className={`rounded border bg-[#181F29] px-3 py-2 font-ibm text-[12px] leading-4 ${accent.badge}`}
                  >
                    {item.category}
                  </span>

                  <span className={`font-ibm text-[10px] ${accent.caseNo}`}>
                    {item.caseNo}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-manrope text-lg font-semibold tracking-tight text-white">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2 font-inter text-[12px] leading-5 text-gray-400">
                  {item.description}
                </p>

                {/* Results */}
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out md:mt-5 md:!grid-rows-[1fr] ${
                    isOpen ? "mt-4 grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="flex flex-1 flex-col justify-center rounded-lg bg-[#181f29] p-4">
                      <ul className="space-y-3">
                        {item.results.map(([result, technology]) => (
                          <li
                            key={result}
                            className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4"
                          >
                            <span className="flex min-w-0 items-start gap-3 font-mono text-[11px] leading-4 text-emerald-400">
                              <span aria-hidden="true">+</span>

                              <span className="font-ibm text-[14px] leading-5 lg:text-[12px]">
                                {result}
                              </span>
                            </span>

                            <span className="ml-5 text-left font-ibm text-[14px] leading-4 text-gray-200 sm:ml-0 sm:shrink-0 sm:text-right">
                              {technology}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Mobile-only toggle */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleCard(item.caseNo);
                  }}
                  aria-expanded={isOpen}
                  className="mt-5 flex items-center gap-2 text-[13px] font-medium text-white md:hidden"
                >
                  <span>{isOpen ? "Hide details" : "View details"}</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </motion.article>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Decorative gradient: non-interactive, clipped by the section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[70%] -right-[400px] z-20 h-[1400px] w-[800px]"
      >
        <Image
          src="/caseFile-gradientsvg.svg"
          alt=""
          width={1900}
          height={1900}
        />
      </div>
    </section>
  );
}