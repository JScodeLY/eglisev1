"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const ALL_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/notre-eglise", label: "Notre église" },
  { href: "/ministeres", label: "Ministères" },
  { href: "/predications", label: "Prédications" },
  { href: "/galerie", label: "Galerie" },
  { href: "/evenements", label: "Événements" },
  { href: "/dons", label: "Dons" },
];

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      className={`fixed inset-0 z-50 md:hidden transition-[visibility] ${
        open ? "visible" : "invisible"
      }`}
    >
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/50 transition-opacity duration-250 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        className={`absolute right-0 top-0 h-full w-[min(320px,85vw)] bg-bg text-txt shadow-[0_16px_40px_rgba(0,0,0,.16)] transition-transform duration-250 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between h-[66px] px-5 border-b border-line">
          <span className="font-heading font-semibold">Menu</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer le menu"
            className="grid place-items-center w-11 h-11 -mr-2.5 rounded-full text-2xl leading-none"
          >
            ×
          </button>
        </div>
        <nav className="flex flex-col p-3">
          {ALL_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={`px-3 py-3.5 rounded-[10px] text-[16px] font-medium min-h-[44px] flex items-center ${
                pathname === link.href ? "bg-card text-pri" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={onClose}
            className="mt-4 rounded-[10px] bg-fill text-on-pri text-[14.5px] font-semibold px-[17px] py-3.5 text-center"
          >
            Venez un dimanche
          </Link>
        </nav>
      </div>
    </div>
  );
}
