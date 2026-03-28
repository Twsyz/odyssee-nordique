# 📊 Google Analytics - Guide de Configuration

## 🚀 Étape 1: Créer un compte Google Analytics 4

1. Va sur [Google Analytics](https://analytics.google.com/)
2. Clique sur **"Créer un compte"**
3. Remplis les infos:
   - **Nom du compte:** "L'Odyssée Nordique"
   - **Propriété:** "L'Odyssée Nordique"
   - **Fuseau horaire:** France (Europe/Paris)
   - **Devise:** EUR (Euro)

4. Crée une **nouvelle source de données Web**
   - URL de ton site: `https://twsyz.github.io/odyssee-nordique/`
   - Nom du flux: "Odyssée Nordique WebSite"

5. **Google Analytics 4 te fournira:**
   - Un ID de propriété (ex: `G-XXXXXXXXXX`)
   - Un code de mesure

---

## 🔧 Étape 2: Ajouter le code de suivi à ton site

### Option A: Utiliser Google Tag Manager (Recommandé)

**Crée un compte GTM:**
1. Va sur [Google Tag Manager](https://tagmanager.google.com/)
2. Crée un container pour le web
3. Tu recevras un code GTM

**Ajoute ce code à tes pages HTML** (après `<body>`)

```html
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
```

**Et ce code après `<head>`:**
```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXXX');</script>
<!-- End Google Tag Manager -->
```

---

### Option B: Code direct (Plus simple)

Ajoute ceci au `<head>` de chaque page HTML (remplace `G-XXXXXXXXXX` par ton ID):

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
</script>
<!-- End Google Analytics -->
```

---

## 📝 Code complet à ajouter (Option B - Plus simple)

### Ajouter avant `</head>` dans chaque HTML:

```html
    <link rel="stylesheet" href="css/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;14..32,400;14..32,500;14..32,600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&display=swap" rel="stylesheet">
    <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
    <link rel="manifest" href="site.webmanifest">
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    
    <!-- Google Analytics - À ajouter -->
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
</head>
```

---

## ✅ Vérifier que ça fonctionne

### 1. **Google Analytics Real-Time Report**
1. Va dans ton Dashboard Google Analytics
2. Clique sur **"Real-time"** → **"Overview"**
3. Visite ton site dans une autre fenêtre
4. Tu devrais voir une session active! 🎉

### 2. **Vérifier avec DevTools Chrome**
1. Ouvre les DevTools (F12)
2. Va dans l'onglet "Network"
3. Filtre par "gtag" ou "gtm"
4. Tu devrais voir les requêtes vers Google Analytics

### 3. **Utiliser l'extension GA Debugger**
1. Installe [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/)
2. Visite ton site
3. Tu verras les événements GA dans la console

---

## 📊 Événements à tracker (Optionnel)

Tu peux ajouter des événements personnalisés:

```javascript
// Suivre les clics de contact
document.querySelector('.nav-contact').addEventListener('click', function() {
    gtag('event', 'contact_click', {
        'button_name': 'Contact Header'
    });
});

// Suivre les lectures de vidéo
document.querySelector('iframe').addEventListener('load', function() {
    gtag('event', 'video_view', {
        'video_name': 'Bande-annonce'
    });
});

// Suivre le scroll
window.addEventListener('scroll', function() {
    const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    if (scrollPercentage > 50) {
        gtag('event', 'page_scroll', {
            'scroll_percentage': 50
        });
    }
});
```

---

## 🔒 Confidentialité (RGPD)

Assure-toi de:
1. ✅ Avoir une politique de confidentialité (ajoute une page `/privacy.html`)
2. ✅ Utiliser `'anonymize_ip': true` (dans le code GA ci-dessus)
3. ✅ Utiliser `'allow_google_signals': false` pour respecter les consentements
4. ✅ Informer les utilisateurs de l'utilisation de Google Analytics
5. ✅ Permettre l'opt-out

---

## 📊 Dashboard personnalisé

Une fois GA configuré, crée un dashboard avec:
- **Utilisateurs actifs** par jour
- **Temps moyen sur la page**
- **Taux de rebond**
- **Pages les plus visitées**
- **Sources de trafic** (Direct, Organic, Social, etc)
- **Device** (Mobile vs Desktop)
- **Géolocalisation**

---

## 🔗 Ressources

- [Google Analytics Documentation](https://support.google.com/analytics)
- [Google Tag Manager Setup](https://support.google.com/tagmanager/answer/6103696)
- [GA Real-Time Guide](https://support.google.com/analytics/answer/9271088)
- [RGPD & Google Analytics](https://support.google.com/analytics/answer/9019185)

---

**Note:** Google Analytics est gratuit pour les sites avec moins de 10 millions de hits/mois.

**Dernière mise à jour:** 28 Mars 2026
