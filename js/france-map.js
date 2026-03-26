// Carte de France interactive avancée avec adaptation responsive

class FranceMapAdvanced {
    constructor(imageId, projectionsListId) {
        this.image = document.getElementById(imageId);
        this.projectionsList = document.getElementById(projectionsListId);
        this.regions = [];
        this.activeRegion = null;
        this.tooltip = null;
        this.overlay = null;
        
        this.init();
    }
    
    init() {
        if (!this.image) {
            console.error('Image non trouvée');
            return;
        }
        
        console.log('🗺️ Initialisation de la carte interactive');
        
        // Créer le tooltip
        this.createTooltip();
        
        // Créer l'overlay pour les zones cliquables
        this.createOverlay();
        
        // Ajouter les zones
        this.addRegions();
        
        // Gérer le redimensionnement
        window.addEventListener('resize', () => {
            this.updateRegionsPosition();
        });
        
        // Gérer le scroll
        window.addEventListener('scroll', () => {
            this.updateRegionsPosition();
        });
        
        // Afficher un message initial
        if (this.projectionsList) {
            this.projectionsList.innerHTML = '<p class="select-region-message">🗺️ Cliquez sur une région pour voir les projections</p>';
        }
        
        console.log('✅ Carte interactive initialisée');
    }
    
    createTooltip() {
        this.tooltip = document.createElement('div');
        this.tooltip.className = 'region-tooltip';
        this.tooltip.style.cssText = `
            position: absolute;
            background: rgba(44, 42, 38, 0.95);
            color: white;
            padding: 8px 15px;
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: 500;
            pointer-events: none;
            z-index: 1000;
            white-space: nowrap;
            transition: opacity 0.2s ease;
            opacity: 0;
            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
            font-family: 'Inter', sans-serif;
        `;
        document.body.appendChild(this.tooltip);
    }
    
    createOverlay() {
        // Créer un conteneur pour les zones cliquables
        this.overlay = document.createElement('div');
        this.overlay.className = 'regions-overlay';
        this.overlay.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 10;
        `;
        
        // Positionner l'overlay sur l'image
        const container = this.image.parentElement;
        container.style.position = 'relative';
        container.appendChild(this.overlay);
    }
    
    addRegions() {
        // Charger les données des régions depuis france-map-data.js
        Object.keys(franceRegions).forEach(regionId => {
            const region = franceRegions[regionId];
            const regionElement = this.createRegionElement(regionId, region);
            this.regions.push({
                id: regionId,
                data: region,
                element: regionElement
            });
            this.overlay.appendChild(regionElement);
        });
        
        // Mettre à jour les positions
        this.updateRegionsPosition();
        
        console.log(`✅ ${this.regions.length} régions ajoutées`);
    }
    
    createRegionElement(regionId, region) {
        const element = document.createElement('div');
        element.className = 'region-hotspot';
        element.setAttribute('data-region', regionId);
        element.setAttribute('data-name', region.name);
        
        // Style de la zone cliquable
        element.style.cssText = `
            position: absolute;
            cursor: pointer;
            background: rgba(155, 142, 110, 0);
            transition: all 0.3s ease;
            pointer-events: auto;
            z-index: 20;
        `;
        
        // Événements
        element.addEventListener('mouseenter', (e) => {
            this.showTooltip(e, region.name);
            element.style.background = 'rgba(155, 142, 110, 0.3)';
            element.style.border = '2px solid #9B8E6E';
        });
        
        element.addEventListener('mouseleave', () => {
            this.hideTooltip();
            if (this.activeRegion !== regionId) {
                element.style.background = 'rgba(155, 142, 110, 0)';
                element.style.border = 'none';
            }
        });
        
        element.addEventListener('click', () => {
            this.selectRegion(regionId);
        });
        
        return element;
    }
    
    updateRegionsPosition() {
        if (!this.image) return;
        
        // Obtenir les dimensions et position de l'image
        const imgRect = this.image.getBoundingClientRect();
        const containerRect = this.image.parentElement.getBoundingClientRect();
        
        // Calculer le ratio de l'image
        const imgWidth = this.image.naturalWidth;
        const imgHeight = this.image.naturalHeight;
        const displayWidth = imgRect.width;
        const displayHeight = imgRect.height;
        const scaleX = displayWidth / imgWidth;
        const scaleY = displayHeight / imgHeight;
        
        // Mettre à jour chaque région
        this.regions.forEach(region => {
            const coords = region.data.coords;
            const element = region.element;
            
            // Convertir les coordonnées originales en pixels affichés
            const x1 = coords[0] * scaleX;
            const y1 = coords[1] * scaleY;
            const x2 = coords[2] * scaleX;
            const y2 = coords[3] * scaleY;
            
            const width = x2 - x1;
            const height = y2 - y1;
            
            element.style.left = `${x1}px`;
            element.style.top = `${y1}px`;
            element.style.width = `${width}px`;
            element.style.height = `${height}px`;
        });
    }
    
    showTooltip(event, regionName) {
        if (!this.tooltip) return;
        
        // Compter les projections dans cette région
        const count = this.getRegionCount(event.target.getAttribute('data-region'));
        const countText = count > 0 ? ` (${count} projection${count > 1 ? 's' : ''})` : '';
        
        this.tooltip.textContent = `${regionName}${countText}`;
        this.tooltip.style.opacity = '1';
        
        // Positionner le tooltip
        const rect = event.target.getBoundingClientRect();
        const tooltipX = rect.left + (rect.width / 2) - (this.tooltip.offsetWidth / 2);
        const tooltipY = rect.top - 35;
        
        this.tooltip.style.left = `${tooltipX}px`;
        this.tooltip.style.top = `${tooltipY}px`;
    }
    
    hideTooltip() {
        if (this.tooltip) {
            this.tooltip.style.opacity = '0';
        }
    }
    
    selectRegion(regionId) {
        console.log('Région sélectionnée:', regionId);
        
        // Mettre à jour le style de la région active
        this.regions.forEach(region => {
            const element = region.element;
            if (region.id === regionId) {
                element.style.background = 'rgba(155, 142, 110, 0.5)';
                element.style.border = '2px solid #9B8E6E';
                element.style.boxShadow = '0 0 0 2px rgba(155, 142, 110, 0.3)';
                this.activeRegion = regionId;
            } else {
                element.style.background = 'rgba(155, 142, 110, 0)';
                element.style.border = 'none';
                element.style.boxShadow = 'none';
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
                <div class="select-region-message" style="text-align: center;">
                    <div style="font-size: 3rem; margin-bottom: 15px;">📍</div>
                    <h3 style="color: #9B8E6E; margin-bottom: 10px;">${regionName}</h3>
                    <p style="margin-bottom: 20px;">Aucune projection prévue dans cette région pour le moment.</p>
                    <a href="contact.html" class="btn btn-outline" style="margin-top: 10px;">
                        📧 Proposer une projection
                    </a>
                </div>
            `;
            return;
        }
        
        let html = `
            <div style="margin-bottom: 20px;">
                <h3 style="color: #9B8E6E; display: inline-block;">
                    📍 Projections en ${regionName}
                </h3>
                <span style="margin-left: 10px; background: #9B8E6E; color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.9rem;">
                    ${regionProjections.length} projection${regionProjections.length > 1 ? 's' : ''}
                </span>
            </div>
            <div class="projections-grid">
        `;
        
        regionProjections.forEach(projection => {
            html += `
                <div class="projection-item">
                    <div class="projection-location">🎬 ${projection.lieu}</div>
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
        }, 100);
    }
    
    getRegionCount(regionId) {
        return projectionsData.upcoming.filter(p => p.region === regionId).length;
    }
}

// Attendre le chargement de l'image
document.addEventListener('DOMContentLoaded', function() {
    // Vérifier qu'on est sur la page projections
    const mapImage = document.getElementById('france-map-image');
    
    if (mapImage) {
        // Attendre que l'image soit chargée
        if (mapImage.complete) {
            initMap();
        } else {
            mapImage.addEventListener('load', initMap);
        }
    }
    
    function initMap() {
        window.franceMap = new FranceMapAdvanced('france-map-image', 'projections-list');
        
        // Afficher les projections passées
        displayPastProjectionsAdvanced();
    }
});

// Afficher les projections passées
function displayPastProjectionsAdvanced() {
    const pastList = document.getElementById('past-projections-list');
    
    if (!pastList) return;
    
    if (!projectionsData.past || projectionsData.past.length === 0) {
        pastList.innerHTML = '<div class="past-item">📭 Aucune projection passée à afficher.</div>';
        return;
    }
    
    let html = '';
    projectionsData.past.forEach(projection => {
        html += `
            <div class="past-item" style="animation: slideIn 0.3s ease;">
                <strong>🎬 ${projection.lieu}</strong><br>
                📍 ${projection.ville}<br>
                📅 ${projection.date}
            </div>
        `;
    });
    
    pastList.innerHTML = html;
}

// Ajouter les animations CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    .region-hotspot {
        transition: all 0.2s ease;
        border-radius: 4px;
    }
    
    .region-hotspot:hover {
        background: rgba(155, 142, 110, 0.3) !important;
        border: 2px solid #9B8E6E !important;
        transform: scale(1.02);
    }
    
    .region-tooltip {
        animation: tooltipFade 0.2s ease;
    }
    
    @keyframes tooltipFade {
        from {
            opacity: 0;
            transform: translateY(5px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .projections-grid {
        animation: fadeIn 0.5s ease;
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Fonction de test
window.testMapCoordinates = function() {
    console.log('=== TEST COORDONNÉES ===');
    console.log('Image chargée:', document.getElementById('france-map-image').complete);
    console.log('Régions actives:', window.franceMap ? window.franceMap.regions.length : 0);
    console.log('Tooltip créé:', !!window.franceMap?.tooltip);
    console.log('=== FIN TEST ===');
};

// Outil pour capturer les coordonnées (à utiliser pour calibrer)
window.captureCoordinates = function() {
    const img = document.getElementById('france-map-image');
    if (!img) return;
    
    console.log('Cliquez sur l\'image pour capturer les coordonnées...');
    
    const clickHandler = function(e) {
        const rect = img.getBoundingClientRect();
        const scaleX = img.naturalWidth / rect.width;
        const scaleY = img.naturalHeight / rect.height;
        
        const x = (e.clientX - rect.left) * scaleX;
        const y = (e.clientY - rect.top) * scaleY;
        
        console.log(`Coordonnées originales: [${Math.round(x)}, ${Math.round(y)}]`);
        console.log(`Pour l'image naturelle (${img.naturalWidth}x${img.naturalHeight})`);
        
        // Copier dans le presse-papier
        const coordText = `[${Math.round(x)}, ${Math.round(y)}]`;
        navigator.clipboard.writeText(coordText);
        console.log(`📋 Coordonnées copiées: ${coordText}`);
    };
    
    img.addEventListener('click', clickHandler);
    console.log('✅ Mode capture activé - cliquez sur l\'image');
    
    // Désactiver après 30 secondes
    setTimeout(() => {
        img.removeEventListener('click', clickHandler);
        console.log('⏹️ Mode capture désactivé');
    }, 30000);
};