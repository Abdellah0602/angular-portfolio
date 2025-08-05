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
            class="card card-hover group fade-in-up"
            [style.animation-delay]="(i * 0.1) + 's'"
          >
            <div class="card-header pb-4">
              <div class="w-full h-48 bg-gray-light rounded-lg mb-4 overflow-hidden">
                <img 
                  [src]="'assets/' + project.image"
                  [alt]="project.title"
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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
            
            <div class="card-content space-y-4">
              <p class="text-muted-foreground leading-relaxed">
                {{ project.description }}
              </p>
              
              <!-- Impact Business -->
              <div class="bg-primary/5 rounded-lg p-3">
                <h4 class="font-semibold text-primary text-sm mb-2">Impact Business</h4>
                <ul class="text-xs text-muted-foreground space-y-1">
                  <li *ngFor="let impact of project.impacts" class="flex items-center gap-2">
                    <span class="w-1 h-1 bg-primary rounded-full"></span>
                    {{ impact }}
                  </li>
                </ul>
              </div>
              
              <!-- Défis Techniques -->
              <div class="bg-secondary/50 rounded-lg p-3">
                <h4 class="font-semibold text-primary text-sm mb-2">Défis Techniques</h4>
                <ul class="text-xs text-muted-foreground space-y-1">
                  <li *ngFor="let challenge of project.challenges" class="flex items-center gap-2">
                    <span class="w-1 h-1 bg-primary rounded-full"></span>
                    {{ challenge }}
                  </li>
                </ul>
              </div>
              
              <div class="flex flex-wrap gap-2">
                <span 
                  *ngFor="let tech of project.technologies; let techIndex = index"
                  class="badge badge-secondary"
                >
                  {{ tech }}
                </span>
              </div>
              
              <div class="flex gap-3 pt-4">
                <a 
                  [href]="project.github" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="btn btn-outline btn-sm flex items-center gap-2 group/link"
                >
                  <svg class="w-4 h-4 group-hover/link:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span class="group-hover/link:translate-x-1 transition-transform duration-300">Code</span>
                </a>
                <a 
                  [href]="project.github" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="btn btn-default btn-sm flex items-center gap-2 group/link"
                >
                  <svg class="w-4 h-4 group-hover/link:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                  <span class="group-hover/link:translate-x-1 transition-transform duration-300">Détails</span>
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
  `]
})
export class ProjectsComponent {
  projects = [
    {
      title: "MobiAid - Application iOS PMR",
      description: "Application iOS dédiée à aider les Personnes à Mobilité Réduite (PMR) dans les transports. Utilise la géolocalisation via Swift, des API sécurisées en Nest.js et MongoDB pour connecter instantanément utilisateurs et volontaires.",
      technologies: ["Swift", "Nest.js", "MongoDB", "iOS", "Géolocalisation"],
      github: "#",
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
    }
  ];
}