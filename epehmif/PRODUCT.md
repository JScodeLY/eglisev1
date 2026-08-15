# Product

## Register

brand

Note: the public site (8 pages) is brand register — design IS the product, a marketing/community vitrine. `/espace-poles` is a distinct product-register sub-app (auth, dashboard, per-role data) nested under the same codebase; treat it with `reference/product.md` rules when working specifically inside that route.

## Users

- **Primaire** : visiteurs de passage qui découvrent l'église via une recherche Google, une invitation, ou le bouche-à-oreille. Tous âges, pas forcément familiers du vocabulaire religieux. Contexte : sur mobile, en train de décider s'ils viennent un dimanche.
- **Secondaire** : membres de la communauté qui reviennent régulièrement pour les prédications, l'agenda, les infos des pôles.
- **Interne** : responsables de pôles (communication, école du dimanche, conseil des anciens…) qui gèrent leur profil et leurs contenus via l'espace authentifié.

## Product Purpose

Un site vitrine pour l'EPEHMIF (Église Protestante Évangélique Hmong d'Île-de-France, Saint-Vrain). Quatre objectifs, dans l'ordre de priorité :

1. Accueillir le visiteur de passage : en moins de 30 secondes, il doit comprendre qui est l'église, quand ont lieu les cultes et comment venir.
2. Le retenir : design moderne et impactant qui casse l'image datée des sites d'églises, donne envie d'explorer plutôt que de fermer l'onglet.
3. Nourrir la communauté existante : accès facile aux prédications (audio/vidéo), aux actualités, aux événements.
4. Servir l'organisation interne : un espace authentifié où chaque pôle gère son profil et ses contenus, alimentant les pages publiques (le pôle Communication en particulier).

Succès = un visiteur qui vient un dimanche après avoir consulté le site, et une communauté dont le contenu (prédications, événements, galerie, sujets de prière) reste à jour sans intervention technique hebdomadaire.

## Brand Personality

Direction artistique « Maison commune » — chaleureuse, communautaire, accueillante. Moderne et assumée dans la forme, fidèle et sérieuse dans le fond. Sans jargon religieux qui exclurait le nouveau venu. Vouvoiement sur les pages publiques.

## Anti-references

- Le site d'église « solennel-poussiéreux » : mise en page datée, tons ternes, ton institutionnel froid.
- Les photos clipart génériques ou stock non représentatives de la vraie communauté.
- Le template SaaS-cream générique (fond crème/sable par défaut, eyebrows sur chaque section, cartes identiques) — voir les bans du skill impeccable.

## Design Principles

1. **Trois portes d'entrée, pas une seule** : le visiteur, le membre régulier et le responsable de pôle ont des besoins différents ; chaque page sert un objectif précis du brief, sans redondance.
2. **Ne jamais inventer le contenu client** : tout ce qui manque (noms, horaires, textes, photos) reste marqué `[À FOURNIR]`, jamais un texte plausible mais faux.
3. **Le grenat porte l'action, le doré structure l'information** — règle de couleur héritée du handoff design, à respecter dans tout composant.
4. **Mobile-first sans routeur de rupture** : la majorité des visiteurs arrivent depuis un téléphone ; le responsive doit rester fluide (clamp/auto-fit) plutôt que basé sur des breakpoints figés.
5. **Bilingue par construction, pas par rustine** : la structure (sélecteur de langue, bandeau hmong) existe dès maintenant même si le contenu hmong n'est pas encore fourni.

## Accessibility & Inclusion

WCAG 2.1 AA (public de tous âges, y compris peu familier du numérique). Mobile-first. Contraste garanti par la règle `--fill`/`--onPri` sur les surfaces pleines ; jamais de texte clair sur le doré. Cibles tactiles ≥ 44px. Bilingue français/hmong prévu structurellement (sélecteur de langue, bandeau d'avertissement), contenu hmong en attente côté client.
