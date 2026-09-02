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
    name: "ACS Certified Technologist",
    iconUrl: "/certificate/Acs_Certificate.png",
  },
  {
    id: "2",
    name: "ACS Certified Technologist",
    iconUrl: "/certificate/Acs_2.png",
  },
  {
    id: "3",
    name: "ACS Certified Technologist",
    iconUrl: "/certificate/Acs_3.png",
  },
  {
    id: "4",
    name: "ACS Certified Technologist",
    iconUrl: "/certificate/Acs_4.png",
  },
];

export default function Certificates() {
  return (
    <section className="bg-[#0a0e14] px-6 py-14 sm:px-12">
      <SectionLabel
        index="04"
        label="PROFESSIONAL CERTIFICATES"
      />

    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-[#10151f] px-4 py-2 text-center"
          >
           <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white p-2 ring-1 ring-white/10">
  {cert.iconUrl ? (
    <Image
      src={cert.iconUrl}
      alt={cert.name}
      width={64}
      height={64}
      className="h-full w-full object-contain"
    />
  ) : (
    <span className="text-lg font-semibold text-sky-300">
      A
    </span>
  )}
</div>
            <p className="text-xs font-medium text-slate-200 sm:text-sm">
              {cert.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}