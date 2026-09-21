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
    imageUrl:"/u3.svg",
  },
  {
    id: "4",
    title: "Diploma of\nManagement",
    imageUrl: "/u4.svg",
  },
];

export default function Qualifications() {
  return (
    <section className="w-full max-w-[1440px] mx-auto mt-8 bg-[#0a0e14] px-6 py-4 sm:px-10">
      <div className="mx-auto w-full max-w-[1312px]">
        {/* Section Label */}
         <div className="mb-7 border-b border-white/[0.06] pb-4">
          <h2 className="font-mono text-[14px] uppercase tracking-[0.12em] uppercase text-gray-400">
            07 / Professional Qualifications  
          </h2>
        </div>

        {/* Divider */}
        <div className="mt-2 h-px w-full  bg-white/[0.08]" />

        {/* Cards */}
        <div
          className="
            mt-4
            grid
            grid-cols-1
       
            sm:grid-cols-2
            md:grid-cols-4
            md:gap-[42px]
          "
        >
          {qualifications.map((qualification, index) => (
            <div
              key={qualification.id}
              className={`
                group
                relative
                mx-auto
                h-[147px]
                w-[136px]
                overflow-hidden
                rounded-[20px]
                border
                bg-[#11151d]
                ${
                  index === 0
                    ? "border-[#39495d]"
                    : index === 1
                      ? "border-[#4d526f]"
                      : index === 2
                        ? "border-[#6b6425]"
                        : "border-[#59433f]"
                }
              `}
            >
              {/* Image */}
              <Image
                src={qualification.imageUrl}
                alt={qualification.title.replace("\n", " ")}
                fill
             
                className="
                  object-cover
                  transition-transform
                  duration-210
                  group-hover:scale-[1.08]
                "
              />

              {/* Bottom black panel */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  flex
                  min-h-[48px]
                  items-center
                  justify-center
                  bg-black/75
                  px-2
                  py-2
                "
              >
                <p
                  className="
                    whitespace-pre-line
                    text-center
                    text-[12px]
                    font-normal
                    leading-[14px]
                    text-white
                  "
                >
                  {qualification.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}