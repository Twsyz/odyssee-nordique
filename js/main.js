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
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            const formMessage = document.getElementById('formMessage');
            
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
            
            formMessage.textContent = 'Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.';
            formMessage.className = 'form-message success';
            contactForm.reset();
            
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
    
    // Animation de la route
    setupRouteAnimation();
});

// Animation de la route interactive
function setupRouteAnimation() {
    const routeSection = document.getElementById('routeSection');
    const routeFill = document.getElementById('route-fill');
    const progressFill = document.getElementById('progressFill');
    const currentCitySpan = document.getElementById('currentCity');
    const progressPercentageSpan = document.getElementById('progressPercentage');
    const distanceCoveredSpan = document.getElementById('distanceCovered');
    const citiesReachedSpan = document.getElementById('citiesReached');
    const waypoints = document.querySelectorAll('.waypoint');
    
    if (!routeSection || !routeFill) return;
    
    const cities = ['Oslo', 'Lillehammer', 'Trondheim', 'Bodø', 'Tromsø', 'Nordkapp', 'Rovaniemi', 'Helsinki', 'Stockholm'];
    const distances = [0, 180, 450, 850, 1200, 1650, 2100, 2650, 3200];
    const totalLength = routeFill.getTotalLength();

    routeFill.style.strokeDasharray = totalLength;
    routeFill.style.strokeDashoffset = totalLength;
    
    let animationPlayed = false;
    let currentProgress = 0;
    
    // Créer l'observateur pour déclencher l'animation
    const routeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animationPlayed) {
                animationPlayed = true;
                
                // Démarrer l'animation
                startRouteAnimation();
                
                // Unobserve après le début
                routeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    routeObserver.observe(routeSection);
    
    function startRouteAnimation() {
        // Fonction de mise à jour de la route
        function updateRoute(progress) {
            progress = Math.max(0, Math.min(1, progress));
            currentProgress = progress;
            
            // Appliquer l'animation de la route
            const dashOffset = totalLength * (1 - progress);
            routeFill.style.strokeDashoffset = dashOffset;
            
            // Mettre à jour la barre de progression
            if (progressFill) {
                progressFill.style.width = (progress * 100) + '%';
            }
            
            // Mettre à jour le pourcentage
            if (progressPercentageSpan) {
                progressPercentageSpan.textContent = Math.round(progress * 100) + '%';
            }
            
            // Mettre à jour la ville actuelle et les distances
            if (progress >= 1) {
                if (currentCitySpan) currentCitySpan.textContent = cities[cities.length - 1];
                if (distanceCoveredSpan) distanceCoveredSpan.textContent = distances[distances.length - 1];
                if (citiesReachedSpan) citiesReachedSpan.textContent = cities.length;
            } else if (progress <= 0) {
                if (currentCitySpan) currentCitySpan.textContent = cities[0];
                if (distanceCoveredSpan) distanceCoveredSpan.textContent = distances[0];
                if (citiesReachedSpan) citiesReachedSpan.textContent = 1;
            } else {
                const cityIndex = Math.floor(progress * (cities.length - 1));
                if (currentCitySpan) currentCitySpan.textContent = cities[cityIndex];
                if (distanceCoveredSpan) distanceCoveredSpan.textContent = distances[cityIndex];
                if (citiesReachedSpan) citiesReachedSpan.textContent = cityIndex + 1;
            }
            
            // Animation des points d'étape
            const currentIndex = Math.round(progress * (cities.length - 1));
                waypoints.forEach((waypoint, index) => {

                const waypointProgress = index / (waypoints.length - 1);

                if (progress >= waypointProgress) {

                    waypoint.style.fill = '#E8D9B0';
                    waypoint.style.stroke = '#9B8E6E';
                    waypoint.style.strokeWidth = '2';
                    waypoint.style.r = '12';
                    waypoint.style.filter = 'url(#glow)';

                } else {

                    waypoint.style.fill = '#D4C9B0';
                    waypoint.style.stroke = 'none';
                    waypoint.style.r = '8';
                    waypoint.style.filter = 'none';

                }

            });
        }
        
        // Gestion du scroll
        function handleScroll() {

            const rect = routeSection.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            let progress = (windowHeight - rect.top) / rect.height;

            progress = Math.max(0, Math.min(1, progress));

            updateRoute(progress);
        }
        
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        handleScroll();
    }
    
    // Animation des sections de statistiques
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const numberObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                let targetNumber = parseInt(element.textContent.replace(/[^0-9]/g, ''));
                
                if (!isNaN(targetNumber) && element.getAttribute('data-animated') !== 'true') {
                    element.setAttribute('data-animated', 'true');
                    const hasPlus = element.textContent.includes('+');
                    animateNumber(element, 0, targetNumber, 1500, hasPlus);
                }
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => {
        const originalValue = stat.textContent;
        stat.setAttribute('data-target', originalValue);
        const hasPlus = originalValue.includes('+');
        const numericValue = parseInt(originalValue.replace(/[^0-9]/g, ''));
        if (!isNaN(numericValue)) {
            stat.textContent = hasPlus ? '0+' : '0';
        }
        numberObserver.observe(stat);
    });
    
    function animateNumber(element, start, end, duration, hasPlus = false) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const currentValue = Math.floor(progress * (end - start) + start);
            element.textContent = hasPlus ? currentValue + '+' : currentValue;
            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                element.textContent = hasPlus ? end + '+' : end;
            }
        };
        window.requestAnimationFrame(step);
    }
    
    // Animation des éléments de philosophie
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
        const gearSection = document.querySelector('.gear');
        if (gearSection) {
            gearObserver.observe(gearSection);
        }
    }
}

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
            
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('viewBox', '0 0 40 50');
        svg.setAttribute('width', '40');
        svg.setAttribute('height', '50');
        svg.style.width = '100%';
        svg.style.height = '100%';
        svg.style.filter = 'drop-shadow(0 2px 6px rgba(0,0,0,0.2))';
        svg.style.transition = 'all 0.3s ease';
        svg.style.cursor = 'pointer';
        
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', 'M20 0C10 0 2 8 2 18C2 28 20 48 20 48C20 48 38 28 38 18C38 8 30 0 20 0Z');
        path.setAttribute('fill', '#9B8E6E');
        path.setAttribute('stroke', '#7E6F50');
        path.setAttribute('stroke-width', '1.5');
        
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', '20');
        circle.setAttribute('cy', '18');
        circle.setAttribute('r', '8');
        circle.setAttribute('fill', 'white');
        
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