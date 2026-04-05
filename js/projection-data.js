// Données des projections - Facilement modifiable
// Structure pour chaque projection :
// {
//   region: "nom-de-la-region", // identifiant de la région (hauts-de-france, normandie, etc.)
//   lieu: "Nom du lieu",
//   ville: "Ville",
//   date: "JJ/MM/AAAA",
//   horaire: "HH:MM",
//   lien: "https://..."
// }

const projectionsData = {
    // Projections à venir
    upcoming: [
        {
            region: "ile-de-france",
            lieu: "Festival \"Vélo in Paris\"",
            ville: "Porte de Vincennes - Paris",
            date: "25/04/2026",
            horaire: "12:30",
            lien: "https://velo-in-paris.com/"
        },
        {
            region: "auvergne",
            lieu: "Family Cinéma",
            ville: "Saint-Just Saint-Rambert",
            date: "07/05/2026",
            horaire: "20:00",
            lien: "https://family-cinema.com/"
        },
        {
            region: "grand-est",
            lieu: "Family Cinéma",
            ville: "Saint-Just Saint-Rambert",
            date: "07/05/2026",
            horaire: "20:00",
            lien: "https://family-cinema.com/"
        },
        
        {
            region: "bretagne",
            lieu: "Bar Embarcadère",
            ville: "Lorient",
            date: "20/05/2026",
            horaire: "20:00",
            lien: "https://www.embarcadere-lorient.org/"
        }
    ],
    
    // Projections passées
    past: [
        {
            lieu: "Médiathèque de Lille",
            ville: "Lille",
            date: "18/01/2025"
        },
        {
            lieu: "Cinéma Le Trianon",
            ville: "Brest",
            date: "11/01/2025"
        }
    ]
};