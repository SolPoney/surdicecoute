export interface Contenu {
  id: number;
  titre: string;
  description: string;
  texte: string[];
  duree?: string;
  dureeMinutes?: string;
  audioDisponible: boolean;
}
