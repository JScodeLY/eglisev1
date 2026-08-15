# Brief client — Site EPEHMIF

Site de l'Église Protestante Évangélique Hmong d'Île-de-France (EPEHMIF),
32 avenue Charles René de Mortemart, 91770 Saint-Vrain.
Direction artistique "Maison commune" — chaleureux, communautaire, accueillant.
Site bilingue hmong/français.

## Thème par défaut

Palette H · Bordeaux & ivoire : fond #FAF6F1 · primaire #7A2233 · accent #C9A96A
· secondaire #B4757F · texte #2B1A1D
Typo T5 : Lora 600 (titres) / Work Sans 400-600 (corps)
Boutons : coins doux, rayon 10px — primaire plein grenat, secondaire contour 1.5px
Cartes : rayon 16px, bordure fine #EDE3DA, fond #FFFDFA
Règles : le grenat porte les actions et les titres ; le doré structure les zones
d'information. Jamais de texte clair sur le doré — toujours du texte foncé.

## 9 pages

1. **ACCUEIL** — hero immersif plein écran (image/vidéo, voile sombre 55%, nav
   transparente, eyebrow doré, titre "Une famille de foi, en hmong et en français",
   2 CTA "Venez un dimanche" / "Voir les horaires", lien vidéo, indice de défilement).
   Puis : "Par où commencer" (3 cartes, icône À CÔTÉ du titre) · "Le dimanche chez
   nous" (2 blocs dorés : culte 10h00-11h45 bilingue + école du dimanche/garderie ;
   études en groupes 13h30-15h30) · Messages (2 cartes) · Sujets de prière ·
   appel final sur fond grenat.
2. **NOTRE ÉGLISE** — sous-nav ancrée : Identité · Confession de foi (11 articles en
   liste dépliable) · Histoire (frise 1976-1979-1992-2002-aujourd'hui) · Conseil des
   anciens (pasteur en grand + anciens en vignettes rondes) · Rattachements
   (FECMIM, AECMF, CNEF, C&MA Hmong District).
3. **MINISTÈRES** — 6 fiches : Section Hommes, Femmes, Jeunes, École du dimanche,
   Chant & musique, Cours de hmong. CHAQUE fiche affiche son responsable en pied
   (vignette ronde + nom + rôle, séparé par un filet). Bandeau doré "Préparation
   au baptême — 4 sessions d'octobre à février".
4. **PRÉDICATIONS** — recherche + filtres (langue, année), liste de messages avec
   bouton lecture et tag de langue.
5. **GALERIE** — grille photos/vidéos, filtres par album.
6. **ÉVÉNEMENTS** — rendez-vous réguliers (culte, études, baptême) + événements datés.
7. **DONS** — page en attente de cadrage (encadré pointillé, pas de formulaire).
8. **CONTACT** — formulaire + bloc doré (adresse, horaires) + carte.
9. **ESPACE PÔLES** — en-tête foncé, pas de nav publique. Connexion puis tableau de
   bord groupé : Gouvernance (Conseil des anciens) · Sections & ministères
   (les 6 ci-dessus) · Transverse (Communication). Carte en pointillés grisée
   pour un espace non autorisé.

## Pied de page

Toutes pages publiques — 4 colonnes sur fond #2B1A1D :
présentation + réseaux · navigation · horaires et adresse · contact + rattachements.
Barre basse : mentions légales + accès discret "Espace pôles" en doré.
Espace pôles : pied de page réduit d'une seule ligne.

## Curseurs commutables (variables de thème)

### 9 palettes (fond / primaire / accent / secondaire / texte)

| Id | Nom | bg | pri | acc | sec | txt |
|---|---|---|---|---|---|---|
| A | Terracotta | #FBF6EF | #C0562F | #E8A54B | #6E7B4E | #3A2E28 |
| B | Miel & sauge | #FAF7F0 | #B98432 | #DFC48A | #7D9182 | #38352E |
| C | Brique & bleu | #FBF5EE | #A8452C | #E9B04A | #3E5C6B | #2E2822 |
| D | Forêt & lin | #F5F2E9 | #2F5D45 | #C9A227 | #7FA08A | #22302A |
| E | Nuit & cuivre | #F4F1EC | #1F3A5F | #C87941 | #7E93AC | #141F30 |
| F | Prune & poudre | #F8F4F4 | #5B3A55 | #D99BA0 | #A98BA3 | #2E1F2C |
| G | Océan & sable | #F2F7F6 | #1B6B6B | #E3C08A | #6FA9A4 | #12332F |
| H | Bordeaux & ivoire ← défaut | #FAF6F1 | #7A2233 | #C9A96A | #B4757F | #2B1A1D |
| I | Ardoise & abricot | #F4F5F6 | #37424D | #F08A4B | #8C99A6 | #1D242B |

### 6 duos typo (titres / corps)

T1 Fraunces 600 / Nunito Sans · T2 Playfair Display 600 / Source Sans 3
T3 DM Serif Display / DM Sans · T4 Outfit 600 / Karla
T5 Lora 600 / Work Sans ← défaut · T6 Bricolage Grotesque 700 / Public Sans

### 4 styles de bouton

1 pilule · 2 coins doux 10px ← défaut · 3 relief (ombre portée nette) · 4 neutre foncé

Mets couleurs, rayons et typo en variables de thème, avec un sélecteur permettant
de basculer palette / typo / boutons indépendamment, sans toucher la mise en page.
Corps de texte minimum 16px, interligne 1.6.

## Contenu à compléter (marquer visiblement)

Nom et présentation du pasteur actuel (d'origine ivoirienne) · téléphone et email
à jour (ceux d'Olivier Lo sont périmés) · noms des anciens · noms des responsables
de section · texte intégral des 11 articles de la confession de foi · archive des
prédications · photos/vidéos · décision sur la page Dons · transition EELF→EPEHMIF
et installation à Saint-Vrain.

## Arbitrages validés en cours de projet

- Ordre de construction : les 8 pages publiques d'abord, Espace pôles ensuite.
- Bilingue : français rédigé + sélecteur de langue, textes hmong marqués [À FOURNIR].
- Photos : zones en pointillés étiquetées « photo à fournir ».
- Prédications / galerie / événements : exemples fictifs clairement marqués.
- Sélecteur de thème : panneau discret interne, à retirer à la livraison.
- Espace pôles : écran de connexion factice puis tableau de bord cliquable.
- Usage de la maquette : base de départ pour une intégration par un développeur.
