# Brief client — Site EPEHMIF

## Le client

EPEHMIF, église protestante évangélique. Communauté vivante, organisée en pôles (communication, école du dimanche, conseil des anciens, et d'autres à venir).

> ⚠️ À compléter : nom complet de l'église, ville, adresse, horaires des cultes, coordonnées de contact, liens réseaux sociaux existants.

## Objectifs du site

1. **Accueillir le visiteur de passage** : quelqu'un qui découvre l'église via une recherche Google ou une invitation doit comprendre en moins de 30 secondes qui nous sommes, quand ont lieu les cultes et comment venir.
2. **Retenir le visiteur** : design moderne et impactant, qui casse l'image datée des sites d'églises. Le visiteur doit avoir envie d'explorer, pas de fermer l'onglet.
3. **Nourrir la communauté existante** : accès facile aux prédications (audio/vidéo), aux actualités et aux événements.
4. **Servir l'organisation interne** : un espace authentifié où chaque pôle gère son profil et ses contenus.

## Audience

- **Primaire** : visiteurs qui découvrent l'église (recherche locale, bouche-à-oreille, invitations) — tous âges, pas forcément familiers du vocabulaire d'église.
- **Secondaire** : membres de la communauté qui reviennent régulièrement (prédications, agenda, infos des pôles).
- **Interne** : responsables de pôles (espace authentifié).

## Tonalité

Chaleureuse et accueillante, sans jargon religieux qui exclurait le nouveau venu. Moderne et assumée dans la forme, fidèle et sérieuse dans le fond. Tutoiement ou vouvoiement : **vouvoiement** pour les pages publiques (à confirmer). Éviter absolument : le ton solennel-poussiéreux et les photos clipart génériques.

## Pages souhaitées

1. **Accueil** — hero fort, horaires et lieu du culte immédiatement visibles, invitation claire à venir, aperçu des dernières prédications et des prochains événements.
2. **Qui sommes-nous** (ou « Notre église ») — histoire, vision, valeurs, équipe pastorale, confession de foi.
3. **Nos ministères** — présentation des pôles et ministères (école du dimanche, louange, jeunesse, etc.), avec pour chacun sa mission et son contact.
4. **Prédications** — archive consultable (filtres par date, orateur, série), lecteur audio/vidéo intégré.
5. **Galerie** — photos et éventuellement vidéos de la vie de l'église, classées par événement.
6. **Contact** — formulaire, carte, adresse, horaires, réseaux sociaux.
7. **Espace pôles** (authentifié) — connexion réservée aux responsables ; chaque pôle (communication, école du dimanche, conseil des anciens…) dispose d'un profil et gère ses contenus.

## Contraintes

- Site **en français** (`lang="fr"`).
- Mobile-first : la majorité des visiteurs arriveront depuis un téléphone.
- Accessibilité WCAG 2.1 AA (public de tous âges).
- Stack imposée par le projet : Next.js 16 / Tailwind v4 (voir CLAUDE.md).
- L'espace authentifié est **hors périmètre de la v1 du contenu public** : content-agent doit prévoir sa place dans l'architecture (lien de connexion discret), mais la conception détaillée de l'espace pôles fera l'objet d'une itération dédiée.
- Photos réelles de la communauté à privilégier dès qu'elles seront disponibles ; en attendant, prévoir des placeholders explicites.

> ⚠️ À compléter avant de lancer content-agent : les éléments marqués ci-dessus (identité complète, horaires, adresse), et toute préférence de couleur ou d'identité visuelle existante (logo ?).
