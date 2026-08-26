"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Sermon = {
  title: string;
  ref: string;
  date: string;
  year: string;
  lang: "fr" | "hmn";
  href: string;
  thumbnail?: string;
};

const SERMONS: Sermon[] = [
  { title: "Tug mivnyuam kws nooglug", ref: "", date: "2010", year: "2010", lang: "hmn", href: "#" },
  { title: "Xaav Tau Txujsa", ref: "", date: "2010", year: "2010", lang: "hmn", href: "#" },
  { title: "Tswv Yexus yog tus tswv yug yaj", ref: "", date: "2010", year: "2010", lang: "hmn", href: "#" },
  { title: "Yexus yog leejtwg rua koj tag ?", ref: "", date: "2010", year: "2010", lang: "hmn", href: "#" },
];

const YEARS = Array.from(new Set(SERMONS.map((s) => s.year))).sort().reverse();

export default function PredicationsList() {
  const [q, setQ] = useState("");
  const [lang, setLang] = useState<"" | "fr" | "hmn">("");
  const [year, setYear] = useState("");

  const filtered = useMemo(() => {
    return SERMONS.filter((s) => {
      const matchesQ =
        q.trim() === "" ||
        s.title.toLowerCase().includes(q.toLowerCase()) ||
        s.ref.toLowerCase().includes(q.toLowerCase());
      const matchesLang = lang === "" || s.lang === lang;
      const matchesYear = year === "" || s.year === year;
      return matchesQ && matchesLang && matchesYear;
    });
  }, [q, lang, year]);

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-8">
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Rechercher un titre ou une référence…"
          className="flex-1 min-w-[220px] rounded-[10px] border border-line bg-card px-4 py-2.5 text-[15px]"
        />
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value as "" | "fr" | "hmn")}
          className="rounded-[10px] border border-line bg-card px-4 py-2.5 text-[15px]"
        >
          <option value="">Toutes les langues</option>
          <option value="fr">Français</option>
          <option value="hmn">Hmong</option>
        </select>
        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="rounded-[10px] border border-line bg-card px-4 py-2.5 text-[15px]"
        >
          <option value="">Toutes les années</option>
          {YEARS.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </div>

      <p className="text-sm opacity-70 mb-6">
        {filtered.length} message{filtered.length > 1 ? "s" : ""}
      </p>

      <ul className="divide-y divide-line border-t border-b border-line">
        {filtered.map((s, i) => (
          <li key={i} className="flex items-center gap-4 py-4">
            <button
              type="button"
              aria-label={`Écouter ${s.title}`}
              className="relative shrink-0 w-28 h-[63px] rounded-[10px] overflow-hidden border border-line bg-line/50"
            >
              {s.thumbnail ? (
                <Image src={s.thumbnail} alt="" fill className="object-cover" />
              ) : (
                <span className="absolute inset-0 grid place-items-center text-txt/35">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <rect x="1.5" y="1.5" width="15" height="11" rx="1.6" stroke="currentColor" strokeWidth="1.4" />
                    <circle cx="5.5" cy="6.3" r="1.1" stroke="currentColor" strokeWidth="1.2" />
                    <path d="M2 11l3.6-3.4 2.6 2.2 3-3.3L16 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              )}
              <span className="absolute inset-0 grid place-items-center bg-black/25">
                <span className="grid place-items-center w-8 h-8 rounded-full bg-bg/90 text-fill">
                  <svg width="11" height="13" viewBox="0 0 11 13" fill="currentColor" aria-hidden="true">
                    <path d="M0 0l11 6.5L0 13z" />
                  </svg>
                </span>
              </span>
            </button>
            <div className="flex-1">
              <p className="font-heading font-semibold text-[17px]">{s.title}</p>
              <p className="text-sm opacity-70">{s.ref ? `${s.ref} · ${s.date}` : s.date}</p>
            </div>
            <span className="text-xs font-semibold uppercase tracking-wide rounded-full border border-line px-2.5 py-1">
              {s.lang === "fr" ? "FR" : "HM"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
