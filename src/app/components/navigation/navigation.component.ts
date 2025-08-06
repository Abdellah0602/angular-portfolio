import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav [class.scrolled]="scrolled" class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-border transition-all duration-300">
      <div class="container mx-auto px-6">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <button
            (click)="scrollToTop()"
            class="flex items-center gap-2 text-primary hover:text-primary-light transition-all duration-300 group"
          >
            <svg class="w-8 h-8 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
            </svg>
            <span class="font-bold text-xl group-hover:tracking-wide transition-all duration-300">Abdellah ABDEDOU</span>
          </button>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center gap-8">
            <button
              *ngFor="let item of navItems"
              (click)="item.action()"
              class="text-sm font-medium text-foreground transition-all duration-300 hover:text-primary relative group"
            >
              {{ item.label }}
              <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              (click)="scrollToSection('contact')"
              class="btn btn-default btn-sm"
            >
              Me contacter
            </button>
          </div>

          <!-- Mobile Menu Button -->
          <button
            (click)="toggleMenu()"
            class="md:hidden p-2 text-foreground transition-all duration-300 hover:bg-primary/10 rounded-md"
            aria-label="Toggle menu"
          >
            <svg *ngIf="isOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
            <svg *ngIf="!isOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div *ngIf="isOpen" class="md:hidden bg-background/95 backdrop-blur-md border-t border-border shadow-lg animate-slideDown">
        <div class="container mx-auto px-6 py-4">
          <div class="flex flex-col gap-4">
            <button
              *ngFor="let item of navItems"
              (click)="item.action()"
              class="text-left text-foreground hover:text-primary transition-all duration-300 py-2 px-3 rounded-md hover:bg-primary/5"
            >
              {{ item.label }}
            </button>
            <button
              (click)="scrollToSection('contact')"
              class="btn btn-default btn-sm mt-2"
            >
              Me contacter
            </button>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .animate-slideDown {
      animation: slideDown 0.3s ease-out;
    }
    
    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `]
})
export class NavigationComponent implements OnInit {
  isOpen = false;
  scrolled = false;

  navItems = [
    { label: "Accueil", action: () => this.scrollToTop() },
    { label: "├Ç propos", action: () => this.scrollToSection('about') },
    { label: "Projets", action: () => this.scrollToSection('projects') },
    { label: "Comp├®tences", action: () => this.scrollToSection('skills') },
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 50;
  }

  ngOnInit() {
    // Initial scroll check
    this.scrolled = window.scrollY > 50;
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      // Enhanced smooth scroll with better options
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest'
      });
      
      // Add focus management for accessibility
      element.setAttribute('tabindex', '-1');
      element.focus({ preventScroll: true });
      
      // Remove tabindex after focus for better UX
      setTimeout(() => element.removeAttribute('tabindex'), 1000);
    }
    this.isOpen = false;
  }

  scrollToTop() {
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
    this.isOpen = false;
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
} 
