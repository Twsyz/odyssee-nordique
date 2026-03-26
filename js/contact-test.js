// Version ultra simple sans aucune dépendance
document.addEventListener('DOMContentLoaded', function() {
    console.log('🔵 CONTACT-TEST JS CHARGÉ');
    
    // Initialiser EmailJS
    emailjs.init('TmXcigb19AaGPYHvR');
    
    const form = document.getElementById('contactForm');
    
    if (!form) {
        console.error('❌ Formulaire non trouvé');
        return;
    }
    
    console.log('✅ Formulaire trouvé');
    
    // Supprimer tous les anciens écouteurs et en ajouter un nouveau
    form.removeEventListener('submit', form.submitHandler);
    
    form.submitHandler = async function(e) {
        e.preventDefault();
        console.log('🟢 FORMULAIRE SOUMIS (version test)');
        
        // Récupération DIRECTE avec querySelector
        const nameInput = document.querySelector('#name');
        const emailInput = document.querySelector('#email');
        const phoneInput = document.querySelector('#phone');
        const subjectSelect = document.querySelector('#subject');
        const messageTextarea = document.querySelector('#message');
        
        // Afficher les éléments pour debug
        console.log('Éléments trouvés:', {
            name: nameInput,
            email: emailInput,
            subject: subjectSelect,
            message: messageTextarea
        });
        
        // Récupérer les valeurs
        const name = nameInput ? nameInput.value : '';
        const email = emailInput ? emailInput.value : '';
        const phone = phoneInput ? phoneInput.value : '';
        const subject = subjectSelect ? subjectSelect.value : '';
        const message = messageTextarea ? messageTextarea.value : '';
        
        console.log('VALEURS BRUTES:', {
            name: `"${name}"`,
            email: `"${email}"`,
            subject: `"${subject}"`,
            message: `"${message.substring(0, 30)}"`
        });
        
        // Validation simple
        if (!name || name === '') {
            alert('Veuillez entrer votre nom');
            nameInput.focus();
            return;
        }
        
        if (!email || email === '') {
            alert('Veuillez entrer votre email');
            emailInput.focus();
            return;
        }
        
        if (!subject || subject === '') {
            alert('Veuillez sélectionner un objet');
            subjectSelect.focus();
            return;
        }
        
        if (!message || message === '') {
            alert('Veuillez entrer votre message');
            messageTextarea.focus();
            return;
        }
        
        // Envoi
        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        btn.textContent = '⏳ Envoi...';
        btn.disabled = true;
        
        try {
            const response = await emailjs.send(
                'service_1uxc8qr',
                'template_b88s4br',
                {
                    name: name,
                    email: email,
                    phone: phone || 'Non renseigné',
                    subject: subject,
                    message: message,
                    date: new Date().toLocaleString('fr-FR')
                }
            );
            
            console.log('✅ SUCCÈS!', response);
            alert('✅ Message envoyé avec succès !');
            form.reset();
            
        } catch (error) {
            console.error('❌ ERREUR:', error);
            alert('❌ Erreur: ' + (error.text || error.message));
        } finally {
            btn.textContent = originalText;
            btn.disabled = false;
        }
    };
    
    form.addEventListener('submit', form.submitHandler);
    console.log('✅ Écouteur ajouté (version test)');
});

// Fonction de debug
window.debugForm = function() {
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const subject = document.querySelector('#subject');
    const message = document.querySelector('#message');
    
    console.log('=== DEBUG FORMULAIRE ===');
    console.log('Name input:', name);
    console.log('Name value:', name ? name.value : 'NON TROUVÉ');
    console.log('Email input:', email);
    console.log('Email value:', email ? email.value : 'NON TROUVÉ');
    console.log('Subject input:', subject);
    console.log('Subject value:', subject ? subject.value : 'NON TROUVÉ');
    console.log('Message input:', message);
    console.log('Message value:', message ? message.value : 'NON TROUVÉ');
    console.log('=======================');
};