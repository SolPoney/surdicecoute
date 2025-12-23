# 🚀 Guide de démarrage - Surdicécoute

## Structure du projet

Vous êtes dans un **monorepo** contenant :

```
surdicecoute-angular/
├── src/                    # 👉 Frontend Angular
├── backend/                # 👉 Backend NestJS
│   ├── src/
│   ├── dist/               # Code compilé
│   └── surdicecoute.db     # Base de données SQLite
└── README.md
```

## ⚡ Démarrage en 3 étapes

### 1️⃣ Backend (Terminal 1)

```bash
# Aller dans le dossier backend
cd backend

# Démarrer le serveur (déjà compilé)
PORT=3000 node dist/main.js
```

✅ Backend actif sur **http://localhost:3000**

> **Note :** Les utilisateurs de test sont déjà créés dans la base `surdicecoute.db`

### 2️⃣ Frontend (Terminal 2)

```bash
# Depuis la racine du projet
ng serve
```

✅ Frontend actif sur **http://localhost:4200**

### 3️⃣ Tester l'application

Ouvrir **http://localhost:4200** dans votre navigateur

## 🔐 Se connecter comme écoutant

1. Cliquer sur **"Espace écoutant"** sur la page d'accueil
2. Se connecter avec :
   - Email : `marie.dupont@lepharedouest.fr`
   - Mot de passe : `password123`

3. Vous avez maintenant accès à :
   - ✅ Demandes en attente
   - ✅ Prise en charge de demandes
   - ✅ Gestion de disponibilité
   - ✅ Statistiques

## 📝 Créer une demande d'écoute

1. Sur la page d'accueil, cliquer sur **"Demander de l'écoute"**
2. Remplir le formulaire (aucun compte requis)
3. Valider → La demande est enregistrée
4. Un écoutant pourra la prendre en charge depuis son espace

## 🛠️ Commandes utiles

### Recompiler le backend (si modifié)

```bash
cd backend
npm run build
```

### Recréer les utilisateurs de test

```bash
cd backend
node dist/seed.js
```

### Voir les logs du backend en temps réel

Le backend affiche automatiquement tous les appels API dans le terminal.

## ❓ Problèmes courants

### "Port 3000 already in use"
Un autre processus utilise le port 3000. Arrêtez-le ou changez le port :
```bash
PORT=3001 node dist/main.js
```
N'oubliez pas de mettre à jour l'URL dans Angular (`src/app/services/api.service.ts` et `auth.service.ts`)

### "Port 4200 already in use"
Un serveur Angular tourne déjà. Utilisez un autre port :
```bash
ng serve --port 4201
```

### Erreur de connexion depuis Angular vers le backend
Vérifiez que :
- Le backend est démarré (terminal 1)
- L'URL est bien `http://localhost:3000`
- CORS est activé (déjà configuré)

## 📚 Documentation complète

- [README Principal](./README.md)
- [Documentation Backend](./backend/README_BACKEND.md)
- [Documentation Frontend](./README_ANGULAR.md)

---

Bon développement ! 🎉
