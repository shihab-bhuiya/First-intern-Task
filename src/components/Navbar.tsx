"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Impact", href: "#impact" },
  { name: "Expertise", href: "#expertise" },
  { name: "Experience", href: "#experience" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState("#about");

  const closeMenu = () => setIsMenuOpen(false);

  // Highlight the nav item whose section is currently in view
  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#05090d]/80 backdrop-blur-md">
      <nav
        className="mx-auto flex h-[66px] max-w-[1440px] items-center justify-between px-6 lg:px-20"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="flex items-center gap-1.5 font-mono text-[16px] font-medium text-white transition-opacity hover:opacity-80"
          aria-label="hakim.live - Home"
        >
          <span
            aria-hidden="true"
            className="h-[10px] w-[10px] rounded-full bg-[#38BDF8] shadow-[0_0_8px_rgba(56,189,248,0.6)]"
          />
          hakim.live
        </Link>

        {/* Desktop: links + CTA grouped on the right */}
        <div className="hidden items-center gap-10 md:flex">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = active === item.href;
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setActive(item.href)}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative pb-1 text-sm transition-colors ${
                      isActive
                        ? "font-medium text-white"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="absolute -bottom-1 left-1/2 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-[#38BDF8]"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            href="#contact"
            className="rounded-lg bg-[#38BDF8] px-5 py-2 text-sm font-semibold text-[#05090d] transition-colors duration-300 hover:bg-[#7DD3FC]"
          >
            {"Let's"} Talk
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-gray-300 transition-colors hover:border-[#38BDF8]/50 hover:text-[#38BDF8] md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
        >
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-px w-full bg-current transition-all duration-300 ${
                isMenuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-full bg-current transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-px w-full bg-current transition-all duration-300 ${
                isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        className={`border-t border-white/10 bg-[#05090d]/95 backdrop-blur-md transition-all duration-300 md:hidden ${
          isMenuOpen
            ? "visible max-h-96 opacity-100"
            : "invisible max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <div className="mx-auto max-w-[1440px] px-6 py-5">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = active === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    setActive(item.href);
                    closeMenu();
                  }}
                  className={`rounded-md px-4 py-3 text-sm transition-colors hover:bg-white/5 ${
                    isActive ? "font-medium text-white" : "text-gray-400"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <Link
              href="#contact"
              onClick={closeMenu}
              className="mt-3 rounded-lg bg-[#38BDF8] px-4 py-3 text-center text-sm font-semibold text-[#05090d] transition-colors duration-300 hover:bg-[#7DD3FC]"
            >
              {"Let's"} Talk
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}