@AGENTS.md

# Pipeline d'agents — Agence Web Bambym

Trois agents spécialisés transforment un brief client en site web complet, en pipeline séquentiel. Définitions : [.claude/agents/content-agent.md](.claude/agents/content-agent.md), [.claude/agents/ux-ui-agent.md](.claude/agents/ux-ui-agent.md), [.claude/agents/dev-agent.md](.claude/agents/dev-agent.md).

## Projet en cours : EPEHMIF (site d'église)

Site vitrine pour une église protestante. Design moderne et impactant, pensé pour retenir le visiteur. Le site est **en français** (mettre `lang="fr"` dans `app/layout.tsx` et remplacer les metadata par défaut).

Pages prévues : accueil, qui sommes-nous, nos ministères, prédications, galerie, contact, plus un espace authentifié pour les pôles (communication, école du dimanche, conseil des anciens…).

⚠️ L'app est encore le starter `create-next-app` par défaut : `app/page.tsx`, `app/layout.tsx` et les SVG de `public/` sont à remplacer, pas à conserver.

## Stack technique (versions réelles — vérifier `package.json` en cas de doute)

- Next.js 16.2.10 (App Router) — voir l'avertissement d'AGENTS.md : lire `node_modules/next/dist/docs/` avant de coder
- React 19.2.4 · TypeScript 5
- Tailwind CSS v4 — config **CSS-first** via `@theme` dans `app/globals.css` ; il n'y a pas de `tailwind.config`, ne pas en créer
- Versioning : GitHub (dépôt `eglisev1`, le projet vit dans le sous-dossier `epehmif/`)
- Déploiement cible : Netlify — **rien n'est encore configuré** (ni `netlify.toml`, ni `.github/workflows/`). Le mettre en place est une tâche à part entière, ne pas prétendre que ça existe.

## Commandes

- `npm run dev` — serveur de développement
- `npm run build` — build de production (obligatoire avant toute livraison)
- `npm run lint` — ESLint 9 (flat config, `eslint.config.mjs`)

Toujours lancer Claude Code depuis `epehmif/`, pas depuis la racine du dépôt.

## Pipeline de travail

1. **Brief client** (fichier `pipeline/00-brief.md`, rédigé en prose libre : objectifs, audience, tonalité, pages souhaitées, contraintes) → `content-agent`
2. **Contenu structuré** → `content-agent` écrit son JSON dans `pipeline/01-contenu.json` → `ux-ui-agent`
3. **Spécifications UX/UI** → `ux-ui-agent` écrit son JSON dans `pipeline/02-design.json` → `dev-agent`
4. **Site web déployable** → code dans `app/`, prêt pour Netlify

Les schémas JSON des étapes 2 et 3 sont définis dans les fichiers d'agents respectifs — ils font foi.

## Règles du pipeline

- **Auto-évaluation** : chaque agent applique sa checklist « Avant de livrer » (dans son fichier de définition), corrige, puis livre. Maximum 2 passes de correction — au-delà, il livre en l'état et liste les points non résolus.
- **Blocages** : tout blocage ou besoin de clarification est signalé **en fin de réponse, dans une section « ⚠️ Blocages »**, jamais résolu par une supposition silencieuse.
- **Handoff** : un agent ne démarre que si le fichier `pipeline/` de l'étape précédente existe et est valide. Sinon, il le signale au lieu d'inventer l'entrée.

## Skills installées (`.claude/skills/`)

8 skills sont présentes ; plusieurs se recouvrent. Règles d'usage :

- **`impeccable`** — skill principale pour tout le design UI (init, shape, critique, audit, polish). Un hook post-édition tourne automatiquement sur les fichiers UI (voir `.claude/settings.local.json`).
- **`ui-ux-pro-max`** — base de connaissances complémentaire (styles, palettes, pairings de polices). Ses scripts (`scripts/search.py`) nécessitent Python 3 ; s'il est absent, le signaler plutôt qu'inventer.
- **`banner-design`, `brand`, `design`, `design-system`, `slides`, `ui-styling`** — ne les invoquer que sur demande explicite ; en cas de chevauchement avec `impeccable`, c'est `impeccable` qui prime.

## Agents futurs (roadmap)

À ajouter ultérieurement : QA/Test, SEO/Audit, Commercial, Prospection, Suivi Client, Maintenance, Admin/Facturation, Veille, Formation Client. Aucun de ces agents n'existe aujourd'hui — ne pas y faire référence dans le code ou les prompts.
