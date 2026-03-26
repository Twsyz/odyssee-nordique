// Animation de la route au scroll pour la page voyage

document.addEventListener('DOMContentLoaded', function() {
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
});