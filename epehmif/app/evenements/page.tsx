import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Événements — EPEHMIF",
};

const EVENTS = [
  { title: "[À FOURNIR : titre de l'événement]", date: "[À FOURNIR : date]" },
  { title: "[À FOURNIR : titre de l'événement]", date: "[À FOURNIR : date]" },
];

export default function EvenementsPage() {
  return (
    <div className="pt-[clamp(56px,8vw,104px)] pb-[clamp(56px,8vw,104px)] max-w-[1160px] mx-auto px-5 md:px-8">
      <p className="eyebrow mb-3">Événements</p>
      <h1 className="font-heading font-semibold text-[clamp(34px,5vw,58px)] leading-[1.08] mb-10">
        Agenda de la communauté
      </h1>

      <div
        className="rounded-2xl border border-acc/40 p-[clamp(26px,4vw,48px)] mb-12"
        style={{ background: "color-mix(in srgb, var(--acc) 16%, var(--card))" }}
      >
        <p className="eyebrow mb-3">Rendez-vous réguliers</p>
        <h2 className="font-heading font-semibold text-2xl mb-3">Culte du dimanche</h2>
        <p className="text-[15px] leading-[1.6] opacity-85">[À FOURNIR : horaires des cultes]</p>
      </div>

      <div className="grid gap-[22px] md:grid-cols-2">
        {EVENTS.map((e, i) => (
          <div key={i} className="rounded-2xl bg-card border border-line p-7">
            <div className="w-14 h-14 rounded-[10px] bg-fill text-on-pri grid place-items-center font-heading font-semibold text-sm mb-4">
              {e.date === "[À FOURNIR : date]" ? "—" : e.date}
            </div>
            <h3 className="font-heading font-semibold text-[19px]">{e.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
