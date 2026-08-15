import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dons — EPEHMIF",
};

export default function DonsPage() {
  return (
    <div className="pt-[calc(66px+56px)] pb-[clamp(56px,8vw,104px)] max-w-[1160px] mx-auto px-5 md:px-8">
      <p className="eyebrow mb-3">Dons</p>
      <h1 className="font-heading font-semibold text-[clamp(34px,5vw,58px)] leading-[1.08] mb-10">
        Soutenir l&rsquo;église
      </h1>

      <div className="rounded-2xl border-2 border-dashed border-line p-[clamp(26px,4vw,48px)] max-w-2xl">
        <p className="text-[15px] leading-[1.6] opacity-85 mb-4">
          Cette page est en attente de cadrage avec le conseil des anciens. Aucun formulaire de
          don n&rsquo;est mis en place tant que les questions suivantes ne sont pas tranchées :
        </p>
        <ul className="list-disc pl-5 space-y-2 text-[15px] leading-[1.6] opacity-85">
          <li>Quel moyen de paiement / plateforme utiliser ?</li>
          <li>Les dons doivent-ils permettre l&rsquo;émission d&rsquo;un reçu fiscal ?</li>
          <li>Faut-il distinguer plusieurs types de dons (offrande, projets, missions) ?</li>
          <li>Qui a la responsabilité du suivi et de la comptabilité ?</li>
        </ul>
      </div>
    </div>
  );
}
