export interface DemandeEcoute {
  id: number;
  nom: string;
  prenom: string;
  email?: string;
  telephone?: string;
  modeContact: 'email' | 'telephone' | 'messagerie';
  sujet: string;
  message: string;
  urgence: 'faible' | 'moyenne' | 'elevee';
  dateCreation: Date;
  statut: 'en-attente' | 'prise-en-charge' | 'terminee';
  ecoutantId?: number;
  ecoutantNom?: string;
}
