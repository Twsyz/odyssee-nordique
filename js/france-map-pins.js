// Carte de France avec pins interactifs

class FranceMapPins {
    constructor(imageId, projectionsListId) {
        this.image = document.getElementById(imageId);
        this.projectionsList = document.getElementById(projectionsListId);
        this.pins = [];
        this.activePin = null;
        this.tooltip = null;
        
        this.init();
    }
    
    init() {
        if (!this.image) {
            console.error('Image non trouvée');
            return;
        }
        
        console.log('📍 Initialisation de la carte avec pins');
        
        // Créer le conteneur pour les pins
        this.createPinsContainer();
        
        // Créer le tooltip
        this.createTooltip();
        
        // Ajouter les pins
        this.addPins();
        
        // Gérer le redimensionnement
        window.addEventListener('resize', () => {
            this.updatePinsPosition();
        });
        
        window.addEventListener('scroll', () => {
            this.updatePinsPosition();
        });
        
        // Afficher un message initial
        if (this.projectionsList) {
            this.projectionsList.innerHTML = '<p class="select-region-message">📍 Cliquez sur un pin pour voir les projections de la région</p>';
        }
        
        console.log('✅ Carte avec pins initialisée');
    }
    
    createPinsContainer() {
        this.pinsContainer = document.createElement('div');
        this.pinsContainer.className = 'pins-container';
        this.pinsContainer.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 20;
        `;
        
        const container = this.image.parentElement;
        container.style.position = 'relative';
        container.appendChild(this.pinsContainer);
    }
    
    createTooltip() {
        this.tooltip = document.createElement('div');
        this.tooltip.className = 'pin-tooltip';
        this.tooltip.style.cssText = `
            position: absolute;
            background: linear-gradient(135deg, #2C2A26 0%, #1a1916 100%);
            color: white;
            padding: 10px 18px;
            border-radius: 30px;
            font-size: 0.9rem;
            font-weight: 500;
            pointer-events: none;
            z-index: 1000;
            white-space: nowrap;
            opacity: 0;
            transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            box-shadow: 0 5px 20px rgba(0,0,0,0.2);
            font-family: 'Inter', sans-serif;
            border: 1px solid rgba(255,255,255,0.2);
            backdrop-filter: blur(5px);
        `;
        document.body.appendChild(this.tooltip);
    }
    
    addPins() {
        // Charger les données des régions
        Object.keys(franceRegions).forEach(regionId => {
            const region = franceRegions[regionId];
            const pin = this.createPin(regionId, region);
            this.pins.push({
                id: regionId,
                data: region,
                element: pin
            });
            this.pinsContainer.appendChild(pin);
        });
        
        // Mettre à jour les positions
        setTimeout(() => {
            this.updatePinsPosition();
        }, 100);
        
        console.log(`✅ ${this.pins.length} pins ajoutés`);
    }
    
    createPin(regionId, region) {
        const pin = document.createElement('div');
        pin.className = 'map-pin';
        pin.setAttribute('data-region', regionId);
        pin.setAttribute('data-name', region.name);
        
        // Style du pin
        pin.style.cssText = `
            position: absolute;
            cursor: pointer;
            pointer-events: auto;
            z-index: 30;
            transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            transform-origin: center;
        `;
        
        // Contenu du pin
        const count = this.getRegionCount(regionId);
        pin.innerHTML = `
            <div class="pin-marker" style="
                position: relative;
                width: 40px;
                height: 40px;
                background: linear-gradient(135deg, #9B8E6E 0%, #7E6F50 100%);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 4px 15px rgba(0,0,0,0.3);
                transition: all 0.3s ease;
                border: 2px solid rgba(255,255,255,0.3);
            ">
                <div style="
                    width: 12px;
                    height: 12px;
                    background: white;
                    border-radius: 50%;
                    animation: pulse 2s infinite;
                "></div>
                <div class="pin-count" style="
                    position: absolute;
                    top: -8px;
                    right: -8px;
                    background: #FF6B6B;
                    color: white;
                    border-radius: 50%;
                    width: 22px;
                    height: 22px;
                    display: ${count > 0 ? 'flex' : 'none'};
                    align-items: center;
                    justify-content: center;
                    font-size: 0.7rem;
                    font-weight: bold;
                    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
                    border: 2px solid white;
                ">${count}</div>
            </div>
            <div class="pin-shadow" style="
                position: absolute;
                bottom: -5px;
                left: 50%;
                transform: translateX(-50%);
                width: 30px;
                height: 8px;
                background: rgba(0,0,0,0.2);
                border-radius: 50%;
                filter: blur(3px);
                transition: all 0.3s ease;
            "></div>
        `;
        
        // Animation au survol
        pin.addEventListener('mouseenter', (e) => {
            const marker = pin.querySelector('.pin-marker');
            const shadow = pin.querySelector('.pin-shadow');
            marker.style.transform = 'scale(1.2)';
            marker.style.boxShadow = '0 6px 20px rgba(0,0,0,0.4)';
            shadow.style.transform = 'translateX(-50%) scale(1.2)';
            shadow.style.opacity = '0.6';
            
            this.showTooltip(e, region.name, count);
        });
        
        pin.addEventListener('mouseleave', () => {
            const marker = pin.querySelector('.pin-marker');
            const shadow = pin.querySelector('.pin-shadow');
            marker.style.transform = 'scale(1)';
            marker.style.boxShadow = '0 4px 15px rgba(0,0,0,0.3)';
            shadow.style.transform = 'translateX(-50%) scale(1)';
            shadow.style.opacity = '0.3';
            
            this.hideTooltip();
        });
        
        pin.addEventListener('click', () => {
            this.selectRegion(regionId, pin);
        });
        
        return pin;
    }
    
    updatePinsPosition() {
        if (!this.image) return;
        
        const imgRect = this.image.getBoundingClientRect();
        const containerRect = this.image.parentElement.getBoundingClientRect();
        
        // Calculer le ratio
        const imgWidth = this.image.naturalWidth;
        const imgHeight = this.image.naturalHeight;
        const displayWidth = imgRect.width;
        const displayHeight = imgRect.height;
        const scaleX = displayWidth / imgWidth;
        const scaleY = displayHeight / imgHeight;
        
        // Mettre à jour chaque pin
        this.pins.forEach(pin => {
            const coords = pin.data.coords;
            const centerX = coords[0] + (coords[2] - coords[0]) / 2;
            const centerY = coords[1] + (coords[3] - coords[1]) / 2;
            
            const x = centerX * scaleX;
            const y = centerY * scaleY;
            
            pin.element.style.left = `${x - 20}px`;
            pin.element.style.top = `${y - 40}px`;
        });
    }
    
    showTooltip(event, regionName, count) {
        if (!this.tooltip) return;
        
        const countText = count > 0 ? ` (${count} projection${count > 1 ? 's' : ''})` : ' (aucune projection)';
        this.tooltip.textContent = `${regionName}${countText}`;
        this.tooltip.style.opacity = '1';
        
        // Positionner le tooltip
        const rect = event.target.getBoundingClientRect();
        const tooltipX = rect.left + (rect.width / 2) - (this.tooltip.offsetWidth / 2);
        const tooltipY = rect.top - 50;
        
        this.tooltip.style.left = `${tooltipX}px`;
        this.tooltip.style.top = `${tooltipY}px`;
    }
    
    hideTooltip() {
        if (this.tooltip) {
            this.tooltip.style.opacity = '0';
        }
    }
    
    selectRegion(regionId, pinElement) {
        console.log('Région sélectionnée:', regionId);
        
        // Animation de sélection
        this.pins.forEach(pin => {
            const marker = pin.element.querySelector('.pin-marker');
            if (pin.id === regionId) {
                marker.style.animation = 'bounce 0.5s ease';
                marker.style.boxShadow = '0 0 0 4px rgba(155, 142, 110, 0.5)';
                setTimeout(() => {
                    marker.style.animation = '';
                }, 500);
                this.activePin = pin.element;
            } else {
                marker.style.boxShadow = '0 4px 15px rgba(0,0,0,0.3)';
            }
        });
        
        // Afficher les projections
        this.displayProjections(regionId);
    }
    
    displayProjections(regionId) {
        if (!this.projectionsList) return;
        
        const region = franceRegions[regionId];
        const regionName = region ? region.name : regionId;
        const regionProjections = projectionsData.upcoming.filter(p => p.region === regionId);
        
        if (regionProjections.length === 0) {
            this.projectionsList.innerHTML = `
                <div class="select-region-message" style="text-align: center; animation: fadeInUp 0.5s ease;">
                    <div style="font-size: 4rem; margin-bottom: 15px;">📍</div>
                    <h3 style="color: #9B8E6E; margin-bottom: 10px;">${regionName}</h3>
                    <p style="margin-bottom: 20px;">Aucune projection prévue dans cette région pour le moment.</p>
                    <a href="contact.html" class="btn btn-outline" style="margin-top: 10px;">
                        ✨ Proposer une projection
                    </a>
                </div>
            `;
            return;
        }
        
        let html = `
            <div style="margin-bottom: 25px; animation: fadeInUp 0.5s ease;">
                <h3 style="color: #9B8E6E; display: inline-block;">
                    📍 Projections en ${regionName}
                </h3>
                <span style="margin-left: 12px; background: linear-gradient(135deg, #9B8E6E, #7E6F50); color: white; padding: 5px 14px; border-radius: 25px; font-size: 0.85rem; font-weight: 500;">
                    🎬 ${regionProjections.length} projection${regionProjections.length > 1 ? 's' : ''}
                </span>
            </div>
            <div class="projections-grid">
        `;
        
        regionProjections.forEach((projection, index) => {
            html += `
                <div class="projection-item" style="animation: slideInRight 0.5s ease ${index * 0.1}s both;">
                    <div class="projection-location">
                        <span style="font-size: 1.2rem;">🎬</span> ${projection.lieu}
                    </div>
                    <div class="projection-details">
                        📍 ${projection.ville}<br>
                        📅 ${projection.date} à ${projection.horaire}
                    </div>
                    <a href="${projection.lien}" target="_blank" rel="noopener noreferrer" class="projection-link">
                        🔗 Réserver / Plus d'infos →
                    </a>
                </div>
            `;
        });
        
        html += `</div>`;
        this.projectionsList.innerHTML = html;
        
        // Animation de défilement
        setTimeout(() => {
            this.projectionsList.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 200);
    }
    
    getRegionCount(regionId) {
        return projectionsData.upcoming.filter(p => p.region === regionId).length;
    }
}

// Ajouter les animations CSS
const pinStyles = document.createElement('style');
pinStyles.textContent = `
    @keyframes pulse {
        0% {
            transform: scale(1);
            opacity: 1;
        }
        50% {
            transform: scale(1.2);
            opacity: 0.7;
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }
    
    @keyframes bounce {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.3);
        }
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(-30px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    .map-pin {
        animation: fadeInUp 0.5s ease;
    }
    
    .pin-marker {
        transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
    
    .pin-tooltip {
        animation: fadeInUp 0.2s ease;
    }
    
    .projection-item {
        transition: all 0.3s ease;
    }
    
    .projection-item:hover {
        transform: translateX(8px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    }
    
    .select-region-message {
        animation: fadeInUp 0.5s ease;
    }
`;
document.head.appendChild(pinStyles);

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    const mapImage = document.getElementById('france-map-image');
    
    if (mapImage) {
        if (mapImage.complete) {
            initMapPins();
        } else {
            mapImage.addEventListener('load', initMapPins);
        }
    }
    
    function initMapPins() {
        window.franceMap = new FranceMapPins('france-map-image', 'projections-list');
        displayPastProjectionsWithAnimation();
    }
});

// Afficher les projections passées avec animation
function displayPastProjectionsWithAnimation() {
    const pastList = document.getElementById('past-projections-list');
    
    if (!pastList) return;
    
    if (!projectionsData.past || projectionsData.past.length === 0) {
        pastList.innerHTML = '<div class="past-item">📭 Aucune projection passée à afficher.</div>';
        return;
    }
    
    let html = '';
    projectionsData.past.forEach((projection, index) => {
        html += `
            <div class="past-item" style="animation: slideInRight 0.5s ease ${index * 0.1}s both;">
                <strong>🎬 ${projection.lieu}</strong><br>
                📍 ${projection.ville}<br>
                📅 ${projection.date}
            </div>
        `;
    });
    
    pastList.innerHTML = html;
}

// Outil pour capturer les coordonnées des pins
window.capturePinCoordinates = function() {
    const img = document.getElementById('france-map-image');
    if (!img) return;
    
    console.log('📍 Mode capture activé - Cliquez sur le CENTRE de chaque région');
    console.log('Les coordonnées seront automatiquement copiées');
    
    const clicks = [];
    
    const clickHandler = function(e) {
        const rect = img.getBoundingClientRect();
        const scaleX = img.naturalWidth / rect.width;
        const scaleY = img.naturalHeight / rect.height;
        
        const x = (e.clientX - rect.left) * scaleX;
        const y = (e.clientY - rect.top) * scaleY;
        
        clicks.push({ x: Math.round(x), y: Math.round(y) });
        
        // Afficher un marqueur temporaire
        const marker = document.createElement('div');
        marker.style.cssText = `
            position: fixed;
            left: ${e.clientX - 5}px;
            top: ${e.clientY - 5}px;
            width: 10px;
            height: 10px;
            background: #FF6B6B;
            border-radius: 50%;
            pointer-events: none;
            z-index: 10000;
            animation: pulse 0.5s ease;
        `;
        document.body.appendChild(marker);
        setTimeout(() => marker.remove(), 500);
        
        console.log(`Point ${clicks.length}: [${Math.round(x)}, ${Math.round(y)}]`);
        
        if (clicks.length === Object.keys(franceRegions).length * 2) {
            console.log('=== TOUTES LES COORDONNÉES CAPTURÉES ===');
            console.log('Copiez ces valeurs dans france-map-data.js:');
            console.log(JSON.stringify(clicks, null, 2));
        }
    };
    
    img.addEventListener('click', clickHandler);
    
    setTimeout(() => {
        img.removeEventListener('click', clickHandler);
        console.log('⏹️ Mode capture désactivé après 60 secondes');
    }, 60000);
    
    return clickHandler;
};

// Fonction de test
window.testMapPins = function() {
    console.log('=== TEST CARTE PINS ===');
    console.log('Pins créés:', window.franceMap?.pins.length || 0);
    console.log('Projections disponibles:', projectionsData.upcoming.length);
    console.log('Carte initialisée:', !!window.franceMap);
    console.log('=== FIN TEST ===');
};