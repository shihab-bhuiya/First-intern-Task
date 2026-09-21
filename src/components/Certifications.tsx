import Image from "next/image";
import SectionLabel from "./SectionLabel";

interface Certificate {
  id: string;
  name: string;
  iconUrl: string;
}

const certificates: Certificate[] = [
  {
    id: "1",
    name: "ACS Certified\nTechnologist",
    iconUrl: "/circle-1.svg",
  },
  {
    id: "2",
    name: "Network\nOperator",
    iconUrl: "/circle-2.svg",
  },
  {
    id: "3",
    name: "Exinda ECNA",
    iconUrl: "/circle-3.svg",
  },
  {
    id: "4",
    name: "Next-Gen\nFirewall",
    iconUrl: "/circle-4.svg",
  },
];

export default function Certificates() {
  return (
    <section className="w-full mx-auto max-w-[1440px] bg-[#090d14] px-6 py-8 sm:px-10">
      <div className="mx-auto w-full max-w-[1312px]">
        {/* Section label */}
       <div className="mb-7 border-b border-white/[0.06] pb-4">
          <h2 className="font-mono text-[14px] uppercase tracking-[0.12em] uppercase text-gray-400">
            06 / Professional Certificates
          </h2>
        </div>


        {/* Divider */}
        <div className="mt-2 h-px w-full bg-white/[0.08]" />

        {/* Certificates */}
        <div
          className="
            mt-6
            grid
            grid-cols-1
            gap-2
            sm:grid-cols-2
            md:grid-cols-4
            md:gap-[110px]
          "
        >
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="
                relative
                flex
                h-[140px]
                w-[10px]
                mx-auto
                max-w-[1312px]
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
                  right-[16px]
                  top-[12px]
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
                  h-[58px]
                  w-[58px]
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-[16px]
                  bg-white
                "
              >
                <Image
                  src={cert.iconUrl}
                  alt={cert.name.replace("\n", " ")}
                  width={58}
                  height={58}
                  className="h-full w-full object-contain p-[5px]"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}