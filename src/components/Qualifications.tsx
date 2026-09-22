import Image from "next/image";
import SectionLabel from "./SectionLabel";

interface Qualification {
  id: string;
  title: string;
  imageUrl: string;
}

const qualifications: Qualification[] = [
  {
    id: "1",
    title: "Diploma of\nManagement",
    imageUrl: "/u1.svg",
  },
  {
    id: "2",
    title: "Master of Information\nTechnology",
    imageUrl: "/u2.svg",
  },
  {
    id: "3",
    title: "Grad. Dip. Internet\nComputing",
    imageUrl: "/u3.svg",
  },
  {
    id: "4",
    title: "Diploma of\nManagement",
    imageUrl: "/u4.svg",
  },
];

// Accent color for each card
const topBorderColors = [
  "#4dd0c8", // teal
  "#5b6ee8", // blue/purple
  "#e0c93a", // yellow
  "#e0583a", // red/orange
];

export default function Qualifications() {
  return (
    <section className="mx-auto mt-8 w-full max-w-[1440px] bg-[#0a0e14] px-6 py-4 sm:px-10">
      <div className="mx-auto w-full max-w-[1312px]">
        {/* Section Label */}
        <div className="mb-7 border-b border-white/[0.06] pb-4">
          <h2 className="font-mono text-[14px] uppercase tracking-[0.12em] text-gray-400">
            07 / Professional Qualifications
          </h2>
        </div>

        {/* Divider */}
        <div className="mt-2 h-px w-full bg-white/[0.08]" />

        {/* Cards */}
        <div
          className="
            mt-4
            grid
            grid-cols-2
            gap-6
            sm:grid-cols-2
            md:grid-cols-4
            md:gap-[42px]
          "
        >
          {qualifications.map((qualification, index) => {
            const accentColor =
              topBorderColors[index % topBorderColors.length];

            return (
              <div
                key={qualification.id}
                className="
                  group
                  relative
                  mx-auto
                  h-[200px]
                  w-full
                  max-w-[190px]
                  overflow-hidden
                  rounded-[24px]
                  bg-[#11151d]
                "
                style={{
                  border: `1px solid ${accentColor}55`,
                }}
              >
                {/* Strong colored top border */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    left-0
                    right-0
                    top-0
                    z-20
                    h-[2px]
                    rounded-t-[24px]
                  "
                  style={{
                    backgroundColor: accentColor,
                  }}
                />

                {/* Image */}
                <div className="relative h-[135px] w-full overflow-hidden">
                  <Image
                    src={qualification.imageUrl}
                    alt={qualification.title.replace("\n", " ")}
                    fill
                    sizes="(max-width: 768px) 45vw, 190px"
                    className="
                      object-cover
                      transition-transform
                      duration-300
                      group-hover:scale-[1.05]
                    "
                  />
                </div>

                {/* Text Background */}
                <div
                  className="
                    flex
                    h-[64px]
                    items-center
                    justify-center
                    rounded-b-[23px]
                    bg-[#252a34]
                    px-3
                  "
                >
                  <p
                    className="
                      whitespace-pre-line
                      text-center
                      text-[13px]
                      font-medium
                      leading-[16px]
                      text-white
                    "
                  >
                    {qualification.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}