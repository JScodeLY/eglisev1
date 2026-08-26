"use client";

import { useMemo, useState } from "react";

type Sermon = {
  title: string;
  ref: string;
  date: string;
  year: string;
  lang: "fr" | "hmn";
  href: string;
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
          <li key={i} className="flex items-center gap-4 py-5">
            <button
              type="button"
              aria-label={`Écouter ${s.title}`}
              className="shrink-0 grid place-items-center w-10 h-10 rounded-full border border-fill text-fill"
            >
              ▶
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
