import { Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { ContenuComponent } from './pages/contenu/contenu.component';
import { AideComponent } from './pages/aide/aide.component';
import { DemandeEcouteComponent } from './pages/demande-ecoute/demande-ecoute.component';
import { EspaceEcoutantComponent } from './pages/espace-ecoutant/espace-ecoutant.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: AccueilComponent,
    title: "Surdicécoute – Plateforme d'écoute accessible",
  },
  {
    path: 'catalogue',
    component: CatalogueComponent,
    title: 'Catalogue des témoignages – Surdicécoute',
  },
  {
    path: 'contenu/:id',
    component: ContenuComponent,
    title: 'Lecture de contenu – Surdicécoute',
  },
  {
    path: 'aide',
    component: AideComponent,
    title: 'Aide et fonctionnement – Surdicécoute',
  },
  {
    path: 'demande-ecoute',
    component: DemandeEcouteComponent,
    title: "Demander de l'écoute – Surdicécoute",
  },
  {
    path: 'connexion',
    component: ConnexionComponent,
    title: 'Connexion – Surdicécoute',
  },
  {
    path: 'espace-ecoutant',
    component: EspaceEcoutantComponent,
    title: 'Espace écoutant – Surdicécoute',
    canActivate: [authGuard],
  },
  { path: '**', redirectTo: '' },
];
