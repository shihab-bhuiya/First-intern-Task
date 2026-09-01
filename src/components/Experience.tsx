'use client'
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

const accentStyles: Record<Accent, { border: string; glow: string }> = {
  blue: {
    border: "border-sky-500/70",
    glow: "from-sky-500/20 via-sky-500/5 to-transparent",
  },
  olive: {
    border: "border-lime-400/60",
    glow: "from-lime-400/20 via-lime-400/5 to-transparent",
  },
  coral: {
    border: "border-orange-500/60",
    glow: "from-orange-500/20 via-orange-500/5 to-transparent",
  },
  teal: {
    border: "border-teal-400/60",
    glow: "from-teal-400/20 via-teal-400/5 to-transparent",
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
    <div className="min-h-screen bg-[#0a0e14] px-6 py-16 sm:px-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-16 text-4xl font-semibold text-white sm:text-5xl">
          Career <span className="text-sky-400">Timeline</span>
        </h1>

        <ol className="relative border-l border-sky-900/60 pl-0">
          {entries.map((entry) => {
            const isOpen = openId === entry.id;
            const styles = accentStyles[entry.accent];

            return (
              <li key={entry.id} className="relative mb-14 last:mb-0">
                {/* connector line to card */}
                <span className="absolute left-0 top-9 hidden h-px w-40 -translate-x-full bg-sky-800/60 sm:block" />

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-[160px_1fr] sm:gap-8 sm:pl-6">
                  {/* left: year range + duration pill */}
                  <div className="flex flex-col items-start gap-2 sm:items-end sm:text-right">
                    <span className="text-sm font-medium text-white sm:text-base">
                      {entry.yearRange}
                    </span>
                    <span className="rounded-full border border-sky-800/70 px-3 py-0.5 text-xs text-sky-300/80">
                      {entry.duration}
                    </span>
                  </div>

                  {/* right: card */}
                  <button
                    type="button"
                    onClick={() => toggle(entry.id)}
                    aria-expanded={isOpen}
                    className={`group relative overflow-hidden rounded-xl border bg-gradient-to-br ${styles.glow} ${styles.border} bg-[#0d1420] px-5 py-4 text-left transition-colors hover:bg-[#101827]`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <h2 className="text-base font-medium text-white sm:text-lg">
                          {entry.title}
                        </h2>
                        <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                          {entry.dateRange} · {entry.location}
                        </p>
                      </div>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>

                    {entry.details && (
                      <div
                        className={`grid transition-all duration-200 ease-out ${
                          isOpen
                            ? "mt-3 grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <ul className="overflow-hidden text-sm text-slate-300">
                          {entry.details.map((line, i) => (
                            <li key={i} className="mt-1 first:mt-0">
                              {line}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </button>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}