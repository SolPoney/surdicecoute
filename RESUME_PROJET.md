# 📦 Surdicécoute - Résumé du projet

## ✅ Projet réorganisé en monorepo

Le backend a été **déplacé à l'intérieur** du projet Angular :

**Avant :**
```
/Téléchargements/
├── surdicecoute-angular/    ❌ Frontend seul
└── surdicecoute-backend/    ❌ Backend séparé
```

**Maintenant :**
```
/Téléchargements/surdicecoute-angular/
├── src/                     ✅ Frontend Angular
├── backend/                 ✅ Backend NestJS intégré
│   ├── src/
│   ├── dist/
│   └── surdicecoute.db
├── README.md                ✅ Documentation principale
├── DEMARRAGE.md             ✅ Guide rapide
└── start.sh                 ✅ Script de démarrage auto
```

## 🎯 Ce qui est fonctionnel

### Backend NestJS (Port 3000)
- ✅ API REST complète
- ✅ Authentification JWT avec Passport
- ✅ Base SQLite avec TypeORM
- ✅ 3 utilisateurs de test pré-créés
- ✅ CORS configuré pour Angular
- ✅ Routes protégées par guards
- ✅ Hachage bcrypt des mots de passe

**Modules :**
- `AuthModule` - Login/Register
- `UsersModule` - Gestion écoutants
- `DemandesModule` - Demandes d'écoute

### Frontend Angular (Port 4200)
- ✅ Interface 100% accessible (RGAA)
- ✅ Navigation au clavier complète
- ✅ Compatible lecteurs d'écran

**Pages publiques :**
- ✅ Accueil
- ✅ Catalogue de témoignages
- ✅ Lecture de contenu avec audio
- ✅ Aide et fonctionnement
- ✅ **Formulaire de demande d'écoute** (sans compte)

**Pages protégées :**
- ✅ Page de connexion (`/connexion`)
- ✅ **Espace écoutant** (`/espace-ecoutant`)
  - Profil et compétences
  - Gestion disponibilité
  - Demandes en attente
  - Prise en charge
  - Mes demandes en cours
  - Clôture de demandes
  - Statistiques
  - Déconnexion

**Services :**
- ✅ `AuthService` - JWT, localStorage
- ✅ `ApiService` - Appels HTTP backend
- ✅ `authGuard` - Protection routes
- ✅ HttpClient configuré

## 🚀 Démarrage ultra-simple

### Option 1 : Script automatique
```bash
./start.sh
```

### Option 2 : Manuel
```bash
# Terminal 1 - Backend
cd backend
PORT=3000 node dist/main.js

# Terminal 2 - Frontend
ng serve
```

Puis ouvrir **http://localhost:4200**

## 🔐 Comptes de test

| Nom | Email | Mot de passe | Rôle |
|-----|-------|--------------|------|
| Marie Dupont | marie.dupont@lepharedouest.fr | password123 | Écoutante |
| Pierre Martin | pierre.martin@lepharedouest.fr | password123 | Écoutant |
| Super Admin | admin@lepharedouest.fr | admin123 | Admin |

## 📁 Fichiers importants

| Fichier | Description |
|---------|-------------|
| `README.md` | Documentation principale |
| `DEMARRAGE.md` | Guide de démarrage détaillé |
| `start.sh` | Script lancement auto |
| `backend/surdicecoute.db` | Base de données SQLite |
| `src/app/services/auth.service.ts` | Authentification JWT |
| `src/app/services/api.service.ts` | Appels API |
| `src/app/guards/auth.guard.ts` | Protection routes |

## 🧪 Scénario de test complet

1. **Créer une demande d'écoute**
   - Aller sur `/demande-ecoute`
   - Remplir et envoyer
   - ✅ Enregistrée dans la BDD

2. **Se connecter comme écoutant**
   - Cliquer "Espace écoutant"
   - Login : `marie.dupont@lepharedouest.fr` / `password123`
   - ✅ Accès au dashboard

3. **Prendre en charge**
   - Voir la demande dans "Nouvelles demandes"
   - Cliquer "Prendre en charge"
   - ✅ Passe dans "Mes demandes en cours"

4. **Terminer**
   - Cliquer "Marquer comme terminée"
   - ✅ Demande clôturée

5. **Déconnexion**
   - Bouton "Déconnexion"
   - ✅ Retour à l'accueil

## 🔧 Technologies

**Backend :**
- NestJS 10
- TypeORM
- SQLite3
- Passport JWT
- bcrypt

**Frontend :**
- Angular 17
- TailwindCSS
- RxJS
- HttpClient

## 📊 Endpoints API

```
POST   /auth/login                        # Connexion
POST   /auth/register                     # Inscription
POST   /demandes                          # Créer demande (public)
GET    /demandes/en-attente               # Liste attente (protégé)
GET    /demandes/mes-demandes             # Mes demandes (protégé)
GET    /demandes/statistiques             # Stats (protégé)
PATCH  /demandes/:id/prendre-en-charge    # Prendre en charge (protégé)
PATCH  /demandes/:id/terminer             # Terminer (protégé)
GET    /users                             # Liste écoutants (protégé)
PATCH  /users/:id/toggle-disponibilite    # Toggle dispo (protégé)
```

## 🎨 Prochaines améliorations

- [ ] Messagerie sécurisée entre écoutant et demandeur
- [ ] Lecteur audio avancé (vitesse, signets)
- [ ] Mode hors ligne (PWA)
- [ ] Notifications temps réel (WebSocket)
- [ ] Interface admin complète
- [ ] Filtres et recherche avancée
- [ ] Export statistiques
- [ ] Tests unitaires et e2e

## 📞 Contact

**Le Phare d'Ouest**
Association médico-sociale
Rennes, France

---

✨ Projet complet et fonctionnel !
