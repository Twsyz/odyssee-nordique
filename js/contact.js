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
    
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    console.log('✅ EmailJS initialisé');
    
    setupContactForm();
});

function setupContactForm() {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    if (!form) {
        console.error('Formulaire non trouvé !');
        return;
    }
    
    console.log('✅ Formulaire trouvé');
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        console.log('📨 Formulaire soumis');
        
        // Récupération DIRECTE des valeurs avec getElementById
        const nameField = document.getElementById('name');
        const emailField = document.getElementById('email');
        const phoneField = document.getElementById('phone');
        const subjectField = document.getElementById('subject');
        const messageField = document.getElementById('message');
        
        // Afficher les éléments pour debug
        console.log('Champs trouvés:', {
            name: nameField ? 'OK' : 'NON TROUVÉ',
            email: emailField ? 'OK' : 'NON TROUVÉ',
            subject: subjectField ? 'OK' : 'NON TROUVÉ',
            message: messageField ? 'OK' : 'NON TROUVÉ'
        });
        
        const name = nameField ? nameField.value.trim() : '';
        const email = emailField ? emailField.value.trim() : '';
        const phone = phoneField ? phoneField.value.trim() : '';
        const subject = subjectField ? subjectField.value : '';
        const message = messageField ? messageField.value.trim() : '';
        
        console.log('Valeurs:', {name, email, subject, message: message.substring(0, 30)});
        
        // Validation
        if (!name) {
            showMessage('❌ Veuillez entrer votre nom.', 'error', formMessage);
            if (nameField) nameField.focus();
            return;
        }
        
        if (!email) {
            showMessage('❌ Veuillez entrer votre adresse email.', 'error', formMessage);
            if (emailField) emailField.focus();
            return;
        }
        
        if (!email.includes('@') || !email.includes('.')) {
            showMessage('❌ Veuillez entrer une adresse email valide.', 'error', formMessage);
            if (emailField) emailField.focus();
            return;
        }
        
        if (!subject) {
            showMessage('❌ Veuillez sélectionner un objet.', 'error', formMessage);
            if (subjectField) subjectField.focus();
            return;
        }
        
        if (!message) {
            showMessage('❌ Veuillez écrire votre message.', 'error', formMessage);
            if (messageField) messageField.focus();
            return;
        }
        
        // Envoi
        const submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = '⏳ Envoi en cours...';
        }
        
        try {
            console.log('📤 Envoi vers EmailJS...');
            
            const templateParams = {
                name: name,
                email: email,
                phone: phone || 'Non renseigné',
                subject: subject,
                message: message,
                date: new Date().toLocaleString('fr-FR')
            };
            
            const response = await emailjs.send(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.TEMPLATE_ID,
                templateParams
            );
            
            console.log('✅ Succès!', response);
            showMessage('✅ Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.', 'success', formMessage);
            form.reset();
            
        } catch (error) {
            console.error('❌ Erreur:', error);
            let errorMsg = '❌ Erreur lors de l\'envoi. ';
            if (error.text) {
                errorMsg += error.text;
            } else if (error.message) {
                errorMsg += error.message;
            }
            showMessage(errorMsg, 'error', formMessage);
        } finally {
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Envoyer le message';
            }
        }
    });
}

function showMessage(message, type, container) {
    if (!container) return;
    container.innerHTML = message;
    container.className = `form-message ${type}`;
    console.log(`Message (${type}):`, message);
    
    setTimeout(() => {
        if (container.innerHTML === message) {
            container.innerHTML = '';
            container.className = 'form-message';
        }
    }, 8000);
}

// Test
window.testEmailJS = function() {
    console.log('EmailJS Config:', EMAILJS_CONFIG);
};