"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/notre-eglise", label: "Notre église" },
  { href: "/ministeres", label: "Ministères" },
  { href: "/predications", label: "Prédications" },
  { href: "/galerie", label: "Galerie" },
  { href: "/evenements", label: "Événements" },
  { href: "/dons", label: "Dons" },
  { href: "/contact", label: "Contact" },
];

const RATTACHEMENTS = ["FECMIM", "AECMF", "CNEF", "C&MA Hmong District"];

export default function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith("/espace-poles")) return null;

  return (
    <footer className="bg-dark text-on-dark">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <span className="grid place-items-center w-9 h-9 rounded-[9px] bg-fill text-on-pri font-heading font-semibold">
              E
            </span>
            <span className="font-heading font-semibold">EPEHMIF</span>
          </div>
          <p className="text-sm opacity-80 max-w-xs mb-4">
            Église Protestante Évangélique Hmong d&rsquo;Île-de-France, une famille de foi en
            hmong et en français.
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" aria-label="Facebook" className="opacity-80 hover:opacity-100">
                Facebook <span className="opacity-70">[À FOURNIR : lien]</span>
              </a>
            </li>
            <li>
              <a href="#" aria-label="YouTube" className="opacity-80 hover:opacity-100">
                YouTube <span className="opacity-70">[À FOURNIR : lien]</span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-3">Navigation</p>
          <ul className="space-y-2 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="opacity-80 hover:opacity-100">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-3">Horaires et adresse</p>
          <p className="text-sm opacity-80">
            Culte : 10h00 – 11h45, bilingue
            <br />
            Études en groupes : 13h30 – 15h30
            <br />
            <br />
            32 avenue Charles René de Mortemart
            <br />
            91770 Saint-Vrain
          </p>
        </div>

        <div>
          <p className="eyebrow mb-3">Contact</p>
          <p className="text-sm opacity-80 mb-4">[À FOURNIR : téléphone et email à jour]</p>
          <p className="eyebrow mb-3">Rattachements</p>
          <ul className="text-sm opacity-80 space-y-1">
            {RATTACHEMENTS.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4">
        <div className="max-w-[1240px] mx-auto px-5 md:px-8 flex flex-wrap items-center justify-between gap-3 text-xs opacity-70">
          <span>
            © {new Date().getFullYear()} EPEHMIF — [À FOURNIR : mentions légales]
          </span>
          <Link href="/espace-poles" className="text-acc opacity-100 hover:underline">
            Espace pôles
          </Link>
        </div>
      </div>
    </footer>
  );
}
