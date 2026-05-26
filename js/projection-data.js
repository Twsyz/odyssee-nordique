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

// 'ile-de-france'
// 'hauts-de-france'
// 'normandie'
// 'bretagne'
// 'pays-de-la-loire'
// 'centre'
// 'grand-est'
// 'bourgogne'
// 'auvergne'
// 'nouvelle-aquitaine'
// 'occitanie'
// 'paca'

const projectionsData = {
    // Projections à venir
    upcoming: [

         {
            region: "pays-de-la-loire",
            lieu: "Cinéville Savenay",
            ville: "Sanenay",
            date: "19/11/2026",
            horaire: "18:30",
            lien: "https://www.mediatheques.estuaire-sillon.fr/"
        },  
        {
            region: "auvergne",
            lieu: "Cinéma Le Méliès Saint-François",
            ville: "Saint-Etienne",
            date: "28/05/2026",
            horaire: "20:30",
            lien: "https://www.lemelies.com/evenement/lodyssee-nordique-reprendre-la-route/"
        },
        // Exemple de projection à ajouter :
        // {
        //     region: "grand-est",
        //     lieu: "Family Cinéma",
        //     ville: "Saint-Just Saint-Rambert",
        //     date: "07/05/2026",
        //     horaire: "20:00",
        //     lien: "https://family-cinema.com/"
        // },
    
        {
            region: "bretagne",
            lieu: "Centre Culturel Les Arcs",
            ville: "Quéven",
            date: "16/09/2026",
            horaire: "20:00",
            lien: "https://www.lesarcs.bzh/"
        },
        {
            region: "bretagne",
            lieu: "Cinéma Saint-Michel",
            ville: "Liffré",
            date: "22/09/2026",
            horaire: "20:00",
            lien: "https://www.cinema-liffre.com/"
        },
        
         {
            region: "bretagne",
            lieu: "Cinéville",
            ville: "Lorient",
            date: "05/11/2026",
            horaire: "20:30",
            lien: "https://lorient.cineville.fr/programmes/lorient"
        },
        
        {
            region: "occitanie",
            lieu: "MJC Ciné 113",
            ville: "Castanet Tolosan",
            date: "11/06/2026",
            horaire: "19:30",
            lien: "https://www.mjc-castanet-tolosan.fr/cinema-cine-113/"
        }
        // PAS DE VIRGULE AU DERNIER
    ],
    
    // Exemple de Projections passées
    
    past: [
        {
            lieu: "Festival \"Vélo in Paris\"",
            ville: "Porte de Vincennes | Paris (75)",
            date: "25/04/2026"
        },
        {
            lieu: "Family Cinéma",
            ville: "Saint-Just Saint-Rambert | Loire (42)",
            date: "07/05/2026"
        },
        {
            lieu: "Cinéma Le Concorde",
            ville: "Nantes | Loire-Atlantique (44)",
            date: "19/05/2026"
        },
        {
            lieu: "Bar Embarcadère",
            ville: "Lorient | Morbihan (56)",
            date: "20/05/2026"
        }
        
    //     {
    //         lieu: "Cinéma Le Trianon",
    //         ville: "Brest",
    //         date: "11/01/2025"
    //     }
    // PAS DE VIRGULE AU DERNIER
        
    ]
};
