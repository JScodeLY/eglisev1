import type { Metadata } from "next";
import PredicationsList from "./PredicationsList";

export const metadata: Metadata = {
  title: "Prédications — EPEHMIF",
};

export default function PredicationsPage() {
  return (
    <div className="pt-[clamp(56px,8vw,104px)] pb-[clamp(56px,8vw,104px)] max-w-[1160px] mx-auto px-5 md:px-8">
      <p className="eyebrow mb-3">Enseignement</p>
      <h1 className="font-heading font-semibold text-[clamp(34px,5vw,58px)] leading-[1.08] mb-10">
        Messages &amp; prédications
      </h1>
      <PredicationsList />
      <p className="text-sm opacity-70 mt-8">
        [À FOURNIR : archive complète, dates/orateurs, fichiers audio-vidéo, et messages
        disponibles en français]
      </p>
    </div>
  );
}
