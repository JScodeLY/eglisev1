import type { Metadata } from "next";
import SubNav from "../components/SubNav";
import ConfessionAccordion from "../components/ConfessionAccordion";

export const metadata: Metadata = {
  title: "Notre église — EPEHMIF",
};

const ANCIENS = Array.from({ length: 6 }, (_, i) => `[À FOURNIR : nom de l'ancien ${i + 1}]`);

const RATTACHEMENTS = [
  "FECMIM — [À FOURNIR : intitulé complet et lien]",
  "AECMF — [À FOURNIR : intitulé complet et lien]",
  "CNEF — [À FOURNIR : intitulé complet et lien]",
  "C&MA Hmong District — [À FOURNIR : intitulé complet et lien]",
];

const HISTOIRE = [
  { year: "1976", label: "[À FOURNIR : description de l'étape 1976]" },
  { year: "1979", label: "[À FOURNIR : description de l'étape 1979]" },
  { year: "1992", label: "[À FOURNIR : description de l'étape 1992]" },
  { year: "2002", label: "[À FOURNIR : description de l'étape 2002]" },
  { year: "Aujourd'hui", label: "[À FOURNIR : transition EELF → EPEHMIF et date d'installation à Saint-Vrain]" },
];

export default function NotreEglisePage() {
  return (
    <>
      <div className="pt-[clamp(56px,8vw,104px)] pb-10 max-w-[1160px] mx-auto px-5 md:px-8">
        <p className="eyebrow mb-3">Notre église</p>
        <h1 className="font-heading font-semibold text-[clamp(34px,5vw,58px)] leading-[1.08]">
          Une maison commune
        </h1>
      </div>

      <SubNav />

      <section
        id="identite"
        className="scroll-mt-[calc(66px+72px)] max-w-[1160px] mx-auto px-5 md:px-8 py-[clamp(56px,8vw,104px)]"
      >
        <h2 className="font-heading font-semibold text-[clamp(28px,3.6vw,44px)] leading-[1.15] mb-6">
          Identité
        </h2>
        <p className="max-w-2xl text-[16px] leading-[1.6] opacity-85">
          [À FOURNIR : texte d&rsquo;identité et de vision]
        </p>
        <div className="mt-8 border-2 border-dashed border-line rounded-2xl h-56 grid place-items-center text-sm opacity-70">
          [À FOURNIR : photo de la communauté]
        </div>
      </section>

      <section
        id="confession"
        className="scroll-mt-[calc(66px+72px)] max-w-[1160px] mx-auto px-5 md:px-8 py-[clamp(56px,8vw,104px)]"
      >
        <h2 className="font-heading font-semibold text-[clamp(24px,2.8vw,34px)] leading-[1.15] mb-6">
          Confession de foi
        </h2>
        <ConfessionAccordion />
      </section>

      <section
        id="histoire"
        className="scroll-mt-[calc(66px+72px)] max-w-[1160px] mx-auto px-5 md:px-8 py-[clamp(56px,8vw,104px)]"
      >
        <h2 className="font-heading font-semibold text-[clamp(24px,2.8vw,34px)] leading-[1.15] mb-10">
          Histoire
        </h2>
        <div
          className="grid gap-6"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}
        >
          {HISTOIRE.map((step) => (
            <div key={step.year} className="text-center">
              <div className="w-3 h-3 rounded-full bg-acc mx-auto mb-3" />
              <p className="font-heading font-semibold text-sm mb-1">{step.year}</p>
              <p className="text-sm opacity-70">{step.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="anciens"
        className="scroll-mt-[calc(66px+72px)] max-w-[1160px] mx-auto px-5 md:px-8 py-[clamp(56px,8vw,104px)]"
      >
        <h2 className="font-heading font-semibold text-[clamp(24px,2.8vw,34px)] leading-[1.15] mb-3">
          Conseil des anciens
        </h2>
        <p className="text-sm opacity-70 mb-8">
          Pasteur d&rsquo;origine ivoirienne — [À FOURNIR : nom et présentation du pasteur actuel]
        </p>
        <div
          className="grid gap-[22px]"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}
        >
          {ANCIENS.map((name, i) => (
            <div key={i} className="rounded-2xl bg-card border border-line p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-line mx-auto mb-4" />
              <p className="font-heading font-semibold">{name}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="rattachements"
        className="scroll-mt-[calc(66px+72px)] max-w-[1160px] mx-auto px-5 md:px-8 py-[clamp(56px,8vw,104px)]"
      >
        <h2 className="font-heading font-semibold text-[clamp(24px,2.8vw,34px)] leading-[1.15] mb-8">
          Rattachements
        </h2>
        <ul className="grid gap-3 md:grid-cols-2">
          {RATTACHEMENTS.map((item, i) => (
            <li
              key={i}
              className="rounded-xl border border-acc/40 p-5 text-sm"
              style={{ background: "color-mix(in srgb, var(--acc) 12%, var(--card))" }}
            >
              {item}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
