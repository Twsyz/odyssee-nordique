// Données des régions pour la carte de France
// IMPORTANT: Ces coordonnées sont pour une image de référence
// Utilisez la fonction captureCoordinates() pour obtenir les bonnes coordonnées

const franceRegions = {
    'hauts-de-france': {
        name: 'Hauts-de-France',
        coords: [150, 80, 280, 150], // [x1, y1, x2, y2] en pixels (image originale)
        shape: 'rect',
        color: '#9B8E6E'
    },
    'normandie': {
        name: 'Normandie',
        coords: [80, 100, 180, 160],
        shape: 'rect',
        color: '#9B8E6E'
    },
    'bretagne': {
        name: 'Bretagne',
        coords: [40, 130, 130, 200],
        shape: 'rect',
        color: '#9B8E6E'
    },
    'pays-de-la-loire': {
        name: 'Pays de la Loire',
        coords: [100, 170, 190, 240],
        shape: 'rect',
        color: '#9B8E6E'
    },
    'centre': {
        name: 'Centre-Val de Loire',
        coords: [160, 150, 260, 220],
        shape: 'rect',
        color: '#9B8E6E'
    },
    'ile-de-france': {
        name: 'Île-de-France',
        coords: [220, 110, 290, 160],
        shape: 'rect',
        color: '#9B8E6E'
    },
    'grand-est': {
        name: 'Grand Est',
        coords: [280, 100, 390, 170],
        shape: 'rect',
        color: '#9B8E6E'
    },
    'bourgogne': {
        name: 'Bourgogne-Franche-Comté',
        coords: [240, 170, 340, 240],
        shape: 'rect',
        color: '#9B8E6E'
    },
    'auvergne': {
        name: 'Auvergne-Rhône-Alpes',
        coords: [210, 220, 320, 300],
        shape: 'rect',
        color: '#9B8E6E'
    },
    'nouvelle-aquitaine': {
        name: 'Nouvelle-Aquitaine',
        coords: [70, 220, 180, 320],
        shape: 'rect',
        color: '#9B8E6E'
    },
    'occitanie': {
        name: 'Occitanie',
        coords: [150, 280, 270, 370],
        shape: 'rect',
        color: '#9B8E6E'
    },
    'paca': {
        name: 'Provence-Alpes-Côte d\'Azur',
        coords: [280, 280, 380, 360],
        shape: 'rect',
        color: '#9B8E6E'
    }
};

// Le reste des données reste identique
const projectionsData = {
    upcoming: [
        {
            region: "ile-de-france",
            lieu: "Cinéma Le Méliès",
            ville: "Paris",
            date: "15/03/2025",
            horaire: "20:00",
            lien: "https://www.exemple.com/melies"
        },
        {
            region: "ile-de-france",
            lieu: "Médiathèque de Montreuil",
            ville: "Montreuil",
            date: "22/03/2025",
            horaire: "18:30",
            lien: "https://www.exemple.com/mediatheque-montreuil"
        },
        {
            region: "auvergne",
            lieu: "Cinéma Le Comoedia",
            ville: "Lyon",
            date: "05/04/2025",
            horaire: "19:30",
            lien: "https://www.exemple.com/comoedia"
        },
        {
            region: "occitanie",
            lieu: "Cinéma Utopia",
            ville: "Toulouse",
            date: "12/04/2025",
            horaire: "20:30",
            lien: "https://www.exemple.com/utopia"
        },
        {
            region: "nouvelle-aquitaine",
            lieu: "Cinéma Le Grand Ecran",
            ville: "Bordeaux",
            date: "18/04/2025",
            horaire: "19:00",
            lien: "https://www.exemple.com/grand-ecran"
        },
        {
            region: "bretagne",
            lieu: "Cinéma La Belle Equipe",
            ville: "Rennes",
            date: "26/04/2025",
            horaire: "20:00",
            lien: "https://www.exemple.com/belle-equipe"
        },
        {
            region: "normandie",
            lieu: "Théâtre de Caen",
            ville: "Caen",
            date: "03/05/2025",
            horaire: "18:00",
            lien: "https://www.exemple.com/theatre-caen"
        },
        {
            region: "grand-est",
            lieu: "Cinéma Star",
            ville: "Strasbourg",
            date: "10/05/2025",
            horaire: "20:30",
            lien: "https://www.exemple.com/star"
        },
        {
            region: "hauts-de-france",
            lieu: "Cinéma Le Majestic",
            ville: "Lille",
            date: "17/05/2025",
            horaire: "19:00",
            lien: "https://www.exemple.com/majestic"
        },
        {
            region: "paca",
            lieu: "Cinéma Le Cézanne",
            ville: "Aix-en-Provence",
            date: "24/05/2025",
            horaire: "20:00",
            lien: "https://www.exemple.com/cezanne"
        }
    ],
    
    past: [
        {
            lieu: "Cinéma Le Variétés",
            ville: "Marseille",
            date: "01/02/2025"
        },
        {
            lieu: "Salle des fêtes",
            ville: "Nantes",
            date: "25/01/2025"
        },
        {
            lieu: "Médiathèque de Lille",
            ville: "Lille",
            date: "18/01/2025"
        },
        {
            lieu: "Cinéma Le Trianon",
            ville: "Brest",
            date: "11/01/2025"
        },
        {
            lieu: "Cinéma Le Royal",
            ville: "Strasbourg",
            date: "04/01/2025"
        }
    ]
};