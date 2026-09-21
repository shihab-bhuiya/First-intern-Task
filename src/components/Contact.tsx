"use client";

import { useState } from "react";
import { Mail, MessageSquare, Send } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim() || !message.trim()) return;

    setStatus("sent");
  };

  return (
    <section
      id="contact"
      className="
        relative
    mt-8
        overflow-hidden
        bg-[#090d14]
        px-6
        py-7
        text-white
        sm:px-10
      "
    >
      {/* Bottom-left teal glow */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          -left-40
          h-[420px]
          w-[420px]
          rounded-full
          bg-cyan-950/30
          blur-[100px]
        "
      />

      {/* Bottom-right blue glow */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          -right-40
          h-[500px]
          w-[800px]
          rounded-full
          bg-indigo-950/40
          blur-[110px]
        "
      />

      <div className="relative mx-auto w-full max-w-[1312px]">
        {/* ================= HEADER ================= */}
        <div className="mb-6 flex lg:text-[24px] items-center gap-3">
          <span className="font-mono text-[14px] tracking-[0.08em] text-slate-400">
            08
          </span>

          <span className="font-mono text-[18px] text-slate-500">/</span>

          <span className="font-mono text-[14px] tracking-[0.08em] text-slate-400">
            CONTACT
          </span>
        </div>

        <div className="h-px w-full bg-white/[0.08]" />

        {/* ================= HEADING ================= */}
        <h2
          className="
            mt-6
            text-[34px]
            lg:text-[64px]
            uppercase
            leading-[1.18]
            tracking-[-0.03em]
            text-[#f5eeee]
            sm:text-[36px]
          "
        >
          Let&apos;s secure what
          <br />
          you build
        </h2>

        {/* ================= MAIN CONTENT ================= */}
        <div
          className="
            mt-5
            grid
            grid-cols-1
            gap-12
            sm:grid-cols-[260px_1fr]
            sm:gap-[163px]
          "
        >
          {/* ================= FORM ================= */}
          <form onSubmit={handleSubmit} className="w-full">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="
                  mb-1.5
                  block
                  font-mono
                  text-[9px]
                  tracking-wide
                  text-slate-300
                "
              >
                Email
              </label>

              <div
                className="
                  flex
                  h-[35px]
                  items-center
                  gap-2
                  rounded-[7px]
                  border
                  border-cyan-900/80
                  bg-[#111720]
                  px-2
                  transition-colors
                  focus-within:border-cyan-600
                "
              >
                <Mail className="h-[13px] w-[13px] shrink-0 text-slate-500" />

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="
                    h-full
                    w-full
                    bg-transparent
                    font-mono
                    text-[9px]
                    text-white
                    outline-none
                    placeholder:text-slate-600
                  "
                />
              </div>
            </div>

            {/* Message */}
            <div className="mt-3">
              <label
                htmlFor="message"
                className="
                  mb-1.5
                  block
                  font-mono
                  text-[9px]
                  tracking-wide
                  text-slate-300
                "
              >
                Message
              </label>

              <div
                className="
                  flex
                  h-[79px]
                  items-start
                  gap-2
                  rounded-[7px]
                  border
                  border-cyan-900/80
                  bg-[#111720]
                  px-2
                  py-2
                  transition-colors
                  focus-within:border-cyan-600
                "
              >
                <MessageSquare className="mt-[1px] h-[13px] w-[13px] shrink-0 text-slate-500" />

                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your message here..."
                  className="
                    h-full
                    w-full
                    resize-none
                    bg-transparent
                    font-mono
                    text-[9px]
                    leading-4
                    text-white
                    outline-none
                    placeholder:text-slate-600
                  "
                />
              </div>
            </div>

            {/* Send button */}
            <button
              type="submit"
              className="
                mt-4
                flex
                h-[31px]
                items-center
                gap-2
                rounded-[7px]
                bg-[#39b8f0]
                px-4
                font-mono
                text-[9px]
                font-medium
                uppercase
                text-white
                transition-all
                hover:bg-[#4ac4f5]
                hover:shadow-[0_0_20px_rgba(57,184,240,0.2)]
              "
            >
              <Send className="h-[12px] w-[12px]" />

              {status === "sent" ? "Message sent" : "Send message"}
            </button>
          </form>

          {/* ================= DIRECT CONTACT ================= */}
          <div className="pt-0">
            <p
              className="
                font-mono
                text-[16px]
                font-bold
                tracking-[0.08em]
                text-lime-400
              "
            >
              OR REACH ME DIRECTLY
            </p>

            {/* Email */}
            <div className="mt-5">
              <p
                className="
                  mb-2
                  font-mono
                  text-[9px]
                  font-bold
                  tracking-[0.08em]
                  text-sky-400
                "
              >
                EMAIL
              </p>

              <Link
                href="mailto:mazidulhakim@gmail.com"
                className="
                  font-mono
                  text-[24px]
                  text-slate-200
                  transition-colors
                  hover:text-white
                "
              >
                mazidulhakim@gmail.com
              </Link>
            </div>

            {/* LinkedIn */}
            <div className="mt-4">
              <p
                className="
                  mb-2
                  font-mono
                  text-[16px]
                  font-bold
                  tracking-[0.08em]
                  text-sky-400
                "
              >
                LINKEDIN
              </p>

              <a
                href="https://linkedin.com/in/shihab-bhuiya"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  font-mono
                  text-[24px]
                  uppercase
                  text-emerald-300
                  transition-colors
                  hover:text-emerald-200
                "
              >
                Connect
              </a>
            </div>
          </div>
        </div>

        {/* ================= FOOTER ================= */}
        <footer className="mt-[67px]">
          <div className="h-px w-full bg-white/[0.08]" />

          <div className="flex items-end justify-between pt-3">
            {/* Name */}
            <p
              className="
                text-[24px]
                font-medium
                tracking-tight
                text-slate-200
              "
            >
              Mazidul Hakim
            </p>

            {/* Footer right */}
            <div className="flex flex-col items-end gap-5">
              <nav className="flex items-center gap-6">
                <Link
                  href="#about"
                  className="font-mono text-[12px] text-slate-500 transition-colors hover:text-slate-300"
                >
                  About
                </Link>

                <Link
                  href="#impact"
                  className="font-mono text-[12px] text-slate-500 transition-colors hover:text-slate-300"
                >
                  Impact
                </Link>

                <Link
                  href="#expertise"
                  className="font-mono text-[12px] text-slate-500 transition-colors hover:text-slate-300"
                >
                  Expertise
                </Link>

                <Link
                  href="#experience"
                  className="font-mono text-[12px] text-slate-500 transition-colors hover:text-slate-300"
                >
                  Experience
                </Link>
              </nav>

              <p className="font-mono text-[12px] text-slate-500">
                © 2026 · All rights reserved
              </p>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}