"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith("/espace-poles")) return null;

  return (
    <footer className="bg-dark text-on-dark">
      <div className="max-w-[1240px] mx-auto px-5 md:px-8 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <span className="grid place-items-center w-9 h-9 rounded-[9px] bg-fill text-on-pri font-heading font-semibold">
              E
            </span>
            <span className="font-heading font-semibold">EPEHMIF</span>
          </div>
          <p className="text-sm opacity-80 max-w-xs">
            Église Protestante Évangélique Hmong d&rsquo;Île-de-France — 32 avenue Charles René
            de Mortemart, 91770 Saint-Vrain.
          </p>
        </div>

        <div>
          <p className="eyebrow mb-3">Réseaux</p>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" aria-label="Facebook" className="opacity-80 hover:opacity-100">
                Facebook <span className="opacity-60">[À FOURNIR : lien]</span>
              </a>
            </li>
            <li>
              <a href="#" aria-label="YouTube" className="opacity-80 hover:opacity-100">
                YouTube <span className="opacity-60">[À FOURNIR : lien]</span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-3">Contact</p>
          <p className="text-sm opacity-80">[À FOURNIR : téléphone et email à jour]</p>
          <Link href="/espace-poles" className="text-sm underline opacity-70 hover:opacity-100 mt-3 inline-block">
            Espace pôles
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs opacity-60">
        © {new Date().getFullYear()} EPEHMIF
      </div>
    </footer>
  );
}
