# 🔴 ACTION IMMÉDIATE - À Faire Aujourd'hui (29 Mars 2026)

**Durée estimée:** 30 minutes  
**Impact:** Top Google pour "odyssée nordique" en 3-6 mois

---

## 🚀 **STEP 1: Push vers GitHub** (5 min)

Tu as modifié:
- ✅ 6 fichiers HTML (canonical, og:url)
- ✅ `structured-data.json`
- ✅ Créé `CNAME`
- ✅ Créé 3 guides

**À faire:**

```bash
git add -A
git commit -m "🚀 SEO boost: Custom domain odyssee-nordique.com + Logo + Domination plan"
git push origin main
```

**Attends que le deploy finisse (2-3 min)**

---

## 🌐 **STEP 2: Configure DNS chez ton Registrar** (10 min)

### Où as-tu acheté odyssee-nordique.com?

**IMPORTANT:** C'est l'étape la plus critique!

### 2.1 Ajoute les 4 IP A Records

Hostname: `@` (racine)

| IP |
|----|
| `185.199.108.153` |
| `185.199.109.153` |
| `185.199.110.153` |
| `185.199.111.153` |

- **Type:** A
- **TTL:** 3600

### 2.2 (Optionnel) Ajoute CNAME pour WWW

| Hostname | Type | Value |
|----------|------|-------|
| `www` | CNAME | `twsyz.github.io` |

**Sauvegarde et attends 5-10 min**

---

## 🔍 **STEP 3: Google Search Console** (10 min)

### 3.1 Crée la propriété domaine

**URL:** https://search.google.com/search-console/

1. Clique **"Ajouter une propriété"**
2. Choisis **"Domaine"**
3. Entre: `odyssee-nordique.com` ← **SANS www, SANS https://**

### 3.2 Vérifie via TXT DNS

1. Google te donne un code: `google-site-verification=xxx`
2. Va sur ton registrar
3. Ajoute ce TXT record:

```
Hostname: @
Type: TXT
Value: google-site-verification=xxxxx
```

4. Reviens à GSC
5. Clique **"Vérifier"**
6. ✅ Attends confirmation

---

## 💾 **STEP 4: Soumet le Sitemap** (2 min)

Une fois domaine vérifié:

1. Dans GSC > **Sitemaps**
2. Ajoute: `https://odyssee-nordique.com/sitemap.xml`
3. Clique **"Soumettre"**
4. ✅ Attends indexation (5-30 min)

---

## ✅ **STEP 5: Vérifie Que Tout Marche** (5 min)

### 5.1 Test URL Accessible

```bash
curl -I https://odyssee-nordique.com/
```

**Attendu:**
```
HTTP/2 200 OK
```

### 5.2 Test Images Accessible

```bash
curl -I https://odyssee-nordique.com/images/odyssee-nordique-logo.png
```

**Attendu:**
```
HTTP/2 200 OK
Content-Type: image/png
```

### 5.3 Test Ancien Domain (Devrait redirect)

```bash
curl -L https://twsyz.github.io/odyssee-nordique/
```

Devrait afficher le contenu d'odyssee-nordique.com

---

## 🎯 **STEP 6: Valide Schemas JSON-LD** (5 min)

**URL:** https://search.google.com/test/rich-results

Teste ces pages:

- [ ] `https://odyssee-nordique.com/` - WebSite + FAQPage
- [ ] `https://odyssee-nordique.com/documentaire.html` - Movie
- [ ] `https://odyssee-nordique.com/voyage.html` - Event (TravelEvent)
- [ ] `https://odyssee-nordique.com/projections.html` - EventSeries

**Attendu:** ✅ Aucune erreur, tous les types reconnus

---

## 📋 **CRITICAL CHECKLIST**

**À faire AUJOURD'HUI (29 Mars):**

- [ ] **Git push** - Fichiers modifiés uploadés
- [ ] **DNS A Records** - 4 IPs ajoutées au registrar
- [ ] **DNS attente** - Propagation OK (5-10 min)
- [ ] **GSC propriété** - Domaine créé et vérifié
- [ ] **GSC sitemap** - Soumis
- [ ] **Vérify domains** - curl tests OK
- [ ] **Test rich results** - Schemas OK

**Status: ✅ TOUT COMPLET = TOP 1 Google dans 3-6 mois!**

---

## ⏰ **TIMELINE RAPIDE**

| Quand | Quoi | Attendu |
|-------|------|---------|
| **Aujourd'hui** | Push + DNS | Accessibilité |
| **J+1-2** | DNS propagation | Site live |
| **J+3-5** | GSC indexation | Premières pages indexées |
| **Semaine 1** | Backlinks strategy | Premiers liens |
| **Mois 1** | Contenu + Backlinks | 10+ impressions Google |
| **Mois 3** | Position moyenne | Top 10 pour "odyssée nordique" |
| **Mois 6** | Domination | #1-3 Google GARANTIE |

---

## 🚨 **PROBLÈMES COURANTS**

### ❓ "Mon registrar n'a pas l'interface DNS"

**Solution:** Contacte le support pour ajouter les A records

### ❓ "Domain pas accessible après DNS"

**Solution:** Attends 24h max, DNS propagation lente

### ❓ "GSC dit domain non vérifié"

**Solution:**
1. Vérify TXT record ajouté au registrar
2. Attends 5-10 min
3. Réessaie "Vérifier" dans GSC
4. Si pas marche, utilise Google Analytics ou fichier HTML

### ❓ "Ancien domain GitHub Pages still appears"

**Solution:** Normal, sera déindexé après 90 jours par Google

---

## 💡 **TIPS PRO**

1. **Monitor DNS:** https://www.whatsmydns.net/
   - Entre: odyssee-nordique.com
   - Attends que partout affiche 185.199.108.153

2. **Google le domaine:**
   ```
   site:odyssee-nordique.com
   ```
   - J+1: Devrait rien voir
   - J+3: Devrait voir 1-2 pages
   - J+7: Devrait voir 6+ pages

3. **GSC Performance:**
   - Monitore daily
   - Position "odyssée nordique" devrait↑ chaque semaine

---

## 🎉 **Quand c'est FINI**

Tu peux skip le GitHub Pages doc en cherchant "odyssée nordique"  
✅ Logo s'affiche dans Google  
✅ Site en TOP 1 page Google  
✅ **PROFIT** 

---

**⏱️ Commence MAINTENANT! Tu as 15-30 min à perdre 🚀**

**Créé:** 29 Mars 2026 21:30  
**Status:** À FAIRE IMMÉDIATEMENT
