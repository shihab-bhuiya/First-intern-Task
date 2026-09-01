interface SkillGroup {
  title: string;
  description: string;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    title: "Cloud & Identity",
    description: "Design and manage secure, scalable cloud environments.",
    skills: ["AWS", "Azure", "Microsoft 365", "MFA", "Entra ID", "Intune"],
  },
  {
    title: "Network & Security",
    description: "Architect resilient, zero-trust network infrastructure.",
    skills: ["Cisco", "Fortinet SASE", "Aruba", "Meraki", "Palo Alto"],
  },
  {
    title: "Cybersecurity",
    description: "Build layered defence and real-time threat visibility.",
    skills: ["Defender", "CrowdStrike", "Essential 8", "Sentinel", "DLP"],
  },
  {
    title: "Data, AI & Automation",
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
    skills: ["Team Leadership", "Vendor Operations", "Budget Ownership"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-white/10 bg-[#05090d] px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-12">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">
            02 / Skills
          </p>

          <h2 className="font-mono text-3xl font-bold text-white sm:text-4xl">
            Technical Skills
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-500">
            Technologies and tools I use to design, build and deploy modern
            web applications.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-lg border border-white/10 bg-[#0a1117] p-6 transition-all duration-300 hover:border-cyan-400/30 hover:bg-[#0c141c]"
            >
              {/* Card Header */}
              <div className="mb-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-mono text-sm font-semibold text-white">
                    {group.title}
                  </h3>

                  <span className="font-mono text-[10px] text-gray-600">
                    {String(group.skills.length).padStart(2, "0")}
                  </span>
                </div>

                <p className="mt-3 text-xs leading-5 text-gray-500">
                  {group.description}
                </p>
              </div>

              {/* Skills */}
            <div className="flex flex-wrap items-center gap-2">
  {group.skills.map((skill) => (
    <div
      key={skill}
      className="flex items-center gap-2 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 px-3 py-2 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10"
    >
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />

      <span className="font-mono text-xs text-gray-400">
        {skill}
      </span>
    </div>
  ))}
</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}   