"use client";

const SECTIONS = [
  { id: "identite", label: "Identité" },
  { id: "confession", label: "Confession de foi" },
  { id: "histoire", label: "Histoire" },
  { id: "anciens", label: "Conseil des anciens" },
  { id: "rattachements", label: "Rattachements" },
];

export default function SubNav() {
  return (
    <nav className="sticky top-[66px] z-20 bg-bg/95 backdrop-blur-md border-b border-line">
      <div className="max-w-[1160px] mx-auto px-5 md:px-8 flex gap-6 overflow-x-auto text-[14px] font-medium">
        {SECTIONS.map((s) => (
          <a key={s.id} href={`#${s.id}`} className="py-3.5 whitespace-nowrap hover:text-pri">
            {s.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
