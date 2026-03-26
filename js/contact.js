// Configuration EmailJS
const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'TmXcigb19AaGPYHvR',
    SERVICE_ID: 'service_1uxc8qr',
    TEMPLATE_ID: 'template_b88s4br'
};

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Page contact chargée');
    
    // Initialiser EmailJS
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    console.log('✅ EmailJS initialisé');
    
    // Récupérer le formulaire
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const btnText = submitBtn?.querySelector('.btn-text');
    const btnLoader = submitBtn?.querySelector('.btn-loader');
    const formMessage = document.getElementById('formMessage');
    
    if (!form) {
        console.error('❌ Formulaire non trouvé !');
        return;
    }
    
    console.log('✅ Formulaire trouvé, ajout de l\'écouteur');
    
    // Écouter la soumission du formulaire
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        console.log('📨 Formulaire soumis');
        
        // Récupérer les valeurs des champs
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value.trim();
        
        console.log('Valeurs récupérées:', {
            name: name || '(vide)',
            email: email || '(vide)',
            subject: subject || '(vide)',
            messageLength: message.length
        });
        
        // Validation
        if (!name) {
            showMessage('❌ Veuillez entrer votre nom.', 'error', formMessage);
            document.getElementById('name').focus();
            return;
        }
        
        if (!email) {
            showMessage('❌ Veuillez entrer votre adresse email.', 'error', formMessage);
            document.getElementById('email').focus();
            return;
        }
        
        if (!email.includes('@') || !email.includes('.')) {
            showMessage('❌ Veuillez entrer une adresse email valide (ex: nom@domaine.fr).', 'error', formMessage);
            document.getElementById('email').focus();
            return;
        }
        
        if (!subject) {
            showMessage('❌ Veuillez sélectionner un objet.', 'error', formMessage);
            document.getElementById('subject').focus();
            return;
        }
        
        if (!message) {
            showMessage('❌ Veuillez écrire votre message.', 'error', formMessage);
            document.getElementById('message').focus();
            return;
        }
        
        // Activer le loader
        if (submitBtn) {
            submitBtn.disabled = true;
            if (btnText) btnText.style.display = 'none';
            if (btnLoader) btnLoader.style.display = 'inline';
        }
        
        try {
            // Préparer les données
            const templateParams = {
                name: name,
                email: email,
                phone: phone || 'Non renseigné',
                subject: subject,
                message: message,
                date: new Date().toLocaleString('fr-FR')
            };
            
            console.log('📤 Envoi vers EmailJS...');
            
            // Envoyer l'email
            const response = await emailjs.send(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.TEMPLATE_ID,
                templateParams
            );
            
            console.log('✅ Email envoyé avec succès!', response);
            showMessage('✅ Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.', 'success', formMessage);
            
            // Réinitialiser le formulaire
            form.reset();
            
        } catch (error) {
            console.error('❌ Erreur détaillée:', error);
            
            let errorMessage = '❌ Erreur lors de l\'envoi du message. ';
            
            if (error.text) {
                errorMessage += error.text;
                console.error('Détail EmailJS:', error.text);
            } else if (error.message) {
                errorMessage += error.message;
            }
            
            showMessage(errorMessage, 'error', formMessage);
            
        } finally {
            // Réactiver le bouton
            if (submitBtn) {
                submitBtn.disabled = false;
                if (btnText) btnText.style.display = 'inline';
                if (btnLoader) btnLoader.style.display = 'none';
            }
        }
    });
});

// Fonction pour afficher les messages
function showMessage(message, type, container) {
    if (!container) return;
    
    container.innerHTML = message;
    container.className = `form-message ${type}`;
    console.log(`📢 Message affiché (${type}):`, message);
    
    // Faire défiler jusqu'au message
    container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    
    // Effacer après 8 secondes
    setTimeout(() => {
        if (container.innerHTML === message) {
            container.innerHTML = '';
            container.className = 'form-message';
        }
    }, 8000);
}

// Fonction de test pour la console
window.testContactForm = function() {
    console.log('=== TEST FORMULAIRE CONTACT ===');
    console.log('EmailJS Config:', EMAILJS_CONFIG);
    console.log('Formulaire présent:', !!document.getElementById('contactForm'));
    console.log('Champs:');
    console.log('- name:', !!document.getElementById('name'));
    console.log('- email:', !!document.getElementById('email'));
    console.log('- subject:', !!document.getElementById('subject'));
    console.log('- message:', !!document.getElementById('message'));
    console.log('=== FIN TEST ===');
};