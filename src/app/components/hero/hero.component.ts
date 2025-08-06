import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="min-h-screen flex items-center justify-center bg-hero-gradient relative overflow-hidden" role="banner" aria-labelledby="hero-title">
      <!-- Background decoration -->
      <div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" aria-hidden="true"></div>
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="text-center text-white fade-in-up">
          <div class="mb-6">
            <svg class="w-16 h-16 mx-auto mb-4 text-white/90 icon-hover" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5" aria-hidden="true" role="img" aria-label="Icône de développement">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
            </svg>
          </div>
          
          <h1 id="hero-title" class="text-5xl md:text-6xl font-bold mb-6 tracking-tight animate-fadeInUp">
            Abdellah ABDEDOU
            <span class="block text-3xl md:text-4xl font-normal text-white/90 mt-2 animate-fadeInUp" style="animation-delay: 0.2s;">
              Développeur Full Stack
            </span>
          </h1>
          
          <p class="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed animate-fadeInUp" style="animation-delay: 0.4s;">
            Spécialisé en <strong>Java Spring Boot</strong> et <strong>Node.js</strong>
            <br />
            Solide expérience en conception d’API sécurisées, optimisation des performances et intégration front-end pour des applications web robustes et évolutives

          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fadeInUp" style="animation-delay: 0.6s;">
            <button 
              (click)="scrollToSection('projects')"
              class="btn btn-default btn-lg min-w-[200px] group"
            >
              <span class="group-hover:translate-x-1 transition-transform duration-300">Voir mes projets</span>
            </button>
            <button 
              (click)="scrollToSection('contact')"
              class="btn btn-outline btn-lg min-w-[200px] border-white text-white hover:bg-white hover:text-primary group"
            >
              <span class="group-hover:translate-x-1 transition-transform duration-300">Me contacter</span>
            </button>
          </div>
          
          <div class="flex justify-center gap-6 animate-fadeInUp" style="animation-delay: 0.8s;">
            <a
              href="mailto:abdedo_a@etna-alternance.net"
              class="text-white/70 hover:text-white transition-all duration-300 p-2 rounded-full hover:bg-white/10 icon-hover"
              aria-label="Email"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </a>
            <a
              href="tel:0665058560"
              class="text-white/70 hover:text-white transition-all duration-300 p-2 rounded-full hover:bg-white/10 icon-hover"
              aria-label="Téléphone"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fadeInUp" style="animation-delay: 1s;">
        <div class="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center cursor-pointer hover:border-white/50 transition-colors duration-300" (click)="scrollToSection('about')">
          <div class="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .animate-fadeInUp {
      animation: fadeInUp 0.8s ease-out forwards;
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
export class HeroComponent {
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  }
} 