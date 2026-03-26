// Configuration des villes
const cities = [
    { name: 'Oslo', x: 50 },
    { name: 'Lillehammer', x: 150 },
    { name: 'Trondheim', x: 250 },
    { name: 'Bodø', x: 350 },
    { name: 'Tromsø', x: 450 },
    { name: 'Nordkapp', x: 550 },
    { name: 'Rovaniemi', x: 650 },
    { name: 'Helsinki', x: 750 },
    { name: 'Stockholm', x: 850 }
];

// Sélectionner les éléments
const routeSection = document.querySelector('.route-animation-section');
const routeFill = document.getElementById('route-fill');
const scrollSpacer = document.getElementById('scrollSpacer');
const progressFill = document.getElementById('progressFill');
const currentCitySpan = document.getElementById('currentCity');
const progressPercentage = document.getElementById('progressPercentage');

// Obtenir la longueur du chemin SVG
let pathLength = 0;

// Flag pour tracker si l'animation a commencé
let animationActive = false;

// Initialiser quand le DOM est prêt
function initializeAnimation() {
    try {
        pathLength = routeFill.getTotalLength();
        routeFill.style.strokeDasharray = pathLength;
        routeFill.style.strokeDashoffset = pathLength;
    } catch (e) {
        console.log('SVG non encore chargé');
    }
}

// IntersectionObserver pour détecter quand la section est visible
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !animationActive) {
            animationActive = true;
            if (pathLength === 0) {
                initializeAnimation();
            }
            window.addEventListener('scroll', handleRouteScroll);
        }
    });
}, { threshold: 0.1 });

observer.observe(scrollSpacer);

// Fonction pour gérer le scroll et animer la route
function handleRouteScroll() {
    if (!animationActive || pathLength === 0) return;

    const spacerTop = scrollSpacer.offsetTop;
    const spacerHeight = scrollSpacer.offsetHeight;
    const scrollY = window.scrollY;
    
    // Calculer le pourcentage de scroll (0 à 1)
    const scrollProgress = Math.max(0, Math.min(1, 
        (scrollY - spacerTop) / spacerHeight
    ));
    
    // Animer le stroke-dashoffset (de pathLength à 0)
    const offset = pathLength * (1 - scrollProgress);
    routeFill.style.strokeDashoffset = offset;
    
    // Mettre à jour la barre de progression
    const progressPercent = Math.round(scrollProgress * 100);
    progressFill.style.width = progressPercent + '%';
    progressPercentage.textContent = progressPercent + '%';
    
    // Mettre à jour la ville actuelle
    const currentIndex = Math.floor(scrollProgress * (cities.length - 1));
    currentCitySpan.textContent = cities[Math.min(currentIndex, cities.length - 1)].name;
    
    // Ajouter/retirer la classe active sur les points d'étape
    updateWaypoints(scrollProgress);
}

// Fonction pour mettre à jour les waypoints
function updateWaypoints(scrollProgress) {
    const waypoints = document.querySelectorAll('.waypoint');
    const currentIndex = scrollProgress * (cities.length - 1);
    
    waypoints.forEach((waypoint, index) => {
        if (index <= currentIndex) {
            waypoint.style.fill = '#9B8E6E';
            waypoint.style.opacity = '1';
            waypoint.style.r = '8';
        } else {
            waypoint.style.r = '6';
            waypoint.style.opacity = '0.5';
        }
    });
}

// Initialiser quand le DOM est chargé
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeAnimation);
} else {
    initializeAnimation();
}
