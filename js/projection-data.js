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
        }
    ],
    
    // Projections passées
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
        }
    ]
};