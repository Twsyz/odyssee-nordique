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
            lieu: "Salle de convivialité - Tribune Henri Michel / Tribune Emiliano Sala",
            ville: "Basse-Goulaine",
            date: "25/09/2026",
            horaire: "19:00",
            lien: "https://www.asso-gne.fr/"
        },  
         {
            region: "pays-de-la-loire",
            lieu: "Cinéville Savenay",
            ville: "Savenay",
            date: "19/11/2026",
            horaire: "18:30",
            lien: "https://www.mediatheques.estuaire-sillon.fr/"
        },  
        {
            region: "bourgogne",
            lieu: "Festival Périples & Cie",
            ville: "Charnay-Lès-Mâcon",
            date: "15/11/2026",
            horaire: "10:00",
            lien: "https://www.periplesetcie.com/"
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
            region: "grand-est",
            lieu: "Klub Cinéma",
            ville: "Metz",
            date: "08/09/2026",
            horaire: "20:00",
            lien: "https://klubcinema.fr/?main_section=tous+les+films"
        },  
    
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
            lieu: "Bar associatif L'éléphant Rose",
            ville: "Pont-Scorff",
            date: "20/09/2026",
            horaire: "[Horaire à définir]",
            lien: "https://www.helloasso.com/associations/l-elephant-rose"
        },
               {
            region: "bretagne",
            lieu: " Cinéma municipal La Bobine",
            ville: "Quimperlé",
            date: "21/09/2026",
            horaire: "20:30",
            lien: "https://www.quimperle.bzh/vivre-a-quimperle/culture/le-cinema/"
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
            region: "auvergne",
            lieu: "Cinéma Espace Renoir",
            ville: "Roanne",
            date: "18/09/2026",
            horaire: "20:30",
            lien: "https://www.cinemaespacerenoir.fr/"
        }, 
        {
            region: "auvergne",
            lieu: "Foyer Cinéma",
            ville: "Saint Symphorien sur Coise",
            date: "25/09/2026",
            horaire: "20:30",
            lien: "https://foyercinema.fr/"
        },
        {
            region: "auvergne",
            lieu: "Foyer des jeunes Le Consulat",
            ville: "Le Puy-en-Velay",
            date: "10/10/2026",
            horaire: "17:30",
            lien: "https://lapuycyclette.fr/"
        },
            {
            region: "auvergne",
            lieu: "Vél'Osons Festival",
            ville: "Chambéry",
            date: "du 02 ou 04/04/2027",
            horaire: "[Horaire à définir]",
            lien: "https://velosons.rouelibre.net/"
        }
        // PAS DE VIRGULE AU DERNIER
    ],
    
    // Exemple de Projections passées
    
    past: [
        {
            lieu: "Festival \"Vélo in Paris\"",
            ville: "Porte de Vincennes / Paris (75)",
            date: "25/04/2026"
        },
        {
            lieu: "Family Cinéma",
            ville: "Saint-Just Saint-Rambert / Loire (42)",
            date: "07/05/2026"
        },
        {
            lieu: "Cinéma Le Concorde",
            ville: "Nantes / Loire-Atlantique (44)",
            date: "19/05/2026"
        },
        {
            lieu: "Bar Embarcadère",
            ville: "Lorient / Morbihan (56)",
            date: "20/05/2026"
        },
        {
            lieu: "Cinéma Le Méliès",
            ville: "Saint-Etienne / Loire (42)",
            date: "28/05/2026"
        },
         {
            lieu: "MJC Ciné 113",
            ville: "Castanet-Tolosan / Haute-Garonne (31)",
            date: "11/06/2026"
        },
      {
            lieu: "Cinéma La Lanterne",
            ville: "Bègles / Gironde (33)",
            date: "24/06/2026"
        },
     {
            lieu: "Cinéma REX",
            ville: "Montbrison / Loire (42)",
            date: "05/08/2026"
        }
        
    //     {
    //         lieu: "Cinéma Le Trianon",
    //         ville: "Brest",
    //         date: "11/01/2025"
    //     }
    // PAS DE VIRGULE AU DERNIER
        
    ]
};
