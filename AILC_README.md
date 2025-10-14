# AILC — Portail Admin (Démo)

## 🎯 Vue d'ensemble

Portail administratif de démonstration pour l'Autorité de lutte contre la corruption (AILC) du Tchad.
Application Next.js avec authentification statique, middleware de protection et données de test avec contexte tchadien.

## 🔐 Authentification

- **URL de connexion**: `/auth/v2/login`
- **Identifiants**:
  - Email: `admin@ailc.td`
  - Mot de passe: `admin123`
- **Protection**: Middleware Next.js protège toutes les routes `/dashboard/*`
- **Déconnexion**: Menu utilisateur en haut à droite → "Se déconnecter"

## 📁 Structure

### Pages principales

1. **Tableau de bord** (`/dashboard`)
   - Vue d'ensemble avec statistiques

2. **Modules fonctionnels** (avec tables et données de test)
   - `/dashboard/paie` - Gestion de la paie
   - `/dashboard/comptabilite` - Comptabilité
   - `/dashboard/rh` - Ressources humaines
   - `/dashboard/stock` - Gestion des stocks

3. **Pages de gestion** (modal "non implémenté")
   - `/dashboard/signalements`
   - `/dashboard/dossiers`
   - `/dashboard/missions`
   - `/dashboard/agents`
   - `/dashboard/documents`
   - `/dashboard/audit`
   - `/dashboard/parametrage`
   - `/dashboard/securite`
   - `/dashboard/archivage`

## 🎨 Branding

### Couleurs AILC
- **Primary**: `#0E2A47` (bleu marine)
- **Accent**: `#C7A76A` (doré)
- **Badges**: rouge, jaune, vert, bleu

### Logo
Placez le logo AILC à: `public/logo.jpg`
Le logo s'affiche dans la barre supérieure (hauteur: 32px).

## 🚀 Lancement

```bash
npm install
npm run dev
```

Puis ouvrez: `http://localhost:3000`

## ✨ Fonctionnalités

### Authentification statique avec middleware
- Login avec validation côté client
- Cookie `ailc-auth-token` pour persistance (30 jours)
- Middleware Next.js protège `/dashboard/*`
- Redirection automatique vers login si non authentifié
- Déconnexion fonctionnelle avec nettoyage du cookie

### Modules avec données
Chaque module principal affiche:
- **Action Bar**: Boutons d'action (tous ouvrent le modal)
- **Tables**: Données de test en français
- **Badges**: Statuts colorés selon les données

### Fixtures TypeScript (Contexte tchadien)
- `src/fixtures/payroll.ts` - 5 périodes de paie
- `src/fixtures/gl.ts` - 7 écritures comptables (avec subventions État, carburant, etc.)
- `src/fixtures/employees.ts` - 15 employés avec noms tchadiens (Mahamat, Abakar, Hassane, etc.)
- `src/fixtures/stock.ts` - 10 articles (bureaux N'Djamena, Moundou, Sarh)

#### Noms tchadiens utilisés:
Mahamat, Abakar, Hassane, Youssouf, Oumar, Adoum, Ali, Idriss, Tahir, Haroun, Moustapha, Ndjamena, Abdelkerim, Brahim, etc.

### Modal "Non implémenté"
Toutes les actions ouvrent un modal en français:
> **Fonctionnalité indisponible**  
> Cette fonctionnalité n'existe pas encore. Version Démo

## 📂 Composants clés

- `NotImplementedModal` - Modal de fonctionnalité non disponible
- `useNotImplemented()` - Hook pour ouvrir le modal
- `ActionBar` - Barre d'actions avec icônes Lucide
- `NotImplementedPage` - Page placeholder générique (utilise useRef pour éviter les modals infinies)
- `middleware.ts` - Middleware de protection des routes
- `auth-middleware.ts` - Logique d'authentification

## 🌐 Langue

Toute l'interface est en **français**:
- Labels de navigation
- Titres et descriptions
- Colonnes de tableaux
- Messages et modals
- Boutons d'action

## 📋 Notes

- **Aucun backend**: Toutes les données sont statiques
- **Aucun appel réseau**: Pas de fetch/axios
- **Démo uniquement**: Actions simulées
- **TypeScript**: Code entièrement typé

## 🎯 Utilisation

1. Accédez à `/` → Redirection automatique vers login
2. Connectez-vous avec `admin@ailc.td` / `admin123`
3. Cookie de session créé automatiquement
4. Explorez le tableau de bord avec statistiques
5. Naviguez vers les 4 modules principaux pour voir les tables avec données tchadiennes
6. Cliquez sur les boutons d'action pour voir le modal
7. Visitez les autres pages pour voir le comportement placeholder
8. Déconnectez-vous via le menu utilisateur (icône en haut à droite)
9. Tentez d'accéder `/dashboard` sans connexion → Redirection automatique

## 🔒 Sécurité

- Middleware protège toutes les routes `/dashboard/*`
- Cookie `ailc-auth-token` requis pour accès
- Redirection automatique vers login si cookie absent
- Empêche l'accès à la page de login si déjà connecté

---

**Version Démo** - AILC Tchad © 2025

