import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="py-20 bg-background">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16 fade-in-up">
          <h2 class="text-4xl font-bold text-primary mb-4">Projets & Réalisations</h2>
          <p class="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez mes réalisations techniques en développement
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            *ngFor="let project of projects; let i = index"
            class="card card-hover group fade-in-up h-full flex flex-col"
            [style.animation-delay]="(i * 0.1) + 's'"
          >
            <div class="card-header pb-4">
              <div class="w-full h-48 bg-gray-light rounded-lg mb-4 overflow-hidden" role="img" [attr.aria-label]="'Capture d écran du projet ' + project.title">
                <img 
                  [src]="'assets/' + project.image"
                  [alt]="'Interface du projet ' + project.title + ' montrant les principales fonctionnalités'"
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <h3 class="card-title text-xl text-primary group-hover:text-primary-light transition-colors duration-300">{{ project.title }}</h3>
              
              <!-- Métriques du projet -->
              <div class="flex flex-wrap gap-2 mt-3">
                <span class="badge badge-secondary text-xs">
                  ⚡ {{ project.metrics.performance }}
                </span>
                <span class="badge badge-secondary text-xs">
                  🎯 {{ project.metrics.uptime }}
                </span>
                <span class="badge badge-secondary text-xs">
                  ⚡ {{ project.metrics.responseTime }}
                </span>
              </div>
            </div>
            
            <div class="card-content space-y-4 flex-1 flex flex-col">
              <!-- Description avec hauteur limitée -->
              <p class="text-muted-foreground leading-relaxed text-sm">
                {{ project.description }}
              </p>
              
              <!-- Technologies -->
              <div class="flex flex-wrap gap-2">
                <span 
                  *ngFor="let tech of project.technologies; let techIndex = index"
                  class="badge badge-secondary text-xs"
                >
                  {{ tech }}
                </span>
              </div>
              
              <!-- Section flex qui pousse les boutons vers le bas -->
              <div class="flex-1 space-y-3">
                <!-- Impact Business -->
                <div class="bg-primary/5 rounded-lg p-3">
                  <h4 class="font-semibold text-primary text-xs mb-2">Impact Business</h4>
                  <ul class="text-xs text-muted-foreground space-y-1">
                    <li *ngFor="let impact of project.impacts.slice(0, 2)" class="flex items-center gap-2">
                      <span class="w-1 h-1 bg-primary rounded-full"></span>
                      {{ impact }}
                    </li>
                  </ul>
                </div>
                
                <!-- Défis Techniques -->
                <div class="bg-secondary/50 rounded-lg p-3">
                  <h4 class="font-semibold text-primary text-xs mb-2">Défis Techniques</h4>
                  <ul class="text-xs text-muted-foreground space-y-1">
                    <li *ngFor="let challenge of project.challenges.slice(0, 2)" class="flex items-center gap-2">
                      <span class="w-1 h-1 bg-primary rounded-full"></span>
                      {{ challenge }}
                    </li>
                  </ul>
                </div>
              </div>
              
              <div class="flex justify-center pt-4 mt-auto">
                <a 
                  [href]="project.github" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="btn btn-outline btn-sm flex items-center gap-2 group/info hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-300"
                  [attr.aria-label]="'Plus d informations sur ' + project.title"
                >
                  <svg class="w-4 h-4 group-hover/info:scale-110 group-hover/info:rotate-12 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span class="group-hover/info:translate-x-1 transition-transform duration-300">Détails</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .fade-in-up {
      animation: fadeInUp 0.6s ease-out forwards;
      opacity: 0;
    }
    
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .line-clamp-6 {
      display: -webkit-box;
      -webkit-line-clamp: 6;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  `]
})
export class ProjectsComponent {
  projects = [
    {
      title: "MobiAid - Application iOS PMR",
      description: "Application iOS dédiée à aider les Personnes à Mobilité Réduite (PMR) dans les transports. Utilise la géolocalisation via Swift, des API sécurisées en Nest.js et MongoDB pour connecter instantanément utilisateurs et volontaires.",
      technologies: ["Swift", "Nest.js", "MongoDB", "iOS", "Géolocalisation"],
      github: "https://github.com/Abdellah0602/MobiAid/tree/main/nestjs-mongodb-crud",
      image: "logo_mobiaid.png",
      metrics: {
        performance: "Application Mobile",
        uptime: "100%",
        responseTime: "Temps réel"
      },
      impacts: [
        "Aide aux PMR dans les transports",
        "Connexion instantanée utilisateurs-volontaires",
        "Favorise l'autonomie et l'inclusion"
      ],
      challenges: [
        "Développement iOS avec Swift",
        "API sécurisées en Nest.js",
        "Gestion de la géolocalisation temps réel"
      ]
    },
    {
      title: "Webnovel Scraper - Algorithme d'extraction de romans",
      description: "Passionné de webnovels et lecteur sur Kindle, j’ai développé ce script Python pour extraire automatiquement les chapitres depuis plusieurs plateformes. Il utilise BeautifulSoup et requests pour gérer le scraping, les cookies, la pagination, et permet d’éditer/exporter les contenus dans des formats lisibles sur liseuse.",
      technologies: ["Python", "BeautifulSoup", "Requests", "Scraping", "Automatisation"],
      github: "https://github.com/Abdellah0602/webnovel_scraper",
      image: "logo_webnovel_scraper.png",
      metrics: {
        performance: "Extraction rapide",
        uptime: "À la demande",
        responseTime: "Quelques secondes par chapitre"
      },
      impacts: [
        "Automatise la collecte de chapitres de webnovels",
        "Facilite la lecture hors-ligne",
        "Gain de temps pour les utilisateurs"
      ],
      challenges: [
        "Gestion des protections anti-scraping",
        "Adaptation aux changements de structure des sites",
        "Export propre et structuré des données"
      ]
    },
    {
      title: "Eisserah – Boutique Shopify de mode modeste",
      description: "J’ai développé un projet sur Shopify pour une marque de ‘modest fashion’ que j’ai réalisé et mis en ligne moi‑même. Le site propose des collections de vêtements discrets et élégants, optimisé pour une expérience fluide et sécurisée.",
      technologies: ["Shopify", "Liquid", "HTML", "CSS", "JavaScript", "Responsive Design"],
      github: "https://eisserah.com",
      image: "logo_eisserah.png",
      metrics: {
        performance: "Chargement rapide des collections",
        uptime: "24/7 (hébergé sur Shopify)",
        responseTime: "Navigations fluides entre les pages produits"
      },
      impacts: [
        "Mise en ligne d’une boutique complète sur Shopify",
        "Offre de vêtements adaptés à une clientèle ciblée (modest fashion)",
        "Amélioration de l’expérience utilisateur (filtres, responsive, paiement sécurisé)"
      ],
      challenges: [
        "Adaptation du thème Shopify aux besoins de la marque",
        "Gestion des collections, filtres produits et responsive design",
        "Mise en place de l’UX client (navigation, panier, expédition, checkout)"
      ]
  }
  ];
}