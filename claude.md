# 🌍 L'Odyssée Nordique - Contexte Projet

**Date:** 29 Mars 2026  
**Localisation:** `c:\Users\moi\Desktop\buro\projets\Vitrine Alois\V3`

---

## 📌 Vue d'ensemble du projet

**L'Odyssée Nordique** est un site vitrine pour un documentaire et une aventure de voyage à vélo dans les pays nordiques. C'est la réinvention et la renaissance d'un voyageur qui reprend la route vers la liberté.

- **Réalisateur & Producteur:** JACOB Yvan
- **Hébergement:** GitHub Pages - `twsyz.github.io/odyssee-nordique/`
- **Domaine:** odyssee-nordique.com
- **Type:** Site statique (HTML/CSS/JavaScript)

---

## 📑 Structure des pages

| Page | Fichier | Fonction | Status |
|------|---------|----------|---------|
| 🏠 Accueil | `index.html` | Page principale avec présentation | ✅ |
| 🎬 Documentaire | `documentaire.html` | Détails et trailer du documentaire | ✅ |
| 🗺️ Projections | `projections.html` | Carte interactive des projections par région | ✅ |
| 🚴 Voyage | `voyage.html` | Détails sur le voyage et l'aventure | ✅ |
| 👤 À Propos | `a-propos.html` | Biographie du réalisateur | ✅ |
| 📧 Contact | `contact.html` | Formulaire de contact | ✅ |

---

## 🎨 Architecture technique

### Fichiers Statiques
```
├── index.html                    # Page d'accueil (SEO optimisée)
├── documentaire.html             # Présentation du documentaire
├── projections.html              # Carte interactive + données projections
├── voyage.html                   # Détails du voyage (équipement, itinéraire)
├── a-propos.html                 # Biographie Yvan Jacob
├── contact.html                  # Formulaire + reCAPTCHA + EmailJS
├── css/
│   └── style.css                 # Style global (responsive design)
├── js/
│   ├── main.js                   # Menu burger + scroll + formulaire simple
│   ├── contact.js                # EmailJS + reCAPTCHA + validation avancée
│   └── projection-data.js        # Données projections par région (future)
├── images/
│   ├── logo.png                  # Logo L'Odyssée Nordique
│   └── france.png                # Carte France pour projections
└── Fichiers de config
    ├── manifest.json             # PWA configuration
    ├── robots.txt                # SEO crawler directives
    ├── sitemap.xml               # XML sitemap pour SEO
    ├── structured-data.json      # Schema.org JSON-LD
```

---

## 🔧 Intégrations externes

### 1. **EmailJS** - Système de contact
- **Service ID:** `service_1uxc8qr`
- **Public Key:** `TmXcigb19AaGPYHvR`
- **Template ID:** `template_b88s4br`
- **Fichier:** `js/contact.js`
- **Fonction:** Reçoit les messages du formulaire de contact

### 2. **Google reCAPTCHA v3**
- **Site Key:** `6Lf_YJksAAAAAKCJAVMr4idy9VphT_Te24mlRzgQ`
- **Secret Key:** `6Lf_YJksAAAAAHVEEoiAdrnAhNfuqg3xC4b7u0qj`
- **Fichier:** `contact.html` + `contact.js`
- **Fonction:** Protection anti-bot du formulaire

### 3. **Google Analytics**
- **Tracking ID:** `G-7LZ240N1WT`
- **Intégration:** Dans toutes les pages HTML (gtag.js)
- **Fonction:** Suivi du trafic et du comportement utilisateur

### 4. **Google Search Console** ⚠️
- **Status:** À configurer
- **Sitemap:** `/sitemap.xml`
- **Priorité:** HAUTE - Pour surveiller l'indexation

---

## 📱 Responsive & PWA

### Progressive Web App (PWA)
- **Manifest:** `manifest.json` - Installable sur mobile
- **Display Mode:** `standalone` (application mode)
- **Couleurs:**
  - Background: `#FDF9F0` (beige clair)
  - Theme: `#9B8E6E` (marron/taupe)
- **Icons:** Android 192x192, 512x512 + Apple 180x180

### Responsive Design
- **Breakpoints:** Mobile-first avec media queries CSS
- **Menu Mobile:** Burger menu avec toggle JavaScript
- **Fonts:** 
  - Serif: `Playfair Display` (titres)
  - Sans-serif: `Inter` (body text) - depuis Google Fonts

---

## 🔍 SEO Optimisations COMPLÉTÉ ✅

### ✅ Déjà implémentées:
- [x] Meta descriptions uniques sur chaque page
- [x] Open Graph tags (Facebook, LinkedIn, Twitter)
- [x] Canonical URLs
- [x] JSON-LD Structured Data (Schema.org)
- [x] Sitemap.xml réorganisé
- [x] Robots.txt optimisé
- [x] Titles optimisées
- [x] Meta tags de sécurité (X-Frame-Options, Referrer Policy)
- [x] Alt text sur les images

### ⚠️ À faire (Priorités):
1. **Google Search Console** - Soumettre le site et le sitemap
2. **Google Analytics** - Connecter et surveiller les métriques
3. **Optimisation images** - Compresser, lazy loading (partiellement fait)
4. **Core Web Vitals** - Tester sur PageSpeed Insights
5. **Attributs width/height** - À compléter sur voyage.html (4 images)

---

## 📊 Lighthouse Status

| Audit | Status | Notes |
|-------|--------|-------|
| **Titles** | ✅ | Textes uniques et optimisés sur chaque page |
| **Meta Description** | ✅ | Toutes les pages optimisées |
| **Security Headers** | ✅ | X-Frame-Options, X-UA-Compatible, Referrer Policy |
| **Lazy Loading** | ✅ | Toutes les images ont `loading="lazy"` |
| **Image Dimensions** | ⚠️ | À compléter sur voyage.html (4 images équipement) |
| **CLS (Layout Shift)** | ✅ | Minimisé avec dimensions images |
| **Performance** | 🔍 | À tester avec PageSpeed Insights |

---

## 🎯 Données du projet

### Projections (Interactive Map)
**Fichier attendu:** `js/projection-data.js`
- Format: `projectionsData.upcoming[]` et `projectionsData.past[]`
- Cliquer sur régions → Affiche projections
- À configurer selon votre calendrier

### Contact
**Variables EmailJS utilisées:**
```
{{date}}      - Date du message
{{name}}      - Nom du visiteur
{{email}}     - Email du visiteur
{{phone}}     - Téléphone (optionnel)
{{subject}}   - Objet du message
{{message}}   - Corps du message
```

---

## 🚀 Déploiement & Hosting

### GitHub Pages
- **Repository:** twsyz (public)
- **Base URL:** `https://twsyz.github.io/odyssee-nordique/`
- **Déploiement:** Automatique à chaque push sur `main`

### Domaine Custom
- **Domaine:** odyssee-nordique.com
- **Alternative domain:** odyssee-nordique.fr (?)
- **Configuration:** À configurer dans GitHub Pages settings (CNAME)

---

## 📝 Configuration Fichiers

### manifest.json
```json
{
  "name": "L'Odyssée Nordique - Documentaire Voyage",
  "start_url": "https://twsyz.github.io/odyssee-nordique/",
  "display": "standalone",
  "theme_color": "#9B8E6E"
}
```

### structured-data.json
Contient le Schema.org JSON-LD pour:
- Organization (nom, logo, contacts, réseaux sociaux)
- Movie (documentaire avec description)
- Person (Yvan Jacob - Réalisateur & Producteur)
- WebSite (avec SearchAction)

**Réseaux sociaux liés:**
- Facebook: `facebook.com/odysseenordique`
- Instagram: `instagram.com/odysseenordique`
- YouTube: `youtube.com/c/odysseenordique`

---

## 🎨 CSS & Style

### Fichier principal
- **Chemin:** `css/style.css`
- **Approche:** Mobile-first responsive design
- **Variables CSS:** À utiliser pour cohérence (couleurs, espacements)
- **Breakpoints:** Typiquement 480px, 768px, 1024px, 1440px

### Palette de couleurs
- **Beige/Crème:** `#FDF9F0` (background)
- **Taupe/Marron:** `#9B8E6E` (accents, theme)
- **Autres:** À définir dans le CSS

---

## ⚙️ JavaScript & Interactions

### main.js - Fonctionnalités de base
```javascript
// Menu burger responsive
// Scroll back-to-top smooth
// Validation formulaire simple
```

### contact.js - Formulaire avancé
```javascript
// EmailJS configuration
// reCAPTCHA v3 integration
// Validation email, téléphone
// Gestion loading state
// Messages d'erreur/succès
```

### projection-data.js (À créer)
```javascript
// Données des projections
// Format: upcoming[] et past[]
// Intégration avec carte interactive
```

---

## 📋 Checklist pour futures améliorations

- [ ] Finaliser optimisation images (width/height voyage.html)
- [ ] Google Search Console - Soumettre site + sitemap
- [ ] Google Analytics - Vérifier le suivi
- [ ] PageSpeed Insights - Tester et optimiser
- [ ] Ajouter projection-data.js complet
- [ ] Tester PWA sur mobile
- [ ] Vérifier tous les liens de réseaux sociaux
- [ ] Configurer email de contact (vérifier inbox)
- [ ] Sécuriser keys API (reCAPTCHA, EmailJS) en production
- [ ] Tester formulaire de contact complet
- [ ] Ajouter analytics pour feed WordPress
- [ ] Optimiser images supplémentaires (compression)
- [ ] Tester mobile responsiveness sur tous les pages

---

## 📞 Contacts & Ressources

### Outils utilisés
- [EmailJS](https://www.emailjs.com/) - Service d'email
- [Google reCAPTCHA](https://www.google.com/recaptcha/) - Anti-bot
- [Google Analytics](https://analytics.google.com) - Tracking
- [Google Search Console](https://search.google.com/search-console) - SEO monitoring
- [GitHub Pages](https://pages.github.com/) - Hosting

### Documentation
- [CONFIGURATION.md](CONFIGURATION.md) - Setup EmailJS, reCAPTCHA, projections
- [SEO-GUIDE.md](SEO-GUIDE.md) - Détails optimisations SEO
- [LIGHTHOUSE-STATUS.md](LIGHTHOUSE-STATUS.md) - Status des audits
- [LIGHTHOUSE-OPTIMISATIONS.md](LIGHTHOUSE-OPTIMISATIONS.md) - Détails optimisations

---

## 🔐 Sécurité & Best Practices

### API Keys
> ⚠️ Les keys sont actuellement en développement. En production:
- ReCAPTCHA: Secret key doit rester serveur-side JAMAIS client
- EmailJS: Public key OK côté client (validation)
- Considérer proxy serveur pour EmailJS si sensibilité

### RGPD & Privacy
- Referrer Policy: `no-referrer-when-downgrade`
- Google Analytics: Consentement utilisateur recommandé
- Formulaire contact: Données personnelles traitées via EmailJS

---

**✏️ Maintenu par:** Claude (Assistant AI)  
**Dernière mise à jour:** 29 Mars 2026
