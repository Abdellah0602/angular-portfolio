import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="py-20 bg-background">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16 fade-in-up">
          <h2 class="text-4xl font-bold text-primary mb-4">Contact</h2>
          <p class="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discutons de votre projet ! Je suis ouvert aux missions freelance et opportunités d'emploi
          </p>
        </div>
          <!-- Contact Information -->
          <div class="flex w-full justify-center">
            <div class="space-y-8 fade-in-up max-w-xl w-full" style="animation-delay: 0.2s;">
            
              <div class="space-y-6">
                <div class="card card-hover group">
                  <div class="card-content">
                    <div class="flex items-center gap-4">
                      <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                      <div class="flex-1">
                        <h4 class="font-semibold text-primary">Email</h4>
                        <a 
                          href="mailto:abdedo_a@etna-alternance.net" 
                          class="text-muted-foreground hover:text-primary transition-all duration-300 group-hover:translate-x-1 inline-block"
                        >
                          abdedo_a&#64;etna-alternance.net
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="card card-hover group">
                  <div class="card-content">
                    <div class="flex items-center gap-4">
                      <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                        </svg>
                      </div>
                      <div class="flex-1">
                        <h4 class="font-semibold text-primary">Téléphone</h4>
                        <a 
                          href="tel:0665058560" 
                          class="text-muted-foreground hover:text-primary transition-all duration-300 group-hover:translate-x-1 inline-block"
                        >
                          06 65 05 85 60
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="card card-hover group">
                  <div class="card-content">
                    <div class="flex items-center gap-4">
                      <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                      <div class="flex-1">
                        <h4 class="font-semibold text-primary">Disponibilité</h4>
                        <p class="text-muted-foreground">
                          Disponible pour de nouvelles opportunités
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="card card-hover group">
                  <div class="card-content">
                    <div class="flex items-center gap-4">
                      <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                      </div>
                      <div class="flex-1">
                        <h4 class="font-semibold text-primary">Localisation</h4>
                        <p class="text-muted-foreground">
                          Ile-de-France - Télétravail possible
                        </p>
                      </div>
                    </div>
                  </div>
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
export class ContactComponent {
  formData = {
    name: "",
    email: "",
    subject: "",
    message: ""
  };

  isSubmitting = false;

  onSubmit() {
    this.isSubmitting = true;
    
    // Simulate form submission
    setTimeout(() => {
      alert('Message envoyé ! Je vous répondrai dans les plus brefs délais.');
      
      // Reset form
      this.formData = { name: "", email: "", subject: "", message: "" };
      this.isSubmitting = false;
    }, 1000);
  }
}