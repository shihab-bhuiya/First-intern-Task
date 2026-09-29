"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motionVariants";
import Image from "next/image";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim() || !message.trim()) return;

    setStatus("sent");
  };

  // bg-[#090d14]

  return (
    <section
      id="contact"
      className="
        relative
        mt-8
        overflow-hidden
        
        pt-[66px]
        px-4
        py-7
        text-white
        sm:px-6
        md:px-8
        lg:px-10
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
          w-[820px]
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
          h-[700px]
          w-[600px]
          rounded-full
          bg-indigo-950/40
          blur-[410px]
          lg:blur-[130px]
        "
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="relative mx-auto w-full max-w-[1312px]"
      >
        {/* ================= HEADER ================= */}
        <motion.div
          variants={fadeInUp}
          className="
            mb-6
            flex
            items-center
            gap-2
            pb-2
            sm:gap-3
            border-b
            border-white/10
            lg:text-[24px]
          "
        >
          <span
            className="
              font-ibm
              text-[14px]
              tracking-[0.08em]
              text-slate-400
              sm:text-[14px]
            "
          >
            08
          </span>

          <span className="font-mono text-[14px] text-slate-500 sm:text-[18px]">
            /
          </span>

          <span
            className="
              font-ibm
              text-[14px]
              tracking-[0.08em]
              text-slate-400
              sm:text-[14px]
            "
          >
            CONTACT
          </span>
        </motion.div>

        {/* ================= HEADING ================= */}
        <h2
          className="
            mt-6
            text-[24px]
            uppercase
            leading-[76px]
            font-manrope
            font-semibold
            tracking-[-0.03em]
            text-[#f5eeee]
            sm:text-[42px]
            md:text-[52px]
            lg:text-[54px]
            lg:leading-[1.18]
          "
        >
          Let&apos;s secure what
          <br className="hidden lg:inline" /> you build
        </h2>

        {/* ================= MAIN CONTENT ================= */}
        <div
          className="
            mt-8
            grid
            grid-cols-1
            gap-10
            sm:mt-10
            md:gap-14
            lg:mt-5
            lg:grid-cols-[260px_2fr]
            lg:gap-[190px]
          "
        >
          {/* ================= FORM ================= */}
          <form onSubmit={handleSubmit} className="w-full">
            {/* Email */}
            <div className="font-ibm">
              <label
                htmlFor="email"
                className="
                  mb-1.5
                  block
                  text-[16px]
                  font-semibold
                  tracking-wide
                  text-slate-300
                "
              >
                Email
              </label>

              <div
                className="
                  flex
                  h-[62px]
                  w-[350px]
                  lg:w-[472px]
                  items-center
                  gap-2
                  rounded-[16px]
                  bg-gradient-to-l
                  from-[#184F68]
                  to-[#8ECAE6]
                  p-[1px]
                "
              >
                <div
                  className="
                    flex
                    h-full
                    w-full
                    items-center
                    gap-2
                    rounded-[15px]
                    bg-[#131820]
                    px-4
                    py-[16.5px]
                  "
                >
                  {/* Icon: same color as the placeholder (slate-600) */}
                  <span
                    aria-hidden="true"
                    className="
                      h-6
                      w-6
                      shrink-0
                      bg-slate-600
                      [mask-image:url(/mail-1.svg)]
                      [mask-position:center]
                      [mask-repeat:no-repeat]
                      [mask-size:contain]
                      [-webkit-mask-image:url(/mail-1.svg)]
                      [-webkit-mask-position:center]
                      [-webkit-mask-repeat:no-repeat]
                      [-webkit-mask-size:contain]
                    "
                  />

                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="
                      h-full
                      w-full
                      min-w-0
                      bg-transparent
                      font-inter
                      text-[16px]
                      text-[#5E5E5E]
                      outline-none
                      placeholder:text-slate-600
                    "
                  />
                </div>
              </div>
            </div>

            {/* Message */}
            {/* Message */}
<div className="mt-3">
  <label
    htmlFor="message"
    className="
      mb-1.5
      block
      font-ibm
      text-[16px]
      font-semibold
      tracking-wide
      text-slate-300
    "
  >
    Message
  </label>

  <div
    className="
      w-[350px]
      lg:w-[472px]
      rounded-[16px]
      bg-gradient-to-r
      from-[#184F68]
      to-[#8ECAE6]
      p-px
      transition-all
      focus-within:from-cyan-600
      focus-within:to-cyan-300
    "
  >
    <div
      className="
        flex
        h-[182px]
        items-start
        gap-2
        overflow-hidden
        rounded-[15px]
        bg-[#131820]
        px-4
        pt-[18px]
      "
    >
      {/* Message Icon */}
      <span
        aria-hidden="true"
        className="
          mt-[2px]
          h-6
          w-6
          shrink-0
          bg-slate-600
          [mask-image:url(/message-02.svg)]
          [mask-position:center]
          [mask-repeat:no-repeat]
          [mask-size:contain]
          [-webkit-mask-image:url(/message-02.svg)]
          [-webkit-mask-position:center]
          [-webkit-mask-repeat:no-repeat]
          [-webkit-mask-size:contain]
        "
      />

      {/* Message */}
      <textarea
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write your message here..."
        className="
          m-0
          h-full
          w-full
          min-w-0
          resize-none
          border-0
          bg-transparent
          p-0
          font-inter
          text-[16px]
          leading-6
          text-white
          outline-none
          placeholder:text-slate-600
        "
      />
    </div>
  </div>
</div>

            {/* Send button */}
            <button
              type="submit"
              className="
                mt-4
                flex
                h-[55px]
                w-[218px]
                items-center
                
                gap-2
                rounded-[14px]
                bg-[#39b8f0]
                pt-[12px]
                pr-[32px]
                pl-[32px]
                pb-[12px]
                font-manrope
                text-[16px]
                font-semibold
                uppercase
                text-white
                transition-all
                hover:bg-[#4ac4f5]
                hover:shadow-[0_0_20px_rgba(57,184,240,0.2)]
              "
            >
              <Image
                src="/sent-message-rame.svg"
                width={24}
                height={24}
                alt="sent-message"
              />
              {status === "sent" ? "Message sent" : "Send message"}
            </button>
          </form>

          {/* ================= DIRECT CONTACT ================= */}
          <div
            className="
              pt-0
              pl-0
              lg:pl-[55%]
              leading-[180%]
            "
          >
            <p
              className="
                font-ibm
                text-[16px]
                font-bold
                tracking-[2]
                mb-6
                text-lime-400
                sm:text-[14px]
                lg:text-[16px]
              "
            >
              OR REACH ME DIRECTLY
            </p>

            {/* Email */}
            <div className="mt-5">
              <p
                className="
                  mb-2
                  font-ibm
                  text-[16px]
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
                  block
                  max-w-full
                  break-all
                  font-manrope
                  text-[24px]
                  font-normal
                  leading-6
                  text-slate-200
                  transition-colors
                  hover:text-white
                  sm:text-[20px]
                  lg:text-[24px]
                "
              >
                mazidulhakim@gmail.com
              </Link>
            </div>

            {/* LinkedIn */}
            <div className="mt-6">
              <p
                className="
                  mb-1.5
                  font-ibm
                  text-[16px]
                  font-bold
                  tracking-[0.08em]
                  text-sky-400
                  sm:text-[14px]
                  lg:text-[16px]
                "
              >
                LINKEDIN
              </p>

              <Link
                href="https://linkedin.com/in/shihab-bhuiya"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  font-ibm
                  text-[24px]
                  uppercase
                  text-emerald-300
                  transition-colors
                  hover:text-emerald-200
                  sm:text-[20px]
                  lg:text-[24px]
                "
              >
                Connect
              </Link>
            </div>
          </div>
        </div>

        <nav
          className="
            flex
            flex-wrap
            items-center
            mt-6
            justify-center
            lg:justify-end
            lg:text-[16px]
            font-manrope
            gap-x-8
            gap-y-2
            sm:gap-6
          "
        >
          <Link
            href="#about"
            className="text-[12px] text-slate-500 transition-colors hover:text-slate-300 sm:text-[12px]"
          >
            About
          </Link>

          <Link
            href="#impact"
            className="text-[12px] text-slate-500 transition-colors hover:text-slate-300 sm:text-[12px]"
          >
            Impact
          </Link>

          <Link
            href="#expertise"
            className="text-[12px] text-slate-500 transition-colors hover:text-slate-300 sm:text-[12px]"
          >
            Expertise
          </Link>

          <Link
            href="#experience"
            className="text-[12px] text-slate-500 transition-colors hover:text-slate-300 sm:text-[12px]"
          >
            Experience
          </Link>
        </nav>

        {/* ================= FOOTER ================= */}
        <footer className="mt-4 lg:mt-2 sm:mt-[67px]">
          <div className="h-px w-full bg-white/[0.08]" />

          <div
            className="
              flex
              items-center
              gap-12
              justify-between
              pt-4
              sm:flex-row
              sm:items-end
              sm:justify-between
              sm:gap-4
            "
          >
            {/* Name */}
            <p
              className="
                text-[24px]
                font-medium
                font-manrope
                tracking-tight
                text-slate-200
                sm:text-[24px]
                lg:text-[24px]
              "
            >
              Mazidul Hakim
            </p>

            {/* Footer right */}
            <div
              className="
                flex
                flex-col
                items-start
                gap-4
                sm:items-end
                sm:gap-5
              "
            >
              <p className="font-ibm text-[10px] text-slate-500 sm:text-[12px]">
                © 2026 · All rights reserved
              </p>
            </div>
          </div>
        </footer>
      </motion.div>
    </section>
  );
}