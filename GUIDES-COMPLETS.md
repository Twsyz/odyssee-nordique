# 📚 GUIDES COMPLETS - L'Odyssée Nordique

**Date:** 29 Mars 2026  
**Site:** odyssee-nordique.com  
**Hosting:** GitHub Pages (twsyz.github.io/odyssee-nordique/)

---

## 📑 TABLE DES MATIÈRES

1. [🚀 Actions Immédiates Prioritaires](#-actions-immédiates-prioritaires)
2. [🌐 Configuration GitHub Pages + Domaine](#-configuration-github-pages--domaine-custom)
3. [🔍 Google Search Console Setup](#-google-search-console-setup)
4. [📊 Google Analytics Configuration](#-google-analytics-configuration)
5. [📧 Formulaire de Contact (EmailJS + reCAPTCHA)](#-formulaire-de-contact-emailjs--recaptcha)
6. [🎨 SEO Optimisations Complètes](#-seo-optimisations-complètes)
7. [⚡ Performance & Lighthouse](#-performance--lighthouse)
8. [✅ Validation & Checklists](#-validation--checklists)
9. [🎯 Stratégie Google Domination](#-stratégie-google-domination)

---

## 🚀 ACTIONS IMMÉDIATES PRIORITAIRES

### STEP 1: Push vers GitHub (5 min) ✅

Si ce n'est pas déjà fait:

```bash
git add -A
git commit -m "🚀 SEO boost: Custom domain + Optimisations complètes"
git push origin main
```

**Attends que le deploy finisse (2-3 min)**

---

### STEP 2: Configure DNS chez ton Registrar (10 min)

Identifie où tu as acheté **odyssee-nordique.com** (GoDaddy, OVH, Namecheap, etc.)

#### 2.1 Ajoute les 4 IP A Records (IMPORTANT!)

| Hostname | Type | Value | TTL |
|----------|------|-------|-----|
| `@` | A | `185.199.108.153` | 3600 |
| `@` | A | `185.199.109.153` | 3600 |
| `@` | A | `185.199.110.153` | 3600 |
| `@` | A | `185.199.111.153` | 3600 |

#### 2.2 (Optionnel) WWW

| Hostname | Type | Value |
|----------|------|-------|
| `www` | CNAME | `twsyz.github.io` |

**Attends 5-10 min pour la propagation DNS**

---

### STEP 3: Google Search Console (10 min)

1. Va sur: **https://search.google.com/search-console/**
2. Clique **"Ajouter une propriété"**
3. Choisis **"Domaine"** (pas URL)
4. Entre: `odyssee-nordique.com` (sans www, sans https://)
5. Google te donne un code TXT → Va sur ton registrar et ajoute ce TXT record
6. Reviens et clique **"Vérifier"**
7. ✅ Attends confirmation

---

### STEP 4: Soumet le Sitemap (2 min)

Une fois domaine vérifié dans GSC:

1. **GSC > Sitemaps**
2. Ajoute: `https://odyssee-nordique.com/sitemap.xml`
3. Clique **"Soumettre"**
4. ✅ Attends indexation (5-30 min)

---

### STEP 5: Vérifie Sites Accessibles (5 min)

Test via Google Search Console ou en ligne:

```bash
# Test 1: URL accessible
https://odyssee-nordique.com/

# Test 2: HTTPS fonctionne
https://www.odyssee-nordique.com/

# Test 3: Ancien domaine redirige (optionnel)
https://twsyz.github.io/odyssee-nordique/
```

**Résultat attendu:** ✅ Pages chargent, HTTPS fonctionne, pas d'erreurs

---

## 🌐 CONFIGURATION GITHUB PAGES + DOMAINE CUSTOM

### Fichier CNAME

**Chemin:** Racine du repo  
**Contenu:**

```
odyssee-nordique.com
```

✅ Ce fichier a déjà été créé

### Vérifier sur GitHub

1. Va sur: `github.com/twsyz/odyssee-nordique`
2. **Settings > Pages**
3. Vérifie:
   - **Custom domain:** `odyssee-nordique.com` ✅
   - **Enforce HTTPS:** Coché ✅

Si pas reconnu:
- Supprime le fichier CNAME du repo
- Re-ajoute-le via GitHub UI (Settings > Pages > Custom domain)
- Attends 2-3 min

---

### DNS Configuration par Registrar

#### 🔴 GoDaddy
1. Domaines > odyssee-nordique.com
2. DNS
3. Ajoute records A avec les 4 IP GitHub (voir STEP 2)

#### 🔴 OVH
1. Domaines > odyssee-nordique.com
2. Zone DNS
3. Ajoute records A (même 4 IP)

#### 🔴 Namecheap
1. Domaines > Manage
2. Advanced DNS
3. Host Records → Ajoute A records

#### 🔴 Autre
Contacte le support si besoin

---

## 🔍 GOOGLE SEARCH CONSOLE SETUP

### Étape 1: Créer la propriété domaine

**URL:** https://search.google.com/search-console/

1. **Ajouter une propriété**
2. Type: **Domaine** (pas URL)
3. Entre: `odyssee-nordique.com` (SANS www, SANS https://)

### Étape 2: Vérifier via DNS TXT

1. Google affiche: `google-site-verification=xxxxx`
2. Va sur ton registrar
3. Ajoute DNS TXT record:
   - Hostname: `@`
   - Type: `TXT`
   - Value: `google-site-verification=xxxxx`
4. Reviens à GSC
5. Clique **"Vérifier"**
6. ✅ Attends confirmation (peut prendre 24-48h)

---

### Étape 3: Configuration GSC

Une fois domaine vérifié:

#### Sitemaps
1. **GSC > Sitemaps**
2. Soumet: `https://odyssee-nordique.com/sitemap.xml`
3. Clique "Soumettre"

#### URL Parameters (optionnel)
1. Settings > URL Parameters
2. Si tu as des paramètres de recherche (ex: `?s=keywords`)
3. Ajoute: `s` → "Query parameter"

#### Rich Results
1. **Enhancements > Rich Results**
2. Surveille FAQPage, Movie, Event schemas
3. Partage les améliorations avec ton équipe

#### Pages Crawl
1. **Index > Pages**
2. Vérifie que tes 6 pages sont indexées:
   - index.html
   - documentaire.html
   - voyage.html
   - projections.html
   - a-propos.html
   - contact.html

---

## 📊 GOOGLE ANALYTICS CONFIGURATION

### Étape 1: Créer un compte GA4

1. Va sur: **https://analytics.google.com/**
2. Clique **"Créer un compte"**
3. Remplis:
   - **Nom du compte:** "L'Odyssée Nordique"
   - **Propriété:** "L'Odyssée Nordique"
   - **Fuseau horaire:** Europe/Paris
   - **Devise:** EUR

4. **Créer une source de données Web:**
   - URL: `https://odyssee-nordique.com/`
   - Nom: "Odyssée Nordique Website"

5. **Google Analytics 4 te fournira:**
   - ID de propriété: `G-XXXXXXXXXX`
   - Code de mesure

---

### Étape 2: Ajouter le code de suivi

#### Option A: Google Tag Manager (Recommandé)

1. Va sur: **https://tagmanager.google.com/**
2. Crée container pour "Web"
3. Tu recevras: `GTM-XXXXXXXX`

**Ajoute après `<body>` dans tous les HTML:**

```html
<!-- Google Tag Manager (noscript) -->
<noscript>
  <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXXX"
  height="0" width="0" style="display:none;visibility:hidden"></iframe>
</noscript>
<!-- End Google Tag Manager (noscript) -->
```

**Ajoute après `<head>` dans tous les HTML:**

```html
<!-- Google Tag Manager -->
<script>
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXXX');
</script>
<!-- End Google Tag Manager -->
```

---

#### Option B: Code Direct (Plus simple)

Ajoute au `<head>` de chaque page HTML:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX', {
        'anonymize_ip': true,
        'allow_google_signals': false
    });
</script>
<!-- End Google Analytics -->
```

Replace `G-XXXXXXXXXX` avec ton ID réel!

---

### Étape 3: Vérifier le suivi

1. **GA4 > Rapports > Temps réel**
2. Va sur ton site `odyssee-nordique.com`
3. Tu dois voir 1-2 utilisateurs actifs
4. ✅ Suivi fonctionne!

---

## 📧 FORMULAIRE DE CONTACT (EmailJS + reCAPTCHA)

### 1. Configuration EmailJS

#### Étape 1: Créer un compte

1. Va sur: **https://www.emailjs.com/**
2. Crée un compte gratuit
3. Va au **Dashboard**

#### Étape 2: Ajouter un service email

1. **Email Services > Add New Service**
2. Choisis ton fournisseur (Gmail, Outlook, etc.)
3. Connecte-toi à ton account email
4. Note le **Service ID** (ex: `service_abc123`)

#### Étape 3: Créer un template d'email

1. **Email Templates > Create New Template**
2. Remplis les variables:

```html
<h2>Nouveau message depuis L'Odyssée Nordique</h2>
<p><strong>Date:</strong> {{date}}</p>
<p><strong>Nom:</strong> {{name}}</p>
<p><strong>Email:</strong> {{email}}</p>
<p><strong>Téléphone:</strong> {{phone}}</p>
<p><strong>Objet:</strong> {{subject}}</p>
<p><strong>Message:</strong></p>
<p>{{message}}</p>
```

3. Note le **Template ID** (ex: `template_xyz789`)

#### Étape 4: Récupérer les clés

1. **Account > Public Key** → Note ta **Public Key**
2. **Email Services > Service ID** → Note ton **Service ID**
3. **Email Templates > Template ID** → Note ton **Template ID**

#### Étape 5: Mettre à jour le code

Dans `js/contact.js`, remplace:

```javascript
const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'TmXcigb19AaGPYHvR',      // ← Ta Public Key
    SERVICE_ID: 'service_1uxc8qr',        // ← Ton Service ID
    TEMPLATE_ID: 'template_b88s4br'       // ← Ton Template ID
};
```

---

### 2. Configuration reCAPTCHA v3

#### Étape 1: Créer un compte

1. Va sur: **https://www.google.com/recaptcha/admin**
2. Crée un compte

#### Étape 2: Ajouter un site

1. Clique **"Créer"** (ou "+")
2. Remplis:
   - **Label:** "Odyssée Nordique"
   - **Type:** reCAPTCHA v3
   - **Domaines:** 
     - `odyssee-nordique.com`
     - `www.odyssee-nordique.com`
     - `localhost` (dev)

3. Accepte les conditions
4. Copie la **Site Key**

#### Étape 3: Récupérer les clés

1. **Site Key** → Utilisée côté client (HTML)
2. **Secret Key** → Utilisée côté serveur (⚠️ NE JAMAIS partager)

#### Étape 4: Mettre à jour le code

Dans `contact.html`, dans le `<head>`:

```html
<script src="https://www.google.com/recaptcha/api.js?render=TA_SITE_KEY"></script>
```

Dans `js/contact.js`:

```javascript
const RECAPTCHA_SITE_KEY = 'TA_SITE_KEY'; // ← Ta Site Key
```

---

### 3. Configuration projections

Fichier: `js/projection-data.js`

Ajoute tes projections:

```javascript
const projectionsData = {
    upcoming: [
        {
            region: 'Île-de-France',
            city: 'Paris',
            date: '15 Avril 2026',
            location: 'Cinéma du Panthéon',
            link: '#'
        },
        // Plus de projections...
    ],
    past: [
        {
            region: 'Provence-Alpes-Côte d\'Azur',
            city: 'Marseille',
            date: '1er Avril 2026',
            location: 'Cinéma La Joliette'
        },
        // Projections passées...
    ]
};
```

---

## 🎨 SEO OPTIMISATIONS COMPLÈTES

### 1. Structures de Données (JSON-LD)

Toutes les pages incluent des schemas structurés. Tes schemas actifs:

| Type | Pages | Status |
|------|-------|--------|
| **WebSite** | index.html | ✅ Complet |
| **Organization** | index.html, contact.html | ✅ Complet |
| **Movie** | documentaire.html | ✅ Enrichi |
| **Event** | voyage.html | ✅ Enrichi |
| **EventSeries** | projections.html | ✅ Complet |
| **Person** | a-propos.html | ✅ Enrichi |
| **FAQPage** | index.html | ✅ Nouveau |
| **BreadcrumbList** | Toutes pages | ✅ Nouveau |
| **ContactPoint** | contact.html | ✅ Complet |

---

### 2. Meta Tags par Page

Les meta tags suivants sont déjà optimisés:

#### index.html (Accueil)
```
<title>L'Odyssée Nordique : Reprendre la route - Documentaire Voyage</title>
<meta name="description" content="L'Odyssée Nordique : Documentaire voyage inspirant avec JACOB Yvan. Reprendre la route, voyager à vélo dans les pays nordiques.">
<meta property="og:title" content="L'Odyssée Nordique - Documentaire Voyage aux Pays Nordiques">
<meta property="og:image" content="https://odyssee-nordique.com/images/odyssee-nordique-thumbnail.jpg">
```

#### documentaire.html
```
<title>Le documentaire L'Odyssée Nordique - Film Voyage Inspirant</title>
<meta name="description" content="Découvrez le documentaire L'Odyssée Nordique : Un film de voyage inspirant réalisé par JACOB Yvan. Aventure à vélo dans les pays nordiques.">
```

#### voyage.html
```
<title>Le Voyage L'Odyssée Nordique - Itinéraire Cyclotourisme</title>
<meta name="description" content="Explorez le voyage L'Odyssée Nordique : Itinéraire à vélo, équipement, et conseils pour voyager en Islande, Norvège, Suède et Finlande.">
```

#### projections.html
```
<title>Projections L'Odyssée Nordique - Calendrier & Événements</title>
<meta name="description" content="Trouvez les dates et lieux de projection du documentaire L'Odyssée Nordique près de chez vous. Événements et avant-premières.">
```

#### a-propos.html
```
<title>À Propos de L'Odyssée Nordique - Histoire du Documentaire</title>
<meta name="description" content="À propos de L'Odyssée Nordique : Découvrez l'histoire de JACOB Yvan, réalisateur du documentaire, et sa passion pour les voyages.">
```

#### contact.html
```
<title>Contactez L'Odyssée Nordique - Questions & Collaborations</title>
<meta name="description" content="Formulaire de contact L'Odyssée Nordique. Questions, collaborations, demandes de projection ? Nous sommes à votre écoute.">
```

---

### 3. Open Graph Tags

Tous les pages ont les tags OG:

```html
<meta property="og:type" content="website">
<meta property="og:url" content="[URL-COMPLÈTE]">
<meta property="og:title" content="[TITRE-OPTIMISÉ]">
<meta property="og:description" content="[DESCRIPTION-OPTIMISÉE]">
<meta property="og:image" content="[IMAGE-DIMENSIONÉE-1200x630]">
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="[URL-COMPLÈTE]">
<meta property="twitter:title" content="[TITRE]">
<meta property="twitter:description" content="[DESCRIPTION]">
<meta property="twitter:image" content="[IMAGE]">
```

---

### 4. Canonical URLs

Chaque page a une URL canonique:

```html
<link rel="canonical" href="https://odyssee-nordique.com/[page].html">
```

---

### 5. Sitemap & Robots.txt

#### robots.txt
```
User-agent: *
Allow: /
Disallow: /private/

Sitemap: https://odyssee-nordique.com/sitemap.xml
```

#### sitemap.xml
Contient les 6 pages principales avec:
- Priorités (`<priority>` : 0.5-1.0)
- Changement fréquence (`<changefreq>`)
- Dates de modification (`<lastmod>`)

---

## ⚡ PERFORMANCE & LIGHTHOUSE

### 1. Optimisations Implémentées

#### DNS Prefetch & Preconnect
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="dns-prefetch" href="https://www.googletagmanager.com">
<link rel="dns-prefetch" href="https://www.google-analytics.com">
```

**Impact:** -200-300ms sur FCP (First Contentful Paint)

---

#### Images Optimisées
Toutes les images ont:
- ✅ Attributs `width` et `height`
- ✅ `loading="lazy"` pour le lazy loading
- ✅ Alt text descriptif

```html
<img src="image.jpg" 
     alt="Description de l'image" 
     width="600" 
     height="400" 
     loading="lazy">
```

---

### 2. À Faire pour Meilleure Performance

#### A. Compresser les Images (Économies: 1785 Kio)

**Outils:**
- TinyPNG: https://tinypng.com/
- ImageOptim: https://imageoptim.com/
- Squoosh: https://squoosh.app/

**Cible:**
- Images principales: 100-200 KB
- Thumbnails: 50-100 KB

**Convertir en WebP:**
```html
<picture>
    <source srcset="image.webp" type="image/webp">
    <img src="image.jpg" alt="..." width="600" height="400" loading="lazy">
</picture>
```

---

#### B. Charger JS de Contact Seulement sur contact.html

```html
<!-- Ajouter seulement dans contact.html -->
<script src="js/contact.js" defer></script>

<!-- Ajouter dans main.js à la place pour autres pages -->
<script src="js/main.js" defer></script>
```

---

#### C. Ajouter Query String pour Cache

```html
<!-- AVANT -->
<link rel="stylesheet" href="css/style.css">
<script src="js/main.js"></script>

<!-- APRÈS -->
<link rel="stylesheet" href="css/style.css?v=1.2.3">
<script src="js/main.js?v=1.2.3"></script>
```

Met à jour la version à chaque déploiement!

---

#### D. Implémenter Service Worker (Optionnel)

Fichier: `js/service-worker.js`

```javascript
const CACHE_NAME = 'odyssee-v1';
const urls = [
    '/',
    '/css/style.css',
    '/js/main.js',
    '/images/logo.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(urls))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
```

Register dans chaque HTML:

```html
<script>
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/js/service-worker.js');
}
</script>
```

---

### 3. Tester la Performance

#### Google PageSpeed Insights
- **URL:** https://pagespeed.web.dev/
- **Tester:** Chaque page du site
- **Objectifs:**
  - FCP: < 1.8s (vert)
  - LCP: < 2.5s (vert)
  - CLS: < 0.1 (vert)
  - Score Mobile: > 90

---

#### Lighthouse dans Chrome
1. Ouvre **DevTools (F12)**
2. Onglet **Lighthouse**
3. Sélectionne "Mobile"
4. Clique **"Analyser"**

Corrige les erreurs rapportées!

---

## ✅ VALIDATION & CHECKLISTS

### 1. Validation des Schemas JSON-LD

#### Outil: Google Rich Result Test
**URL:** https://search.google.com/test/rich-results

Pour chaque page:
1. Entre l'URL complète
2. Clique "Test URL"
3. Vérifie qu'il n'y a pas d'erreurs
4. Schemas trouvés devraient être reconnus

---

### 2. Validation des Meta Tags

**Outil: Manual Check**

1. Ouvre **DevTools (F12)**
2. Onglet **Elements**
3. Cherche le `<head>`
4. Vérifie pour chaque page:

- [ ] `<title>` présent et unique
- [ ] `<meta name="description">` présente (<160 caractères)
- [ ] `<meta property="og:image">` avec dimensions 1200x630
- [ ] `<link rel="canonical">` avec URL complète
- [ ] `<meta name="robots">` = "index, follow"

---

### 3. Validation des Réseaux Sociaux

#### Facebook Preview
1. Va sur: https://developers.facebook.com/tools/debug/
2. Entre l'URL
3. Vérifie:
   - [ ] Image affichée (1200x630px)
   - [ ] Titre attractif
   - [ ] Description claire

#### Twitter Card
1. Va sur: https://cards-dev.twitter.com/validator
2. Entre l'URL
3. Vérifie:
   - [ ] "Summary Large Image" card
   - [ ] Image visible
   - [ ] Titre et description

---

### 4. Validation Google Search Console

Une fois configuré, vérifie dans **GSC:**

```
✅ Coverage
   - Index: Toutes les pages indexées
   - Errors: 0

✅ Enhancements
   - Rich Results: Schemas reconnus
   - Mobile Usability: Pas d'erreurs

✅ Performance
   - Impressions: Augmente avec le temps
   - Clics (CTR): Vérifie les mots-clés
```

---

### 5. Checklist Complète Sitemap & Robots

```
✅ robots.txt
   - Accessible: https://odyssee-nordique.com/robots.txt
   - Contient: Sitemap URL

✅ sitemap.xml
   - Accessible: https://odyssee-nordique.com/sitemap.xml
   - Pages: 6 URLs (ou plus)
   - Format: XML valide

✅ Google Search Console
   - Domaine vérifié: odyssee-nordique.com
   - Sitemap soumis: géré
   - Indexation: pages trouvées
```

---

## 🎯 STRATÉGIE GOOGLE DOMINATION

### ÉTAPE 1: Configuration de Base ✅

- [x] Domaine custom: odyssee-nordique.com
- [x] GitHub Pages configuré
- [x] DNS records ajoutés
- [x] Google Search Console: domaine vérifié
- [x] Sitemap soumis

### ÉTAPE 2: Optimiser le Contenu

**Priorité HAUTE:**

1. **Enrichir le contenu (300+ mots par page)**
   - H1 unique avec mot-clé
   - 2-3% densité mot-clé "odyssée nordique"
   - Liens internes
   - Call-to-action

2. **Images optimisées**
   - Compresser (100-200 KB)
   - Alt text descriptif
   - Dimensions width/height

3. **Google Analytics actif**
   - Suivi du trafic
   - Comprendre les visiteurs

---

### ÉTAPE 3: Obtenir des Backlinks

**Priorité TRÈS HAUTE:**

Contacte:
- Blogs de voyage
- Chaînes YouTube documentaires
- Festivals de cinéma
- Agences de tourisme
- Magazines de voyage

**Exemple:** "Pourriez-vous partager notre documentaire sur votre blog?"

---

### ÉTAPE 4: Présence Réseaux Sociaux

Partage régulièrement:
- Facebook: /odysseenordique
- Instagram: @odysseenordique
- YouTube: /c/odysseenordique
- TikTok: #OdysséeNordique

Hashtags:
- #OdysséeNordique
- #Documentaire
- #Voyage
- #Cyclotourisme
- #PaysNordiques

---

### ÉTAPE 5: Suivi Mensuel

Chaque mois, dans **Google Search Console:**

1. Vérifier **Impressions** (montant croissant?)
2. Vérifier **CTR** (Average Position)
3. Vérifier **Mots-clés** (quels termes drive traffic?)
4. Corriger les **Erreurs d'indexation**
5. Soumettre les **Nouvelles pages**

---

## 📋 CHECKLIST D'IMPLÉMENTATION

### Configuration Immédiate (Jour 1)
- [ ] GitHub Pages + Domaine CNAME ✅
- [ ] DNS records configurés (A + CNAME)
- [ ] Google Search Console: Domaine vérifié
- [ ] Sitemap soumis
- [ ] Analytics: Code de suivi ajouté

### Configuration (Jour 2)
- [ ] EmailJS: Service + Template + Keys
- [ ] reCAPTCHA: Site Key + Secret Key
- [ ] Projection data: js/projection-data.js complété
- [ ] Images: Compress + WebP conversion
- [ ] Meta tags: Vérifiés sur chaque page

### Validation (Jour 3)
- [ ] Google Rich Result Test: Tous les schemas OK
- [ ] PageSpeed Insights: Score > 90
- [ ] Facebook Debug: Preview OK
- [ ] Twitter Card: Preview OK
- [ ] Manual DevTools check: Tous les meta tags

### Optimisation Ongoing
- [ ] Backlinks: 1-2 par semaine
- [ ] Analytics: Monitoring régulier
- [ ] Contenu: Nouveaux articles de blog
- [ ] Images: Compression continue
- [ ] GSC: Suivi des erreurs d'indexation

---

## 🔐 Sécurité & Keys API

### ⚠️ Important: Gestion des Clés

**En Développement (OK):**
- reCAPTCHA Site Key: OK en client (public)
- EmailJS Public Key: OK en client (public)

**En Production (À vérifier):**
- reCAPTCHA Secret Key: ⚠️ **JAMAIS** en client
  - À garder sur le serveur
  - Utilisée pour vérifier le token reCAPTCHA
- EmailJS: Vérifier les restrictions de domaine

---

### Variables d'Environnement (Optionnel)

Si tu mets en place un serveur backend, utilise `.env`:

```env
EMAILJS_SERVICE_ID=service_1uxc8qr
EMAILJS_TEMPLATE_ID=template_b88s4br
RECAPTCHA_SECRET_KEY=6Lf_YJksAAAAAHVEEoiAdrnAhNfuqg3xC4b7u0qj
```

Ne commit PAS le `.env` (ajoute-le à `.gitignore`)

---

### RGPD & Privacy

- **Google Analytics:** Anonymise les IPs
- **Formulaire Contact:** Politique de confidentialité nécessaire
- **Tracking:** Consentement utilisateur recommandé

---

## 📞 Support et Ressources

### Documentation
- [EmailJS](https://www.emailjs.com/docs/)
- [Google reCAPTCHA](https://developers.google.com/recaptcha)
- [Google Analytics GA4](https://support.google.com/analytics/)
- [Google Search Console](https://support.google.com/webmasters/)

### Outils Gratuits
- PageSpeed Insights: https://pagespeed.web.dev/
- Rich Result Test: https://search.google.com/test/rich-results
- GTmetrix: https://gtmetrix.com/
- WebAIM Color Contrast: https://color.webaim.org/

---

## 📝 Suivi du Projet

**Status:** En cours ✅  
**Dernière mise à jour:** 29 Mars 2026  
**Prochaine vérification:** 5 Avril 2026

---

**✏️ Cette documentation couvre TOUS les tutoriels et guides consolidés en un seul fichier.**
