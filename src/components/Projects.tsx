const caseFiles = [
  {
    category: "Infrastructure / Resilience",
    caseNo: "CASE-01",
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
];

export default function CaseFiles() {
  return (
    <section
      id="case-files"
      className="border-t border-white/10 bg-[#05090d] px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-10">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-gray-500">
            04 / Case Files
          </p>

          <h2 className="font-mono text-3xl font-bold text-white sm:text-4xl">
            Selected Work
          </h2>
        </div>

        {/* Case Files */}
        <div className="grid gap-4 md:grid-cols-2">
          {caseFiles.map((item) => (
            <article
              key={item.caseNo}
              className="rounded-xl border border-white/10 bg-[#111821] p-4 transition-all duration-300 hover:border-white/20 hover:bg-[#141d27]"
            >
              {/* Top */}
              <div className="mb-4 flex items-center justify-between">
                <span
                  className={`rounded border px-2 py-1 font-mono text-[8px] ${
                    item.accent === "orange"
                      ? "border-orange-400/50 text-orange-400"
                      : item.accent === "green"
                        ? "border-green-400/50 text-green-400"
                        : "border-cyan-400/50 text-cyan-400"
                  }`}
                >
                  {item.category}
                </span>

                <span className="font-mono text-[8px] text-cyan-500/70">
                  {item.caseNo}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-mono text-sm font-medium text-white">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-[9px] leading-5 text-gray-500">
                {item.description}
              </p>

              {/* Results */}
              <div className="mt-5 rounded-md bg-[#0c141d] p-4">
                <div className="space-y-3">
                  {item.results.map(([result, technology]) => (
                    <div
                      key={result}
                      className="flex items-center justify-between gap-4"
                    >
                      <div className="flex min-w-0 items-center gap-2">
                        <span className="font-mono text-[9px] text-emerald-400">
                          +
                        </span>

                        <span className="font-mono text-[8px] leading-4 text-emerald-400/80">
                          {result}
                        </span>
                      </div>

                      <span className="shrink-0 text-right font-mono text-[7px] text-gray-400">
                        {technology}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}