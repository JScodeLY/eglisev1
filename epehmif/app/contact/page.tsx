import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact — EPEHMIF",
};

export default function ContactPage() {
  return (
    <div className="pt-[clamp(56px,8vw,104px)] pb-[clamp(56px,8vw,104px)] max-w-[1160px] mx-auto px-5 md:px-8">
      <p className="eyebrow mb-3">Contact</p>
      <h1 className="font-heading font-semibold text-[clamp(34px,5vw,58px)] leading-[1.08] mb-10">
        Nous rendre visite
      </h1>

      <div className="grid gap-[22px] md:grid-cols-2">
        <div>
          <ContactForm />
        </div>
        <div className="space-y-6">
          <div
            className="rounded-2xl border border-acc/40 p-[clamp(26px,4vw,48px)]"
            style={{ background: "color-mix(in srgb, var(--acc) 16%, var(--card))" }}
          >
            <p className="eyebrow mb-3">Adresse</p>
            <p className="text-[15px] leading-[1.6] opacity-90 mb-4">
              32 avenue Charles René de Mortemart
              <br />
              91770 Saint-Vrain
            </p>
            <p className="eyebrow mb-3">Horaires</p>
            <p className="text-[15px] leading-[1.6] opacity-90">[À FOURNIR : horaires des cultes]</p>
          </div>
          <div className="rounded-2xl border-2 border-dashed border-line h-64 grid place-items-center text-sm opacity-60">
            [Emplacement carte]
          </div>
        </div>
      </div>
    </div>
  );
}
