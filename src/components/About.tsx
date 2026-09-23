"use client";

import { useState } from "react";

interface StatCard {
  prefix?: string;
  value: string;
  unit?: string;
  spacedUnit?: boolean;
  label: string;
}

const stats: StatCard[] = [
  { value: "17", unit: "+", label: "Years in IT leadership" },
  { prefix: "$", value: "2.4M", unit: "+", label: "Annual IT budget owned" },
  { value: "8", label: "Branches supported" },
  { value: "99.9", unit: "%", spacedUnit: true, label: "Network uptime" },
];

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      id="about"
      className="relative scroll-mt-[66px] overflow-hidden bg-[#05090d] py-10"
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
        <h2 className="mt-6 font-[Manrope] text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl xl:text-[72px]">
          Mazidul Hakim
        </h2>

        <div className="mt-2 font-['Inter'] grid items-center gap-12 lg:grid-cols-2 xl:mt-0 xl:grid-cols-[530px_1fr] xl:gap-x-[100px]">
          {/* Biography */}
          <div className="order-2 lg:order-1">
            <p className="text-base leading-[1.8] text-gray-300">
              <strong className="font-semibold text-white">
                Senior IT leader with 17+ years&apos; experience
              </strong>{" "}
              owning IT strategy, operations and cybersecurity for multi-branch,
              multi-entity organizations — currently leading the group
              technology function for an international shipping and logistics
              business.
            </p>

            {/* Mobile Expandable Container / Always Visible on Desktop */}
            <div className={`${isExpanded ? "block" : "hidden"} lg:block`}>
              <p className="mt-7 text-base leading-[1.8] text-gray-400">
                I build and run distributed onshore/offshore teams, own technology
                budgets, and partner directly with senior leadership to turn
                business growth priorities into a clear, funded technology
                roadmap.
              </p>

              <p className="mt-7 text-base leading-[1.8] text-gray-400">
                My track record is taking full ownership of a technology function
                and transforming it: replacing legacy network infrastructure with
                a modern SASE architecture, delivering a full cloud migration,
                and embedding ITIL-aligned governance — while staying close enough
                to the technical detail to be the escalation point when it counts.
              </p>
            </div>

            {/* Mobile Toggle Button (Hidden on Desktop) */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-4 font-mono text-sm font-medium text-[#38BDF8] underline decoration-[#38BDF8]/30 underline-offset-4 transition-colors hover:text-[#0EA5E9] lg:hidden"
            >
              {isExpanded ? "Read less" : "Read more..."}
            </button>
          </div>

          {/* Stats */}
          <div className="relative order-1 lg:order-2">
            {/* Background Glows */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-700/15 blur-[200px]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/30 blur-[100px]"
            />

            {/* Grid */}
            <div className="relative grid grid-cols-2 gap-5">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="group relative rounded-[28px] bg-gradient-to-b from-white/30 via-sky-500/20 to-white/5 p-[1.5px] shadow-[0_8px_32px_0_rgba(0,0,0,0.6)] transition-all duration-500 hover:from-sky-400/50 hover:via-cyan-400/30 hover:to-white/20 hover:shadow-[0_12px_40px_0_rgba(56,189,248,0.25)]"
                >
                  {/* Card Body */}
                  <div className="relative flex h-full min-h-[210px] flex-col items-center justify-center overflow-hidden rounded-[26px] bg-[#070d14]/80 px-4 text-center backdrop-blur-xl transition-all duration-500 group-hover:bg-[#08121d]/85 sm:px-6">
                    {/* Top-Edge Highlight Line */}
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-70 group-hover:opacity-100" />

                    {/* Subtle Inner Glass Radial Gradient */}
                    <div className="pointer-events-none absolute -left-12 -top-12 h-32 w-32 rounded-full bg-white/5 blur-xl group-hover:bg-sky-400/10" />

                    <p className="relative z-10 flex items-baseline font-[family-name:var(--font-oswald),sans-serif] text-3xl font-semibold text-white sm:text-5xl xl:text-[64px]">
                      {stat.prefix && (
                        <span className="mr-2 text-[#38BDF8] drop-shadow-[0_0_12px_rgba(56,189,248,0.5)]">
                          {stat.prefix}
                        </span>
                      )}

                      <span className="drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                        {stat.value}
                      </span>

                      {stat.unit && (
                        <span
                          className={`text-[#38BDF8] drop-shadow-[0_0_12px_rgba(56,189,248,0.5)] ${
                            stat.spacedUnit ? "ml-1" : "ml-1"
                          }`}
                        >
                          {stat.unit}
                        </span>
                      )}
                    </p>

                    <p className="relative z-10 mt-5 text-[8px] font-semibold uppercase tracking-normal text-gray-300 sm:mt-6 sm:text-sm">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quote callout */}
        <blockquote className="mt-10 border-l-4 border-[#38BDF8] bg-[#0D131B] px-5 py-3.5 font-mono text-base leading-[1.8] text-zinc-200">
          I judge every technology decision by the business outcome it drives —
          <span className="text-[#38BDF8]"> not the shine of the tool</span>.
          Uptime and security are the baseline; the job is turning IT into
          something the business can actually grow on.
        </blockquote>
      </div>
    </section>
  );
}