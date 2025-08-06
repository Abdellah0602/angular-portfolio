import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-primary text-primary-foreground py-12 relative overflow-hidden">
      <!-- Background pattern -->
      <div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div class="container mx-auto px-6 relative z-10">
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Logo and Description -->
          <div class="fade-in-up">
            <div class="flex items-center gap-2 mb-4 group">
              <svg class="w-8 h-8 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
              <span class="font-bold text-xl group-hover:tracking-wide transition-all duration-300">Abdellah ABDEDOU</span>
            </div>
            <p class="text-primary-foreground/80 leading-relaxed">
              Développeur Full Stack avec une expertise en Java 
              Spring Boot et Nest.js. Solide expérience en conception d’API sécurisées, optimisation des performances et 
              intégration front-end pour des applications web robustes et évolutives.
            </p>
          </div>

          <!-- Quick Links -->
          <div class="fade-in-up" style="animation-delay: 0.2s;">
            <h3 class="font-semibold text-lg mb-4">Navigation</h3>
            <ul class="space-y-3">
              <li>
                <button
                  (click)="scrollToTop()"
                  class="text-primary-foreground/80 hover:text-primary-foreground transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button
                  (click)="scrollToSection('about')"
                  class="text-primary-foreground/80 hover:text-primary-foreground transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  À propos
                </button>
              </li>
              <li>
                <button
                  (click)="scrollToSection('projects')"
                  class="text-primary-foreground/80 hover:text-primary-foreground transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Projets
                </button>
              </li>
              <li>
                <button
                  (click)="scrollToSection('skills')"
                  class="text-primary-foreground/80 hover:text-primary-foreground transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Compétences
                </button>
              </li>
              <li>
                <button
                  (click)="scrollToSection('contact')"
                  class="text-primary-foreground/80 hover:text-primary-foreground transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div class="fade-in-up" style="animation-delay: 0.4s;">
            <h3 class="font-semibold text-lg mb-4">Contact</h3>
            <div class="space-y-4">
              <a
                href="mailto:abdedo_a@etna-alternance.net"
                class="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-all duration-300 group"
              >
                <svg class="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span class="group-hover:translate-x-1 transition-transform duration-300">abdedo_a&#64;etna-alternance.net</span>
              </a>
              <a
                href="tel:0665058560"
                class="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-all duration-300 group"
              >
                <svg class="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span class="group-hover:translate-x-1 transition-transform duration-300">06 65 05 85 60</span>
              </a>
              <div class="flex items-center gap-3 text-primary-foreground/80">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>Ile-de-France</span>
              </div>
            </div>
          </div>
        </div>

        <div class="border-t border-primary-foreground/20 mt-8 pt-8 text-center fade-in-up" style="animation-delay: 0.6s;">
          <p class="text-primary-foreground/60">
            © {{ currentYear }} Abdellah ABDEDOU. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
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
export class FooterComponent {
  currentYear = new Date().getFullYear();

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  }
} 