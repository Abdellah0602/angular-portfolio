import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="py-20 bg-section-gradient">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16 fade-in-up">
          <h2 class="text-4xl font-bold text-primary mb-4">À propos</h2>
          <p class="text-xl text-muted-foreground max-w-2xl mx-auto">
            Développeur back-end passionné par l'architecture logicielle et les bonnes pratiques
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <!-- Informations personnelles -->
          <div class="space-y-8 fade-in-up" style="animation-delay: 0.2s;">
            <div class="card card-hover">
              <div class="card-content">
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-primary">Formation</h4>
                    <p class="text-muted-foreground">Master Architecte de Systèmes d'information - ETNA</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="card card-hover">
              <div class="card-content">
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-primary">Expérience</h4>
                    <p class="text-muted-foreground">2+ années en développement back-end</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="card card-hover">
              <div class="card-content">
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-primary">Disponibilité</h4>
                    <p class="text-muted-foreground">Disponible pour de nouvelles opportunités</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="card card-hover">
              <div class="card-content">
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-primary">Objectif</h4>
                    <p class="text-muted-foreground">Apporter une valeur ajoutée aux projets ambitieux et complexes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Expérience professionnelle -->
          <div class="space-y-8 fade-in-up" style="animation-delay: 0.4s;">
            <h3 class="text-2xl font-bold text-primary mb-6">Expérience Professionnelle</h3>
            
            <div class="space-y-6">
              <div 
                *ngFor="let experience of experiences; let i = index"
                class="card card-hover group"
                [style.animation-delay]="(i * 0.1) + 's'"
              >
                <div class="card-content">
                  <div class="flex justify-between items-start mb-3">
                    <div>
                      <h4 class="font-semibold text-primary group-hover:text-primary-light transition-colors duration-300">
                        {{ experience.title }}
                      </h4>
                      <p class="text-sm text-muted-foreground">{{ experience.company }}</p>
                    </div>
                    <div class="text-right">
                      <span class="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {{ experience.duration }}
                      </span>
                    </div>
                  </div>
                  
                  <p class="text-muted-foreground text-sm mb-3">{{ experience.description }}</p>
                  
                  <!-- Réalisations clés -->
                  <div class="space-y-2">
                    <h5 class="font-medium text-primary text-sm">Réalisations clés :</h5>
                    <ul class="text-xs text-muted-foreground space-y-1">
                      <li *ngFor="let achievement of experience.achievements" class="flex items-center gap-2">
                        <span class="w-1 h-1 bg-primary rounded-full"></span>
                        {{ achievement }}
                      </li>
                    </ul>
                  </div>
                  
                  <!-- Technologies utilisées -->
                  <div class="mt-3">
                    <div class="flex flex-wrap gap-1">
                      <span *ngFor="let tech of experience.technologies" class="badge badge-secondary text-xs">
                        {{ tech }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Section Centres d'Intérêt -->
        <div class="mt-20 fade-in-up" style="animation-delay: 0.8s;">
          <div class="text-center mb-12">
            <h3 class="text-3xl font-bold text-primary mb-4">Centres d'Intérêt</h3>
            <p class="text-lg text-muted-foreground">Passions et activités en dehors du développement</p>
          </div>
          
          <div class="grid md:grid-cols-4 gap-6">
            <div 
              *ngFor="let interest of interests; let i = index"
              class="card card-hover group text-center fade-in-up"
              [style.animation-delay]="(i * 0.1) + 's'"
            >
              <div class="card-content">
                <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
                
                <h4 class="font-semibold text-primary mb-2">{{ interest.name }}</h4>
                <p class="text-muted-foreground text-sm">{{ interest.description }}</p>
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
export class AboutComponent {
  experiences = [
    {
      title: "Ingénieur études et développement",
      company: "INFOTEL",
      duration: "Avril 2024 - Décembre 2024",
      description: "Conception et optimisation de projets pour grands comptes, utilisant Spring Boot pour développer des solutions robustes.",
      achievements: [
        "Spécialisé dans le TDD et le DDD pour garantir la qualité du code",
        "Architecture adaptable et maintenable",
        "Amélioration de l'efficacité des processus de développement",
        "Livraison de solutions adaptées aux besoins des clients"
      ],
      technologies: ["Spring Boot", "TDD", "DDD", "Java", "Architecture"]
    },
    {
      title: "Ingénieur études et développement",
      company: "INFOTEL - Projet TRUST",
      duration: "Août 2023 - Avril 2024",
      description: "Développement d'un outil CRM interne avec développement back-end et front-end complet.",
      achievements: [
        "Développement back-end avec Java",
        "Processus CI/CD avec Jenkins",
        "Développement front-end avec Angular",
        "Gestion des conteneurs avec Docker"
      ],
      technologies: ["Java", "Jenkins", "Angular", "Docker", "CRM"]
    }
  ];

  interests = [
    {
      name: "Badminton",
      description: "Pratique régulière de ce sport dynamique"
    },
    {
      name: "Cinéma",
      description: "Passion pour le 7ème art"
    },
    {
      name: "Lecture",
      description: "Découverte de nouveaux univers fantastiques"
    },
    {
      name: "Escape Game",
      description: "Résolution d'énigmes et jeux d'évasion"
    }
  ];
} 