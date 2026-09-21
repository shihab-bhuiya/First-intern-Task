interface StatCard {
  prefix?: string;
  value: string;
  unit?: string;
  spacedUnit?: boolean; // adds a wider gap before the unit, e.g. "99.9 %"
  label: string;
}

const stats: StatCard[] = [
  { value: "17", unit: "+", label: "Years in IT leadership" },
  { prefix: "$", value: "2.4 M", unit: "+", label: "Annual IT budget owned" },
  { value: "8", label: "Branches supported" },
  { value: "99.9", unit: "%", spacedUnit: true, label: "Network uptime" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-[66px] overflow-hidden bg-[#05090d] py-16"
    >
      {/* Teal tint, bottom right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_90%_100%,rgba(8,90,120,0.22),transparent_55%)]"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 xl:px-20">
        {/* Eyebrow + rule */}
        <p className="border-b border-white/10 pb-2.5 font-mono text-[14px] font-medium uppercase tracking-widest text-gray-400">
          02 / About
        </p>

        {/* Heading */}
        <h2 className="mt-11 font-sans text-5xl font-semibold leading-[1.1] tracking-tight text-white sm:text-6xl xl:text-[72px]">
          Mazidul Hakim
        </h2>

        <div className="mt-8 grid items-center gap-12 lg:grid-cols-2 xl:mt-0 xl:grid-cols-[530px_1fr] xl:gap-x-[100px]">
          {/* Left: biography */}
          <div>
            <p className="text-base leading-[1.8] text-gray-300">
              <strong className="font-semibold text-white">
                Senior IT leader with 17+ years&apos; experience
              </strong>{" "}
              owning IT strategy, operations and cybersecurity for multi-branch,
              multi-entity organizations — currently leading the group
              technology function for an international shipping and logistics
              business.
            </p>

            <p className="mt-7 text-base leading-[1.8] text-gray-400">
              I build and run distributed onshore/offshore teams, own technology
              budgets, and partner directly with senior leadership to turn
              business growth priorities into a clear, funded technology
              roadmap.
            </p>

            <p className="mt-7 text-base leading-[1.8] text-gray-400">
              My track record is taking full ownership of a technology function
              and transforming it: replacing legacy network infrastructure with
              a modern SASE architecture, delivering a full cloud migration, and
              embedding ITIL-aligned governance — while staying close enough to
              the technical detail to be the escalation point when it counts.
            </p>
          </div>

          {/* Right: 2 × 2 stat cards */}
          <div className="relative">
            {/* Glow behind the cards */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-700/10 blur-[120px]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/25 blur-[90px]"
            />

            <div className="relative grid gap-5 sm:grid-cols-2">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex min-h-[210px] flex-col items-center justify-center rounded-[28px] border border-white/[0.08] bg-gradient-to-br from-white/[0.06] to-white/[0.015] px-6 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-sm transition-colors duration-300 hover:border-white/15"
                >
                  <p className="flex items-baseline font-[family-name:var(--font-oswald),sans-serif] text-5xl font-medium leading-none text-white xl:text-[64px]">
                    {stat.prefix && (
                      <span className="mr-2 text-[#38BDF8]">{stat.prefix}</span>
                    )}
                    <span>{stat.value}</span>
                    {stat.unit && (
                      <span
                        className={`text-[#38BDF8] ${
                          stat.spacedUnit ? "ml-3" : "ml-1"
                        }`}
                      >
                        {stat.unit}
                      </span>
                    )}
                  </p>

                  <p className="mt-6 text-sm uppercase text-gray-200">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quote callout */}
        <blockquote className="mt-20 border-l-4 border-[#38BDF8] bg-[#0D131B] px-5 py-3.5 font-mono text-base leading-[1.8] text-zinc-200">
          I judge every technology decision by the business outcome it drives —{" "}
          <span className="text-[#38BDF8]">not the shine of the tool</span>.
          Uptime and security are the baseline; the job is turning IT into
          something the business can actually grow on.
        </blockquote>
      </div>
    </section>
  );
}