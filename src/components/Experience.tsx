'use client';
import { useState } from "react";
import { ChevronDown } from "lucide-react";

type Accent = "blue" | "olive" | "coral" | "teal";

interface TimelineEntry {
  id: string;
  yearRange: string;
  duration: string;
  title: string;
  dateRange: string;
  location: string;
  accent: Accent;
  details?: string[];
}

const accentStyles: Record<
  Accent,
  {
    border: string;
    topLine: string;
    glow: string;
    cardBg: string;
  }
> = {
  blue: {
    border: "border-sky-500/30 hover:border-sky-400/60",
    topLine: "bg-[#00c8ff] shadow-[0_0_12px_#00c8ff]",
    glow: "from-[#00c8ff]/20 via-[#00c8ff]/5 to-transparent",
    cardBg: "bg-[#0f1722]/90",
  },
  olive: {
    border: "border-lime-500/30 hover:border-lime-400/60",
    topLine: "bg-[#b0f53d] shadow-[0_0_12px_#b0f53d]",
    glow: "from-[#b0f53d]/20 via-[#b0f53d]/5 to-transparent",
    cardBg: "bg-[#141b16]/90",
  },
  coral: {
    border: "border-orange-500/30 hover:border-orange-400/60",
    topLine: "bg-[#ff6b4a] shadow-[0_0_12px_#ff6b4a]",
    glow: "from-[#ff6b4a]/20 via-[#ff6b4a]/5 to-transparent",
    cardBg: "bg-[#1c1616]/90",
  },
  teal: {
    border: "border-teal-500/30 hover:border-teal-400/60",
    topLine: "bg-[#2dd4bf] shadow-[0_0_12px_#2dd4bf]",
    glow: "from-[#2dd4bf]/20 via-[#2dd4bf]/5 to-transparent",
    cardBg: "bg-[#0f1a1a]/90",
  },
};

const entries: TimelineEntry[] = [
  {
    id: "1",
    yearRange: "2024–Now",
    duration: "2 years",
    title: "IT Systems Manager",
    dateRange: "Jan 2024 — Present",
    location: "PIL Australia // Melbourne",
    accent: "blue",
    details: [
      "Leading systems strategy and infrastructure for the Melbourne office.",
      "Overseeing a small team of analysts and administrators.",
    ],
  },
  {
    id: "2",
    yearRange: "2019–2024",
    duration: "5 years",
    title: "Senior Systems Analyst",
    dateRange: "May 2019 — Jan 2024",
    location: "PIL Australia // Melbourne",
    accent: "olive",
    details: [
      "Analyzed and optimized core business systems.",
      "Partnered with stakeholders on system upgrades.",
    ],
  },
  {
    id: "3",
    yearRange: "2018–2019",
    duration: "1 year",
    title: "ICT Coordinator",
    dateRange: "Jul 2018 — May 2019",
    location: "Shire of Ashburton // WA",
    accent: "coral",
    details: ["Coordinated ICT operations across council sites."],
  },
  {
    id: "4",
    yearRange: "2014–2018",
    duration: "4 years",
    title: "IT Systems Administrator",
    dateRange: "Oct 2014 — Jul 2018",
    location: "Shire of Ashburton // WA",
    accent: "teal",
    details: ["Administered servers, networks, and end-user support."],
  },
  {
    id: "5",
    yearRange: "2012–2014",
    duration: "2 years",
    title: "IT Support Officer",
    dateRange: "Oct 2012 — Sep 2014",
    location: "Shire of Murray // WA",
    accent: "olive",
    details: ["Provided frontline IT support to council staff."],
  },
  {
    id: "6",
    yearRange: "2011–2012",
    duration: "2 years",
    title: "Computer Engineer",
    dateRange: "Jan 2011 — Oct 2012",
    location: "Leading Edge Computers // WA",
    accent: "coral",
    details: ["Repaired and configured hardware for retail customers."],
  },
];

export default function CareerTimeline() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="experience" className="relative w-full bg-[#070b12] py-16 sm:py-20 px-4 sm:px-8 md:px-16 overflow-hidden">
      {/* Ambient background glow on right */}
      <div className="absolute top-1/2 -right-36 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1312px] mx-auto relative z-10">
        {/* Section Tag */}
        <div className="border-t border-slate-800/80 pt-6 mb-8">
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-slate-400 uppercase">
            <span className="text-slate-500 font-semibold">05</span>
            <span className="text-slate-600">/</span>
            <span className="text-slate-400 font-medium">EXPERIENCE</span>
          </div>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-10 sm:mb-16">
          Career <span className="text-[#00c8ff]">Timeline</span>
        </h2>

        {/* Timeline Container */}
        <div className="relative">
          {/* Continuous Glowing Vertical Cyan Line */}
          <div className="absolute left-2.5 sm:left-[220px] top-6 bottom-6 w-[2px] bg-[#00a8ff] shadow-[0_0_10px_#00a8ff] z-10" />

          <div className="space-y-5 sm:space-y-12">
            {entries.map((entry) => {
              const isOpen = openId === entry.id;
              const styles = accentStyles[entry.accent];

              return (
                <div
                  key={entry.id}
                  className="relative flex flex-col sm:flex-row items-start sm:items-center group"
                >
                  {/* Left Column: Year Range & Duration Pill (Desktop Only) */}
                  <div className="hidden sm:flex w-[220px] shrink-0 pr-10 text-right flex-col items-end justify-center">
                    <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {entry.yearRange}
                    </span>
                    <span className="mt-1.5 px-3 py-0.5 rounded-full border border-sky-800/60 bg-[#091524] text-[#00c8ff] text-xs font-mono tracking-wide font-medium shadow-[0_0_10px_rgba(0,200,255,0.1)]">
                      {entry.duration}
                    </span>
                  </div>

                  {/* Connector Branch (Horizontal Glowing Line - Desktop Only) */}
                  <div className="hidden sm:block absolute left-[220px] w-10 h-[2px] bg-[#00a8ff] shadow-[0_0_8px_#00a8ff] z-10" />

                  {/* Card Container (Right Column / Full Width on Mobile) */}
                  <div className="w-full pl-7 sm:pl-10 flex-1">
                    <button
                      type="button"
                      onClick={() => toggle(entry.id)}
                      aria-expanded={isOpen}
                      className={`w-full relative text-left rounded-2xl border transition-all duration-300 ${styles.border} ${styles.cardBg} backdrop-blur-md p-4 sm:p-6 overflow-hidden group/card hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]`}
                    >
                      {/* Top glowing accent line */}
                      <div className={`absolute top-0 inset-x-0 h-[2px] ${styles.topLine}`} />

                      {/* Top inner gradient glow */}
                      <div className={`absolute top-0 inset-x-0 h-24 bg-gradient-to-b ${styles.glow} pointer-events-none`} />

                      {/* Card Content Header */}
                      <div className="relative z-10 flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-base sm:text-xl font-semibold text-white tracking-tight">
                            {entry.title}
                          </h3>
                          <p className="mt-1 text-xs sm:text-sm text-slate-400">
                            <span className="font-semibold text-slate-200">{entry.dateRange}</span>
                            <span className="mx-1.5 sm:mx-2 text-slate-500">·</span>
                            <span>{entry.location}</span>
                          </p>
                        </div>

                        <div className="p-1 rounded-lg text-slate-400 group-hover/card:text-white transition-colors">
                          <ChevronDown
                            className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${
                              isOpen ? "rotate-180 text-white" : ""
                            }`}
                          />
                        </div>
                      </div>

                      {/* Expandable Details */}
                      {entry.details && (
                        <div
                          className={`grid transition-all duration-300 ease-in-out ${
                            isOpen
                              ? "grid-rows-[1fr] opacity-100 mt-3 pt-3 sm:mt-4 sm:pt-4 border-t border-slate-800/60"
                              : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-300 list-disc list-inside">
                              {entry.details.map((detail, idx) => (
                                <li key={idx} className="leading-relaxed">
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

