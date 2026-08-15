export type PoleGroup = "Gouvernance" | "Sections & ministères" | "Transverse";

export type Pole = {
  name: string;
  group: PoleGroup;
  description: string;
  members: number;
  hasTasks?: boolean;
};

export const POLES: Pole[] = [
  { name: "Conseil des anciens", group: "Gouvernance", description: "Gouvernance et supervision de l'église", members: 6 },
  { name: "Section Hommes", group: "Sections & ministères", description: "Vie spirituelle et communautaire des hommes de l'église", members: 4 },
  { name: "Section Femmes", group: "Sections & ministères", description: "Vie spirituelle et communautaire des femmes de l'église", members: 5 },
  { name: "Section Jeunes", group: "Sections & ministères", description: "Accompagnement des jeunes de l'église", members: 3 },
  { name: "École du dimanche", group: "Sections & ministères", description: "Enseignement biblique des enfants", members: 4 },
  { name: "Chant & musique", group: "Sections & ministères", description: "Animation musicale des cultes", members: 5 },
  { name: "Cours de hmong", group: "Sections & ministères", description: "Apprentissage de la langue hmong", members: 3 },
  { name: "Communication", group: "Transverse", description: "Publication des contenus du site et des réseaux", members: 2, hasTasks: true },
  { name: "Trésorerie", group: "Transverse", description: "Gestion financière de l'église", members: 2 },
];

export const COMMUNICATION_TASKS = [
  { label: "Prédications", detail: "vignette, lien vidéo, tag de langue, référence biblique", href: "/predications" },
  { label: "Événements", detail: "événements datés et rendez-vous réguliers", href: "/evenements" },
  { label: "Galerie", detail: "versement des photos et vidéos, classement par album", href: "/galerie" },
  { label: "Sujets de prière", detail: "liste affichée en page d'accueil", href: "/" },
  { label: "Réseaux sociaux", detail: "relais des annonces du dimanche sur Facebook et YouTube", href: null },
];

export type Access = { allowed: boolean; role: "Responsable" | "Supervision" | "Contributeur" | null };

export function deriveAccess(myPole: string, target: Pole): Access {
  if (target.name === myPole) return { allowed: true, role: "Responsable" };

  if (myPole === "Conseil des anciens") {
    if (target.name === "Trésorerie") return { allowed: false, role: null };
    return { allowed: true, role: "Supervision" };
  }

  if (target.name === "Communication") return { allowed: true, role: "Contributeur" };

  return { allowed: false, role: null };
}
