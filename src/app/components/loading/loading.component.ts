import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex items-center justify-center" [class]="containerClass">
      <div class="loading-spinner" [class]="spinnerClass">
        <div class="spinner-ring"></div>
        <div class="spinner-ring"></div>
        <div class="spinner-ring"></div>
      </div>
      <span *ngIf="text" class="ml-3 text-muted-foreground">{{ text }}</span>
    </div>
  `,
  styles: [`
    .loading-spinner {
      position: relative;
      width: 40px;
      height: 40px;
    }
    
    .loading-spinner.sm {
      width: 24px;
      height: 24px;
    }
    
    .loading-spinner.lg {
      width: 60px;
      height: 60px;
    }
    
    .spinner-ring {
      position: absolute;
      width: 100%;
      height: 100%;
      border: 2px solid transparent;
      border-top: 2px solid hsl(var(--primary));
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
    
    .spinner-ring:nth-child(2) {
      animation-delay: 0.1s;
      opacity: 0.8;
    }
    
    .spinner-ring:nth-child(3) {
      animation-delay: 0.2s;
      opacity: 0.6;
    }
    
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `]
})
export class LoadingComponent {
  @Input() text: string = '';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() containerClass: string = '';
  
  get spinnerClass(): string {
    return this.size === 'sm' ? 'sm' : this.size === 'lg' ? 'lg' : '';
  }
}
