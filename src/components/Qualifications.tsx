import Image from "next/image";

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
        <div className="mb-2  pb-4">
          <h2 className="font-mono text-[12px] uppercase tracking-[0.12em] text-gray-400">
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
                  h-[190px]
                  w-full
                  max-w-[190px]
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-white/10
                  bg-[linear-gradient(135deg,rgba(255,255,255,0.18),rgba(255,255,255,0.04))]
                  shadow-[0_20px_40px_rgba(0,0,0,0.45)]
                  backdrop-blur-xl
                  ring-1
                  ring-white/10
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_24px_48px_rgba(0,0,0,0.5)]
                "
                style={{
                  borderColor: `${accentColor}88`,
                }}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.28),transparent_42%)]"
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-3 top-2 h-12 rounded-full bg-white/10 blur-xl"
                />

                <div
                  className="
                    pointer-events-none
                    absolute
                    left-0
                    right-0
                    top-0
                    z-30
                    h-[2.5px]
                    rounded-t-[24px]
                  "
                  style={{
                    backgroundColor: accentColor,
                    boxShadow: `0 0 12px ${accentColor}aa`,
                  }}
                />

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-x-0
                    top-0
                    z-20
                    h-[50%]
                    bg-gradient-to-b
                    from-white/15
                    to-transparent
                  "
                />

                <div className="relative z-10 h-[125px] w-full overflow-hidden">
                  <Image
                    src={qualification.imageUrl}
                    alt={qualification.title.replace("\n", " ")}
                    fill
                    sizes="(max-width: 768px) 45vw, 190px"
                    className="
                      object-cover
                      transition-transform
                      duration-300
                      px-2
                      rounded-t-4xl
                      pt-1.5
                      pb-1
                      group-hover:scale-[1.08]
                    "
                  />
                </div>

                <div
                  className="
                    relative
                    z-20
                    flex
                    h-[58px]
                    items-center
                    justify-center
                    rounded-b-[23px]
                    border-t
                    border-white/10
                    bg-white/[0.08]
                    px-3
                    backdrop-blur-md
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