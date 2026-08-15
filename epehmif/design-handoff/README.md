# Handoff : site EPEHMIF (Église Protestante Évangélique Hmong d'Île-de-France)

## Vue d'ensemble

Site public de l'EPEHMIF, 32 avenue Charles René de Mortemart, 91770 Saint-Vrain.
Direction artistique « Maison commune » : chaleureux, communautaire, accueillant.
Site destiné à être bilingue hmong / français.

Périmètre couvert par la maquette : **8 pages publiques + 1 espace privé**, dans un seul fichier HTML avec navigation interne par état (pas de routeur, pas de rechargement).

| Page | État interne | Contenu |
|---|---|---|
| Accueil | `accueil` | hero photo plein écran, « Par où commencer » (3 cartes), « Le dimanche chez nous » (2 blocs dorés), derniers messages (2 cartes), sujets de prière, appel final grenat |
| Notre église | `eglise` | sous-nav ancrée : Identité · Confession de foi (11 articles dépliables) · Histoire (frise) · Conseil des anciens · Rattachements |
| Ministères | `ministeres` | 6 fiches avec responsable en pied + bandeau doré « Préparation au baptême » |
| Prédications | `predications` | recherche + filtres langue/année, liste avec bouton lecture et tag de langue |
| Galerie | `galerie` | grille photos/vidéos, filtres par album |
| Événements | `evenements` | rendez-vous réguliers (bloc doré) + événements datés |
| Dons | `dons` | page en attente de cadrage, encadré pointillé, **aucun formulaire** |
| Contact | `contact` | formulaire + bloc doré (adresse, horaires) + emplacement carte |
| Espace pôles | `poles` | en-tête foncé, pas de nav publique, connexion factice avec choix du pôle, tableau de bord groupé avec droits d'accès, vue intérieure d'un pôle |

## À propos des fichiers de design

`Site EPEHMIF.dc.html` est une **référence de design réalisée en HTML** : un prototype qui montre l'apparence et le comportement visés, **pas du code de production à reprendre tel quel**.

Le travail attendu est de **recréer ces écrans dans l'environnement du dépôt cible** — ici `JScodeLY/eglisev1`, un projet Next.js 15 / React 19 / Tailwind CSS v4 (App Router, TypeScript, `create-next-app` encore vierge) — en suivant ses conventions. Les valeurs de ce document (hex, tailles, graisses, rayons, espacements) sont à porter dans `app/globals.css` sous forme de tokens `@theme`, pas à recopier en styles inline.

Le fichier joint utilise des styles inline et un moteur de rendu maison ; c'est une contrainte de l'outil de maquettage, pas une recommandation d'architecture.

## Fidélité

**Haute fidélité (hifi).** Couleurs, typographies, espacements, rayons, états de survol et micro-animations sont définitifs. À recréer au pixel près avec les composants et utilitaires du dépôt.

Deux réserves :
- Le responsive repose sur `clamp()` et des grilles `auto-fit`, sans points de rupture explicites. À arbitrer à l'intégration (voir « Responsive »).
- Les contenus marqués `[À FOURNIR : …]` sont des trous en attente d'information client, pas des textes à traduire ou à inventer. Voir « Blocages ».

## Thème commutable

Le site est construit sur des variables CSS afin que palette, typographie et style de bouton puissent basculer **sans toucher la mise en page**. Le thème livré est verrouillé sur :

- **Palette H** — Bordeaux & ivoire
- **Typo T5** — Lora 600 (titres) / Work Sans 400–600 (corps)
- **Boutons 2** — coins doux, rayon 10px

Un panneau de travail interne (bouton « Thème », bas à droite) permet de basculer les 9 palettes, 6 duos typo et 4 styles de bouton indépendamment. **Ce panneau est un outil de validation client : à retirer de l'implémentation finale**, ou à conditionner à une variable d'environnement de développement.

### Variables du thème

Ces variables sont posées sur `:root` et suffisent à décrire tout le site.

| Variable | Valeur (palette H) | Rôle |
|---|---|---|
| `--bg` | `#FAF6F1` | fond de page |
| `--pri` | `#7A2233` | primaire : titres, liens, eyebrows |
| `--acc` | `#C9A96A` | doré : fonds de zones d'information |
| `--sec` | `#B4757F` | secondaire : survol des liens |
| `--txt` | `#2B1A1D` | texte courant |
| `--card` | `#FFFDFA` | fond de carte — dérivé : `mix(--bg, #fff, 0.6)` |
| `--line` | `#EDE3DA` | filets et bordures — dérivé : `mix(--bg, --txt, 0.11)` |
| `--dark` | `#241417` | surfaces sombres — dérivé : `mix(--txt, #000, 0.12)` |
| `--onDark` | `#FDF8F3` | texte sur surface sombre — dérivé : `mix(--bg, #fff, 0.4)` |
| `--fill` | `#7A2233` | fond des surfaces pleines (voir ci-dessous) |
| `--onPri` | `#ffffff` | encre sur `--fill` |
| `--onAcc` | `#2B1A1D` | encre sur le doré — **toujours foncée, jamais claire** |
| `--br` | `10px` | rayon des boutons |
| `--bsh` | `none` | ombre des boutons (style 3 uniquement) |
| `--h` | `'Lora', Georgia, serif` | police de titre |
| `--b` | `'Work Sans', system-ui, sans-serif` | police de corps |

**Règle de contraste sur `--fill`.** Les surfaces pleines (boutons primaires, pastilles de filtre actives, vignettes de date) n'utilisent pas `--pri` directement mais `--fill`, une version assombrie par paliers de 5 % **uniquement si nécessaire** pour atteindre un ratio de 4,5:1 avec du blanc. En palette H, `--fill === --pri` (aucune correction). En palette B, `#B98432` devient `#946a28`. `--onPri` choisit ensuite entre blanc et `--txt` selon le meilleur contraste. À porter en JS ou à figer en dur si une seule palette est retenue.

**Règle métier du doré.** Le grenat porte les actions et les titres ; le doré structure les zones d'information (blocs horaires, bandeau baptême, blocs adresse, rattachements). Jamais de texte clair sur le doré.

### Les 9 palettes

| Id | Nom | bg | pri | acc | sec | txt |
|---|---|---|---|---|---|---|
| A | Terracotta | `#FBF6EF` | `#C0562F` | `#E8A54B` | `#6E7B4E` | `#3A2E28` |
| B | Miel & sauge | `#FAF7F0` | `#B98432` | `#DFC48A` | `#7D9182` | `#38352E` |
| C | Brique & bleu | `#FBF5EE` | `#A8452C` | `#E9B04A` | `#3E5C6B` | `#2E2822` |
| D | Forêt & lin | `#F5F2E9` | `#2F5D45` | `#C9A227` | `#7FA08A` | `#22302A` |
| E | Nuit & cuivre | `#F4F1EC` | `#1F3A5F` | `#C87941` | `#7E93AC` | `#141F30` |
| F | Prune & poudre | `#F8F4F4` | `#5B3A55` | `#D99BA0` | `#A98BA3` | `#2E1F2C` |
| G | Océan & sable | `#F2F7F6` | `#1B6B6B` | `#E3C08A` | `#6FA9A4` | `#12332F` |
| **H** | **Bordeaux & ivoire** | `#FAF6F1` | `#7A2233` | `#C9A96A` | `#B4757F` | `#2B1A1D` |
| I | Ardoise & abricot | `#F4F5F6` | `#37424D` | `#F08A4B` | `#8C99A6` | `#1D242B` |

### Les 6 duos typo

| Id | Titres | Corps | Google Fonts |
|---|---|---|---|
| T1 | Fraunces 600 | Nunito Sans 400–600 | `Fraunces:opsz,wght@9..144,600&family=Nunito+Sans:wght@400;500;600` |
| T2 | Playfair Display 600 | Source Sans 3 | `Playfair+Display:wght@600;700&family=Source+Sans+3:wght@400;500;600` |
| T3 | DM Serif Display | DM Sans | `DM+Serif+Display&family=DM+Sans:wght@400;500;600` |
| T4 | Outfit 600 | Karla | `Outfit:wght@600;700&family=Karla:wght@400;500;600` |
| **T5** | **Lora 600** | **Work Sans 400–600** | `Lora:wght@500;600;700&family=Work+Sans:wght@400;500;600` |
| T6 | Bricolage Grotesque 700 | Public Sans | `Bricolage+Grotesque:opsz,wght@12..96,700&family=Public+Sans:wght@400;500;600` |

Les polices non actives sont chargées à la demande, à l'activation dans le panneau. En production, ne charger que T5 — via `next/font/google` plutôt qu'un `<link>`.

### Les 4 styles de bouton

| Id | Nom | `--br` | `--bsh` | Fond |
|---|---|---|---|---|
| 1 | Pilule | `999px` | `none` | `--fill` |
| **2** | **Coins doux** | **`10px`** | **`none`** | **`--fill`** |
| 3 | Relief | `10px` | `0 4px 0 rgba(0,0,0,.32)` | `--fill` |
| 4 | Neutre foncé | `8px` | `none` | `--txt` |

## Typographie

| Usage | Police | Taille | Graisse | Interligne |
|---|---|---|---|---|
| Corps | `--b` | 17px | 400 | 1.6 |
| H1 hero | `--h` | `clamp(38px, 6.2vw, 76px)` | 600 | 1.05 |
| H1 page interne | `--h` | `clamp(34px, 5vw, 58px)` | 600 | 1.08 |
| H2 section | `--h` | `clamp(28px, 3.6vw, 44px)` | 600 | 1.15 |
| H2 sous-section | `--h` | `clamp(24px, 2.8vw, 34px)` | 600 | 1.15 |
| H3 carte | `--h` | 20–23px | 600 | 1.2–1.25 |
| Eyebrow | `--b` | 12px | 600 | 1 · `letter-spacing:.16em` · `uppercase` |
| Chapô | `--b` | 18px | 400 | 1.6 |
| Légende / meta | `--b` | 14–15px | 400–600 | 1.6 |

**Plancher : 16px pour tout texte de corps, interligne 1.6.** Aucune exception. `text-wrap: balance` sur les titres, `text-wrap: pretty` sur les paragraphes.

## En-tête

Hauteur cible **66px sur une ligne**, tout sur la même rangée : logo + baseline, 6 entrées de nav, sélecteur de langue, bouton d'action.

- `position: fixed` sur l'Accueil (superposé au hero, texte clair), `sticky` sur les pages internes (fond `color-mix(in srgb, var(--bg) 90%, transparent)`, `backdrop-filter: blur(10px)`, filet `--line`).
- Bascule des deux styles au scroll : `> 40px` fait passer l'en-tête en fond opaque et le texte en `--txt`.
- Logo : carré 36px, rayon 9px, fond `--fill`, lettre « E » en `--onPri`, `title="Logo définitif à fournir"`. **Placeholder** — à remplacer par le logo client.
- Baseline sous le sigle : « Île-de-France », 10px, `.09em`, uppercase, opacité .72.
- Nav : 6 entrées à 14px/500, `white-space: nowrap`, gap 14px. Galerie, Événements et Dons sont regroupés sous un menu **« Plus »** (dropdown, fond `--card`, rayon 12px, ombre `0 16px 40px rgba(0,0,0,.16)`). L'entrée active porte un filet doré 2px dessous ; « Plus » porte un point doré 5px quand une de ses pages est active.
- Sélecteur de langue : pastille `FR` / `HM`, 12.5px/600, contour 1px, rayon 999px, `title` et `aria-label` explicites.
- Bouton « Venez un dimanche » : `--fill`, `--onPri`, 14.5px/600, padding 10px 17px, rayon `--br`, survol `filter: brightness(1.12)`.
- La hauteur réelle est mesurée par un `ResizeObserver` et exposée en `--hdr-h`. La sous-nav de « Notre église » s'y cale (`top: var(--hdr-h)`) et les ancres de section utilisent `scroll-margin-top: calc(var(--hdr-h) + 72px)`. **Indispensable** : sous ~880px l'en-tête repasse sur deux lignes et les valeurs figées cassent les ancres.
- Bandeau hmong : quand la langue est sur `HM`, un bandeau `--dark` s'affiche sous l'en-tête avec la mention `[À FOURNIR : traduction hmong]`. Le contenu affiché reste en français.

## Hero de l'accueil

- `min-height: clamp(560px, 92vh, 900px)`, `align-items: flex-end`, `overflow: hidden`.
- **Calque 1** — photo : `hero-eglise.jpg`, `background-size: cover`, `background-position: 64% center` (garde la croix et le pignon visibles à toutes largeurs), bord à bord.
- **Calque 2** — voile sombre : `#000` à `opacity: .55`. Sans lui, le titre blanc devient illisible dès que la photo a des zones claires. Réglable de 0 à 80 % dans le panneau interne ; **retenir 55 % en production**.
- **Calque 3** — dégradé latéral : `linear-gradient(100deg, rgba(0,0,0,.45) 0%, rgba(0,0,0,.12) 55%, transparent 80%)`. Renforce la lisibilité à gauche sans assombrir la façade.
- Contenu : padding `clamp(118px, 17vh, 190px)` en haut, `clamp(56px, 8vh, 90px)` en bas, `max-width: 760px`.
- Eyebrow doré → H1 → chapô (`max-width: 560px`) → 2 CTA → lien vidéo → indice de défilement.
- CTA primaire : `--fill` / `--onPri`. CTA secondaire : contour `1.5px rgba(253,248,243,.6)`, texte `--onDark`.
- Lien vidéo : pastille ronde 34px contour 1.5px + triangle de lecture, couleur `--acc`, survol `--onDark`.
- Indice de défilement : pictogramme souris + « Faites défiler », `width: max-content`, animation `bob` 2.4s `ease-in-out infinite` (translateY 0 → 6px → 0).
- Animation d'entrée du bloc de texte : `fadeup` .7s ease (opacity 0→1, translateY 10px→0).

## Interactions & comportement

| Élément | Comportement |
|---|---|
| Navigation | changement d'état interne + `window.scrollTo({top: 0})`. Aucun rechargement. À porter sur le routeur Next (`app/(public)/…`). |
| Menu « Plus » | ouverture au clic, fermeture à toute navigation |
| Sélecteur de langue | bascule `fr` ⇄ `hmn`, affiche le bandeau d'avertissement. **Aucune traduction n'est branchée.** |
| Confession de foi | accordéon, un seul article ouvert à la fois, chevron `+` / `−` |
| Sous-nav « Notre église » | liens d'ancre `#identite`, `#confession`, `#histoire`, `#anciens`, `#rattachements` |
| Prédications | recherche insensible à la casse sur titre + référence, filtres langue et année cumulatifs, compteur de résultats |
| Galerie | filtre par album, grille `auto-fill` `minmax(220px, 1fr)`, lignes de 200px, deux cellules en `span 2` |
| Espace pôles — connexion | factice : le clic sur « Se connecter » passe à l'état connecté sans aucune vérification. Le champ « Votre pôle » simule les droits du compte. **À remplacer par une vraie authentification ; les droits doivent venir du compte, pas d'un select.** |
| Espace pôles — droits | voir « Modèle de droits » ci-dessous |
| Carte de pôle verrouillée | contour pointillé, `opacity: .62`, cadenas, aucun bouton, mention « Accès non autorisé » |
| Ouvrir un pôle | passe à la vue intérieure du pôle ; lien « ← Tous les pôles » pour revenir |
| Formulaire de contact | `onSubmit` neutralisé, n'envoie rien |
| Survols | liens : `--pri` → `--sec`. Boutons pleins : `brightness(1.12)`. Boutons contour : inversion fond/texte. Lignes d'accordéon : fond `color-mix(in srgb, var(--acc) 12%, var(--card))`. |
| Transitions | .25s sur le fond de l'en-tête, .3s sur l'opacité du voile |

## État

| État | Valeurs | Rôle |
|---|---|---|
| `page` | `accueil` … `poles` | écran affiché — à remplacer par le routeur |
| `lang` | `fr` / `hmn` | langue — à remplacer par une vraie i18n (`next-intl` ou équivalent) |
| `palette`, `typo`, `btn` | `H`, `T5`, `2` | thème — à figer en production |
| `veil` | 0–80 (défaut 55) | opacité du voile — à figer à 55 |
| `panelOpen`, `more` | booléens | panneau de thème, menu « Plus » |
| `scrolled` | booléen | seuil de 40px pour le style d'en-tête |
| `foi` | index ou `null` | article de confession ouvert |
| `q`, `pLang`, `pYear` | chaînes | recherche et filtres prédications |
| `album` | chaîne | filtre galerie |
| `logged`, `user` | booléen, chaîne | session factice Espace pôles |
| `myPole` | nom de pôle (défaut `Conseil des anciens`) | pôle du compte connecté — détermine les droits. **À remplacer par le rôle réel du compte.** |
| `openPole` | nom de pôle ou `null` | `null` = tableau de bord, sinon vue intérieure du pôle |

**Données à brancher.** Prédications, photos, événements et pôles sont des tableaux en dur dans le composant, marqués comme exemples de démonstration. Ils décrivent la forme attendue de la donnée, pas son contenu. Un CMS léger ou des fichiers de contenu seraient adaptés — le pôle Communication doit pouvoir mettre à jour les sujets de prière et les événements sans intervention technique.

## Espace pôles — modèle de droits

Neuf pôles répartis en trois groupes : **Gouvernance** (Conseil des anciens) · **Sections & ministères** (les 6 du site) · **Transverse** (Communication, Trésorerie).

Les droits sont dérivés du pôle du compte (`myPole`) par une fonction unique, à porter côté serveur :

| Pôle du compte | Accès | Rôle affiché |
|---|---|---|
| Conseil des anciens | tous les pôles **sauf Trésorerie** | `Responsable` sur son pôle, `Supervision` ailleurs |
| Responsable de section | son propre pôle + Communication | `Responsable` / `Contributeur` |
| — | tout autre pôle | verrouillé, « Accès non autorisé » |

La Trésorerie est délibérément fermée à tous dans la maquette : elle sert de démonstration de l'état non autorisé. **Le vrai périmètre des droits est à arbitrer avec le conseil des anciens** — la règle ci-dessus est une hypothèse de travail, pas une décision client.

Le rôle est affiché en pastille sur chaque carte accessible et dans l'en-tête de la vue intérieure. Un bandeau doré rappelle en haut du tableau de bord le pôle connecté et la règle qui s'applique.

### Vue intérieure d'un pôle

En-tête (groupe en eyebrow, nom du pôle, pastille de rôle, description + nombre de membres), puis les blocs en grille `auto-fit` `minmax(300px, 1fr)`, gap 18px :

| Bloc | Portée | Contenu | Manque |
|---|---|---|---|
| Ce que ce pôle publie sur le site | Communication seulement, `grid-column: 1 / -1` | 5 responsabilités, chacune avec un lien vers la page publique concernée | outil de publication et circuit de validation |
| Annonces du pôle | tous | état vide + bouton « Rédiger une annonce » | circuit de validation avant publication |
| Documents | tous | 2 entrées de démonstration + lien Ouvrir | documents réels et espace de stockage |
| Membres | tous | nombre de membres | noms et niveau de droits de chacun |
| Prochaine réunion | tous | bloc doré | date et lieu |

Aucun de ces blocs n'est fonctionnel : la vue décrit la structure attendue, pas un back-office.

#### Le pôle Communication

C'est lui qui alimente le site, sans intervention technique. Son bloc de publication est conditionné par `hasTasks` (présence d'un tableau `tasks` sur le pôle) — aucun autre pôle ne le porte aujourd'hui, mais la structure est réutilisable.

| Responsabilité | Détail | Page alimentée |
|---|---|---|
| Prédications | vignette, lien de la vidéo, tag de langue, référence biblique | `predications` |
| Événements | événements datés et rendez-vous réguliers | `evenements` |
| Galerie | versement des photos et vidéos, classement par album | `galerie` |
| Sujets de prière | liste affichée en page d'accueil | `accueil` |
| Réseaux sociaux | relais des annonces du dimanche sur Facebook et YouTube | — |

**Conséquence pour l'implémentation** : ces quatre surfaces publiques doivent être éditables par une personne non technique. C'est l'argument principal en faveur d'un CMS léger ou de fichiers de contenu versionnés plutôt que de données en dur.

## Architecture des données — Convex

**Choix retenu : Convex** (base de données + stockage de fichiers + authentification), avec les écrans de saisie construits dans l'Espace pôles.

### Pourquoi

Le site a deux besoins, pas un : publier du contenu **et** un espace privé par pôle avec authentification et droits. Un CMS ne couvre que le premier — il faudrait alors deux systèmes à administrer. Convex couvre les deux d'un seul tenant et s'intègre proprement à Next.js.

Le critère qui écarte le contenu en dur : une prédication par semaine. En dur, cela suppose un développeur qui intervient chaque semaine ; en pratique le site cesse d'être à jour au bout de deux mois.

**Le prix à payer** : Convex ne fournit aucune interface d'édition. Son tableau de bord est un outil de développeur, pas quelque chose qu'on confie à un bénévole. Les formulaires de saisie sont à construire — c'est précisément ce que la coquille de l'Espace pôles décrit, et le brief le demande déjà, mais c'est du travail à chiffrer.

### Ce qui va en base, ce qui reste en dur

| Dynamique (alimenté par le pôle Communication) | En dur dans le code |
|---|---|
| `sermons` — titre, référence, date, langue, lien vidéo, vignette | les 11 articles de la confession de foi |
| `events` — événements datés et rendez-vous réguliers | la frise historique |
| `photos` — fichier, album, type (photo/vidéo) | les descriptions des 6 ministères |
| `prayerTopics` — liste affichée en page d'accueil | adresse, horaires, rattachements |
| `poles`, `members` — pôles, rattachements, droits | textes d'identité et de vision |

Les contenus qui changent tous les cinq ans n'ont rien à faire en base : les y mettre coûte du temps de configuration pour rien.

### Points de vigilance

**Redimensionnement des images.** Convex stocke les fichiers tels quels et rend une URL ; il ne génère aucune déclinaison. Les photos de la galerie arriveront en 4000 px et 5 à 10 Mo, pour des cases affichées entre 220 et 450 px. Sans traitement, une galerie de 30 photos fait télécharger plusieurs centaines de Mo pour montrer des vignettes. À régler avec `next/image` (redimensionnement à la volée et mise en cache) en autorisant le domaine Convex dans `next.config`.

**RGPD.** Noms des membres et sujets de prière confiés sont des données personnelles, certaines sensibles. Convex héberge aux États-Unis : à vérifier avant de s'engager. Dans tous les cas, un sujet de prière nominatif ne devrait pas être stocké en clair.

**Validation avant publication.** Qui relit ce que publie la Communication n'est pas tranché. À décider avant de construire les formulaires : un champ de statut (brouillon / publié) coûte peu maintenant et beaucoup plus tard.

**Hébergement.** Le coût de l'offre Convex et qui le prend en charge restent à arbitrer avec le conseil.

## Espacements

- Conteneur : `max-width: 1160px` (1240px pour en-tête et pied de page), padding latéral `clamp(20px, 5vw, 48px)`.
- Section : padding vertical `clamp(56px, 8vw, 104px)`.
- Bloc de section : padding `clamp(26px, 4vw, 48px)`.
- Carte : padding 28px (24–26px pour les cartes denses).
- Grilles de cartes : `repeat(auto-fit, minmax(280px, 1fr))`, gap 22px. Ministères : `minmax(320px, 1fr)`.
- Rayons : cartes et blocs 16px, sous-éléments 10–14px, vignettes rondes 999px.

## Responsive

Toutes les tailles passent par `clamp()` et toutes les grilles par `auto-fit` / `auto-fill` : la maquette est fluide sans média-query. Deux points à arbitrer à l'intégration :

1. **En-tête sous ~880px** : il repasse sur deux lignes. Une nav en tiroir (burger) est probablement préférable en mobile.
2. **Frise historique** : 5 colonnes `auto-fit` qui s'empilent. Vérifier que l'empilement reste lisible et que les points de la frise restent alignés.

Cibles de test : 375, 768, 1024, 1440, 1920.

## Accessibilité

Acquis dans la maquette, à préserver :
- Ratio 4,5:1 garanti sur toutes les surfaces pleines par la règle `--fill` / `--onPri`.
- Jamais de texte clair sur le doré : `--onAcc` est toujours `--txt`.
- Sélecteur de langue : `title` + `aria-label` explicites (le libellé visible est un sigle de 2 lettres).
- Boutons de lecture et icônes sociales : `aria-label` posés, `aria-hidden="true"` sur les SVG décoratifs.
- Cibles tactiles ≥ 44px sur les actions principales.

À faire à l'intégration : focus visible sur tous les interactifs, `lang` correct sur `<html>` et sur les fragments hmong, ordre de tabulation dans le menu « Plus », fermeture du dropdown à `Escape`.

## Assets

| Fichier | Origine | Notes |
|---|---|---|
| `hero-eglise.jpg` | photo fournie par le client, retouchée | 2040×924, 316 Ko, JPEG q86 |
| `eglise1.jpg` | original client non retouché | source de la précédente |

**Retouches appliquées au hero** : recadrage (retrait de deux tiers du gravier au premier plan et d'une partie du ciel vide, passage de 16:9 à 2,2:1), contraste +14 %, saturation +20 %, réchauffement des tons clairs (la façade était gris-blanc terne), remontée légère des ombres dans les arbres, agrandissement ×1.5 pour l'affichage plein écran.

**Réserve photo** : la prise de vue est en contre-plongée depuis le parking, l'entrée est petite dans le cadre. Une photo plus proche, en fin de journée, avec des personnes devant, servirait mieux un hero « Maison commune ».

**Aucun autre asset n'est fourni.** Toutes les autres images sont des cadres pointillés étiquetés. Les icônes sont des SVG inline dessinés à la main (stroke 1.6–1.8, `stroke-linecap: round`) — à remplacer par la bibliothèque d'icônes du projet.

## Fichiers du bundle

| Fichier | Contenu |
|---|---|
| `Site EPEHMIF.dc.html` | la maquette complète : 9 écrans, thème commutable, panneau de validation |
| `captures/` | captures d'écran des pages, série 1440px (`*-p.png`). **Incomplète** : ne couvre pas les écrans Espace pôles dans leur version actuelle, à recapturer. |
| `hero-eglise.jpg` | photo du hero, retouchée, prête à l'emploi |
| `brief-client.md` | brief d'origine (DA, 9 pages, curseurs de thème, contenus manquants) |

## ⚠️ Blocages — informations client manquantes

Chacun de ces trous est marqué `[À FOURNIR : …]` **à son emplacement exact** dans la maquette. Ne rien inventer : un texte réaliste mais faux passe la relecture interne et explose à la livraison.

| Manque | Bloque | Emplacement |
|---|---|---|
| Traduction hmong de l'ensemble des contenus | tout le volet bilingue, qui est la raison d'être du site | bandeau de langue, tous les textes |
| Nom et présentation du pasteur actuel | section Conseil des anciens | Notre église → Conseil des anciens |
| Noms des anciens (6 vignettes prévues) | section Conseil des anciens | idem |
| Noms des 6 responsables de section | pied de chaque fiche ministère | Ministères |
| Téléphone et email à jour | pied de page, page Contact | ceux d'Olivier Lo sont périmés |
| Texte intégral des 11 articles de la confession de foi | accordéon entier, intitulés compris | Notre église → Confession de foi |
| Archive réelle des prédications | page Prédications | 6 exemples de démonstration en place |
| Photos et vidéos de la communauté | Galerie, cartes de messages, section Identité | cadres pointillés en place |
| Décision sur la page Dons | page Dons — 4 questions listées dans la maquette | aucun formulaire posé volontairement |
| Transition EELF → EPEHMIF et date d'installation à Saint-Vrain | fin de la frise historique | Notre église → Histoire |
| Logo définitif | en-tête public, en-tête Espace pôles, pied de page | carré grenat avec « E » en placeholder |
| Liens réseaux sociaux | pied de page | Facebook et YouTube pointent dans le vide |
| Sujets de prière réels | accueil, 4ᵉ ligne de la liste | à alimenter par le pôle Communication |
| Calendrier réel des événements | page Événements | 2 exemples de démonstration en place |
| Adresse de réception du formulaire + mention RGPD | page Contact | le formulaire n'envoie rien |
| Choix du système d'authentification | Espace pôles | connexion factice, aucun mot de passe vérifié |
| Qui valide ce que publie la Communication avant mise en ligne | Espace pôles → Communication | conditionne le champ de statut du schéma |
| Vérification RGPD de l'hébergement Convex (données de membres, sujets de prière) | Architecture des données | bloque le stockage de données nominatives |
| Prise en charge du coût d'hébergement Convex | Architecture des données | à arbitrer avec le conseil |
| Périmètre réel des droits par pôle | Espace pôles — modèle de droits | règle actuelle = hypothèse de travail |
| Intitulés officiels complets et liens des 4 rattachements | Notre église → Rattachements | sigles seuls posés |

## Dépôt source

`JScodeLY/eglisev1`, branche `main`, sous-dossier `epehmif/`. Voir `github.md` à la racine du projet pour la carte des écrans et le dernier point de synchronisation. Le dépôt est encore le starter `create-next-app` : rien n'a été construit dessus, la maquette est le point de départ.
