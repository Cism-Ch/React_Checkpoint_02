// Import des styles CSS pour l'application
import './App.css';
// Import du composant PlayersList qui contient la grille des cartes de joueurs
import PlayersList from './PlayersList';

// Composant racine de l'application
// Ce composant sert de point d'entrée principal et englobe toute l'application
function App() {
  return (
    // Conteneur principal avec la classe CSS "App"
    <div className="App">
      {/* Rendu du composant PlayersList qui affiche tous les joueurs */}
      <PlayersList />
    </div>
  );
}

// Export du composant App pour utilisation dans index.js
export default App;
