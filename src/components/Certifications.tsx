"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/motionVariants";

interface Certificate {
  id: string;
  name: string;
  iconUrl: string;
}

const certificates: Certificate[] = [
  { id: "1", name: "ACS Certified\nTechnologist", iconUrl: "/circle-1.svg" },
  { id: "2", name: "Network\nOperator", iconUrl: "/circle-2.svg" },
  { id: "3", name: "Exinda ECNA", iconUrl: "/circle-3.svg" },
  { id: "4", name: "Next-Gen\nFirewall", iconUrl: "/circle-4.svg" },
];

export default function Certificates() {
  return (
    <section className="w-full mx-auto max-w-[1440px] bg-[#090d14] py-14 px-6 sm:px-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
        className="mx-auto w-full max-w-[1312px]"
      >
        {/* Section label */}
        <motion.div variants={fadeInUp} className="mb-2 p-2 pb-1">
          <h2 className="font-mono text-[12px] uppercase tracking-[0.12em] text-gray-400">
            06 / Professional Certificates
          </h2>
        </motion.div>

        {/* Divider */}
        <div className="mt-2 h-px w-full bg-white/[0.08]" />

        {/* Certificates — same grid as Qualifications so columns line up */}
        <motion.div
          variants={staggerContainer}
          className="
            mt-6
            grid
            grid-cols-2
            gap-6
            sm:grid-cols-2
            md:grid-cols-4
            md:gap-[42px]
          "
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              variants={fadeInUp}
              className="
                relative
                mx-auto
                flex
                h-[140px]
                w-full
                max-w-[190px]
                shrink-0
                flex-col
                items-center
                justify-center
                rounded-[21px]
                border
                border-[#263343]
                bg-[#111720]
                px-3
              "
            >
              {/* Blue dot */}
              <span
                className="
                  absolute
                  right-[14px]
                  top-[14px]
                  h-[6px]
                  w-[6px]
                  rounded-full
                  bg-[#35baf3]
                  shadow-[0_0_7px_rgba(53,186,243,0.8)]
                "
              />

              {/* Certificate icon */}
              <div
                className="
                  flex
                  h-[56px]
                  w-[56px]
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-[14px]
                  bg-white
                "
              >
                <Image
                  src={cert.iconUrl}
                  alt={cert.name.replace("\n", " ")}
                  width={56}
                  height={56}
                  className="h-full w-full object-contain p-[3px]"
                />
              </div>

              {/* Certificate name */}
              <p
                className="
                  mt-3
                  whitespace-pre-line
                  text-center
                  text-[14px]
                  font-medium
                  leading-[18px]
                  text-[#d9dce1]
                "
              >
                {cert.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
