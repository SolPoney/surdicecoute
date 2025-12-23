export interface Ecoutant {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  disponible: boolean;
  competences: string[];
  nombreDemandesEnCours: number;
  dateInscription: Date;
}

export interface DisponibiliteEcoutant {
  ecoutantId: number;
  jour: string;
  heureDebut: string;
  heureFin: string;
}
