
"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#05090d]/80 backdrop-blur-md">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/home"
          onClick={closeMenu}
          className="font-mono text-sm font-semibold tracking-wide text-white transition-opacity hover:opacity-80"
          aria-label="Mazidul - Home"
        >
          <span className="text-cyan-400">&lt;</span>
          Mazidul
          <span className="text-cyan-400">/&gt;</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex lg:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group relative font-mono text-xs text-gray-400 transition-colors hover:text-cyan-400"
            >
              {item.name}

              {/* Hover underline */}
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden rounded-md border border-cyan-400/50 px-4 py-2 font-mono text-xs text-cyan-400 transition-all duration-300 hover:bg-cyan-400 hover:text-black md:block"
        >
          {"Let's"} Talk
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-gray-300 transition-colors hover:border-cyan-400/50 hover:text-cyan-400 md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          <span className="sr-only">
            {isMenuOpen ? "Close menu" : "Open menu"}
          </span>

          {/* Hamburger Icon */}
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-px w-full bg-current transition-all duration-300 ${
                isMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />

            <span
              className={`h-px w-full bg-current transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`h-px w-full bg-current transition-all duration-300 ${
                isMenuOpen ? "-translate-y-1 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`border-t border-white/10 bg-[#05090d]/95 backdrop-blur-md transition-all duration-300 md:hidden ${
          isMenuOpen
            ? "visible max-h-96 opacity-100"
            : "invisible max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className="rounded-md px-4 py-3 font-mono text-sm text-gray-400 transition-colors hover:bg-white/5 hover:text-cyan-400"
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile CTA */}
            <Link
              href="/contact"
              onClick={closeMenu}
              className="mt-3 rounded-md border border-cyan-400/50 px-4 py-3 text-center font-mono text-sm text-cyan-400 transition-all duration-300 hover:bg-cyan-400 hover:text-black"
            >
              {"Let's"} Talk
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

