// Import des dépendances React nécessaires
import React from "react";
// Import des composants de mise en page de React Bootstrap
import { Container, Row, Col } from "react-bootstrap";
// Import du composant Player qui représente une carte de joueur
import Player from "./Player";
// Import des données des joueurs depuis le fichier players.js
import players from "./players";

// Composant PlayersList qui affiche la grille de cartes des joueurs
const PlayersList = () => {
	return (
		// Container fluid pour une largeur maximale avec padding vertical
		<Container fluid className=" py-4">
			<Row className="justify-content-center">
				<div className="m-2 rounded-5 border border-black border-3 justify-content-center g-2 d-flex flex-wrap w-100">
					<div className="w-100 text-center mb-4">
						<h1 className="display-4 my-5 border border-black border-3 rounded-5 w-50 mx-auto p-2">
							Football Players-Cards
						</h1>
					</div>
					{/* Mapping sur le tableau des joueurs pour créer une carte par joueur */}
					{players.map((player, index) => (
						<Col
							key={index} // Clé unique requise par React pour le mapping
							xs={12} // Pleine largeur sur mobile (extra small)
							md={8} // 8 colonnes sur tablette (medium)
							lg={3} // 3 colonnes sur desktop (large)
							xl={3} // 3 colonnes sur grand écran (extra large)
							className="d-flex justify-content-center  mx-4 my-4 " // Centrage et marges
						>
							{/* Rendu du composant Player avec les propriétés du joueur */}
							<Player {...player} />
						</Col>
					))}
					<div className="text-center w-100 my-5">
						<small className="text-muted">
							&copy; 2025 Football Players Cards By Cism-Ch . All
							rights reserved.
						</small>
					</div>
				</div>
			</Row>
		</Container>
	);
};

// Export du composant pour utilisation dans App.js
export default PlayersList;
