interface SectionLabelProps {
  index: string;
  label: string;
}

export default function SectionLabel({
  index,
  label,
}: SectionLabelProps) {
  return (
    <div className="mb-8 flex items-center gap-2">
      <span className="font-mono text-xs tracking-widest text-slate-500">
        {index} / {label}
      </span>

      <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
    </div>
  );
}