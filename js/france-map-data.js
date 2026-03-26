// Données des régions pour la carte de France
// Coordonnées des zones cliquables (à ajuster selon votre image)

const franceRegions = {
    'hauts-de-france': {
        name: 'Hauts-de-France',
        coords: [450, 100, 550, 150], // [x1, y1, x2, y2] pour rectangle
        shape: 'rect'
    },
    'normandie': {
        name: 'Normandie',
        coords: [350, 120, 440, 150],
        shape: 'rect'
    },
    'bretagne': {
        name: 'Bretagne',
        coords: [250, 150, 330, 200],
        shape: 'rect'
    },
    'pays-de-la-loire': {
        name: 'Pays de la Loire',
        coords: [300, 200, 380, 260],
        shape: 'rect'
    },
    'centre': {
        name: 'Centre-Val de Loire',
        coords: [380, 180, 470, 240],
        shape: 'rect'
    },
    'ile-de-france': {
        name: 'Île-de-France',
        coords: [480, 150, 540, 190],
        shape: 'rect'
    },
    'grand-est': {
        name: 'Grand Est',
        coords: [550, 140, 650, 200],
        shape: 'rect'
    },
    'bourgogne': {
        name: 'Bourgogne-Franche-Comté',
        coords: [470, 220, 560, 280],
        shape: 'rect'
    },
    'auvergne': {
        name: 'Auvergne-Rhône-Alpes',
        coords: [420, 280, 500, 340],
        shape: 'rect'
    },
    'nouvelle-aquitaine': {
        name: 'Nouvelle-Aquitaine',
        coords: [250, 300, 370, 380],
        shape: 'rect'
    },
    'occitanie': {
        name: 'Occitanie',
        coords: [370, 360, 480, 430],
        shape: 'rect'
    },
    'paca': {
        name: 'Provence-Alpes-Côte d\'Azur',
        coords: [500, 380, 580, 440],
        shape: 'rect'
    }
};

// Données des projections
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