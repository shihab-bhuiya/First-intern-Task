"use client";

import { useState } from "react";
import { Mail, MessageSquare, Send } from "lucide-react";
import SectionLabel from "./SectionLabel";
import Link from "next/link";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim() || !message.trim()) {
      return;
    }

    setStatus("sent");
  };

  return (
    <section className="bg-[#0a0e14] px-6 py-14 sm:px-12">
      <div className="mx-auto w-full max-w-7xl">
        {/* Section Label */}
        <SectionLabel index="08" label="CONTACT" />

        {/* Heading */}
        <h2 className="mb-12 text-3xl font-semibold leading-tight text-white sm:text-5xl">
          {"Let's "}secure what
          <br />
          you build
        </h2>

        {/* Content */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-16">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm text-slate-300"
              >
                Email
              </label>

              <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-[#10151f] px-3 py-2.5">
                <Mail className="h-4 w-4 shrink-0 text-slate-500" />

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm text-slate-300"
              >
                Message
              </label>

              <div className="flex items-start gap-2 rounded-lg border border-white/10 bg-[#10151f] px-3 py-2.5">
                <MessageSquare className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />

                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your message here..."
                  rows={4}
                  className="w-full resize-none bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-2 flex w-fit items-center gap-2 rounded-lg bg-sky-500 px-5 py-2.5 text-sm font-medium text-[#0a0e14] transition-colors hover:bg-sky-400"
            >
              <Send className="h-4 w-4" />
              {status === "sent" ? "Message sent" : "Send message"}
            </button>
          </form>

          {/* Direct Contact */}
          <div className="flex flex-col gap-6">
            <span className="font-mono text-xs tracking-widest text-lime-400">
              OR REACH ME DIRECTLY
            </span>

            {/* Email */}
            <div>
              <p className="mb-1 font-mono text-xs tracking-widest text-sky-400">
                EMAIL
              </p>

              <Link
                href="mailto:mazidulhakim@gmail.com"
                className="text-sm text-white transition-colors hover:text-sky-300"
              >
                mazidulhakim@gmail.com
              </Link>
            </div>

            {/* LinkedIn */}
            <div>
              <p className="mb-1 font-mono text-xs tracking-widest text-sky-400">
                LINKEDIN
              </p>

              <a
                href="https://linkedin.com/in/shihab-bhuiya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-lime-400 transition-colors hover:text-lime-300"
              >
                Connect
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}