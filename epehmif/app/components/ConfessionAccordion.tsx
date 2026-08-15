"use client";

import { useState } from "react";

const ARTICLES = Array.from({ length: 11 }, (_, i) => ({
  title: `[À FOURNIR : intitulé de l'article ${i + 1}]`,
  text: "[À FOURNIR : texte intégral de l'article]",
}));

export default function ConfessionAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="divide-y divide-line border-t border-b border-line">
      {ARTICLES.map((article, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-heading font-semibold text-[17px]">
                {i + 1}. {article.title}
              </span>
              <span className="text-acc text-xl leading-none shrink-0">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && (
              <div
                className="pb-5 text-[15px] leading-[1.6] opacity-85 rounded-lg px-3 -mx-3"
                style={{ background: "color-mix(in srgb, var(--acc) 12%, var(--card))" }}
              >
                {article.text}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
