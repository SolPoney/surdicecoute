# Surdicécoute - Plateforme d'écoute accessible

Plateforme d'écoute et de soutien pour personnes en situation de surdicécité, portée par **Le Phare d'Ouest**.

## 🏗️ Architecture

Ce projet est organisé en monorepo avec :

- **Frontend Angular** (port 4200) - Interface accessible RGAA
- **Backend NestJS** (port 3000) - API REST avec authentification JWT

```
surdicecoute-angular/
├── src/                  # Code source frontend Angular
├── backend/              # Backend NestJS
│   ├── src/
│   ├── dist/
│   └── surdicecoute.db
├── package.json          # Dépendances frontend
└── README.md            # Ce fichier
```

## 🚀 Démarrage rapide

### 1. Backend (Terminal 1)
```bash
cd backend
npm run build
node dist/seed.js        # Créer les utilisateurs de test
PORT=3000 node dist/main.js
```

Backend disponible sur **http://localhost:3000**

### 2. Frontend (Terminal 2)
```bash
ng serve
```

Frontend disponible sur **http://localhost:4200**

## 🔐 Comptes de test

Écoutants :
- `marie.dupont@lepharedouest.fr` / `password123`
- `pierre.martin@lepharedouest.fr` / `password123`

Admin :
- `admin@lepharedouest.fr` / `admin123`

## 📋 Fonctionnalités

### Pour les visiteurs
- ✅ Consultation de témoignages
- ✅ **Formulaire de demande d'écoute** (sans compte)
- ✅ Lecture audio des contenus
- ✅ Interface 100% accessible (RGAA)

### Pour les écoutants
- ✅ **Authentification sécurisée** (JWT)
- ✅ Dashboard avec statistiques
- ✅ Voir les demandes en attente
- ✅ Prendre en charge des demandes
- ✅ Gérer sa disponibilité
- ✅ Clôturer les demandes terminées

## 🧪 Test du système

1. Ouvrir http://localhost:4200
2. Cliquer sur "Demander de l'écoute" → Remplir le formulaire
3. Cliquer sur "Espace écoutant" → Se connecter
4. Prendre en charge la demande créée
5. La marquer comme terminée

## 📚 Documentation

- [README Frontend](./README_ANGULAR.md)
- [README Backend](./backend/README_BACKEND.md)
- [Guide d'intégration complet](../INTEGRATION_COMPLETE.md)

## 🔧 Technologies

**Frontend :**
- Angular 17
- TailwindCSS
- RxJS

**Backend :**
- NestJS 10
- TypeORM
- SQLite3
- Passport JWT
- bcrypt

## ✨ Accessibilité

- Navigation clavier complète
- Compatible lecteurs d'écran (NVDA, JAWS, VoiceOver)
- Support afficheurs braille
- Contraste élevé
- Tailles de texte adaptatives
- ARIA labels complets

## 📞 Contact

**Le Phare d'Ouest**
Association médico-sociale
Rennes, France

---

Développé avec ❤️ pour l'accessibilité universelle
