// Tableau contenant les données des meilleurs joueurs de football actuels
// Chaque joueur est représenté par un objet avec des informations détaillées
const players = [
  {
    name: "Kylian Mbappé", // Nom complet du joueur
    team: "Real Madrid", // Club actuel
    nationality: "French", // Nationalité
    playNumber: 7, // Numéro de maillot
    age: 25, // Âge du joueur
    position: "Attaquant", // Poste sur le terrain
    marketValue: "180M€", // Valeur marchande estimée
    trophees: { // Palmarès du joueur
      worldCup: 1, // Nombre de Coupes du monde
      leagueTitles: 6, // Nombre de titres en championnat
      personalAwards: ["Meilleur buteur Ligue 1 2024", "Soulier d'Or 2023"] // Récompenses individuelles
    },
    imageUrl: "https://i.pinimg.com/1200x/76/e1/39/76e1394ffc41a8a826ea92362c13030f.jpg" // URL de la photo du joueur
  },
  {
    name: "Erling Haaland",
    team: "Manchester City",
    nationality: "Norwegian",
    playNumber: 9,
    age: 23,
    position: "Attaquant",
    marketValue: "170M€",
    trophees: {
      championsLeague: 1,
      leagueTitles: 1,
      personalAwards: ["Meilleur buteur Premier League 2023", "Ballon d'Or 2024"]
    },
    imageUrl: "https://i.pinimg.com/1200x/e1/c0/f5/e1c0f536b3d1d77f57311e6febd103b7.jpg"
  },
  {
    name: "Jude Bellingham",
    team: "Real Madrid",
    nationality: "English",
    playNumber: 5,
    age: 20,
    position: "Milieu Central",
    marketValue: "150M€",
    trophees: {
      leagueTitles: 1,
      personalAwards: ["Golden Boy 2023", "Meilleur jeune joueur Liga 2024"]
    },
    imageUrl: "https://i.pinimg.com/1200x/63/80/93/6380938b5d8813af43a55c6b9dd1f830.jpg"
  },
  {
    name: "Victor Osimhen",
    team: "Napoli",
    nationality: "Nigerian",
    playNumber: 9,
    age: 25,
    position: "Attaquant",
    marketValue: "120M€",
    trophees: {
      leagueTitles: 1,
      personalAwards: ["Meilleur buteur Serie A 2023", "Joueur africain de l'année 2023"]
    },
    imageUrl: "https://i.pinimg.com/1200x/b1/28/43/b12843f2ac6a805f43cf3860b80dd87a.jpg"
  },
  {
    name: "Kevin De Bruyne",
    team: "Manchester City",
    nationality: "Belgian",
    playNumber: 17,
    age: 32,
    position: "Milieu Offensif",
    marketValue: "70M€",
    trophees: {
      championsLeague: 1,
      leagueTitles: 5,
      personalAwards: ["Meilleur passeur Premier League 2023", "Joueur de l'année PFA 2023"]
    },
    imageUrl: "https://i.pinimg.com/1200x/c7/bc/e3/c7bce395ab7f46522a512a9899a9c552.jpg"
  },
  {
    name: "Mohamed Salah",
    team: "Liverpool",
    nationality: "Egyptian",
    playNumber: 11,
    age: 31,
    position: "Ailier Droit",
    marketValue: "65M€",
    trophees: {
      championsLeague: 1,
      leagueTitles: 1,
      personalAwards: ["Meilleur buteur Premier League 2022", "Joueur africain de l'année 2022"]
    },
    imageUrl: "https://i.pinimg.com/1200x/12/1c/27/121c276f53608ee6464300f4f1fb4c1b.jpg"
  },
  {
    name: "Vinicius Jr",
    team: "Real Madrid",
    nationality: "Brazilian",
    playNumber: 7,
    age: 23,
    position: "Ailier Gauche",
    marketValue: "150M€",
    trophees: {
      championsLeague: 1,
      leagueTitles: 2,
      personalAwards: ["Meilleur jeune joueur Champions League 2023"]
    },
    imageUrl: "https://i.pinimg.com/736x/00/57/60/005760458531ebda63f5cf988035edb7.jpg"
  },
  {
    name: "Rodri",
    team: "Manchester City",
    nationality: "Spanish",
    playNumber: 16,
    age: 27,
    position: "Milieu Défensif",
    marketValue: "110M€",
    trophees: {
      championsLeague: 1,
      leagueTitles: 3,
      personalAwards: ["Meilleur milieu Champions League 2023"]
    },
    imageUrl: "https://i.pinimg.com/1200x/3a/11/40/3a1140e77760fb7150ebc4a02de3c090.jpg"
  }
];

// Export du tableau des joueurs pour utilisation dans d'autres composants React
export default players;
