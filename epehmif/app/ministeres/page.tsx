import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ministères — EPEHMIF",
};

const MINISTERES = [
  "École du dimanche",
  "Louange",
  "Jeunesse",
  "Intercession",
  "Accueil",
  "Missions",
];

export default function MinisteresPage() {
  return (
    <div className="pt-[calc(66px+56px)] pb-[clamp(56px,8vw,104px)] max-w-[1160px] mx-auto px-5 md:px-8">
      <p className="eyebrow mb-3">Ministères</p>
      <h1 className="font-heading font-semibold text-[clamp(34px,5vw,58px)] leading-[1.08] mb-4">
        Neuf pôles, une même mission
      </h1>
      <p className="max-w-2xl text-[16px] leading-[1.6] opacity-85 mb-12">
        [À FOURNIR : texte de présentation générale des ministères]
      </p>

      <div
        className="grid gap-[22px] mb-12"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}
      >
        {MINISTERES.map((nom) => (
          <div key={nom} className="rounded-2xl bg-card border border-line p-7 flex flex-col">
            <h2 className="font-heading font-semibold text-[21px] mb-3">{nom}</h2>
            <p className="text-[15px] leading-[1.6] opacity-85 mb-6 flex-1">
              [À FOURNIR : mission du pôle {nom}]
            </p>
            <div className="pt-4 border-t border-line text-sm opacity-70">
              Responsable : [À FOURNIR : nom des 6 responsables de section]
            </div>
          </div>
        ))}
      </div>

      <div
        className="rounded-2xl border border-acc/40 p-[clamp(26px,4vw,48px)]"
        style={{ background: "color-mix(in srgb, var(--acc) 16%, var(--card))" }}
      >
        <p className="eyebrow mb-3">Préparation au baptême</p>
        <h2 className="font-heading font-semibold text-2xl mb-3">Vous souhaitez être baptisé(e) ?</h2>
        <p className="text-[15px] leading-[1.6] opacity-85">
          [À FOURNIR : modalités de préparation au baptême]
        </p>
      </div>
    </div>
  );
}
