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
    if (typeof projectionsData === 'undefined') return;
    
    const projectionsList = document.getElementById('projections-list');
    const mapContainer = document.querySelector('.map-container');
    const mapImage = document.querySelector('.france-map-image');
    
    if (!projectionsList || !mapContainer || !mapImage) return;
    
    // Créer l'overlay de pins
    let pinsOverlay = document.querySelector('.pins-overlay');
    if (!pinsOverlay) {
        pinsOverlay = document.createElement('div');
        pinsOverlay.className = 'pins-overlay';
        pinsOverlay.style.position = 'absolute';
        pinsOverlay.style.top = '0';
        pinsOverlay.style.left = '0';
        pinsOverlay.style.width = '100%';
        pinsOverlay.style.height = '100%';
        pinsOverlay.style.pointerEvents = 'all';
        pinsOverlay.style.zIndex = '20';
        pinsOverlay.style.borderRadius = '12px';
        mapContainer.style.position = 'relative';
        mapContainer.appendChild(pinsOverlay);
    }
    
    // Créer le tooltip
    let tooltip = document.querySelector('.pin-tooltip');
    if (!tooltip) {
        tooltip = document.createElement('div');
        tooltip.className = 'pin-tooltip';
        tooltip.style.position = 'fixed';
        tooltip.style.background = 'rgba(44, 42, 38, 0.95)';
        tooltip.style.color = 'white';
        tooltip.style.padding = '8px 12px';
        tooltip.style.borderRadius = '6px';
        tooltip.style.fontSize = '0.85rem';
        tooltip.style.fontWeight = '500';
        tooltip.style.pointerEvents = 'none';
        tooltip.style.zIndex = '1000';
        tooltip.style.whiteSpace = 'nowrap';
        tooltip.style.opacity = '0';
        tooltip.style.transition = 'opacity 0.2s ease';
        tooltip.style.boxShadow = '0 2px 8px rgba(0,0,0,0.3)';
        tooltip.style.border = '1px solid rgba(255,255,255,0.1)';
        document.body.appendChild(tooltip);
    }
    
    // Coordonnées des régions (% de l'image)
    const regionCoordinates = {
        'ile-de-france': { x: 53, y: 30 },
        'hauts-de-france': { x: 54, y: 19 },
        'normandie': { x: 39, y: 27 },
        'bretagne': { x: 20, y: 33 },
        'pays-de-la-loire': { x: 35, y: 39 },
        'centre': { x: 48, y: 42 },
        'grand-est': { x: 72, y: 30 },
        'bourgogne': { x: 67, y: 44 },
        'auvergne': { x: 72, y: 59 },
        'nouvelle-aquitaine': { x: 40, y: 62 },
        'occitanie': { x: 53, y: 73 },
        'paca': { x: 77, y: 75 }
    };
    
    // Créer les pins pour chaque région
    Object.keys(regionCoordinates).forEach(regionId => {
        const count = projectionsData.upcoming.filter(p => p.region === regionId).length;
        const coords = regionCoordinates[regionId];
        
        // Vérifier si le pin existe déjà
        if (document.querySelector(`[data-region="${regionId}"]`)) return;
        
        const pin = document.createElement('div');
        pin.className = 'projection-pin';
        pin.style.position = 'absolute';
        pin.style.left = coords.x + '%';
        pin.style.top = coords.y + '%';
        pin.style.width = '40px';
        pin.style.height = '50px';
        pin.style.transform = 'translate(-50%, -100%)';
        pin.style.cursor = (count > 0) ? 'pointer' : 'default';
        pin.style.zIndex = (count > 0) ? '21' : '10';
        pin.style.opacity = (count > 0) ? '1' : '0.4';
        pin.dataset.region = regionId;
        pin.dataset.count = count;
            
            // Créer le SVG du pin
            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.setAttribute('viewBox', '0 0 40 50');
            svg.setAttribute('width', '40');
            svg.setAttribute('height', '50');
            svg.style.width = '100%';
            svg.style.height = '100%';
            svg.style.filter = 'drop-shadow(0 2px 6px rgba(0,0,0,0.2))';
            svg.style.transition = 'all 0.3s ease';
            svg.style.cursor = 'pointer';
            
            // Corps du pin (goutte)
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', 'M20 0C10 0 2 8 2 18C2 28 20 48 20 48C20 48 38 28 38 18C38 8 30 0 20 0Z');
            path.setAttribute('fill', '#9B8E6E');
            path.setAttribute('stroke', '#7E6F50');
            path.setAttribute('stroke-width', '1.5');
            
            // Cercle blanc au centre
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', '20');
            circle.setAttribute('cy', '18');
            circle.setAttribute('r', '8');
            circle.setAttribute('fill', 'white');
            
            // Nombre de projections
            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('x', '20');
            text.setAttribute('y', '22');
            text.setAttribute('text-anchor', 'middle');
            text.setAttribute('font-size', '14');
            text.setAttribute('font-weight', 'bold');
            text.setAttribute('fill', '#9B8E6E');
            text.textContent = count;
            
            svg.appendChild(path);
            svg.appendChild(circle);
            svg.appendChild(text);
            pin.appendChild(svg);
            
            pinsOverlay.appendChild(pin);
            
            // Noms des régions
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
            
            // Événements du pin
            pin.addEventListener('mouseenter', () => {
                svg.style.transform = 'scale(1.25)';
                svg.style.filter = 'drop-shadow(0 4px 12px rgba(155, 142, 110, 0.4))';
                
                const regionName = regionNames[regionId] || regionId;
                tooltip.textContent = `${regionName} (${count} projection${count > 1 ? 's' : ''})`;
                tooltip.style.opacity = '1';
                
                const rect = pin.getBoundingClientRect();
                tooltip.style.left = (rect.left + rect.width / 2) + 'px';
                tooltip.style.top = (rect.top - 50) + 'px';
                tooltip.style.transform = 'translateX(-50%)';
            });
            
            pin.addEventListener('mouseleave', () => {
                svg.style.transform = 'scale(1)';
                svg.style.filter = 'drop-shadow(0 2px 6px rgba(0,0,0,0.2))';
                tooltip.style.opacity = '0';
            });
            
            pin.addEventListener('click', () => {
                if (count > 0) {
                    displayProjectionsForRegion(regionId);
                    projectionsList.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
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

// Animation de la route au scroll pour la page voyage
function setupVoyageAnimations() {
    const routeFill = document.querySelector('.route-fill');
    
    if (!routeFill) return;
    
    // Observer pour l'animation de la route
    const routeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                routeFill.classList.add('visible');
                routeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    routeObserver.observe(routeFill);
    
    // Animation des points d'étape au scroll
    const waypoints = document.querySelectorAll('.waypoint');
    
    const waypointObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.r = '8';
                entry.target.style.transition = 'r 0.3s ease';
                waypointObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    waypoints.forEach(waypoint => {
        waypointObserver.observe(waypoint);
    });
    
    // Animation des sections de statistiques
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const numberObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const targetNumber = parseInt(element.textContent);
                
                if (!isNaN(targetNumber) && element.getAttribute('data-animated') !== 'true') {
                    element.setAttribute('data-animated', 'true');
                    animateNumber(element, 0, targetNumber, 1500);
                }
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => {
        // Sauvegarder la valeur originale
        const originalValue = stat.textContent;
        stat.setAttribute('data-target', originalValue);
        stat.textContent = '0';
        numberObserver.observe(stat);
    });
    
    // Fonction d'animation des nombres
    function animateNumber(element, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const currentValue = Math.floor(progress * (end - start) + start);
            element.textContent = currentValue;
            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                element.textContent = end;
            }
        };
        window.requestAnimationFrame(step);
    }
    
    // Animation du texte de l'intro voyage
    const travelPhilosophy = document.querySelector('.travel-philosophy');
    const philosophyItems = document.querySelectorAll('.philosophy-item');
    
    const philosophyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                philosophyItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, index * 100);
                });
                philosophyObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    if (travelPhilosophy) {
        philosophyItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });
        philosophyObserver.observe(travelPhilosophy);
    }
    
    // Animation des éléments de matériel
    const gearItems = document.querySelectorAll('.gear-item');
    
    const gearObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                gearItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, index * 150);
                });
                gearObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    if (gearItems.length) {
        gearItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        });
        gearObserver.observe(document.querySelector('.gear'));
    }
}

// Appeler les animations de voyage si on est sur la page voyage
setupVoyageAnimations();