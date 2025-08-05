import { Component } from '@angular/core';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { AboutComponent } from '../../components/about/about.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavigationComponent,
    HeroComponent,
    AboutComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <div class="min-h-screen">
      <app-navigation></app-navigation>
      <app-hero></app-hero>
      <app-about></app-about>
      <app-projects></app-projects>
      <app-skills></app-skills>
      <app-contact></app-contact>
      <app-footer></app-footer>
    </div>
  `
})
export class HomeComponent {} 