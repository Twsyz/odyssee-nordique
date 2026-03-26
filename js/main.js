// Menu Burger
document.addEventListener('DOMContentLoaded', function() {
    // Menu burger
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
    
    // Fermer le menu quand on clique sur un lien
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });
    
    // Bouton retour en haut
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Gestion du formulaire de contact
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupération des valeurs
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            const formMessage = document.getElementById('formMessage');
            
            // Validation simple
            if (!name || !email || !subject || !message) {
                formMessage.textContent = 'Veuillez remplir tous les champs obligatoires.';
                formMessage.className = 'form-message error';
                return;
            }
            
            if (!email.includes('@')) {
                formMessage.textContent = 'Veuillez entrer une adresse email valide.';
                formMessage.className = 'form-message error';
                return;
            }
            
            // Simulation d'envoi
            formMessage.textContent = 'Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.';
            formMessage.className = 'form-message success';
            
            // Réinitialisation du formulaire
            contactForm.reset();
            
            // Effacer le message après 5 secondes
            setTimeout(() => {
                formMessage.textContent = '';
                formMessage.className = 'form-message';
            }, 5000);
        });
    }
    
    // Animation des sections au scroll (Intersection Observer)
    const animateElements = document.querySelectorAll('.card, .philosophy-item, .stat-card, .gear-item, .fun-box');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Gestion de la carte de France pour les projections
    setupFranceMap();
});

// Fonction pour la carte de France interactive
function setupFranceMap() {
    const regions = document.querySelectorAll('.map-region');
    const projectionsList = document.getElementById('projections-list');
    
    if (!regions.length || !projectionsList) return;
    
    // Ajouter le nombre de projections sur chaque région
    if (typeof projectionsData !== 'undefined') {
        regions.forEach(region => {
            const regionId = region.id.replace('region-', '');
            const count = projectionsData.upcoming.filter(p => p.region === regionId).length;
            
            // Ajouter un titre avec le nombre
            const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
            title.textContent = `${regionId} - ${count} projection(s)`;
            region.appendChild(title);
        });
    }
    
    // Gestion du clic sur les régions
    regions.forEach(region => {
        region.addEventListener('click', function() {
            // Retirer la classe active de toutes les régions
            regions.forEach(r => r.classList.remove('active'));
            // Ajouter la classe active à la région cliquée
            this.classList.add('active');
            
            const regionId = this.id.replace('region-', '');
            displayProjectionsForRegion(regionId);
        });
    });
    
    // Afficher les projections passées
    displayPastProjections();
}

// Afficher les projections pour une région
function displayProjectionsForRegion(regionId) {
    const projectionsList = document.getElementById('projections-list');
    
    if (!projectionsList) return;
    
    if (typeof projectionsData === 'undefined') {
        projectionsList.innerHTML = '<p class="error-message">Erreur de chargement des données.</p>';
        return;
    }
    
    const regionProjections = projectionsData.upcoming.filter(p => p.region === regionId);
    
    if (regionProjections.length === 0) {
        projectionsList.innerHTML = `<p class="select-region-message">Aucune projection prévue dans cette région pour le moment.</p>`;
        return;
    }
    
    const regionNames = {
        'hauts-de-france': 'Hauts-de-France',
        'normandie': 'Normandie',
        'bretagne': 'Bretagne',
        'pays-de-la-loire': 'Pays de la Loire',
        'centre': 'Centre-Val de Loire',
        'ile-de-france': 'Île-de-France',
        'grand-est': 'Grand Est',
        'bourgogne': 'Bourgogne-Franche-Comté',
        'auvergne': 'Auvergne-Rhône-Alpes',
        'nouvelle-aquitaine': 'Nouvelle-Aquitaine',
        'occitanie': 'Occitanie',
        'paca': 'Provence-Alpes-Côte d\'Azur'
    };
    
    let html = `<h3>Projections en ${regionNames[regionId] || regionId}</h3><div class="projections-grid">`;
    
    regionProjections.forEach(projection => {
        html += `
            <div class="projection-item">
                <div class="projection-location">${projection.lieu}</div>
                <div class="projection-details">
                    ${projection.ville} - ${projection.date} à ${projection.horaire}
                </div>
                <a href="${projection.lien}" target="_blank" rel="noopener noreferrer" class="projection-link">Site du lieu →</a>
            </div>
        `;
    });
    
    html += '</div>';
    projectionsList.innerHTML = html;
}

// Afficher les projections passées
function displayPastProjections() {
    const pastList = document.getElementById('past-projections-list');
    
    if (!pastList) return;
    
    if (typeof projectionsData === 'undefined') {
        pastList.innerHTML = '<div class="error-message">Erreur de chargement des données.</div>';
        return;
    }
    
    if (projectionsData.past.length === 0) {
        pastList.innerHTML = '<div class="past-item">Aucune projection passée à afficher.</div>';
        return;
    }
    
    let html = '';
    projectionsData.past.forEach(projection => {
        html += `
            <div class="past-item">
                <strong>${projection.lieu}</strong> - ${projection.ville}<br>
                ${projection.date}
            </div>
        `;
    });
    
    pastList.innerHTML = html;
}