# Surdicécoute - Backend NestJS

## 🚀 Démarrage

### Installation

```bash
cd surdicecoute-backend
npm install
```

### Compilation

```bash
npm run build
```

### Démarrage du serveur

```bash
# Port 3000 par défaut
PORT=3000 node dist/main.js
```

### Création des utilisateurs de test

```bash
node dist/seed.js
```

## 👥 Comptes de test

- **Marie Dupont** (Écoutante)
  - Email: `marie.dupont@lepharedouest.fr`
  - Mot de passe: `password123`

- **Pierre Martin** (Écoutant)
  - Email: `pierre.martin@lepharedouest.fr`
  - Mot de passe: `password123`

- **Admin**
  - Email: `admin@lepharedouest.fr`
  - Mot de passe: `admin123`

## 📡 API Endpoints

### Authentification

- `POST /auth/login` - Connexion
- `POST /auth/register` - Inscription (nécessite validation admin)

### Demandes d'écoute

- `POST /demandes` - Créer une demande (public)
- `GET /demandes` - Liste toutes les demandes (protégé)
- `GET /demandes/en-attente` - Demandes en attente (protégé)
- `GET /demandes/mes-demandes` - Mes demandes en cours (protégé)
- `GET /demandes/statistiques` - Statistiques (protégé)
- `PATCH /demandes/:id/prendre-en-charge` - Prendre en charge (protégé)
- `PATCH /demandes/:id/terminer` - Terminer une demande (protégé)

### Utilisateurs

- `GET /users` - Liste des écoutants (protégé)
- `GET /users/:id` - Détails d'un écoutant (protégé)
- `PATCH /users/:id/toggle-disponibilite` - Changer disponibilité (protégé)

## 🗄️ Base de données

SQLite (`surdicecoute.db`) avec TypeORM.

### Entités

- **User** : Écoutants et administrateurs
- **Demande** : Demandes d'écoute

## 🔒 Sécurité

- JWT pour l'authentification
- Mots de passe hashés avec bcrypt
- CORS configuré pour Angular (localhost:4200)
- Routes protégées avec guards

## ⚙️ Configuration

Variables d'environnement (optionnel) :

```bash
JWT_SECRET=votre-secret-jwt-super-securise-changez-moi
PORT=3000
```

## 📝 Notes importantes

- `synchronize: true` dans TypeORM → **À DÉSACTIVER EN PRODUCTION**
- Changez le JWT_SECRET en production
- Les comptes créés par le seed sont pour le développement uniquement
