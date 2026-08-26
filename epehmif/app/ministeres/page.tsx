import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ministères — EPEHMIF",
};

function UserIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="6.5" r="3.2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M3.5 17v-.8A5.2 5.2 0 0 1 8.7 11h2.6a5.2 5.2 0 0 1 5.2 5.2v.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function FlowerIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="2" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="10" cy="5.3" r="2.3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="10" cy="14.7" r="2.3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="5.3" cy="10" r="2.3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="14.7" cy="10" r="2.3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function FlameIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M10 2.5s3.8 3.7 3.8 7.7a3.8 3.8 0 1 1-7.6 0c0-1.1.5-2 1-2.7.2 1 .9 1.6 1.5 1.6.9 0 1-1 .7-2C9 5.5 10 2.5 10 2.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M10 5.2c-1-.9-2.6-1.4-5-1.4v10.4c2.4 0 4 .5 5 1.4m0-10.4c1-.9 2.6-1.4 5-1.4v10.4c-2.4 0-4 .5-5 1.4m0-10.4v10.4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MusicIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M7 14.5V4.5l9-1.8v9.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="5" cy="15" r="2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="14" cy="12.5" r="2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function LanguageIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M3 5.5h9M7.5 3v2.5M6 5.5c0 3.5 3 6 6.5 6.8M9.5 5.5c-.6 3.8-3.2 6.7-6.5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m12.5 17 3-8 3 8M13.4 14.5h4.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const MINISTERES = [
  {
    nom: "Section Hommes",
    icon: UserIcon,
    text: "Prière, étude de la Bible et entraide entre hommes. Rendez-vous le dimanche après-midi.",
  },
  {
    nom: "Section Femmes",
    icon: FlowerIcon,
    text: "Partage, prière et fraternité entre femmes. Rendez-vous le dimanche après-midi.",
  },
  {
    nom: "Section Jeunes",
    icon: FlameIcon,
    text: "Vivre sa foi, poser ses questions, tisser des amitiés entre jeunes de la communauté.",
  },
  {
    nom: "École du dimanche",
    icon: BookIcon,
    text: "Enseignement adapté aux 4-11 ans pendant le culte, et garderie pour les 0-3 ans.",
  },
  {
    nom: "Chant & musique",
    icon: MusicIcon,
    text: "Cours de chant et de musique — piano, guitare — proposés selon les années.",
  },
  {
    nom: "Cours de hmong",
    icon: LanguageIcon,
    text: "Proposé à la demande, pour transmettre la langue aux plus jeunes et aux nouveaux venus.",
  },
];

export default function MinisteresPage() {
  return (
    <div className="pt-[clamp(56px,8vw,104px)] pb-[clamp(56px,8vw,104px)] max-w-[1160px] mx-auto px-5 md:px-8">
      <p className="eyebrow mb-3">S&rsquo;impliquer</p>
      <h1 className="font-heading font-semibold text-[clamp(34px,5vw,58px)] leading-[1.08] mb-4">
        Ministères &amp; sections
      </h1>
      <p className="max-w-2xl text-[16px] leading-[1.6] opacity-85 mb-12">
        Chaque section est animée par un responsable, présenté au sein de sa fiche.
      </p>

      <div
        className="grid gap-[22px] mb-12"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}
      >
        {MINISTERES.map((m) => (
          <div key={m.nom} className="rounded-2xl bg-card border border-line p-7 flex flex-col">
            <div className="flex items-center gap-3 mb-3">
              <span className="grid place-items-center w-9 h-9 rounded-[10px] bg-pri/10 text-pri shrink-0">
                <m.icon />
              </span>
              <h2 className="font-heading font-semibold text-[21px]">{m.nom}</h2>
            </div>
            <p className="text-[15px] leading-[1.6] opacity-85 mb-6 flex-1">{m.text}</p>
            <div className="pt-4 border-t border-line text-sm opacity-70">
              Responsable : [À FOURNIR : nom]
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
          4 sessions d&rsquo;octobre à février, suivies d&rsquo;un entretien personnalisé.
        </p>
      </div>

      <p className="text-sm opacity-70 mt-8">
        [À FOURNIR : confirmer qu&rsquo;un responsable est identifié pour Chant &amp; musique et
        Cours de hmong — sinon retirer le bloc de la fiche]
      </p>
    </div>
  );
}
