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
  { year: "1976", label: "Débuts à Boulogne-Billancourt, sous le pasteur Thongsuk" },
  { year: "1979", label: "Constitution en association cultuelle (EELF)" },
  { year: "1992", label: "Pasteur Oudone Lis, puis installation en Essonne" },
  { year: "2002", label: "Pasteur Xiong" },
  { year: "Aujourd'hui", label: "[À FOURNIR : pasteur actuel]" },
];

export default function NotreEglisePage() {
  return (
    <>
      <div className="pt-[clamp(56px,8vw,104px)] pb-10 max-w-[1160px] mx-auto px-5 md:px-8">
        <p className="eyebrow mb-3">Notre église</p>
        <h1 className="font-heading font-semibold text-[clamp(34px,5vw,58px)] leading-[1.08] mb-4">
          Une communauté hmong, enracinée dans l&rsquo;Évangile
        </h1>
        <p className="max-w-xl text-[16px] leading-[1.6] opacity-85">
          Église Protestante Évangélique Hmong d&rsquo;Île-de-France, à Saint-Vrain. Le hmong et
          le français cohabitent dans nos cultes et notre enseignement.
        </p>
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
        <p className="text-sm opacity-70 mt-6">
          [À FOURNIR : transition EELF → EPEHMIF et date d&rsquo;installation à Saint-Vrain à
          confirmer]
        </p>
      </section>

      <section
        id="anciens"
        className="scroll-mt-[calc(66px+72px)] max-w-[1160px] mx-auto px-5 md:px-8 py-[clamp(56px,8vw,104px)]"
      >
        <h2 className="font-heading font-semibold text-[clamp(24px,2.8vw,34px)] leading-[1.15] mb-3">
          Conseil des anciens
        </h2>
        <p className="text-[15px] leading-[1.6] opacity-85 mb-8 max-w-xl">
          L&rsquo;instance qui porte la direction spirituelle de l&rsquo;église, aux côtés du
          pasteur.
        </p>
        <div className="rounded-2xl bg-card border border-line p-6 flex items-center gap-5 mb-8">
          <div className="w-20 h-24 rounded-xl bg-line shrink-0" />
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-acc mb-1">
              Pasteur
            </p>
            <p className="font-heading font-semibold text-[19px] mb-1">
              [À FOURNIR : nom du pasteur actuel, d&rsquo;origine ivoirienne]
            </p>
            <p className="text-[15px] opacity-85">
              Conduit la communauté et préside le conseil des anciens.
            </p>
          </div>
        </div>
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
