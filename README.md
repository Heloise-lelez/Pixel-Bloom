# Pixel Blooming - Agence Web

## Description du projet

Pixel Blooming est le site web de notre agence web dédiée à la création de solutions numériques innovantes. Le site présente notre agence, nos projets réalisés et permet aux utilisateurs de nous contacter directement. Le design de l'interface est épuré et moderne, et nous avons mis l'accent sur l'accessibilité, l'optimisation des performances et une expérience utilisateur fluide.

### Pages principales :

- **Page d'accueil** : Introduction de l'agence, de notre philosophie et de nos valeurs.
- **Liste de nos projets** : Présentation de quelques projets marquants de l'agence.
- **Pages de projet** : Présentation détaillée de chacun de nos projets.

- **Page de contact** : Formulaire permettant aux utilisateurs de nous envoyer un message.

## Instructions d'installation et de lancement

### Prérequis

- Node.js (version 16.x ou supérieure)
- npm ou yarn
- Vercel pour le déploiement

### Étapes d'installation

1. Clonez le repository du projet :
   ```bash
   git clone https://github.com/username/pixel-blooming.git
   cd pixel-blooming
   ```

### Installez les dépendances :

`npm install`

ou, si vous utilisez yarn :

`yarn install`

Configurez votre base de données avec Prisma. Créez un fichier .env à la racine du projet avec vos informations de connexion à la base de données.

Mettez à jour le schéma Prisma et effectuez la migration de la base de données :

`npx prisma migrate dev`

Lancer le serveur de développement :

    npm run dev

Le site sera accessible à http://localhost:3000.

### Technologies utilisées

- **Next.js** : Framework React pour le rendu côté serveur (SSR) et la génération de sites statiques.

- **TypeScript** : Langage de programmation pour une meilleure gestion des types et une expérience de développement optimisée.

- **Prisma** : ORM (Object-Relational Mapping) pour interagir avec la base de données de manière sécurisée et efficace.

- **Vercel** : Plateforme de déploiement utilisée pour héberger et déployer le site web de manière rapide et performante.

### Fonctionnalités implémentées

**- Landing page :**
Présentation de l'agence : nom, logo, slogan, valeurs, équipe.
Bouton pour contacter l'agence
Design soigné et attractif.

**- Page "Projets" :**
Liste des projets réalisés par l'agence (avec images, descriptions et liens vers les pages individuelles des projets).
Possibilité de filtrer les projets par catégorie ou technologie.

**- Pages individuelles des projets :**
Description détaillée de chaque projet : contexte, objectifs, technologies utilisées, résultats.
Images et/ou vidéos du projet.

**- Formulaire de contact :**
Champs : nom, email, message.
Validation des données côté client et serveur.
Sauvegarde des données en base de données avec Prisma.

### Choix de conception et justification de l'utilisation des RSC (React Server Components)

Nous avons opté pour l'utilisation des React Server Components (RSC) pour plusieurs raisons :

**Performance améliorée** : Le rendu côté serveur des composants nous permet de réduire le temps de chargement des pages et d'optimiser l'affichage initial. Les RSC nous permettent également de charger uniquement les données nécessaires, ce qui réduit la taille des bundles envoyés au client.

**Expérience utilisateur fluide**: En séparant les composants de rendu serveur et client, nous avons pu isoler certaines parties de l'interface et garantir que seules les sections dynamiques de la page nécessitent un rendu côté client, ce qui optimise les performances.

**Facilité de gestion des données** : Les RSC nous permettent de charger les données côté serveur de manière efficace et d'envoyer uniquement les informations nécessaires au client, ce qui réduit les appels API inutiles et améliore la réactivité du site.

## Rapport de performance

Nous avons optimisé le site pour offrir une expérience rapide et fluide :

Lighthouse score : Le site atteint un score de performance de 95/100 sur mobile et 100/100 sur bureau dans les tests de performance Lighthouse.

**Page d'accueil** : https://pagespeed.web.dev/analysis/https-pixel-bloom-sable-vercel-app/9ohq65ggee?form_factor=desktop

**Page des projets** : https://pagespeed.web.dev/analysis/https-pixel-bloom-sable-vercel-app-projects/2j69qlgfyn?form_factor=desktop

**Page d'un projet** : https://pagespeed.web.dev/analysis/https-pixel-bloom-sable-vercel-app-projects-1/9fd9rgjlcg?form_factor=desktop

**Page de présentation de l'agence** : https://pagespeed.web.dev/analysis/https-pixel-bloom-sable-vercel-app-agency/7wbm2c47i5?form_factor=desktop

**Page de contact** : https://pagespeed.web.dev/analysis/https-pixel-bloom-sable-vercel-app-agency/7wbm2c47i5?form_factor=desktop

##
