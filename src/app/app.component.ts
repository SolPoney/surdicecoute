import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
  ],
  template: `
    <a href="#main-content" class="skip-link">Aller au contenu principal</a>
    <app-header></app-header>
    <app-navigation></app-navigation>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
  styles: [
    `
      .skip-link {
        position: absolute;
        top: -40px;
        left: 0;
        background: #fbbf24;
        color: #000;
        padding: 12px 24px;
        text-decoration: none;
        font-weight: bold;
        font-size: 18px;
        z-index: 1000;
      }
      .skip-link:focus {
        top: 0;
        outline: 3px solid #fbbf24;
        outline-offset: 3px;
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {
    // Vérifier la validité de l'authentification au démarrage
    const token = localStorage.getItem('access_token');
    const user = localStorage.getItem('currentUser');

    // Si les données sont incohérentes ou invalides, nettoyer
    if (token && !user) {
      console.log('Données incohérentes détectées, nettoyage...');
      localStorage.clear();
    }

    // Valider que l'utilisateur est bien un écoutant
    if (user) {
      try {
        const parsedUser = JSON.parse(user);
        if (
          !parsedUser.role ||
          (parsedUser.role !== 'ecoutant' && parsedUser.role !== 'admin')
        ) {
          console.log('Utilisateur invalide, nettoyage...');
          localStorage.clear();
        }
      } catch (e) {
        console.log('Erreur parsing user, nettoyage...');
        localStorage.clear();
      }
    }
  }
}
