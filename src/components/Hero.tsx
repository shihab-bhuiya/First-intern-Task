import Link from "next/link";
import { MdOutlineEmail } from "react-icons/md";
import { RiShoppingBag4Line } from "react-icons/ri";

interface NodeLocation {
  id: string;
  title: string;
  subtitle?: string;
  x: number; // Percentage X position (0 to 100)
  y: number; // Percentage Y position (0 to 100)
  color: string;
}

const nodes: NodeLocation[] = [
  { id: "hq", title: "Singapore HQ", x: 53, y: 13, color: "bg-lime-400" },
  { id: "aus", title: "Australia", subtitle: "8 BRANCHES", x: 17, y: 56, color: "bg-white" },
  { id: "ph", title: "Philippines", subtitle: "OFFSHORE TEAM", x: 32, y: 70, color: "bg-sky-400" },
  { id: "nz", title: "Auckland", subtitle: "NEW ZEALAND", x: 37, y: 84, color: "bg-white" },
  { id: "in", title: "India", subtitle: "OFFSHORE TEAM", x: 75, y: 47, color: "bg-sky-400" },
];

const connections = [
  { from: "hq", to: "aus", controlX: 30, controlY: 30 },
  { from: "hq", to: "ph", controlX: 40, controlY: 45 },
  { from: "hq", to: "in", controlX: 72, controlY: 20 },
  { from: "hq", to: "nz", controlX: 58, controlY: 55 },
  { from: "aus", to: "ph", controlX: 22, controlY: 62 },
  { from: "aus", to: "nz", controlX: 25, controlY: 72 },
  { from: "ph", to: "nz", controlX: 35, controlY: 76 },
  { from: "ph", to: "in", controlX: 55, controlY: 60 },
  { from: "nz", to: "in", controlX: 60, controlY: 75 },
  { from: "aus", to: "in", controlX: 45, controlY: 40 },
];

export default function Hero() {
  const getNode = (id: string) => nodes.find((n) => n.id === id);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#05090d] px-6 pt-16"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-80 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 py-20 lg:grid-cols-2">
        {/* Left Content */}
        <div>
          {/* Status */}
          <div className="mb-6 flex items-center gap-2 font-mono text-xs text-gray-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
            IT Manager · Cloud · Cybersecurity
          </div>

          {/* Heading */}
          <h1 className="font-mono text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Mazidul
            <br />
            <span className="text-cyan-400">Hakim</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
            Senior IT leader with 17+ years turning technology functions around — network modernisation, cloud migration and cybersecurity uplift across complex, multi-site organisations.
          </p>
          
          <div className="flex flex-wrap gap-3 pt-4 items-center">
            <button className="text-white bg-[#181F29] border border-zinc-700 px-3 py-1.5 rounded-full text-xs font-mono">
              IT Leadership
            </button>
            <button className="text-[#CCFF00] bg-[#181F29] border border-[#CCFF00]/40 px-3 py-1.5 rounded-full text-xs font-mono">
              ● open to SOC / Cybersecurity
            </button>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-md border border-white/15 px-5 py-3 font-mono text-xs font-semibold text-gray-300 transition-all hover:border-cyan-400/50 hover:text-cyan-400"
            >
              <div className="flex items-center gap-2 text-white">
                <RiShoppingBag4Line className="text-lg" /> 
                <span>Career Info</span>
              </div>
            </Link>

            <Link
              href="/projects"
              className="rounded-md bg-cyan-400 px-5 py-3 font-mono text-xs font-semibold text-black transition-all hover:bg-cyan-300"
            >
              <div className="flex items-center gap-2">
                <MdOutlineEmail className="text-lg" />
                <span>Contact Me</span>
              </div>
            </Link>
          </div>

          {/* Small Tech Stack Badges */}
          <div className="mt-10 flex flex-wrap gap-6 font-mono text-xs text-gray-500">
            <span>React</span>
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>Node.js</span>
          </div>
        </div>

        {/* Right Network Graphic Panel */}
        <div className="relative w-full h-[450px] bg-[#0b0d12] rounded-lg p-6 overflow-hidden select-none border border-zinc-800">
          {/* Grid Background */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{
              backgroundImage: `
                linear-gradient(to right, #ffffff 1px, transparent 1px),
                linear-gradient(to bottom, #ffffff 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />

          {/* SVG Connections between ALL nodes */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {connections.map((conn, index) => {
              const source = getNode(conn.from);
              const target = getNode(conn.to);

              if (!source || !target) return null;

              return (
                <path
                  key={`${conn.from}-${conn.to}-${index}`}
                  d={`M ${source.x}% ${source.y}% Q ${conn.controlX}% ${conn.controlY}%, ${target.x}% ${target.y}%`}
                  fill="none"
                  stroke="#3f3f46"
                  strokeWidth="1.2"
                  strokeDasharray="4 4"
                />
              );
            })}
          </svg>

          {/* Map Nodes & Labels */}
          {nodes.map((node) => (
            <div
              key={node.id}
              className="absolute flex items-center gap-3 transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
            >
              {/* Node Indicator Dot */}
              <div className="relative flex items-center justify-center">
                <span className={`w-3.5 h-3.5 rounded-full ${node.color} z-10 block ring-4 ring-black/50`} />
              </div>

              {/* Node Text Content */}
              <div className="flex flex-col text-left whitespace-nowrap">
                <span className="text-xs font-mono font-medium text-zinc-100 leading-tight">
                  {node.title}
                </span>
                {node.subtitle && (
                  <span className="text-[9px] font-mono tracking-wider text-zinc-400 uppercase mt-0.5">
                    {node.subtitle}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}