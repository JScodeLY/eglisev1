"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/notre-eglise", label: "Notre église" },
  { href: "/ministeres", label: "Ministères" },
  { href: "/predications", label: "Prédications" },
];

const MORE_LINKS = [
  { href: "/galerie", label: "Galerie" },
  { href: "/evenements", label: "Événements" },
  { href: "/dons", label: "Dons" },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [lang, setLang] = useState<"fr" | "hmn">("fr");

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const isMorePage = MORE_LINKS.some((l) => l.href === pathname);
  const opaque = !isHome || scrolled;

  return (
    <>
      <header
        className={`w-full z-40 transition-colors duration-250 ${
          isHome ? "fixed top-0" : "sticky top-0"
        } ${
          opaque
            ? "bg-bg/90 backdrop-blur-md border-b border-line"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div
          className={`max-w-[1240px] mx-auto flex items-center justify-between gap-4 px-5 md:px-8 h-[66px] ${
            opaque ? "text-txt" : "text-on-dark"
          }`}
        >
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <span className="grid place-items-center w-9 h-9 rounded-[9px] bg-fill text-on-pri font-heading font-semibold">
              E
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-heading font-semibold text-[15px]">EPEHMIF</span>
              <span className="text-[10px] tracking-[.09em] uppercase opacity-72">
                Île-de-France
              </span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-3.5 text-[14px] font-medium whitespace-nowrap">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`pb-1 border-b-2 ${
                  pathname === link.href ? "border-acc" : "border-transparent"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="relative">
              <button
                type="button"
                onClick={() => setMoreOpen((v) => !v)}
                className="relative pb-1 border-b-2 border-transparent"
              >
                Plus
                {isMorePage && (
                  <span className="absolute -right-2 top-1 w-[5px] h-[5px] rounded-full bg-acc" />
                )}
              </button>
              {moreOpen && (
                <div
                  className="absolute right-0 mt-2 min-w-[160px] rounded-xl bg-card text-txt shadow-[0_16px_40px_rgba(0,0,0,.16)] py-2"
                  onMouseLeave={() => setMoreOpen(false)}
                >
                  {MORE_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMoreOpen(false)}
                      className="block px-4 py-2 text-[14px] hover:bg-bg"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setLang((l) => (l === "fr" ? "hmn" : "fr"))}
              title={lang === "fr" ? "Passer en hmong" : "Passer en français"}
              aria-label={lang === "fr" ? "Passer en hmong" : "Passer en français"}
              className="rounded-full border px-2.5 py-1 text-[12.5px] font-semibold border-current"
            >
              {lang === "fr" ? "FR" : "HM"}
            </button>
            <Link
              href="/contact"
              className="rounded-[10px] bg-fill text-on-pri text-[14.5px] font-semibold px-[17px] py-[10px] transition-[filter] hover:brightness-110"
            >
              Venez un dimanche
            </Link>
          </div>
        </div>
      </header>
      {lang === "hmn" && (
        <div className="fixed top-[66px] w-full z-30 bg-dark text-on-dark text-center text-sm py-2">
          [À FOURNIR : traduction hmong]
        </div>
      )}
      {isHome && <div className="h-0" />}
    </>
  );
}
