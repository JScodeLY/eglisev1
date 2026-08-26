import Image from "next/image";
import Link from "next/link";

function HeartHandshakeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path
        d="M8.5 18.5s-6-3.7-6-8.2A3.5 3.5 0 0 1 8.5 7a3.5 3.5 0 0 1 5.5 0"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 12.5h2.3c.7 0 1.3.57 1.3 1.27v0c0 .7-.6 1.23-1.3 1.23H10m0-2.5-2-2 2.3-2.3a1.8 1.8 0 0 1 2.55 0L14.5 9.7l3-3 2.5 2.5-4 4-3-1.2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function UsersGroupIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="2.6" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M3 18v-1.2A3.8 3.8 0 0 1 6.8 13h2.4A3.8 3.8 0 0 1 13 16.8V18"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <circle cx="15.5" cy="8.8" r="2" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M15 13.2c2.2.15 4 1.55 4 3.35V18"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path
        d="M11 20s6.5-6.7 6.5-11.3A6.5 6.5 0 0 0 4.5 8.7C4.5 13.3 11 20 11 20Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="11" cy="8.5" r="2.4" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

const START_CARDS = [
  {
    title: "Notre église",
    text: "Notre identité hmong, notre confession de foi et notre histoire depuis 1976.",
    href: "/notre-eglise",
    cta: "Découvrir",
    icon: HeartHandshakeIcon,
  },
  {
    title: "Nos sections",
    text: "Hommes, Femmes et Jeunes : trois sections pour vivre la fraternité.",
    href: "/ministeres",
    cta: "Explorer",
    icon: UsersGroupIcon,
  },
  {
    title: "Première visite",
    text: "À quoi s'attendre le dimanche, et comment nous rejoindre à Saint-Vrain.",
    href: "/contact",
    cta: "Préparer ma visite",
    icon: MapPinIcon,
  },
];

const LATEST_MESSAGES = [
  { title: "Tswv Yexus yog tus tswv yug yaj", ref: "Message · hmong" },
  { title: "Yexus yog leejtwg rua koj tag ?", ref: "Message · hmong" },
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
          <p className="eyebrow mb-4">Bienvenue · Cov ntseeg Yexus nyob cheebtsam Paris</p>
          <h1 className="font-heading font-semibold text-[clamp(38px,6.2vw,76px)] leading-[1.05] mb-5">
            Une famille de foi, en hmong et en français
          </h1>
          <p className="max-w-[560px] text-[18px] leading-[1.6] mb-8 opacity-95">
            Chaque dimanche à Saint-Vrain, nous louons Dieu ensemble et grandissons dans la foi.
            Votre place est parmi nous.
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
              <div className="flex items-start gap-3 mb-3">
                <span className="text-pri shrink-0 mt-0.5">
                  <card.icon />
                </span>
                <h3 className="font-heading font-semibold text-[21px]">{card.title}</h3>
              </div>
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
            <h3 className="font-heading font-semibold text-2xl mb-3">
              10h00 – 11h45 · Culte bilingue
            </h3>
            <p className="text-[15px] leading-[1.6] opacity-85">
              Pehawm lus Hmoob / lus fabkis. En même temps : école du dimanche pour les 4-11 ans
              et garderie pour les 0-3 ans.
            </p>
          </div>
          <div className="rounded-2xl bg-acc/20 border border-acc/40 p-[clamp(26px,4vw,48px)]">
            <p className="eyebrow mb-3">Le dimanche chez nous</p>
            <h3 className="font-heading font-semibold text-2xl mb-3">
              13h30 – 15h30 · Études en groupes
            </h3>
            <p className="text-[15px] leading-[1.6] opacity-85">
              Pères, mères et jeunes. Cours de hmong à la demande, chant et musique (piano,
              guitare).
            </p>
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
            <Link
              key={i}
              href="/predications"
              className="group rounded-2xl bg-card border border-line p-4 flex items-center gap-4 transition-colors hover:border-pri/50"
            >
              <div className="relative shrink-0 w-28 h-16 rounded-[10px] overflow-hidden bg-line/50">
                <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/35" />
                <span className="absolute inset-0 grid place-items-center">
                  <span className="grid place-items-center w-9 h-9 rounded-full bg-fill text-on-pri transition-transform duration-300 group-hover:scale-110">
                    <svg width="11" height="13" viewBox="0 0 11 13" fill="currentColor" aria-hidden="true">
                      <path d="M0 0l11 6.5L0 13z" />
                    </svg>
                  </span>
                </span>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-[17px] mb-1 group-hover:text-pri transition-colors">
                  {msg.title}
                </h3>
                <p className="text-sm opacity-70">{msg.ref}</p>
              </div>
            </Link>
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
        <div className="rounded-2xl bg-card border border-line p-7 flex gap-4 items-start">
          <span className="text-pri shrink-0 mt-0.5">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M12 3v6M8 5.5l1.6 4.6M16 5.5l-1.6 4.6M6 20c0-3.5 2.7-6.3 6-6.3s6 2.8 6 6.3"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <div>
            <h3 className="font-heading font-semibold text-[19px] mb-2">Sujets de prière</h3>
            <p className="text-[15px] leading-[1.6] opacity-85">
              Prions pour les personnes malades, et pour la croissance spirituelle de chacun et
              chacune.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-fill text-on-pri">
        <div className="max-w-[1160px] mx-auto px-5 md:px-8 py-[clamp(56px,8vw,104px)] text-center">
          <h2 className="font-heading font-semibold text-[clamp(28px,3.6vw,44px)] leading-[1.15] mb-6">
            Et si votre place vous attendait ?
          </h2>
          <p className="max-w-[440px] mx-auto mb-6 opacity-90">
            Venez un dimanche, ou écrivez-nous pour préparer votre première visite.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-[10px] bg-acc text-txt text-[14.5px] font-semibold px-7 py-3.5 hover:brightness-95"
          >
            Nous contacter
          </Link>
        </div>
      </section>
    </>
  );
}
