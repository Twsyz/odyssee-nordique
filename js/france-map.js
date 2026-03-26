// Carte de France interactive avec image map

class FranceMap {
    constructor(imageId, mapId, projectionsListId) {
        this.image = document.getElementById(imageId);
        this.map = document.getElementById(mapId);
        this.projectionsList = document.getElementById(projectionsListId);
        this.activeRegion = null;
        
        this.init();
    }
    
    init() {
        if (!this.image || !this.map) {
            console.error('Carte ou image non trouvée');
            return;
        }
        
        // Ajouter les zones cliquables
        this.createMapAreas();
        
        // Ajouter les compteurs sur les régions
        this.addRegionCounters();
        
        // Afficher un message initial
        if (this.projectionsList) {
            this.projectionsList.innerHTML = '<p class="select-region-message">🗺️ Cliquez sur une région pour voir les projections</p>';
        }
        
        console.log('✅ Carte de France initialisée');
    }
    
    createMapAreas() {
        // Vider la map existante
        this.map.innerHTML = '';
        
        // Parcourir les régions
        Object.keys(franceRegions).forEach(regionId => {
            const region = franceRegions[regionId];
            const area = document.createElement('area');
            area.setAttribute('shape', region.shape);
            area.setAttribute('coords', region.coords.join(','));
            area.setAttribute('href', '#');
            area.setAttribute('data-region', regionId);
            area.setAttribute('title', region.name);
            area.classList.add('map-region');
            
            // Ajouter l'événement click
            area.addEventListener('click', (e) => {
                e.preventDefault();
                this.selectRegion(regionId);
            });
            
            this.map.appendChild(area);
        });
        
        console.log(`✅ ${Object.keys(franceRegions).length} régions ajoutées`);
    }
    
    addRegionCounters() {
        // Compter les projections par région
        const counts = {};
        projectionsData.upcoming.forEach(p => {
            counts[p.region] = (counts[p.region] || 0) + 1;
        });
        
        // Ajouter les compteurs (optionnel - nécessite de connaître la position)
        // On peut les ajouter via CSS ou les ignorer pour l'instant
        console.log('Compteurs par région:', counts);
    }
    
    selectRegion(regionId) {
        console.log('Région sélectionnée:', regionId);
        
        // Mettre à jour la classe active
        const areas = this.map.querySelectorAll('area');
        areas.forEach(area => {
            if (area.dataset.region === regionId) {
                area.classList.add('active');
            } else {
                area.classList.remove('active');
            }
        });
        
        this.activeRegion = regionId;
        this.displayProjections(regionId);
    }
    
    displayProjections(regionId) {
        if (!this.projectionsList) return;
        
        const regionName = franceRegions[regionId]?.name || regionId;
        const regionProjections = projectionsData.upcoming.filter(p => p.region === regionId);
        
        if (regionProjections.length === 0) {
            this.projectionsList.innerHTML = `
                <div class="select-region-message">
                    📍 ${regionName}<br>
                    Aucune projection prévue dans cette région pour le moment.<br>
                    <a href="contact.html" style="color: #9B8E6E; margin-top: 10px; display: inline-block;">📧 Contactez-nous pour organiser une projection →</a>
                </div>
            `;
            return;
        }
        
        let html = `
            <h3 style="margin-bottom: 20px; color: #9B8E6E;">
                📍 Projections en ${regionName}
                <span style="font-size: 0.9rem; color: #666;">(${regionProjections.length} projection${regionProjections.length > 1 ? 's' : ''})</span>
            </h3>
            <div class="projections-grid">
        `;
        
        regionProjections.forEach(projection => {
            html += `
                <div class="projection-item">
                    <div class="projection-location">${projection.lieu}</div>
                    <div class="projection-details">
                        📍 ${projection.ville}<br>
                        📅 ${projection.date} à ${projection.horaire}
                    </div>
                    <a href="${projection.lien}" target="_blank" rel="noopener noreferrer" class="projection-link">
                        🔗 Informations et réservation →
                    </a>
                </div>
            `;
        });
        
        html += `</div>`;
        this.projectionsList.innerHTML = html;
        
        // Faire défiler jusqu'à la liste
        this.projectionsList.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    
    getRegionCount(regionId) {
        return projectionsData.upcoming.filter(p => p.region === regionId).length;
    }
}

// Initialisation quand la page est chargée
document.addEventListener('DOMContentLoaded', function() {
    // Vérifier qu'on est sur la page projections
    if (document.getElementById('france-map-image')) {
        window.franceMap = new FranceMap('france-map-image', 'france-map', 'projections-list');
    }
    
    // Afficher les projections passées
    displayPastProjections();
});

// Afficher les projections passées
function displayPastProjections() {
    const pastList = document.getElementById('past-projections-list');
    
    if (!pastList) return;
    
    if (projectionsData.past.length === 0) {
        pastList.innerHTML = '<div class="past-item">Aucune projection passée à afficher.</div>';
        return;
    }
    
    let html = '';
    projectionsData.past.forEach(projection => {
        html += `
            <div class="past-item">
                <strong>${projection.lieu}</strong><br>
                📍 ${projection.ville}<br>
                📅 ${projection.date}
            </div>
        `;
    });
    
    pastList.innerHTML = html;
}

// Fonction de test
window.testFranceMap = function() {
    console.log('=== TEST CARTE FRANCE ===');
    console.log('Régions disponibles:', Object.keys(franceRegions).length);
    console.log('Projections à venir:', projectionsData.upcoming.length);
    console.log('Projections passées:', projectionsData.past.length);
    console.log('Carte initialisée:', !!window.franceMap);
    console.log('=== FIN TEST ===');
};