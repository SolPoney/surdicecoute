# Surdicécoute - Application Angular

## Application Angular avec Tailwind CSS - Accessibilité RGAA stricte

### 🚀 Démarrage rapide

1. **Installer les dépendances** (si pas déjà fait):
```bash
npm install
```

2. **Lancer l'application en mode développement**:
```bash
cd /home/dell/Téléchargements/surdicecoute-angular
ng serve
```
Ou:
```bash
npm start
```

3. **Ouvrir dans le navigateur**:
```
http://localhost:4200
```

### 📁 Structure du projet

```
surdicecoute-angular/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── header/
│   │   │   ├── navigation/
│   │   │   └── footer/
│   │   ├── pages/
│   │   │   ├── accueil/
│   │   │   ├── catalogue/
│   │   │   ├── contenu/
│   │   │   └── aide/
│   │   ├── services/
│   │   │   └── contenu.service.ts
│   │   ├── models/
│   │   │   └── contenu.model.ts
│   │   ├── app.component.ts
│   │   ├── app.routes.ts
│   │   └── app.config.ts
│   ├── styles.css (Tailwind + styles accessibles)
│   └── index.html
├── tailwind.config.js
├── angular.json
└── package.json
```

### ✅ Fonctionnalités implémentées

- ✅ **Composants réutilisables**: Header, Navigation, Footer
- ✅ **Pages complètes**: Accueil, Catalogue, Contenu, Aide
- ✅ **Service de données**: ContenuService avec 5 témoignages
- ✅ **Routing Angular**: Navigation fluide entre pages
- ✅ **Tailwind CSS**: Styles utilitaires + mode sombre
- ✅ **Accessibilité RGAA**: 
  - Skip link fonctionnel
  - HTML sémantique
  - ARIA approprié
  - Navigation clavier 100%
  - Focus visible
  - Contrastes AAA
- ✅ **Gestion audio**: Contrôles accessibles (simulation)
- ✅ **Responsive**: Adapté à tous les écrans

### 🎨 Technologies

- **Angular 17**: Framework frontend
- **TypeScript**: Langage typé
- **Tailwind CSS**: Framework CSS utilitaire
- **Standalone Components**: Architecture moderne Angular
- **Router**: Navigation côté client

### 🧪 Commandes disponibles

```bash
# Développement
ng serve                    # Lance le serveur de dev
ng serve --open            # Lance et ouvre le navigateur

# Build
ng build                   # Compile pour la production
ng build --configuration production  # Build optimisé

# Tests
ng test                    # Lance les tests unitaires
ng e2e                     # Tests end-to-end

# Génération
ng generate component nom  # Créer un composant
ng generate service nom    # Créer un service
```

### 📋 Checklist avant déploiement

- [ ] Tester la navigation clavier complète
- [ ] Valider avec un lecteur d'écran (NVDA/JAWS/VoiceOver)
- [ ] Vérifier le zoom à 200%
- [ ] Tester tous les liens et boutons
- [ ] Valider HTML (validator.w3.org)
- [ ] Lighthouse score accessibilité > 95
- [ ] Build de production réussi
- [ ] Tester sur différents navigateurs

### 🔄 Différences avec la version HTML

**Avantages Angular**:
- Structure modulaire et maintenable
- Composants réutilisables
- TypeScript (typage, moins d'erreurs)
- Routing intégré
- Service centralisé pour les données
- Plus facile d'ajouter des fonctionnalités
- Meilleure architecture pour l'évolution

**Version HTML**:
- Plus simple et directe
- Pas de compilation nécessaire
- Plus légère
- Parfaite pour le MVP initial

### 🌐 Déploiement

#### Build production
```bash
ng build --configuration production
```

Les fichiers compilés seront dans `dist/surdicecoute-angular/`.

#### Servir les fichiers statiques
```bash
cd dist/surdicecoute-angular/browser
python3 -m http.server 8000
```

### 📞 Contact

**Le Phare d'Ouest**  
Association médico-sociale  
Rue de Normandie  
35000 Rennes  

Email: contact@lepharedouest.fr  
Téléphone: 02 99 99 99 99

---

**Version Angular complète et accessible** ✨
