import SectionLabel from "./SectionLabel";

interface Qualification {
  id: string;
  title: string;
  imageUrl: string;
}

const qualifications: Qualification[] = [
  {
    id: "1",
    title: "Diploma of Management",
    imageUrl: "/Degree/Diploma of Management.png",
  },
  {
    id: "2",
    title: "Master of Information Technology",
    imageUrl: "/Degree/Master of Information Technology.png",
  },
  {
    id: "3",
    title: "Grad. Dip. Internet Computing",
    imageUrl: "/Degree/Grad. Dip. Internet Computing.png",
  },
  {
    id: "4",
    title: "Diploma of Management",
    imageUrl: "/Degree/Diploma of Management1.png",
  },
];

export default function Qualifications() {
  return (
    <section className="bg-[#0a0e14] px-6 py-14 sm:px-12">
      <SectionLabel
        index="03"
        label="PROFESSIONAL QUALIFICATIONS"
      />

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
        {qualifications.map((qualification) => (
          <div
            key={qualification.id}
            className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 bg-[#10151f]"
          >
            {qualification.imageUrl ? (
              <img
                src={qualification.imageUrl}
                alt={qualification.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-slate-700/40 to-slate-900/40" />
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

            <p className="absolute bottom-3 left-3 right-3 text-sm font-medium text-white">
              {qualification.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}