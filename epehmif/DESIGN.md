---
name: EPEHMIF
description: Site vitrine d'une église protestante évangélique — la maison commune de Saint-Vrain
colors:
  bordeaux-profond: "#7A2233"
  dore-chaleureux: "#C9A96A"
  rose-poudre: "#B4757F"
  ivoire-fond: "#FAF6F1"
  carte-nacree: "#FFFDFA"
  filet-sable: "#EDE3DA"
  encre: "#2B1A1D"
  nuit-grenat: "#241417"
  ivoire-sur-nuit: "#FDF8F3"
  blanc-sur-plein: "#FFFFFF"
typography:
  display:
    fontFamily: "Lora, Georgia, serif"
    fontSize: "clamp(2.375rem, 6.2vw, 4.75rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: normal
  headline:
    fontFamily: "Lora, Georgia, serif"
    fontSize: "clamp(2.125rem, 5vw, 3.625rem)"
    fontWeight: 600
    lineHeight: 1.08
  title:
    fontFamily: "Lora, Georgia, serif"
    fontSize: "clamp(1.75rem, 3.6vw, 2.75rem)"
    fontWeight: 600
    lineHeight: 1.15
  body:
    fontFamily: "Work Sans, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Work Sans, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.16em"
rounded:
  sm: "10px"
  md: "14px"
  lg: "16px"
  pill: "999px"
spacing:
  container-padding: "clamp(20px, 5vw, 48px)"
  section: "clamp(56px, 8vw, 104px)"
  block: "clamp(26px, 4vw, 48px)"
  card: "28px"
  grid-gap: "22px"
components:
  button-primary:
    backgroundColor: "{colors.bordeaux-profond}"
    textColor: "{colors.blanc-sur-plein}"
    rounded: "{rounded.sm}"
    padding: "10px 17px"
  button-primary-hover:
    backgroundColor: "{colors.bordeaux-profond}"
    textColor: "{colors.blanc-sur-plein}"
    rounded: "{rounded.sm}"
    padding: "10px 17px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ivoire-sur-nuit}"
    rounded: "{rounded.sm}"
    padding: "10px 17px"
  card:
    backgroundColor: "{colors.carte-nacree}"
    textColor: "{colors.encre}"
    rounded: "{rounded.lg}"
    padding: "{spacing.card}"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.encre}"
    rounded: "{rounded.pill}"
    padding: "6px 16px"
  chip-active:
    backgroundColor: "{colors.bordeaux-profond}"
    textColor: "{colors.blanc-sur-plein}"
    rounded: "{rounded.pill}"
    padding: "6px 16px"
---

# Design System: EPEHMIF

## 1. Overview

**Creative North Star: "La Maison Commune"**

EPEHMIF n'est pas une institution qu'on visite, c'est une maison qu'on ouvre. Le système visuel traduit cette idée par un fond ivoire chaud plutôt que blanc clinique, une typographie serif de titre (Lora) qui porte de la chaleur sans tomber dans le solennel-poussiéreux, et une seule couleur d'action — le bordeaux — qui ne se dilue jamais dans des dégradés ou des accents multiples. Le doré ne décore pas : il structure les zones d'information (horaires, adresse, bandeau baptême), jamais le texte lui-même.

Ce que ce système rejette explicitement : le site d'église daté à la mise en page institutionnelle et aux tons ternes, les photos clipart génériques, et le réflexe SaaS-cream (fond crème par défaut, eyebrow au-dessus de chaque section, grilles de cartes identiques). Une seule couleur porte l'action ; le reste de la palette structure ou informe, il ne décore pas.

**Key Characteristics:**
- Fond ivoire chaud (#FAF6F1), jamais blanc pur — la chaleur vient du fond, pas d'un filtre
- Une seule couleur d'action (bordeaux #7A2233), portée par les CTA et les titres
- Le doré structure l'information, ne décore jamais le texte
- Serif chaleureux en titre (Lora), sans-serif neutre en corps (Work Sans) — contraste classique, pas de sur-stylisation
- Plat par défaut : la profondeur vient des bordures et des fonds teintés, pas des ombres

## 2. Colors

Palette resserrée autour d'une seule couleur d'action ; le doré et le rose poudré jouent des rôles fonctionnels distincts, jamais décoratifs.

### Primary
- **Bordeaux profond** (#7A2233): porte toutes les actions (CTA pleins, liens actifs) et les titres de section. C'est la seule couleur qui "agit" sur la page — boutons, filtres actifs, pastilles de rôle dans l'Espace pôles.

### Secondary
- **Rose poudré** (#B4757F): survol des liens uniquement. N'apparaît jamais au repos, seulement comme état de transition depuis le bordeaux.

### Tertiary
- **Doré chaleureux** (#C9A96A): structure les zones d'information — blocs horaires, bandeau de préparation au baptême, blocs adresse, rattachements. Toujours associé à du texte foncé (`--onAcc` = encre), jamais de texte clair dessus.

### Neutral
- **Ivoire fond** (#FAF6F1): fond de page. Chaud par construction (teinté vers le bordeaux), pas un blanc cassé neutre.
- **Carte nacrée** (#FFFDFA): fond des cartes, légèrement plus clair que le fond de page pour créer une élévation sans ombre.
- **Filet sable** (#EDE3DA): bordures et filets, dérivé du fond mélangé à l'encre à 11%.
- **Encre** (#2B1A1D): texte courant, contraste ≥4.5:1 garanti sur l'ivoire.
- **Nuit grenat** (#241417): surfaces sombres (footer, en-tête Espace pôles, bandeau hmong).
- **Ivoire sur nuit** (#FDF8F3): texte sur surface sombre.

### Named Rules
**La Règle du Doré Jamais Clair.** Le doré porte toujours du texte foncé (`--onAcc` = encre), jamais de texte clair. Sans exception : c'est la règle de contraste la plus citée du handoff design.

**La Règle de l'Action Unique.** Une seule couleur porte l'action et le titre — le bordeaux. Le doré informe, le rose poudré n'existe qu'au survol. Aucune troisième couleur d'action ne doit apparaître, même pour une variante "secondaire" de bouton.

## 3. Typography

**Display Font:** Lora (avec Georgia, serif en repli)
**Body Font:** Work Sans (avec system-ui, sans-serif en repli)

**Character:** Un serif chaleureux et lisible en titre, jamais ornemental (Lora reste sobre même en 600), posé sur un sans-serif neutre et net en corps. Le contraste serif/sans porte la chaleur sans sacrifier la lisibilité — c'est la paire T5 du handoff, verrouillée en production.

### Hierarchy
- **Display** (600, `clamp(38px, 6.2vw, 76px)`, 1.05): H1 du hero de l'accueil uniquement.
- **Headline** (600, `clamp(34px, 5vw, 58px)`, 1.08): H1 des pages internes.
- **Title** (600, `clamp(28px, 3.6vw, 44px)`, 1.15): titres de section (H2). Variante sous-section à `clamp(24px, 2.8vw, 34px)`.
- **Body** (400, 17px, 1.6): texte courant, plancher absolu — aucune exception en dessous de 16px. Chapô à 18px/1.6 pour les intros de page.
- **Label** (600, 12px, 1, `letter-spacing: .16em`, uppercase): eyebrows et légendes de rôle. Légendes/meta en 14–15px, 400–600.

### Named Rules
**La Règle du Plancher 16px.** Aucun texte de corps sous 16px, interligne 1.6 sans exception — public de tous âges, y compris peu à l'aise avec le numérique.

## 4. Elevation

Plat par défaut. Le système ne s'appuie sur aucune ombre pour créer de la hiérarchie visuelle : la profondeur vient des bordures fines (`--line`) et des fonds tonaux (carte nacrée sur fond ivoire, blocs dorés sur carte). La seule ombre du système habille le menu "Plus" du header — un vrai overlay flottant qui a besoin de se détacher de la page.

### Shadow Vocabulary
- **overlay-flottant** (`box-shadow: 0 16px 40px rgba(0,0,0,.16)`): réservée aux éléments qui flottent au-dessus du flux (dropdown "Plus"). N'apparaît jamais sur une carte ou un bloc de contenu.

### Named Rules
**La Règle du Plat-par-Défaut.** Les cartes et blocs de contenu n'ont jamais d'ombre. La séparation vient d'une bordure 1px `--line` ou d'un fond `--card` légèrement plus clair que `--bg`. L'ombre est réservée aux éléments qui flottent réellement au-dessus du contenu (menus, dropdowns).

## 5. Components

### Buttons
- **Shape:** coins doux (`border-radius: 10px`)
- **Primary:** fond `--fill` (= bordeaux profond), texte `--onPri` (blanc), padding `10px 17px`, 14.5px/600
- **Hover / Focus:** `filter: brightness(1.12)` — jamais de changement de fond ou d'ombre portée
- **Secondary / Ghost:** contour `1.5px rgba(253,248,243,.6)` sur fond sombre (hero), texte `--onDark`; au survol, inversion fond/texte

### Chips (pastilles)
- **Style:** fond transparent, contour 1px, rayon 999px (pilule) — utilisées pour le sélecteur de langue FR/HM et les filtres de galerie/prédications
- **State:** actif = fond `--fill`, texte `--onPri`; inactif = contour seul, texte `--txt`

### Cards / Containers
- **Corner Style:** 16px pour cartes et blocs de section, 10–14px pour les sous-éléments
- **Background:** `--card` (#FFFDFA) sur fond `--bg`, ou fond doré à 12–20% pour les blocs d'information (horaires, baptême)
- **Shadow Strategy:** aucune — voir Elevation
- **Border:** 1px `--line`, sauf sur les blocs dorés (bordure `--acc` à 40% d'opacité)
- **Internal Padding:** 28px (24–26px pour les cartes denses type fiche ministère)

### Inputs / Fields
- **Style:** fond `--card`, bordure 1px `--line`, rayon 10px, texte 15px
- **Focus:** à préciser à l'intégration (non spécifié dans le handoff design) — prévoir un contour visible, jamais uniquement une couleur de bordure pour rester conforme WCAG 2.1 AA

### Navigation
- **Style:** en-tête 66px sur une ligne. `fixed` + transparent sur l'accueil (texte clair sur le hero), `sticky` + fond `--bg` à 90% avec `backdrop-filter: blur(10px)` sur les pages internes. Bascule au scroll (>40px). Lien actif : filet doré 2px sous le libellé. Le menu "Plus" regroupe Galerie/Événements/Dons dans un dropdown flottant (voir Elevation).
- **Mobile:** sous ~880px, l'en-tête repasse sur deux lignes dans la maquette de référence — un menu en tiroir (burger) est recommandé à l'intégration plutôt que le repli deux lignes.

### Espace pôles (signature component)
Coquille distincte, hors registre marketing : en-tête sombre (`--dark`) sans nav publique, cartes de pôle sur fond `rgba(blanc, 5%)` bordure blanche à 10% (pas de blanc plein), cartes verrouillées en bordure pointillée à 62% d'opacité avec cadenas. Le rôle (`Responsable` / `Supervision` / `Contributeur`) s'affiche en pastille contournée, jamais en fond plein — pour ne pas concurrencer visuellement le bordeaux d'action du site public.

## 6. Do's and Don'ts

### Do:
- **Do** garder le bordeaux (#7A2233) comme unique couleur d'action — CTA, liens actifs, filtres sélectionnés.
- **Do** toujours poser du texte foncé (`--txt` / `--onAcc`) sur un fond doré, jamais de texte clair.
- **Do** utiliser des bordures fines (`--line`, 1px) et des fonds tonaux pour créer de la hiérarchie, pas des ombres.
- **Do** respecter le plancher 16px / interligne 1.6 sur tout texte de corps, sans exception.
- **Do** utiliser `text-wrap: balance` sur les titres (h1–h3) et `text-wrap: pretty` sur les paragraphes longs.

### Don't:
- **Don't** introduire une deuxième couleur d'action à côté du bordeaux, même pour un bouton "secondaire" — le secondaire est un contour, pas une nouvelle teinte pleine.
- **Don't** ajouter d'ombre portée sur les cartes ou blocs de contenu — réserver l'ombre au seul overlay flottant (dropdown "Plus").
- **Don't** reproduire le site d'église daté : pas de mise en page institutionnelle froide, pas de tons ternes.
- **Don't** utiliser de photos clipart génériques ou de stock non représentatif de la vraie communauté — cadres pointillés étiquetés `[À FOURNIR]` en attendant les vraies photos.
- **Don't** tomber dans le réflexe SaaS-cream : pas d'eyebrow systématique sur chaque section, pas de grilles de cartes identiques répétées sans raison, pas de texte en dégradé.
