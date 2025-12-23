import { Injectable } from '@angular/core';
import { DemandeEcoute } from '../models/demande-ecoute.model';
import { Ecoutant } from '../models/ecoutant.model';

@Injectable({
  providedIn: 'root',
})
export class EcouteService {
  private demandes: DemandeEcoute[] = [];
  private ecoutants: Ecoutant[] = [
    {
      id: 1,
      nom: 'Dupont',
      prenom: 'Marie',
      email: 'marie.dupont@example.com',
      disponible: true,
      competences: [
        'Accompagnement surdicécité',
        'Écoute active',
        'Communication adaptée',
      ],
      nombreDemandesEnCours: 2,
      dateInscription: new Date('2024-01-15'),
    },
    {
      id: 2,
      nom: 'Martin',
      prenom: 'Pierre',
      email: 'pierre.martin@example.com',
      disponible: true,
      competences: ['Soutien psychologique', 'Accompagnement quotidien'],
      nombreDemandesEnCours: 1,
      dateInscription: new Date('2024-03-20'),
    },
    {
      id: 3,
      nom: 'Bernard',
      prenom: 'Sophie',
      email: 'sophie.bernard@example.com',
      disponible: false,
      competences: ['Écoute bienveillante', 'Gestion de crise'],
      nombreDemandesEnCours: 0,
      dateInscription: new Date('2024-06-10'),
    },
  ];

  private nextId = 1;

  constructor() {
    // Créer quelques demandes d'exemple
    this.demandes = [
      {
        id: 1,
        nom: 'Anonyme',
        prenom: 'Personne',
        modeContact: 'messagerie',
        sujet: 'Besoin de parler',
        message:
          "Je traverse une période difficile et j'aurais besoin d'être écouté.",
        urgence: 'moyenne',
        dateCreation: new Date('2024-12-20T10:30:00'),
        statut: 'en-attente',
      },
      {
        id: 2,
        nom: 'Durand',
        prenom: 'Jean',
        email: 'jean.durand@example.com',
        modeContact: 'email',
        sujet: 'Isolement',
        message: 'Je me sens très isolé depuis quelques semaines.',
        urgence: 'faible',
        dateCreation: new Date('2024-12-22T14:00:00'),
        statut: 'prise-en-charge',
        ecoutantId: 1,
        ecoutantNom: 'Marie Dupont',
      },
    ];
    this.nextId = 3;
  }

  // Méthodes pour les demandes
  getAllDemandes(): DemandeEcoute[] {
    return [...this.demandes].sort(
      (a, b) => b.dateCreation.getTime() - a.dateCreation.getTime()
    );
  }

  getDemandesEnAttente(): DemandeEcoute[] {
    return this.demandes.filter((d) => d.statut === 'en-attente');
  }

  getDemandesByEcoutant(ecoutantId: number): DemandeEcoute[] {
    return this.demandes.filter((d) => d.ecoutantId === ecoutantId);
  }

  getDemandeById(id: number): DemandeEcoute | undefined {
    return this.demandes.find((d) => d.id === id);
  }

  ajouterDemande(
    demande: Omit<DemandeEcoute, 'id' | 'dateCreation' | 'statut'>
  ): DemandeEcoute {
    const nouvelleDemande: DemandeEcoute = {
      ...demande,
      id: this.nextId++,
      dateCreation: new Date(),
      statut: 'en-attente',
    };
    this.demandes.push(nouvelleDemande);
    return nouvelleDemande;
  }

  prendreEnCharge(demandeId: number, ecoutantId: number): boolean {
    const demande = this.demandes.find((d) => d.id === demandeId);
    const ecoutant = this.ecoutants.find((e) => e.id === ecoutantId);

    if (demande && ecoutant && demande.statut === 'en-attente') {
      demande.statut = 'prise-en-charge';
      demande.ecoutantId = ecoutantId;
      demande.ecoutantNom = `${ecoutant.prenom} ${ecoutant.nom}`;
      ecoutant.nombreDemandesEnCours++;
      return true;
    }
    return false;
  }

  terminerDemande(demandeId: number): boolean {
    const demande = this.demandes.find((d) => d.id === demandeId);

    if (demande && demande.statut === 'prise-en-charge' && demande.ecoutantId) {
      const ecoutant = this.ecoutants.find((e) => e.id === demande.ecoutantId);
      if (ecoutant) {
        ecoutant.nombreDemandesEnCours--;
      }
      demande.statut = 'terminee';
      return true;
    }
    return false;
  }

  // Méthodes pour les écoutants
  getAllEcoutants(): Ecoutant[] {
    return [...this.ecoutants];
  }

  getEcoutantsDisponibles(): Ecoutant[] {
    return this.ecoutants.filter((e) => e.disponible);
  }

  getEcoutantById(id: number): Ecoutant | undefined {
    return this.ecoutants.find((e) => e.id === id);
  }

  toggleDisponibilite(ecoutantId: number): boolean {
    const ecoutant = this.ecoutants.find((e) => e.id === ecoutantId);
    if (ecoutant) {
      ecoutant.disponible = !ecoutant.disponible;
      return true;
    }
    return false;
  }

  // Statistiques
  getStatistiques() {
    return {
      totalDemandes: this.demandes.length,
      demandesEnAttente: this.demandes.filter((d) => d.statut === 'en-attente')
        .length,
      demandesEnCours: this.demandes.filter(
        (d) => d.statut === 'prise-en-charge'
      ).length,
      demandesTerminees: this.demandes.filter((d) => d.statut === 'terminee')
        .length,
      ecoutantsDisponibles: this.ecoutants.filter((e) => e.disponible).length,
      totalEcoutants: this.ecoutants.length,
    };
  }
}
