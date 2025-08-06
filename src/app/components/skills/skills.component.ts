import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="py-20 bg-section-gradient">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16 fade-in-up">
          <h2 class="text-4xl font-bold text-primary mb-4">Compétences techniques</h2>
          <p class="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies et méthodologies que je maîtrise pour créer des solutions robustes
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            *ngFor="let category of skillCategories; let index = index"
            class="card card-hover group fade-in-up"
            [style.animation-delay]="(index * 0.1) + 's'"
          >
            <div class="card-header pb-4">
              <h3 class="card-title flex items-center gap-3 text-primary">
                <div class="w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300" [class]="category.color">
                  <ng-container [ngSwitch]="category.iconType">
                    <!-- Server Icon -->
                    <svg *ngSwitchCase="'server'" class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
                    </svg>
                    <!-- Database Icon -->
                    <svg *ngSwitchCase="'database'" class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
                    </svg>
                    <!-- Layers Icon -->
                    <svg *ngSwitchCase="'layers'" class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                    </svg>
                    <!-- TestTube Icon -->
                    <svg *ngSwitchCase="'testtube'" class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <!-- Wrench Icon -->
                    <svg *ngSwitchCase="'wrench'" class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <!-- GitBranch Icon -->
                    <svg *ngSwitchCase="'gitbranch'" class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </ng-container>
                </div>
                <span class="group-hover:text-primary-light transition-colors duration-300">{{ category.title }}</span>
              </h3>
            </div>
            
            <div class="card-content">
              <ul class="space-y-3">
                <li 
                  *ngFor="let skill of category.skills; let skillIndex = index"
                  class="group/item"
                >
                  <div class="flex items-center justify-between mb-1">
                    <span class="text-foreground group-hover/item:text-primary transition-colors duration-300 font-medium">{{ skill.name }}</span>
                    <div class="flex items-center gap-2">
                      <span class="text-xs px-2 py-1 rounded-full" [class]="getLevelClass(skill.level)">
                        {{ skill.level }}
                      </span>
                      <span class="text-xs text-muted-foreground">{{ skill.years }} ans</span>
                    </div>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-1.5">
                    <div class="h-1.5 rounded-full transition-all duration-300" 
                         [class]="getProgressClass(skill.level)"
                         [style.width]="getProgressWidth(skill.years)">
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <!-- Section Méthodologies -->
        <div class="mt-20 fade-in-up" style="animation-delay: 0.6s;">
          <div class="text-center mb-12">
            <h3 class="text-3xl font-bold text-primary mb-4">Méthodologies et Bonnes Pratiques</h3>
            <p class="text-lg text-muted-foreground">Approches que j'applique pour garantir la qualité</p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div 
              *ngFor="let method of methodologies; let i = index"
              class="card card-hover group fade-in-up"
              [style.animation-delay]="(i * 0.1) + 's'"
            >
              <!-- Background decoration -->
              <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div class="relative p-8">
                <!-- Icon -->
                <div class="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                
                <!-- Title -->
                <h4 class="text-xl font-bold text-primary mb-4 group-hover:text-primary-light transition-colors duration-300">
                  {{ method.title }}
                </h4>
                
                <!-- Description -->
                <p class="text-muted-foreground mb-6 leading-relaxed">{{ method.description }}</p>
                
                <!-- Benefits -->
                <div class="space-y-3">
                  <h5 class="font-semibold text-primary text-sm uppercase tracking-wide">Bénéfices</h5>
                  <div class="flex flex-wrap gap-2">
                    <span 
                      *ngFor="let benefit of method.benefits" 
                      class="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20 hover:bg-primary/20 hover:border-primary/40 transition-all duration-300"
                    >
                      {{ benefit }}
                    </span>
                  </div>
                </div>
                
                <!-- Hover effect -->
                <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
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
export class SkillsComponent {
  skillCategories = [
    {
      title: "Back-End",
      iconType: "server",
      skills: [
        { name: "Java (Spring Boot)", level: "Avancé", years: 2 },
        { name: "Nest.js", level: "Avancé", years: 2 },
        { name: "JavaScript", level: "Avancé", years: 5 },
        { name: "Node.js", level: "Avancé", years: 4 },
        { name: "REST APIs", level: "Expert", years: 4 }
      ],
      color: "bg-blue-500"
    },
    {
      title: "Bases de données",
      iconType: "database",
      skills: [
        { name: "SQL", level: "Expert", years: 5 },
        { name: "MongoDB", level: "Avancé", years: 3 },
        { name: "Bases de données relationnelles", level: "Expert", years: 5 }
      ],
      color: "bg-green-500"
    },
    {
      title: "DevOps & Outils",
      iconType: "wrench",
      skills: [
        { name: "Docker", level: "Avancé", years: 4 },
        { name: "Jenkins", level: "Avancé", years: 3 },
        { name: "Git", level: "Expert", years: 5 },
        { name: "CI/CD", level: "Avancé", years: 3 }
      ],
      color: "bg-red-500"
    },
    {
      title: "Front-End",
      iconType: "layers",
      skills: [
        { name: "Angular", level: "Avancé", years: 3 },
        { name: "HTML/CSS", level: "Expert", years: 5 },
        { name: "TypeScript", level: "Avancé", years: 3 }
      ],
      color: "bg-purple-500"
    },
    {
      title: "Mobile",
      iconType: "testtube",
      skills: [
        { name: "Swift", level: "Intermédiaire", years: 1 },
        { name: "iOS Development", level: "Intermédiaire", years: 1 },
        { name: "Géolocalisation", level: "Intermédiaire", years: 1 }
      ],
      color: "bg-orange-500"
    },
    {
      title: "Méthodologies",
      iconType: "gitbranch",
      skills: [
        { name: "TDD", level: "Expert", years: 2 },
        { name: "DDD", level: "Expert", years: 2 },
        { name: "Clean Code", level: "Avancé", years: 2 },
        { name: "Architecture logicielle", level: "Avancé", years: 2 }
      ],
      color: "bg-indigo-500"
    }
  ];

  methodologies = [
    {
      title: "Domain-Driven Design (DDD)",
      description: "Conception d'architectures alignées sur le domaine métier",
      benefits: ["Maintenabilité", "Évolutivité", "Qualité du code"]
    },
    {
      title: "Test-Driven Development (TDD)",
      description: "Développement guidé par les tests pour garantir la qualité",
      benefits: ["Qualité du code", "Documentation vivante", "Refactoring sécurisé"]
    },
    {
      title: "Optimisation des performances",
      description: "Création d'APIs sécurisées et performantes",
      benefits: ["Performance", "Sécurité", "Maintenabilité"]
    }
  ];

  getLevelClass(level: string): string {
    switch (level) {
      case 'Expert': return 'bg-green-100 text-green-800';
      case 'Avancé': return 'bg-blue-100 text-blue-800';
      case 'Intermédiaire': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }

  getProgressClass(level: string): string {
    switch (level) {
      case 'Expert': return 'bg-green-500';
      case 'Avancé': return 'bg-blue-500';
      case 'Intermédiaire': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  }

  getProgressWidth(years: number): string {
    const maxYears = 6;
    const percentage = Math.min((years / maxYears) * 100, 100);
    return `${percentage}%`;
  }
} 