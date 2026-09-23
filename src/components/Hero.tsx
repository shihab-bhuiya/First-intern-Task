import Link from "next/link";
import { LuBriefcase, LuMail } from "react-icons/lu";

/**
 * Graph coordinates live in a 656 × 554 box, which is the size of the
 * right column in the 1440px Figma frame. Everything scales from there.
 */
const GRAPH_W = 656;
const GRAPH_H = 554;

interface GraphNode {
  id: string;
  title: string;
  subtitle?: string;
  x: number;
  y: number;
  size: number;
  dotClass: string;
}

const nodes: GraphNode[] = [
  {
    id: "hq",
    title: "Singapore HQ",
    x: 345,
    y: 57,
    size: 22,
    dotClass: "bg-[#CCFF00] shadow-[0_0_24px_rgba(204,255,0,0.35)]",
  },
  {
    id: "aus",
    title: "Australia",
    subtitle: "8 Branches",
    x: 44,
    y: 310,
    size: 18,
    dotClass: "bg-white",
  },
  {
    id: "ph",
    title: "Philippines",
    subtitle: "Offshore Team",
    x: 196,
    y: 388,
    size: 18,
    dotClass: "bg-blue-400",
  },
  {
    id: "nz",
    title: "Auckland",
    subtitle: "New Zealand",
    x: 229,
    y: 494,
    size: 18,
    dotClass: "bg-white",
  },
  {
    id: "in",
    title: "India",
    subtitle: "Offshore Team",
    x: 448,
    y: 252,
    size: 18,
    dotClass: "bg-blue-400",
  },
];

// Quadratic curves: [controlX, controlY] are in the same 656 × 554 space
const connections: {
  from: string;
  to: string;
  control: [number, number];
}[] = [
  { from: "hq", to: "aus", control: [206, 150] },
  { from: "hq", to: "ph", control: [264, 210] },
  { from: "hq", to: "in", control: [417, 57] },
  { from: "aus", to: "nz", control: [86, 430] },
];

const nodeById = Object.fromEntries(nodes.map((n) => [n.id, n]));

const gridStyle = {
  backgroundImage: `
    linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
  `,
  backgroundSize: "72px 72px",
  maskImage:
    "radial-gradient(ellipse 75% 85% at 60% 50%, black 25%, transparent 100%)",
  WebkitMaskImage:
    "radial-gradient(ellipse 75% 85% at 60% 50%, black 25%, transparent 100%)",
};

export default function Hero() {
  return (
    <section className="relative flex items-center overflow-hidden bg-[#05090d] pt-[66px] lg:min-h-[700px]">
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={gridStyle}
      />

      {/* Soft indigo tint, bottom right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(99,102,241,0.09),transparent_55%)]"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-6 md:px-10 xl:px-20">
        <div className="grid items-center gap-12 py-8 lg:grid-cols-2 xl:grid-cols-[600px_1fr] xl:gap-6 xl:py-10">
          {/* Left content */}
          <div className="relative z-10 order-2 flex min-w-0 flex-col lg:order-none">
            {/* Status line */}
            <div className="order-1 mb-4 flex items-center gap-2 font-mono text-[12px] text-gray-300 lg:text-sm">
              <span
                aria-hidden="true"
                className="flex h-3.5 w-3.5 items-center justify-center rounded-full border border-[#CCFF00]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#CCFF00]" />
              </span>

              IT Manager · Cloud · Cybersecurity
            </div>

            {/* Heading */}
            <h1 className="order-2 font-sans text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl xl:text-[80px]">
              Mazidul
              <br />
              <span className="text-[#69C8FF]">Hakim</span>
            </h1>

            {/* Description */}
            <p className="order-4 mt-4 max-w-[600px] text-base leading-7 text-slate-400 lg:order-3">
              Senior IT leader with 17+ years turning technology functions
              around — network modernisation, cloud migration and cybersecurity
              uplift across complex, multi-site organisations.
            </p>

            {/* Pills */}
            <div className="order-3 mt-4 flex flex-nowrap gap-3 sm:gap-4 lg:order-4">
              <span className="inline-flex h-10 items-center whitespace-nowrap rounded-full bg-[#131A22] px-4 font-mono text-[10px] font-semibold text-white sm:px-5">
                IT Leadership
              </span>

              <span className="inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-full border border-[#CCFF00]/40 bg-[#CCFF00]/5 px-3 font-mono text-[10px] text-[#CCFF00] sm:px-6 lg:text-base">
                <span
                  aria-hidden="true"
                  className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#CCFF00]"
                />
                open to SOC / Cybersecurity
              </span>
            </div>

            {/* Action buttons */}
            <div className="order-5 mt-12 flex lg:justify-start justify-center flex-nowrap gap-3 sm:gap-4">
              <Link
                href="#experience"
                className="inline-flex h-12 w-40 items-center gap-2 rounded-[10px] bg-[#131A22] px-7 text-sm lg:text-[14.5px] font-semibold lg:px-6 text-white transition-colors hover:bg-[#1B2430] sm:h-14 sm:gap-2.5 sm:px-7 sm:text-lg"
              >
                <LuBriefcase
                  className="text-base lg:text-[40px  ] sm:text-xl"
                  aria-hidden="true"
                />
                Career Info
              </Link>

              <Link
                href="#contact"
                className="inline-flex h-12 w-40 lg:text-[14.5px]  items-center gap-2 rounded-[10px] bg-[#38BDF8] px-6 lg:px-4 text-sm font-semibold text-[#05090d] transition-colors hover:bg-[#7DD3FC] sm:h-14 sm:gap-2.5 sm:px-7 sm:text-lg"
              >
                <LuMail className="text-base text-center sm:text-xl" aria-hidden="true" />
                Contact Now
              </Link>
            </div>
          </div>

          {/* Right: network map */}
          <div
            role="img"
            aria-label="Network map: Singapore HQ connected to Australia, the Philippines, India and Auckland, New Zealand"
            className="relative order-1 aspect-[656/554] w-full select-none lg:order-none lg:block"
          >
            <svg
              aria-hidden="true"
              viewBox={`0 0 ${GRAPH_W} ${GRAPH_H}`}
              className="absolute inset-0 h-full w-full"
              fill="none"
            >
              {connections.map(({ from, to, control }) => {
                const a = nodeById[from];
                const b = nodeById[to];

                return (
                  <path
                    key={`${from}-${to}`}
                    d={`M ${a.x} ${a.y} Q ${control[0]} ${control[1]} ${b.x} ${b.y}`}
                    stroke="#2A313B"
                    strokeWidth={1}
                  />
                );
              })}
            </svg>

            {nodes.map((node) => (
              <div
                key={node.id}
                className="absolute"
                style={{
                  left: `${(node.x / GRAPH_W) * 100}%`,
                  top: `${(node.y / GRAPH_H) * 100}%`,
                }}
              >
                {/* Dot */}
                <span
                  aria-hidden="true"
                  className={`absolute block rounded-full ${node.dotClass}`}
                  style={{
                    width: node.size,
                    height: node.size,
                    left: -node.size / 2,
                    top: -node.size / 2,
                  }}
                />

                {/* Label */}
                <div className="absolute left-6 top-[-26px] whitespace-nowrap">
                  <p className="font-mono text-xs leading-4 text-zinc-200">
                    {node.title}
                  </p>

                  {node.subtitle && (
                    <p className="mt-2 font-mono text-[10px] uppercase leading-[14px] tracking-wider text-zinc-500">
                      {node.subtitle}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}