# 1. Configuration du formulaire de contact

## 1. Configuration EmailJS

### Étape 1 : Créer un compte
- Rendez-vous sur [EmailJS](https://www.emailjs.com/)
- Créez un compte gratuit

### Étape 2 : Ajouter un service email
1. Dans le tableau de bord, cliquez sur "Email Services"
2. Cliquez sur "Add New Service"
3. Choisissez votre fournisseur (Gmail, Outlook, etc.)
4. Connectez-vous à votre compte email
5. Notez le **Service ID** généré (ex: `service_abc123`)

### Étape 3 : Créer un template d'email
1. Allez dans "Email Templates" → "Create New Template"
2. Créez un template avec les variables suivantes :

```html
<h2>Nouveau message depuis le site L'Odyssée Nordique</h2>
<p><strong>Date :</strong> {{date}}</p>
<p><strong>Nom :</strong> {{name}}</p>
<p><strong>Email :</strong> {{email}}</p>
<p><strong>Téléphone :</strong> {{phone}}</p>
<p><strong>Objet :</strong> {{subject}}</p>
<p><strong>Message :</strong></p>
<p>{{message}}</p>
```

### Étape 4 : Adaptation avec vos données
1. La public Key se trouve sur votre profil
2. La service ID se trouve sur Email services
3. La template ID se trouve sur Email templates
- Vous n'avez qu'à les remplacer dans "js\contact.js"
```js 
const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'user_abc123',      // Votre clé publique
    SERVICE_ID: 'service_abc123',    // Votre Service ID
    TEMPLATE_ID: 'template_xyz789'   // Votre Template ID
};
```
clé site
6Lf_YJksAAAAAKCJAVMr4idy9VphT_Te24mlRzgQ
clé secrète
6Lf_YJksAAAAAHVEEoiAdrnAhNfuqg3xC4b7u0qj
## 2. Configuration reCAPTCHA
### Étape 1 : Créer un compte
- Rendez-vous sur [reCAPTCHA](https://www.google.com/recaptcha/admin)
- Créez un compte gratuit

### Étape 2 : Ajouter un service RECAPTCHA
- Cliquez sur "Créer" (ou "+")
- Remplissez le formulaire :
1. Label : "Odyssée Nordique"
2. Type : reCAPTCHA v3
3. Domaines : ajoutez votre domaine (localhost, votre-site.com)
4. Acceptez les conditions
5. Copiez la Site Key générée

### Étape 3 : Mettre à jour le fichier contact.html
```html
<!-- Dans le <head>, remplacez TON_SITE_KEY -->
<script src="https://www.google.com/recaptcha/api.js?render=VOTRE_SITE_KEY"></script>
```

### Étape 4 : Mettre à jour le fichier contact.js
```javascript
const RECAPTCHA_SITE_KEY = 'VOTRE_SITE_KEY_RECAPTCHA'; // Votre Site Key
```

# Configuration projections
Ajoutez/modifiez les projections dans js/france-map-data.js :

Ajoutez vos projections dans projectionsData.upcoming

Ajoutez les passées dans projectionsData.past

Testez :

Ouvrez projections.html

Cliquez sur les régions

Vérifiez que les projections s'affichent