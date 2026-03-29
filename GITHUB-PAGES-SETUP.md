# ⚙️ SETUP GUIDE - GitHub Pages + odyssee-nordique.com

**Status:** Configuration à compléter pour dominer Google  
**Date:** 29 Mars 2026

---

## ✅ **ÉTAPE 1: GitHub Pages Configuration** (À faire MAINTENANT)

### 1.1 Vérification du fichier CNAME
✅ **FAIT** - Le fichier `CNAME` a été créé dans le repo.

```
odyssee-nordique.com
```

### 1.2 Vérifier sur GitHub

1. Va sur: `github.com/twsyz/odyssee-nordique`
2. Clique sur **Settings**
3. Va dans **Pages** (sidebar)
4. Vérifie que tu vois:
   - **Custom domain:** `odyssee-nordique.com`
   - **Enforce HTTPS:** ✅ Coché
5. Si non, ajoute manuellement `odyssee-nordique.com`

**❓ Problème?** Si GitHub Pages ne reconnaît pas le domaine:
- Supprime le fichier CNAME du repo
- Re-ajoute-le via GitHub UI
- Attends 5 min et rechargeLe

---

## 🌐 **ÉTAPE 2: Configuration DNS** (À faire MAINTENANT)

### 2.1 Va sur ton Registrar

Où as-tu acheté le domaine `odyssee-nordique.com`?
- GoDaddy
- OVH  
- Namecheap
- Autre?

### 2.2 Ajoute les DNS Records

**OPTION A - Points A (Plus courant):**

Ajoute 4 enregistrements A:

| Hostname | Type | Value | TTL |
|----------|------|-------|-----|
| `@` | A | `185.199.108.153` | 3600 |
| `@` | A | `185.199.109.153` | 3600 |
| `@` | A | `185.199.110.153` | 3600 |
| `@` | A | `185.199.111.153` | 3600 |

**OPTION B - CNAME + WWW:**

| Hostname | Type | Value | TTL |
|----------|------|-------|-----|
| `@` | A | `185.199.108.153` | 3600 |
| `@` | A | `185.199.109.153` | 3600 |
| `@` | A | `185.199.110.153` | 3600 |
| `@` | A | `185.199.111.153` | 3600 |
| `www` | CNAME | `twsyz.github.io` | 3600 |

### 2.3 Vérifier Propagation DNS

Attends **2-5 minutes** max (parfois 24h selon registrar)

**Vérifie avec Linux/Mac terminal:**
```bash
nslookup odyssee-nordique.com
dig odyssee-nordique.com
```

**Attendu:**
```
Non-authoritative answer:
Name:   odyssee-nordique.com
Address: 185.199.108.153
```

---

## 🔍 **ÉTAPE 3: Google Search Console Setup** (PRIORITÉ CRITIQUE)

### 3.1 Crée une Propriété Domaine

1. Va sur: **https://search.google.com/search-console/**
2. Clique **"Ajouter une propriété"**
3. Choisis le type: **Domaine**
4. Entre: `odyssee-nordique.com` (sans https:// ni www)

### 3.2 Vérification DNS

Google te demandera de vérifier via:
- Enregistrement DNS TXT
- Balise HTML
- Upload fichier
- Google Analytics
- Autre

**Recommandé = DNS TXT:**

1. Google te donne une valeur à ajouter: `google-site-verification=xxx`
2. Va sur ton registrar
3. Ajoute ce TXT record:

| Hostname | Type | Value |
|----------|------|-------|
| `@` | TXT | `google-site-verification=xxxxx` |

4. Clique "Vérifier" dans GSC
5. Attends confirmation (1-5 min)

### 3.3 Ajoute les Variantes

Une fois domaine principal vérifié, ajoute aussi:
- [ ] `https://odyssee-nordique.com/`
- [ ] `https://www.odyssee-nordique.com/`
- [ ] `http://odyssee-nordique.com/` (ancien)

---

## 📋 **ÉTAPE 4: Soumets le Sitemap** (Une fois GSC configuré)

1. Dans GSC, va: **Sitemaps**
2. Clique **"Ajouter un sitemap"**
3. Entre: `https://odyssee-nordique.com/sitemap.xml`
4. Clique **"Soumettre"**

**Attendu:**
- ✅ Statut = Récupéré
- ✅ 6+ URL indexées

---

## 🔄 **ÉTAPE 5: Redirects (Important!)**

Pour éviter contenu dupliqué, redirige l'ancien domain vers le nouveau.

**Fichier à créer: `.htaccess` ou `_redirects`**

### Option A: GitHub Pages HTML Meta Redirect

Crée un fichier `index-old.html` à la racine avec:

```html
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="refresh" content="0;url=https://odyssee-nordique.com/" />
</head>
</html>
```

Accessibilité: `https://twsyz.github.io/odyssee-nordique/` → `https://odyssee-nordique.com/`

### Option B: GitHub Pages Redirects (Mieux)

Ajoute à `_config.yml`:

```yaml
plugins:
  - jekyll-redirect-from

redirect_from:
  - /odyssee-nordique/
```

---

## ✨ **ÉTAPE 6: Vérification des URLs** (À faire MAINTENANT)

### ✅ Déjà Fait:
- [x] Tous les `<meta property="og:url">` → `odyssee-nordique.com`
- [x] Tous les `<link rel="canonical">` → `odyssee-nordique.com`
- [x] Tous les schemas JSON-LD → `odyssee-nordique.com`
- [x] Fichier `CNAME` créé
- [x] `structured-data.json` updaté

### À Vérifier:
- [ ] Robots.txt (checker URLs)
- [ ] Sitemap.xml (checker URLs)

---

## 📊 **ÉTAPE 7: Monitoring Initial**

### Post-DNS Propagation (1-24h):

**Teste les URLs:**

```bash
curl -I https://odyssee-nordique.com/
curl -I https://www.odyssee-nordique.com/
curl -I https://odyssee-nordique.com/documentaire.html
```

**Attendu:**
```
HTTP/2 200 OK
Content-Type: text/html; charset=utf-8
```

### Dans Google:

```
site:odyssee-nordique.com
```

**Attendu après 24-48h:** Au moins 1 page indexée

---

## 🎯 **ÉTAPE 8: Search Console Monitoring**

Une fois GSC configuré, monitore:

1. **Coverage** (Couverture)
   - Pages indexées: Devrait voir 6+
   - Erreurs: Devrait être 0

2. **Performance** (Performances)
   - Impressions pour "odyssée nordique"
   - CTR moyen
   - Position moyenne

3. **Enhancements** (Améliorations)
   - Rich results (FAQPage, Breadcrumb, Movie)
   - Validation

4. **Core Web Vitals**
   - LCP, FCP, CLS
   - Devrait être tous VERT

---

## 🚨 **TROUBLESHOOTING**

### ❌ Domaine pas accessible

**Cause:** DNS pas propagé ou CNAME mal configuré

**Solution:**
1. Attends 24h
2. Vérifying DNS: `nslookup odyssee-nordique.com`
3. Vérifying GitHub Pages: 
   - Repo > Settings > Pages
   - Custom domain visible?
4. Si toujours pas: Contacter support registrar

### ❌ GitHub Pages shows 404

**Cause:** Branche `main` pas configurée ou contenu manquant

**Solution:**
1. Repo > Settings > Pages
2. Vérifie: "Source: Deploy from a branch"
3. Branche: `main`
4. Redéploie: `git push`

### ❌ GSC ne reconnaît pas domaine

**Cause:** Vérification DNS échouée ou mal configurée

**Solution:**
1. GSC > Propriété > Paramètres
2. Vérifie records TXT
3. Si nécessaire, utilise HTML file upload instead
4. Wait 1-5 min et retry

---

## ✅ **FINAL CHECKLIST**

**Avant de clicker "GO":**

- [ ] Fichier `CNAME` présent dans repo
- [ ] Points A DNS ajoutés au registrar
- [ ] DNS TXT ajoutés pour GSC
- [ ] GitHub Pages affiche domaine custom
- [ ] Page accessible via `https://odyssee-nordique.com/`
- [ ] GSC propriété créée et vérifiée
- [ ] Sitemap soumis à GSC
- [ ] Toutes URLs internes updated
- [ ] Redirects configurés (ancien → nouveau)
- [ ] Logo visible sur page source

---

## 🎬 **NEXT STEPS (Une fois DNS OK)**

1. **Jour 1-2:** Vérify DNS propagation
2. **Jour 3-5:** GSC indexation
3. **Semaine 1:** Commencer backlinks strategy
4. **Mois 1-3:** Content creation, monitoring
5. **Mois 3-6:** Google ranking pour "odyssée nordique"

---

## 📞 **SUPPORT**

- **GitHub Pages Docs:** https://docs.github.com/pages
- **Google Search Console Help:** https://support.google.com/webmasters
- **DNS Propagation:** https://www.whatsmydns.net/
- **Test Rich Results:** https://search.google.com/test/rich-results

---

**🚀 Ready? Let's dominate Google!**

**Créé:** 29 Mars 2026  
**Status:** À compléter
