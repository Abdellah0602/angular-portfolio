# Abdellah ABDEDOU Portfolio - Angular Version

Version Angular de mon portfolio de développeur back-end, créée avec Angular 17 et Tailwind CSS.

## 🚀 Technologies utilisées

- **Angular 17** - Framework front-end
- **TypeScript** - Langage de programmation
- **Tailwind CSS** - Framework CSS utilitaire
- **Lucide Angular** - Icônes
- **Angular Forms** - Gestion des formulaires

## 📁 Structure du projet

```
angular-portfolio/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── navigation/
│   │   │   ├── hero/
│   │   │   ├── about/
│   │   │   ├── projects/
│   │   │   ├── skills/
│   │   │   ├── contact/
│   │   │   └── footer/
│   │   ├── pages/
│   │   │   └── home/
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   ├── styles.css
│   ├── main.ts
│   └── index.html
├── package.json
├── angular.json
├── tailwind.config.js
└── tsconfig.json
```

## 🛠️ Installation et lancement

### Prérequis
- Node.js (version 18 ou supérieure)
- npm ou yarn

### Installation
```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm start

# Construire pour la production
npm run build
```

### Commandes disponibles

- `npm start` - Lance le serveur de développement sur http://localhost:4200
- `npm run build` - Construit l'application pour la production
- `npm run watch` - Construit l'application en mode watch
- `npm test` - Lance les tests

## 🎨 Design System

L'application utilise un système de design cohérent avec :
- Variables CSS HSL pour les couleurs
- Gradients personnalisés
- Ombres et bordures standardisées
- Composants réutilisables

## 📱 Responsive Design

L'application est entièrement responsive avec :
- Design mobile-first
- Breakpoints Tailwind CSS
- Navigation mobile avec menu hamburger
- Images et grilles adaptatives

## 🔧 Fonctionnalités

- **Navigation fluide** - Scroll smooth entre les sections
- **Formulaire de contact** - Validation et soumission
- **Design responsive** - Adaptation mobile/desktop
- **Animations CSS** - Transitions et hover effects
- **SEO optimisé** - Meta tags et structure sémantique

## 📄 Sections

1. **Hero** - Présentation principale avec call-to-action
2. **À propos** - Parcours et expertise
3. **Projets** - Réalisations techniques
4. **Compétences** - Technologies et méthodologies
5. **Contact** - Formulaire et informations de contact
6. **Footer** - Liens et informations complémentaires

## 🚀 Déploiement

L'application peut être déployée sur :
- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

## 📝 Notes de développement

Cette version Angular est une réplique fidèle de la version React, avec :
- Même design et contenu
- Même fonctionnalités
- Même structure de composants
- Adaptations spécifiques à Angular (decorators, templates, etc.)

## 🤝 Contribution

Pour contribuer au projet :
1. Fork le repository
2. Créer une branche feature
3. Commiter les changements
4. Pousser vers la branche
5. Créer une Pull Request 