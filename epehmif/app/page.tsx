import Image from "next/image";
import Link from "next/link";

const START_CARDS = [
  {
    title: "Vous découvrez l'église ?",
    text: "Venez tel(le) que vous êtes, un dimanche matin. Pas de tenue particulière, pas de code à connaître.",
    href: "/notre-eglise",
    cta: "Découvrir notre église",
  },
  {
    title: "Vous cherchez une prédication ?",
    text: "Toute notre archive de messages est en ligne, filtrable par date, orateur et série.",
    href: "/predications",
    cta: "Écouter les messages",
  },
  {
    title: "Vous voulez vous impliquer ?",
    text: "Neuf pôles font vivre la communauté au quotidien : découvrez leurs missions.",
    href: "/ministeres",
    cta: "Voir les ministères",
  },
];

const LATEST_MESSAGES = [
  { title: "[À FOURNIR : titre du message]", ref: "[À FOURNIR : référence]" },
  { title: "[À FOURNIR : titre du message]", ref: "[À FOURNIR : référence]" },
];

const PRAYER_TOPICS = [
  "Pour les familles de la communauté",
  "Pour les personnes malades",
  "Pour les projets de l'église",
  "[À FOURNIR : sujets de prière réels]",
];

export default function Home() {
  return (
    <>
      <section className="relative min-h-[clamp(560px,92vh,900px)] flex items-end overflow-hidden">
        <Image
          src="/hero-eglise.jpg"
          alt="Façade de l'église EPEHMIF"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "64% center" }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, rgba(0,0,0,.45) 0%, rgba(0,0,0,.12) 55%, transparent 80%)",
          }}
        />
        <div className="animate-fadeup relative z-10 max-w-[760px] px-5 md:px-8 pt-[clamp(118px,17vh,190px)] pb-[clamp(56px,8vh,90px)] text-on-dark">
          <p className="eyebrow mb-4">Une maison commune à Saint-Vrain</p>
          <h1 className="font-heading font-semibold text-[clamp(38px,6.2vw,76px)] leading-[1.05] mb-5">
            Une famille de foi, en hmong et en français
          </h1>
          <p className="max-w-[560px] text-[18px] leading-[1.6] mb-8 opacity-95">
            Une église protestante évangélique hmong d&rsquo;Île-de-France, ouverte à tous ceux
            qui cherchent une communauté vivante et fraternelle.
          </p>
          <div className="flex flex-wrap items-center gap-3.5 mb-8">
            <Link
              href="/contact"
              className="rounded-[10px] bg-fill text-on-pri text-[14.5px] font-semibold px-6 py-3.5 transition-[filter] hover:brightness-110"
            >
              Venez un dimanche
            </Link>
            <Link
              href="#dimanche"
              className="rounded-[10px] border-[1.5px] border-[rgba(253,248,243,.6)] text-on-dark text-[14.5px] font-semibold px-6 py-3.5"
            >
              Voir les horaires
            </Link>
          </div>
          <a
            href="#"
            aria-label="Voir la vidéo de présentation [À FOURNIR : lien vidéo]"
            className="group inline-flex items-center gap-3 text-on-dark text-sm font-medium"
          >
            <span className="grid place-items-center w-[34px] h-[34px] rounded-full border-[1.5px] border-acc text-acc group-hover:text-on-dark group-hover:border-on-dark transition-colors">
              <svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor" aria-hidden="true">
                <path d="M0 0l10 6-10 6z" />
              </svg>
            </span>
            Voir la vidéo de présentation
          </a>
        </div>
        <a
          href="#par-ou-commencer"
          className="animate-bob absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-on-dark text-xs"
        >
          <svg width="18" height="28" viewBox="0 0 18 28" fill="none" aria-hidden="true">
            <rect x="1" y="1" width="16" height="26" rx="8" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="9" cy="8" r="2" fill="currentColor" />
          </svg>
          Faites défiler
        </a>
      </section>

      <section id="par-ou-commencer" className="max-w-[1160px] mx-auto px-5 md:px-8 py-[clamp(56px,8vw,104px)]">
        <p className="eyebrow mb-3">Par où commencer</p>
        <h2 className="font-heading font-semibold text-[clamp(28px,3.6vw,44px)] leading-[1.15] mb-10 max-w-2xl">
          Trois portes d&rsquo;entrée, selon ce que vous cherchez
        </h2>
        <div className="grid gap-[22px]" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          {START_CARDS.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl bg-card border border-line p-7 flex flex-col"
            >
              <h3 className="font-heading font-semibold text-[21px] mb-3">{card.title}</h3>
              <p className="text-[15px] leading-[1.6] opacity-85 mb-6 flex-1">{card.text}</p>
              <Link href={card.href} className="text-pri font-semibold text-sm hover:text-sec">
                {card.cta} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section id="dimanche" className="scroll-mt-[calc(66px+24px)] max-w-[1160px] mx-auto px-5 md:px-8 pb-[clamp(56px,8vw,104px)]">
        <div className="grid gap-[22px] md:grid-cols-2">
          <div className="rounded-2xl bg-acc/20 border border-acc/40 p-[clamp(26px,4vw,48px)]">
            <p className="eyebrow mb-3">Le dimanche chez nous</p>
            <h3 className="font-heading font-semibold text-2xl mb-3">Culte du dimanche</h3>
            <p className="text-[15px] leading-[1.6] opacity-85">
              10h00 – 11h45, bilingue français/hmong
              <br />
              École du dimanche et garderie en parallèle du culte
              <br />
              32 avenue Charles René de Mortemart, 91770 Saint-Vrain
            </p>
          </div>
          <div className="rounded-2xl bg-acc/20 border border-acc/40 p-[clamp(26px,4vw,48px)]">
            <p className="eyebrow mb-3">Le dimanche chez nous</p>
            <h3 className="font-heading font-semibold text-2xl mb-3">Études en groupes</h3>
            <p className="text-[15px] leading-[1.6] opacity-85">13h30 – 15h30</p>
          </div>
        </div>
      </section>

      <section className="max-w-[1160px] mx-auto px-5 md:px-8 pb-[clamp(56px,8vw,104px)]">
        <p className="eyebrow mb-3">Derniers messages</p>
        <h2 className="font-heading font-semibold text-[clamp(28px,3.6vw,44px)] leading-[1.15] mb-10">
          Prédications récentes
        </h2>
        <div className="grid gap-[22px] md:grid-cols-2">
          {LATEST_MESSAGES.map((msg, i) => (
            <div key={i} className="rounded-2xl bg-card border border-line p-7">
              <h3 className="font-heading font-semibold text-[20px] mb-2">{msg.title}</h3>
              <p className="text-sm opacity-70">{msg.ref}</p>
            </div>
          ))}
        </div>
        <Link
          href="/predications"
          className="inline-block mt-8 text-pri font-semibold text-sm hover:text-sec"
        >
          Voir toutes les prédications →
        </Link>
      </section>

      <section className="max-w-[1160px] mx-auto px-5 md:px-8 pb-[clamp(56px,8vw,104px)]">
        <p className="eyebrow mb-3">Sujets de prière</p>
        <h2 className="font-heading font-semibold text-[clamp(28px,3.6vw,44px)] leading-[1.15] mb-8">
          Prions ensemble
        </h2>
        <ul className="space-y-3">
          {PRAYER_TOPICS.map((topic, i) => (
            <li key={i} className="flex gap-3 text-[16px] leading-[1.6]">
              <span className="text-acc">•</span>
              {topic}
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-fill text-on-pri">
        <div className="max-w-[1160px] mx-auto px-5 md:px-8 py-[clamp(56px,8vw,104px)] text-center">
          <h2 className="font-heading font-semibold text-[clamp(28px,3.6vw,44px)] leading-[1.15] mb-6">
            Venez comme vous êtes, un dimanche
          </h2>
          <Link
            href="/contact"
            className="inline-block rounded-[10px] bg-on-pri text-fill text-[14.5px] font-semibold px-7 py-3.5 hover:brightness-95"
          >
            Nous rendre visite
          </Link>
        </div>
      </section>
    </>
  );
}
