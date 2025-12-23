import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-espace-ecoutant',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './espace-ecoutant.component.html',
  styleUrl: './espace-ecoutant.component.css',
})
export class EspaceEcoutantComponent implements OnInit {
  ecoutantConnecte: any | null = null;
  demandesEnAttente: any[] = [];
  mesDemandesEnCours: any[] = [];
  statistiques: any = {};

  messageAction = '';
  messageType: 'success' | 'error' | '' = '';

  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    // Vérifier l'authentification avant tout
    if (!this.authService.isAuthenticated() || !this.authService.isEcoutant()) {
      console.log('Utilisateur non authentifié, redirection...');
      this.router.navigate(['/connexion']);
      return;
    }

    this.ecoutantConnecte = this.authService.getCurrentUser();
    console.log('Écoutant connecté:', this.ecoutantConnecte);
    this.chargerDonnees();
  }

  chargerDonnees() {
    this.apiService.getDemandesEnAttente().subscribe({
      next: (demandes) => {
        this.demandesEnAttente = demandes;
      },
      error: (error) =>
        console.error('Erreur chargement demandes en attente', error),
    });

    this.apiService.getMesDemandes().subscribe({
      next: (demandes) => {
        this.mesDemandesEnCours = demandes.filter(
          (d) => d.statut === 'prise-en-charge'
        );
      },
      error: (error) => console.error('Erreur chargement mes demandes', error),
    });

    this.apiService.getStatistiques().subscribe({
      next: (stats) => {
        this.statistiques = stats;
      },
      error: (error) => console.error('Erreur chargement statistiques', error),
    });
  }

  prendreEnCharge(demandeId: number) {
    this.apiService.prendreEnChargeDemande(demandeId).subscribe({
      next: () => {
        this.messageAction = 'Demande prise en charge avec succès';
        this.messageType = 'success';
        this.chargerDonnees();
        setTimeout(() => {
          this.messageAction = '';
          this.messageType = '';
        }, 5000);
      },
      error: (error) => {
        this.messageAction =
          error.error?.message || 'Erreur lors de la prise en charge';
        this.messageType = 'error';
        setTimeout(() => {
          this.messageAction = '';
          this.messageType = '';
        }, 5000);
      },
    });
  }

  terminerDemande(demandeId: number) {
    this.apiService.terminerDemande(demandeId).subscribe({
      next: () => {
        this.messageAction = 'Demande terminée avec succès';
        this.messageType = 'success';
        this.chargerDonnees();
        setTimeout(() => {
          this.messageAction = '';
          this.messageType = '';
        }, 5000);
      },
      error: (error) => {
        this.messageAction =
          error.error?.message || 'Erreur lors de la clôture de la demande';
        this.messageType = 'error';
        setTimeout(() => {
          this.messageAction = '';
          this.messageType = '';
        }, 5000);
      },
    });
  }

  toggleDisponibilite() {
    if (this.ecoutantConnecte) {
      this.apiService.toggleDisponibilite(this.ecoutantConnecte.id).subscribe({
        next: (user) => {
          this.ecoutantConnecte.disponible = user.disponible;
          this.messageAction = user.disponible
            ? 'Vous êtes maintenant disponible'
            : 'Vous êtes maintenant indisponible';
          this.messageType = 'success';
          setTimeout(() => {
            this.messageAction = '';
            this.messageType = '';
          }, 3000);
        },
        error: (error) => {
          this.messageAction = 'Erreur lors du changement de disponibilité';
          this.messageType = 'error';
          setTimeout(() => {
            this.messageAction = '';
            this.messageType = '';
          }, 3000);
        },
      });
    }
  }

  deconnexion() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  getUrgenceLabel(urgence: string): string {
    const labels: any = {
      faible: 'Faible',
      moyenne: 'Moyenne',
      elevee: 'Élevée',
    };
    return labels[urgence] || urgence;
  }

  getUrgenceClass(urgence: string): string {
    const classes: any = {
      faible: 'bg-green-600',
      moyenne: 'bg-yellow-600',
      elevee: 'bg-red-600',
    };
    return classes[urgence] || 'bg-gray-600';
  }

  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  }
}
