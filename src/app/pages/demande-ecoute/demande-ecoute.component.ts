import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-demande-ecoute',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './demande-ecoute.component.html',
  styleUrl: './demande-ecoute.component.css',
})
export class DemandeEcouteComponent {
  formData = {
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    modeContact: 'messagerie' as 'email' | 'telephone' | 'messagerie',
    sujet: '',
    message: '',
    urgence: 'moyenne' as 'faible' | 'moyenne' | 'elevee',
  };

  isSubmitting = false;
  isSubmitted = false;
  errorMessage = '';

  constructor(private apiService: ApiService, private router: Router) {}

  onSubmit() {
    if (this.validateForm()) {
      this.isSubmitting = true;
      this.errorMessage = '';

      this.apiService.createDemande(this.formData).subscribe({
        next: () => {
          this.isSubmitted = true;
          this.isSubmitting = false;

          // Réinitialiser le formulaire après 5 secondes
          setTimeout(() => {
            this.resetForm();
          }, 5000);
        },
        error: (error) => {
          this.isSubmitting = false;
          console.error("Erreur lors de l'envoi:", error);
          this.errorMessage = 'Une erreur est survenue. Veuillez réessayer.';
        },
      });
    }
  }

  validateForm(): boolean {
    if (!this.formData.nom || !this.formData.prenom) {
      this.errorMessage = 'Le nom et le prénom sont obligatoires.';
      return false;
    }

    if (this.formData.modeContact === 'email' && !this.formData.email) {
      this.errorMessage = "L'email est obligatoire pour ce mode de contact.";
      return false;
    }

    if (this.formData.modeContact === 'telephone' && !this.formData.telephone) {
      this.errorMessage =
        'Le téléphone est obligatoire pour ce mode de contact.';
      return false;
    }

    if (!this.formData.sujet || !this.formData.message) {
      this.errorMessage = 'Le sujet et le message sont obligatoires.';
      return false;
    }

    return true;
  }

  resetForm() {
    this.formData = {
      nom: '',
      prenom: '',
      email: '',
      telephone: '',
      modeContact: 'messagerie',
      sujet: '',
      message: '',
      urgence: 'moyenne',
    };
    this.isSubmitted = false;
    this.errorMessage = '';
  }
}
