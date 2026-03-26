/**
 * Configuration EmailJS
 * 
 * Pour utiliser ce formulaire, vous devez :
 * 
 * 1. Créer un compte gratuit sur https://www.emailjs.com/
 * 2. Créer un service email (Gmail, Outlook, etc.)
 * 3. Créer un template d'email avec les variables : {{name}}, {{email}}, {{phone}}, {{subject}}, {{message}}
 * 4. Récupérer votre USER_ID, SERVICE_ID et TEMPLATE_ID
 * 
 * Pour reCAPTCHA :
 * 1. Aller sur https://www.google.com/recaptcha/admin
 * 2. Créer un site de type reCAPTCHA v3
 * 3. Récupérer votre SITE_KEY
 */

// Configuration EmailJS - À REMPLACER PAR VOS VRAIES CLÉS
const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'TmXcigb19AaGPYHvR',     // À remplacer
    SERVICE_ID: 'service_1uxc8qr',     // À remplacer
    TEMPLATE_ID: 'template_b88s4br'    // À remplacer
};

// Configuration reCAPTCHA v3 - À REMPLACER PAR VOTRE SITE KEY
const RECAPTCHA_SITE_KEY = '6Lf_YJksAAAAAKCJAVMr4idy9VphT_Te24mlRzgQ'; // À remplacer

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    console.log('Formulaire chargé - Configuration en cours...');
    
    // Initialiser EmailJS si la clé est configurée
    if (EMAILJS_CONFIG.PUBLIC_KEY && EMAILJS_CONFIG.PUBLIC_KEY !== 'VOTRE_PUBLIC_KEY_EMAILJS') {
        emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
        console.log('✅ EmailJS initialisé avec la clé:', EMAILJS_CONFIG.PUBLIC_KEY);
    } else {
        console.warn('⚠️ EmailJS non configuré - veuillez renseigner vos clés dans contact.js');
    }
    
    // Configurer le formulaire
    setupContactForm();
});

function setupContactForm() {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const btnText = submitBtn?.querySelector('.btn-text');
    const btnLoader = submitBtn?.querySelector('.btn-loader');
    const formMessage = document.getElementById('formMessage');
    
    if (!form) {
        console.error('Formulaire non trouvé !');
        return;
    }
    
    console.log('✅ Formulaire trouvé, écouteur d\'événement ajouté');
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        console.log('📨 Formulaire soumis - Début du traitement');
        
        // Réinitialiser le message
        if (formMessage) {
            formMessage.innerHTML = '';
            formMessage.className = 'form-message';
        }
        
        // Récupérer les valeurs avec console.log pour debug
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone');
        const subjectSelect = document.getElementById('subject');
        const messageTextarea = document.getElementById('message');
        
        const name = nameInput ? nameInput.value.trim() : '';
        const email = emailInput ? emailInput.value.trim() : '';
        const phone = phoneInput ? phoneInput.value.trim() : '';
        const subject = subjectSelect ? subjectSelect.value : '';
        const message = messageTextarea ? messageTextarea.value.trim() : '';
        
        console.log('Valeurs récupérées:', {
            name: name || '(vide)',
            email: email || '(vide)',
            phone: phone || '(vide)',
            subject: subject || '(vide)',
            message: message ? message.substring(0, 50) + '...' : '(vide)'
        });
        
        // Validation des champs obligatoires
        if (!name) {
            showMessage('❌ Veuillez entrer votre nom.', 'error');
            nameInput.focus();
            return;
        }
        
        if (!email) {
            showMessage('❌ Veuillez entrer votre adresse email.', 'error');
            emailInput.focus();
            return;
        }
        
        if (!isValidEmail(email)) {
            showMessage('❌ Veuillez entrer une adresse email valide (ex: nom@domaine.fr).', 'error');
            emailInput.focus();
            return;
        }
        
        if (!subject) {
            showMessage('❌ Veuillez sélectionner un objet.', 'error');
            subjectSelect.focus();
            return;
        }
        
        if (!message) {
            showMessage('❌ Veuillez écrire votre message.', 'error');
            messageTextarea.focus();
            return;
        }
        
        // Activer l'état de chargement
        if (submitBtn) {
            submitBtn.disabled = true;
            if (btnText) btnText.style.display = 'none';
            if (btnLoader) btnLoader.style.display = 'inline';
            submitBtn.style.opacity = '0.7';
        }
        
        try {
            // Vérifier que EmailJS est configuré
            if (!EMAILJS_CONFIG.PUBLIC_KEY || EMAILJS_CONFIG.PUBLIC_KEY === 'VOTRE_PUBLIC_KEY_EMAILJS') {
                throw new Error('EmailJS non configuré. Veuillez configurer vos clés dans le fichier js/contact.js');
            }
            
            if (!EMAILJS_CONFIG.SERVICE_ID || EMAILJS_CONFIG.SERVICE_ID === 'VOTRE_SERVICE_ID_EMAILJS') {
                throw new Error('Service ID non configuré');
            }
            
            if (!EMAILJS_CONFIG.TEMPLATE_ID || EMAILJS_CONFIG.TEMPLATE_ID === 'VOTRE_TEMPLATE_ID_EMAILJS') {
                throw new Error('Template ID non configuré');
            }
            
            // Préparer les données pour EmailJS
            const templateParams = {
                name: name,
                email: email,
                phone: phone || 'Non renseigné',
                subject: subject,
                message: message,
                date: new Date().toLocaleString('fr-FR')
            };
            
            console.log('📤 Envoi vers EmailJS avec les paramètres:', templateParams);
            console.log('Service ID:', EMAILJS_CONFIG.SERVICE_ID);
            console.log('Template ID:', EMAILJS_CONFIG.TEMPLATE_ID);
            
            // Envoyer l'email via EmailJS
            const response = await emailjs.send(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.TEMPLATE_ID,
                templateParams
            );
            
            console.log('✅ Email envoyé avec succès!', response);
            
            // Succès
            showMessage('✅ Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.', 'success');
            
            // Réinitialiser le formulaire
            form.reset();
            
        } catch (error) {
            console.error('❌ Erreur détaillée:', error);
            
            let errorMessage = '❌ Une erreur est survenue lors de l\'envoi du message.';
            
            if (error.text) {
                errorMessage += `\nDétail: ${error.text}`;
                console.error('Erreur EmailJS texte:', error.text);
            }
            
            if (error.message) {
                errorMessage += `\n${error.message}`;
            }
            
            showMessage(errorMessage, 'error');
        } finally {
            // Désactiver l'état de chargement
            if (submitBtn) {
                submitBtn.disabled = false;
                if (btnText) btnText.style.display = 'inline';
                if (btnLoader) btnLoader.style.display = 'none';
                submitBtn.style.opacity = '1';
            }
        }
    });
    
    // Fonction pour afficher un message
    function showMessage(message, type) {
        if (!formMessage) return;
        
        formMessage.innerHTML = message;
        formMessage.className = `form-message ${type}`;
        console.log(`Message affiché (${type}):`, message);
        
        // Faire défiler jusqu'au message
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
        // Effacer le message après 8 secondes
        setTimeout(() => {
            if (formMessage.innerHTML === message) {
                formMessage.innerHTML = '';
                formMessage.className = 'form-message';
            }
        }, 8000);
    }
    
    // Validation d'email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
        return emailRegex.test(email);
    }
}

// Fonction utilitaire pour tester la configuration (à appeler dans la console)
window.testEmailJSConfig = function() {
    console.log('=== Test de configuration EmailJS ===');
    console.log('Public Key:', EMAILJS_CONFIG.PUBLIC_KEY === 'VOTRE_PUBLIC_KEY_EMAILJS' ? '❌ Non configuré' : '✅ Configuré (' + EMAILJS_CONFIG.PUBLIC_KEY + ')');
    console.log('Service ID:', EMAILJS_CONFIG.SERVICE_ID === 'VOTRE_SERVICE_ID_EMAILJS' ? '❌ Non configuré' : '✅ Configuré (' + EMAILJS_CONFIG.SERVICE_ID + ')');
    console.log('Template ID:', EMAILJS_CONFIG.TEMPLATE_ID === 'VOTRE_TEMPLATE_ID_EMAILJS' ? '❌ Non configuré' : '✅ Configuré (' + EMAILJS_CONFIG.TEMPLATE_ID + ')');
    console.log('reCAPTCHA:', RECAPTCHA_SITE_KEY ? '✅ Configuré' : '⏸️ Désactivé');
    
    if (EMAILJS_CONFIG.PUBLIC_KEY !== 'VOTRE_PUBLIC_KEY_EMAILJS' && 
        EMAILJS_CONFIG.SERVICE_ID !== 'VOTRE_SERVICE_ID_EMAILJS' && 
        EMAILJS_CONFIG.TEMPLATE_ID !== 'VOTRE_TEMPLATE_ID_EMAILJS') {
        console.log('✅ EmailJS est prêt à être utilisé !');
        return true;
    } else {
        console.log('⚠️ Veuillez configurer vos clés EmailJS dans js/contact.js');
        console.log('Exemple de configuration:');
        console.log('const EMAILJS_CONFIG = {');
        console.log('    PUBLIC_KEY: "user_abc123",');
        console.log('    SERVICE_ID: "service_abc123",');
        console.log('    TEMPLATE_ID: "template_xyz789"');
        console.log('};');
        return false;
    }
};

// Test automatique au chargement
window.testEmailJSConfig();