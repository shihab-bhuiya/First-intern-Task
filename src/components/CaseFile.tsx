"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
  // Tracks which cards are expanded on small screens. Empty on mount so
  // every card starts collapsed and the same height on mobile.
  const [openCards, setOpenCards] = useState<Record<string, boolean>>({});

  const toggleCard = (caseNo: string) => {
    setOpenCards((prev) => ({ ...prev, [caseNo]: !prev[caseNo] }));
  };

  return (
    <section
      id="impact"
      className="relative w-full overflow-hidden  bg-[#0a0e11] px-6 pt-8 -pb-2"
    >
      {/* Background glows: blue top-left, teal bottom-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 55% 45% at 0% 0%, rgba(37,99,235,0.20), transparent 70%), radial-gradient(ellipse 50% 40% at 100% 100%, rgba(20,184,166,0.14), transparent 70%)",
        }}
      />

      <div className="relative mx-auto  max-w-[1312px]">
        {/* Heading */}
        <div className="mb-6  border-b border-white/10 pb-2.5">
          <h2 className="font-mono text-[14px] uppercase tracking-[0.12em] text-gray-400 ">
            04 / Case Files
          </h2>

        </div>

        {/* Case Files */}
        <div className="grid  gap-4 md:grid-cols-2 ">
          {caseFiles.map((item) => {
            const accent = accents[item.accent];
            const isOpen = !!openCards[item.caseNo];

            return (
              <article
                key={item.caseNo}
                className="flex flex-col rounded-2xl border-[#38BDF8] border-2 lg:border-none bg-[#131820] p-6 transition-colors duration-300 hover:border-white/20"
              >
                {/* Top */}
                <div className="mb-5 flex items-center justify-between gap-3">
                  <span
                    className={`rounded border px-3 py-1.5 font-mono text-[10px] leading-4 ${accent.badge}`}
                  >
                    {item.category}
                  </span>

                  <span className={`font-mono text-[10px] ${accent.caseNo}`}>
                    {item.caseNo}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-medium tracking-tight text-white">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-[11px] leading-5 text-gray-400">
                  {item.description}
                </p>

                {/* Mobile-only toggle. Hidden on md+ where results always show. */}
                <button
                  type="button"
                  onClick={() => toggleCard(item.caseNo)}
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

                {/* Results: always visible on md+; collapsible on mobile so
                    every collapsed card matches height. */}
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out md:mt-5 md:!grid-rows-[1fr] ${
                    isOpen ? "mt-4 grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="flex flex-1 flex-col justify-center rounded-lg bg-[#181f29] p-4">
                      <ul className="space-y-3.5">
                        {item.results.map(([result, technology]) => (
                          <li
                            key={result}
                            className="flex items-start justify-between gap-4"
                          >
                            <span className="flex min-w-0 items-start gap-2 font-mono text-[11px] leading-4 text-emerald-400">
                              <span aria-hidden="true">+</span>
                              <span>{result}</span>
                            </span>

                            <span className="shrink-0 text-right text-[11px] leading-4 text-gray-200">
                              {technology}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}