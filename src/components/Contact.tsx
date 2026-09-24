"use client";

import { useState } from "react";
import { Mail, MessageSquare } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motionVariants";

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
              font-mono
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
              font-mono
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
    text-[20px]
    uppercase
    leading-[1.15]
    font-['Manrope']
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
  <br className="hidden lg:inline" />
  {" "}you build
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
            <div>
              <label
                htmlFor="email"
                className="
                  mb-1.5
                  block
                  font-mono
                  text-[12px]
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
                  w-[280px]
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
                    min-w-0
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
                  text-[12px]
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
                  w-[280px]
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
                    min-w-0
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
            

            <Mail className="w-4 h-4" />  {status === "sent" ? "Message sent" : "Send message"}
            </button>
          </form>

          {/* ================= DIRECT CONTACT ================= */}
          <div
            className="
              pt-0
              pl-0
              lg:pl-[55%]
            "
          >
            <p
              className="
                font-mono
                text-[13px]
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
                  font-mono
                  text-[10px]
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
                  font-['Manrope']
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
                  font-mono
                  text-[10px]
                  font-bold
                  tracking-[0.08em]
                  text-sky-400
                  sm:text-[14px]
                  lg:text-[16px]
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
                  text-[18px]
                  uppercase
                  text-emerald-300
                  transition-colors
                  hover:text-emerald-200
                  sm:text-[20px]
                  lg:text-[24px]
                "
              >
                Connect
              </a>
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
                
                  gap-x-8
                  gap-y-2
                
                  sm:gap-6
                "
              >
                <Link
                  href="#about"
                  className="font-mono text-[10px] text-slate-500 transition-colors hover:text-slate-300 sm:text-[12px]"
                >
                  About
                </Link>

                <Link
                  href="#impact"
                  className="font-mono text-[10px] text-slate-500 transition-colors hover:text-slate-300 sm:text-[12px]"
                >
                  Impact
                </Link>

                <Link
                  href="#expertise"
                  className="font-mono text-[10px] text-slate-500 transition-colors hover:text-slate-300 sm:text-[12px]"
                >
                  Expertise
                </Link>

                <Link
                  href="#experience"
                  className="font-mono text-[10px] text-slate-500 transition-colors hover:text-slate-300 sm:text-[12px]"
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
                text-[20px]
                font-medium
                tracking-tight
                text-slate-200
                sm:text-[24px]
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
              
              <p className="font-mono text-[9px] text-slate-500 sm:text-[12px]">
                © 2026 · All rights reserved
              </p>
            </div>
          </div>
        </footer>
      </motion.div>
    </section>
  );
}