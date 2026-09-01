interface StatCard {
  value: string;
  unit?: string;
  prefix?: string;
  label: string;
  accentColor?: string;
}

const stats: StatCard[] = [
  {
    prefix: "",
    value: "17",
    unit: "+",
    label: "YEARS IN IT LEADERSHIP",
    accentColor: "text-sky-400",
  },
  {
    prefix: "$",
    value: "2.4 M",
    unit: "+",
    label: "ANNUAL IT BUDGET OWNED",
    accentColor: "text-sky-400",
  },
  {
    prefix: "",
    value: "8",
    unit: "",
    label: "BRANCHES SUPPORTED",
    accentColor: "text-sky-400",
  },
  {
    prefix: "",
    value: "99.9",
    unit: "%",
    label: "NETWORK UPTIME",
    accentColor: "text-sky-400",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-white/10 bg-[#05090d] px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-14">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">
            01 / About
          </p>

          <h2 className="font-mono text-3xl font-bold text-white sm:text-4xl">
            About Me
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-start">
          {/* Left Column: Biography & Quote */}
          <div>
            <h3 className="font-mono text-4xl font-semibold text-white sm:text-5xl">
              Mazidul Hakim
            </h3>

            <p className="mt-6 text-sm leading-7 text-gray-300">
              <strong className="text-white font-semibold">
                Senior IT leader with 17+ years experience
              </strong>{" "}
              owning IT strategy, operations and cybersecurity for multi-branch,
              multi-entity organizations — currently leading the group technology
              function for an international shipping and logistics business.
            </p>

            <p className="mt-5 text-sm leading-7 text-gray-400">
              I build and run distributed onshore/offshore teams, own technology
              budgets, and partner directly with senior leadership to turn business
              growth priorities into a clear, funded technology roadmap.
            </p>

            <p className="mt-5 text-sm leading-7 text-gray-400">
              My track record is taking full ownership of a technology function and
              transforming it: replacing legacy network infrastructure with a modern
              SASE architecture, delivering a full cloud migration, and embedding
              ITIL-aligned governance — while staying close enough to the technical
              detail to be the escalation point when it counts.
            </p>

            {/* Quote Callout Box */}
            <div className="mt-8 border-l-2 border-cyan-500 bg-[#080d14]/80 p-4 rounded-r-md">
              <p className="font-mono text-xs text-zinc-300 leading-relaxed">
                I judge every technology decision by the business outcome it drives —{" "}
                <span className="text-cyan-400">not the shine of the tool</span>. Uptime
                and security are the baseline; the job is turning IT into something the
                business can actually grow on.
              </p>
            </div>

            {/* Tech Stack Badges */}
            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "MongoDB",
              ].map((technology) => (
                <span
                  key={technology}
                  className="rounded border border-white/10 bg-white/[0.03] px-3 py-2 font-mono text-[11px] text-gray-400"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: 2x2 Dynamic Stat Cards Grid */}
          <div className="relative w-full">
            {/* Glow effect centered behind the cards */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[80px]" />

            <div className="grid grid-cols-1 gap-4 rounded-b-4xl sm:grid-cols-2">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="group relative flex flex-col items-center justify-center rounded-2xl border border-zinc-800/80 bg-[#0b0f17]/90 p-8 text-center transition-all duration-300 hover:border-zinc-700 hover:bg-[#0e141f]"
                >
                  <div className="flex items-baseline font-mono text-4xl font-bold tracking-tight text-white sm:text-5xl">
                    {stat.prefix && (
                      <span className={stat.accentColor}>{stat.prefix}</span>
                    )}
                    <span>{stat.value}</span>
                    {stat.unit && (
                      <span className={stat.accentColor}>{stat.unit}</span>
                    )}
                  </div>

                  <span className="mt-4 font-mono text-[10px] tracking-wider text-zinc-400 uppercase">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}