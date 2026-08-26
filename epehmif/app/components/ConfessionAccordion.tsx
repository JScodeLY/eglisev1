"use client";

import { useState } from "react";

const ARTICLES = [
  {
    title: "Un seul Dieu en trois personnes",
    text: "Il y a de toute éternité un seul Dieu en trois personnes : le Père, le Fils et le Saint Esprit. Il est parfait et infini à tous égards.",
  },
  {
    title: "Jésus-Christ, vrai Dieu et vrai homme",
    text: "Jésus-Christ est à la fois vrai Dieu et vrai homme. Il a été conçu du Saint-Esprit et Il est né de la Vierge Marie. Il est mort en sacrifice sur la croix, en se substituant, Lui, juste, pour les injustes. Tous ceux qui croient en Lui sont justifiés par son sang répandu. Il est ressuscité des morts le troisième jour selon les Ecritures. Il est notre Souverain Sacrificateur, et comme tel, Il siège maintenant à la droite de la Majesté divine. Il reviendra pour établir son royaume de justice et de paix.",
  },
  {
    title: "Le Saint-Esprit",
    text: "Le Saint-Esprit est une personne divine, envoyée pour demeurer dans le croyant, pour le guider, l'enseigner, lui donner de la puissance et pour convaincre le monde de péché, de justice et de jugement.",
  },
  {
    title: "L'autorité des Écritures",
    text: "L'Ancien et le Nouveau Testament, sans erreur dans leur rédaction originelle, ont été inspirés verbalement par Dieu, et sont la révélation complète de sa volonté pour le salut des hommes. Ils constituent la divine et seule règle du chrétien en matière de foi et de vie.",
  },
  {
    title: "La chute de l'homme",
    text: "L'homme fut originellement créé à l'image et à la ressemblance de Dieu. Sa désobéissance entraîna sa chute, et il encourut ainsi la mort physique et spirituelle. Tous les hommes naissent avec une nature pécheresse, sont séparés de la vie de Dieu et ne peuvent être sauvés que par l'œuvre expiatoire du Seigneur Jésus. Le sort des impénitents et des incroyants est une existence consciente dans un éternel tourment, celui du croyant une joie et une félicité éternelles.",
  },
  {
    title: "Le salut offert en Christ",
    text: "Le salut est offert gratuitement par Jésus-Christ à tous les hommes. Ceux qui se repentent et qui croient en Lui naissent de nouveau par le Saint-Esprit, reçoivent le don de la vie éternelle et deviennent les enfants de Dieu.",
  },
  {
    title: "La sanctification du croyant",
    text: "Dieu veut que chaque croyant soit rempli du Saint-Esprit, entièrement sanctifié (esprit, âme et corps), séparé du péché et du monde, totalement consacré à la volonté de Dieu, recevant ainsi la puissance nécessaire pour une vie sainte et un service efficace. Cette prise de conscience de la nécessité de la sanctification, en général distincte de la conversion, confirme une croissance normale et permet un développement progressif.",
  },
  {
    title: "La guérison dans l'œuvre rédemptrice",
    text: "L'œuvre rédemptrice du Seigneur Jésus-Christ inclut la guérison de notre corps, laquelle ne sera complète qu'à la résurrection. La prière pour les malades et l'onction d'huile, prescrites dans l'Ecriture, demeurent des privilèges pour l'Eglise d'aujourd'hui.",
  },
  {
    title: "L'Église, baptême et Sainte-Cène",
    text: "L'Eglise comprend tous ceux qui croient au Seigneur Jésus-Christ, qui sont rachetés par son sang et qui sont nés du Saint-Esprit. Christ est la tête du corps, L'Eglise, à qui le Seigneur a donné l'ordre d'aller par tout le monde, prêchant l'Evangile à toutes les nations. L'Eglise locale est un groupe de croyants en Christ qui se réunissent pour adorer Dieu, par la prière, la communion fraternelle, la proclamation de l'Evangile et l'observation des ordonnances du Seigneur, à savoir le baptême et la Sainte-Cène.",
  },
  {
    title: "La résurrection des justes et des injustes",
    text: "Il y aura une résurrection corporelle pour les justes et les injustes : pour les premiers, une résurrection pour la vie éternelle, pour les seconds, une résurrection pour le jugement.",
  },
  {
    title: "Le retour du Seigneur",
    text: "Le retour du Seigneur Jésus-Christ est proche et sera personnel, visible et glorieux. Il précédera le millénium. C'est une vérité vitale qui constitue un stimulant pour la vie sainte et un service fidèle, en même temps que l'espérance bénie du croyant.",
  },
];

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
