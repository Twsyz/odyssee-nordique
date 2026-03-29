# 🏆 GOOGLE DOMINATION PLAN - L'Odyssée Nordique

**Objectif:** Apparaître en TOP 1 page Google pour "odyssée nordique"  
**Domaine:** odyssee-nordique.com  
**Stratégie:** SEO + Domain Authority + Content + Backlinks

---

## ✅ **ÉTAPE 1: Configuration GitHub Pages (PRIORITÉ 1)**

### 📝 Fichier CNAME

✅ **FAIT** - Créé fichier `CNAME` avec `odyssee-nordique.com`

**À faire sur GitHub:**
1. Va sur ton repo: `github.com/twsyz/odyssee-nordique`
2. Settings > Pages
3. Vérifie que Custom domain est: `odyssee-nordique.com`
4. ✅ Enforce HTTPS cochée

**Impact:** Élimine la doc GitHub Pages des résultats 🎉

---

### 🔗 Configuration DNS (Chez ton Registrar)

**Points A à configurer:**
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**CNAME (optionnel mais recommandé):**
```
www.odyssee-nordique.com CNAME twsyz.github.io
```

**À faire:**
1. Va sur ton registrar (GoDaddy, OVH, etc.)
2. Ajoute les 4 IP A ou le CNAME www
3. Attends 24-48h pour la propagation DNS

**Vérifier DNS:**
```bash
nslookup odyssee-nordique.com
dig odyssee-nordique.com
```

---

## ✅ **ÉTAPE 2: Google Search Console (PRIORITÉ CRITIQUE)**

### 🔍 Configuration GSC

**Actions immédiates:**

1. **Ajoute propriété dominée:**
   - Va sur: https://search.google.com/search-console/
   - "Ajouter une propriété"
   - Choisis `odyssee-nordique.com` (pas https://www...)
   - Vérifie par `CNAME` DNS ou fichier HTML

2. **Ajoute les variantes:**
   - `https://odyssee-nordique.com/`
   - `https://www.odyssee-nordique.com/`
   - `https://twsyz.github.io/odyssee-nordique/` (ancien)

3. **Soumet Sitemap:**
   - Coverage > Sitemaps
   - Ajoute: `https://odyssee-nordique.com/sitemap.xml`
   - Resoumets après chaque update

4. **Configure URL parameters:**
   - Settings > URL parameters
   - Ajoute `?s=` pour la recherche site

5. **Monitore Rich Results:**
   - Enhancements > Rich Results
   - Surveille FAQPage, Breadcrumb, Movie

---

## ✅ **ÉTAPE 3: Logo dans Google (PRIORITÉ HAUTE)**

### 🎨 Optimisation Logo

**Ajoute à tous les schemas Organization:**

```json
{
  "@type": "Organization",
  "logo": {
    "@type": "ImageObject",
    "url": "https://odyssee-nordique.com/images/odyssee-nordique-logo.png",
    "width": 250,
    "height": 250
  }
}
```

**À faire:**

1. ✅ S'assurer que `images/odyssee-nordique-logo.png` existe
2. ✅ Dimensions: 250x250px minimum
3. ✅ Format: PNG ou SVG (pas JPEG)
4. S'assurer que l'URL est accessible: `https://odyssee-nordique.com/images/odyssee-nordique-logo.png`

**Impact:** Logo apparaît dans Knowledge Panel + résultats de recherche

---

## 🎯 **ÉTAPE 4: Content Optimization (PRIORITÉ HAUTE)**

### 📝 Optimisation du Contenu

**Actions:**

1. **Meta description optimisée:**
   - Inclure mot-clé "odyssée nordique"
   - Call-to-action (CTA)
   - < 160 caractères
   ```
   "L'Odyssée Nordique : Documentaire voyage inspirant aux pays nordiques. Découvrez l'aventure à vélo de JACOB Yvan."
   ```

2. **H1 optimal:**
   - Une seule H1 par page
   - Inclure mot-clé principal
   - Descriptif

3. **Contenu riche:**
   - 300+ mots par page
   - 2-3% densité mot-clé
   - Liens internes naturels

---

## 🔗 **ÉTAPE 5: Backlinks Strategy (PRIORITÉ TRÈS HAUTE)**

### 🎬 Où obtenir des liens?

**HIGH PRIORITY (Domain Authority 50+):**
- [ ] Wikipedia - Article "Odyssée Nordique" (si notoriété suffisante)
- [ ] IMDb - Ajouter le documentaire
- [ ] Allociné.fr - Fiche documentaire
- [ ] Festivals de cinéma français
- [ ] Blogs de voyage reconnus

**MEDIUM PRIORITY (Domain Authority 30-50):**
- [ ] Blogs de cyclotourisme
- [ ] Communautés voyage (Couchsurfing, TravelBlog)
- [ ] Portails documentaires
- [ ] Forums nordiques/Scandinavie
- [ ] Annuaires de films documentaires

**BUILDING LINKS (Quick wins):**
- [ ] Réseaux sociaux (Facebook, Instagram avec lien)
- [ ] Mentions JACOB Yvan (blog personnel, LinkedIn)
- [ ] Annuaire locale
- [ ] Presse locale (journaux régionaux)

**À faire prioritairement:**
1. Crée une fiche IMDb pour le documentaire
2. Contacte 5 blogs de voyage majeurs
3. Poste sur réseaux sociaux avec liens
4. Demande à amis/contact de linkter site

---

## 📊 **ÉTAPE 6: Monitoring & Analytics**

### 📈 Outils à configurer

1. **Google Search Console:**
   - [ ] Monitorer impressions "odyssée nordique"
   - [ ] Monitorer CTR moyen
   - [ ] Vérifier indexation pages

2. **Google Analytics 4:**
   - [ ] Créer segment "odyssée nordique"
   - [ ] Suivre source (Organic Search)
   - [ ] Conversion macro (contact, inscription)

3. **Rank Tracker:**
   - [ ] Ahrefs ou SE Ranking
   - [ ] Tracker mots-clés:
     - "odyssée nordique" (marque)
     - "odyssée nordique documentaire"
     - "voyage pays nordiques"
     - "documentaire voyage"
     - "cyclotourisme aventure"

**Métriques clés:**
- Position moyenne "odyssée nordique"
- Impressions/mois
- CTR
- Backlinks count
- Domain Authority (DA)

---

## 🚀 **ÉTAPE 7: SEO Technique (CONTINUOUS)**

### ⚙️ Optimisations continues

**À faire MAINTENANT:**

1. [ ] Remplacer toutes les URLs:
   - `https://twsyz.github.io/odyssee-nordique/` 
   - par `https://odyssee-nordique.com/`
   - Dans: meta tags, canonical, og:url, schemas

2. [ ] Ajouter redirect permanent:
   - `.htaccess` OR `_redirects` (Netlify)
   - Ou via GitHub Pages HTML meta refresh

3. [ ] Optimiser images:
   - Compression WebP
   - Lazy loading
   - Alt text richissime

4. [ ] Ajouter microdata JSON-LD supplémentaires:
   - LocalBusiness (si applicable)
   - Review schema (quand avis)
   - Rating schema

---

## 📋 **TIMELINE DOMINATION GOOGLE**

### 🗓️ Semaine 1 (ASAP - Mars 29)
- [x] Créer CNAME
- [ ] Configurer GitHub Pages
- [ ] Vérifier DNS
- [ ] Configurer Google Search Console
- [ ] Soumettre sitemap GSC
- [ ] Vérifier logo accessibility

### 🗓️ Semaine 2-3 (Avril)
- [ ] Configurer 301 redirects (old → new domain)
- [ ] Créer fiche IMDb
- [ ] Contacter 5 blogs de voyage
- [ ] Créer contenu blog (3-5 articles)
- [ ] Monitorer GSC daily

### 🗓️ Semaine 4-8 (Avril-Mai)
- [ ] Obtenir 10+ backlinks
- [ ] Monitorer rankings (PageOne pour "odyssée nordique")
- [ ] Optimiser images
- [ ] Ajouter FAQ additionnelles
- [ ] Activer social sharing

### 🗓️ 3-6 mois (Objective)
- [ ] Position #1-3 pour "odyssée nordique" ✅
- [ ] 100+ backlinks de qualité
- [ ] DA 30+ (Domain Authority)
- [ ] Logo dans Knowledge Panel
- [ ] Rich snippets actifs

---

## ⚠️ **ERREURS À ÉVITER**

❌ NE PAS:
- Acheter des backlinks (blackhat)
- Faire du keyword stuffing
- Cacher du contenu
- Modifier robots.txt pour bloquer pages
- Utiliser cloaking ou redirection malveillante

✅ À FAIRE:
- Contenu original de qualité
- Backlinks naturels et pertinents
- Amélioration constante UX
- Patience (3-6 mois pour résultats)

---

## 📞 **CONTACTS À EXPLORER**

### Presse/Media
- Journalistes voyage sur Twitter
- Podcasts aventure
- Chaînes YouTube documentaire

### Communautés
- r/Documentaires (Reddit)
- r/Cyclotourisme
- Groupes Facebook voyage
- Meetup cyclotourisme

### Blogs Partenaires
- Voyages.carnet.com
- Blog-voyage.fr
- Cyclotourisme.org
- Documentaire.fr

---

## 🎯 **Checklist Finale**

**AVANT de cliquer "publish":**
- [ ] CNAME correctement configuré
- [ ] DNS propagé (24-48h)
- [ ] GSC ajouté et vérifié
- [ ] Sitemap soumis
- [ ] Toutes URLs updated (odyssee-nordique.com)
- [ ] Redirects configurés
- [ ] Logo vérifié accessible
- [ ] Rich Results testés
- [ ] Mobile responsiveness OK
- [ ] Analytics configuré

---

## 🏆 **SUCCESS METRICS** (Ce qu'on veut atteindre)

| Métrique | Target | Timeline |
|----------|--------|----------|
| Position "odyssée nordique" | #1-3 | 3-4 mois |
| Impressions/mois | 100+ | 2 mois |
| CTR moyen | 5%+ | 3 mois |
| Backlinks | 20+ | 2 mois |
| Domain Authority | 25+ | 6 mois |
| Logo Knowledge Panel | Visible | 3-4 mois |
| Visitors/mois | 500+ | 3 mois |

---

**🚀 Ready to dominate? Let's GO!**

**📝 Plan créé:** 29 Mars 2026  
**🎯 Objectif:** #1 Google "odyssée nordique" en 3-4 mois
