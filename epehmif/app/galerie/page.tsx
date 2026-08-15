import type { Metadata } from "next";
import GalerieGrid from "./GalerieGrid";

export const metadata: Metadata = {
  title: "Galerie — EPEHMIF",
};

export default function GaleriePage() {
  return (
    <div className="pt-[calc(66px+56px)] pb-[clamp(56px,8vw,104px)] max-w-[1160px] mx-auto px-5 md:px-8">
      <p className="eyebrow mb-3">Galerie</p>
      <h1 className="font-heading font-semibold text-[clamp(34px,5vw,58px)] leading-[1.08] mb-10">
        La vie de l&rsquo;église en images
      </h1>
      <GalerieGrid />
    </div>
  );
}
