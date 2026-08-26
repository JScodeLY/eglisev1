import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Événements — EPEHMIF",
};

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
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <h2 className="font-heading font-semibold text-lg mb-1">Culte du dimanche</h2>
            <p className="text-[15px] leading-[1.6] opacity-85">10h00 – 11h45, bilingue</p>
          </div>
          <div>
            <h2 className="font-heading font-semibold text-lg mb-1">Études en groupes</h2>
            <p className="text-[15px] leading-[1.6] opacity-85">13h30 – 15h30</p>
          </div>
          <div>
            <h2 className="font-heading font-semibold text-lg mb-1">Préparation au baptême</h2>
            <p className="text-[15px] leading-[1.6] opacity-85">
              4 sessions d&rsquo;octobre à février, suivies d&rsquo;un entretien personnalisé
            </p>
          </div>
        </div>
      </div>

      <h2 className="font-heading font-semibold text-2xl mb-4">Prochains événements datés</h2>
      <div className="rounded-2xl border-2 border-dashed border-line p-8 text-center text-sm opacity-70">
        [À FOURNIR : événements ponctuels à venir — fêtes, camps, rencontres inter-églises]
      </div>
    </div>
  );
}
