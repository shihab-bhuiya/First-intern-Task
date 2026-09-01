import Link from "next/link";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#05090d]/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="#home"
          className="font-mono text-sm font-semibold tracking-wide text-white"
        >
          <span className="text-cyan-400">&lt;</span>
          Mazidul
          <span className="text-cyan-400">/&gt;</span>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-mono text-xs text-gray-400 transition-colors hover:text-cyan-400"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="#contact"
          className="rounded-md border border-cyan-400/50 px-4 py-2 font-mono text-xs text-cyan-400 transition-all hover:bg-cyan-400 hover:text-black"
        >
          {"Let's"} Talk
        </Link>
      </nav>
    </header>
  );
}