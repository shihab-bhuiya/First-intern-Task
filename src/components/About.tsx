"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motionVariants";

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
      className="relative scroll-mt-[66px] overflow-hidden bg-[#05090d] py-14"
    >
      {/* Teal tint, bottom right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_90%_100%,rgba(8,90,120,0.22),transparent_55%)]"
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="relative mx-auto max-w-[1440px] px-6 md:px-10 xl:px-20"
      >
        {/* Eyebrow + rule */}
        <motion.p
          variants={fadeInUp}
          className="border-b border-white/10 pb-2.5 font-mono text-[14px] font-medium uppercase tracking-widest text-gray-400"
        >
          02 / About
        </motion.p>

        {/* Heading */}
        <motion.h2
          variants={fadeInUp}
          className="mt-6 font-manrope text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl xl:text-[72px]"
        >
          Mazidul Hakim
        </motion.h2>

        <div className="mt-2 font-inter grid items-center gap-12 lg:grid-cols-2 xl:mt-0 xl:grid-cols-[530px_1fr] xl:gap-x-[100px]">
          {/* Biography */}
          <motion.div variants={fadeInUp} className="order-2 lg:order-1">
            <p className="text-base font-inter leading-[1.8] text-gray-300">
              <strong className="font-semibold text-white">
                Senior IT leader with 17+ year&apos;s experience
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
          </motion.div>

          {/* Stats */}
          <motion.div variants={fadeInUp} className="relative order-1 lg:order-2">
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
            <motion.div
              variants={staggerContainer}
              className="relative grid grid-cols-2 gap-5"
            >
           {stats.map((stat) => (
  <motion.div
    key={stat.label}
    variants={fadeInUp}
    className="group relative flex min-h-[210px] flex-col items-center justify-center overflow-hidden rounded-[28px] border border-white/15 bg-white/[0.04] px-4 text-center shadow-[0_8px_32px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl transition-all duration-500 hover:border-sky-400/40 hover:bg-white/[0.07] hover:shadow-[0_12px_40px_rgba(56,189,248,0.2),inset_0_1px_0_rgba(255,255,255,0.2)] sm:px-6"
  >
    {/* Glass sheen, top-left to transparent */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.10] via-transparent to-transparent"
    />

    {/* Top-edge highlight */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
    />

    <p className="relative z-10 flex items-baseline font-[family-name:var(--font-oswald),sans-serif] text-3xl font-semibold text-white sm:text-5xl xl:text-[64px]">
      {stat.prefix && (
        <span className="mr-2 text-[#38BDF8]">{stat.prefix}</span>
      )}
      <span>{stat.value}</span>
      {stat.unit && (
        <span
          className={`text-[#38BDF8] ${stat.spacedUnit ? "ml-3" : "ml-1"}`}
        >
          {stat.unit}
        </span>
      )}
    </p>

    <p className="relative z-10 mt-5 text-[8px] font-semibold uppercase tracking-normal text-gray-300 sm:mt-6 sm:text-sm">
      {stat.label}
    </p>
  </motion.div>
))}
            </motion.div>
          </motion.div>
        </div>

        {/* Quote callout */}
        <motion.blockquote
          variants={fadeInUp}
          className="mt-10 border-l-4 border-[#38BDF8] bg-[#0D131B] px-5 py-3.5 font-ibm text-base leading-[1.8] text-zinc-200"
        >
          I judge every technology decision by the business outcome it drives —
          <span className="text-[#38BDF8]"> not the shine of the tool</span>.
          Uptime and security are the baseline; the job is turning IT into
          something the business can actually grow on.
        </motion.blockquote>
      </motion.div>
    </section>
  );
}
