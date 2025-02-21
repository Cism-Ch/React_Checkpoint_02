// Import des dépendances React et hooks nécessaires
import React, { useEffect } from "react";
// Import des composants Bootstrap pour la mise en page
import { Card, Badge, Row, Col } from "react-bootstrap";
// Import de la librairie AOS pour les animations au scroll
import AOS from "aos";
// Import des styles CSS requis
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Composant Player qui affiche une carte détaillée d'un joueur
// Reçoit les propriétés du joueur en paramètre via la déstructuration
const Player = ({
  name,
  team,
  nationality,
  playNumber,
  age,
  position,
  marketValue,
  trophees,
  imageUrl,
}) => {
  // Initialisation des animations AOS au montage du composant
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation en milliseconds
      once: true, // Animation une seule fois
    });
  }, []);

  return (
    // Conteneur principal de la carte avec effets d'ombre et animation au hover
    <Card
      className="shadow-lg h-100 text-center border-3 border-black p-1 rounded-4"
      style={{
        minWidth: "300px", // Taille minimale
        maxWidth: "400px", // Taille maximale
        width: "400px",
        height: "500px",
        margin: "4px",
        transition: "transform 0.3s ease-in-out",
      }}
      // Effets de hover sur la carte
      onMouseEnter={(e) =>
        (e.currentTarget.style.transform = "scale(1.05)")
      }
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      // Configuration des animations AOS
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-anchor-placement="top-center"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
    >
      {/* Image du joueur avec effet de zoom au hover */}
      <Card.Img
        variant="top"
        src={imageUrl}
        alt={name}
        className="mb-0 rounded-top-4"
        style={{
          objectFit: "cover",
          height: "500px",
          transition: "transform 0.3s ease",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.transform = "scale(1.1)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.transform = "scale(1)")
        }
        data-aos="zoom-in"
        data-aos-duration="800"
      />
      {/* Corps de la carte contenant les informations du joueur */}
      <Card.Body className="d-flex flex-column justify-content-between bg-black rounded-bottom-4 ">
        {/* Nom du joueur */}
        <Card.Title className="text-primary fw-bold text-uppercase border-2 pb-2">
          {name}
        </Card.Title>
        {/* Section des informations détaillées */}
        <div className="text-start p-3">
          <Row className="mb-2">
            {/* Colonne gauche : équipe, nationalité, position */}
            <Col sm={6}>
              <div className="mb-2">
                <span className="text-secondary fw-semibold">
                  Team:{" "}
                </span>
                <span className="text-light">{team}</span>
              </div>
              <div className="mb-2">
                <span className="text-secondary fw-semibold">
                  Nationality:{" "}
                </span>
                <span className="text-light">
                  {nationality}
                </span>
              </div>
              <div className="mb-2">
                <span className="text-secondary fw-semibold">
                  Position:{" "}
                </span>
                <span className="text-light">{position}</span>
              </div>
            </Col>
            {/* Colonne droite : numéro, âge, valeur marchande */}
            <Col sm={6}>
              <div className="mb-2">
                <span className="text-secondary fw-semibold">
                  Number:{" "}
                </span>
                <Badge bg="warning" text="dark" pill>
                  {playNumber}
                </Badge>
              </div>
              <div className="mb-2">
                <span className="text-secondary fw-semibold">
                  Age:{" "}
                </span>
                <Badge bg="warning" text="dark" pill>
                  {age} ans
                </Badge>
              </div>
              <div className="mb-2">
                <span className="text-secondary fw-semibold">
                  Valeur:{" "}
                </span>
                <Badge bg="success" text="white" pill>
                  {marketValue}
                </Badge>
              </div>
            </Col>
          </Row>

          {/* Section des trophées avec affichage conditionnel */}
          <div className="mt-3 border-top pt-2">
            <div className="text-secondary fw-semibold mb-2">
              Palmarès:
            </div>
            <div className="d-flex flex-wrap gap-2">
              {/* Affiche les trophées Champions League si présents */}
              {trophees.championsLeague && (
                <Badge bg="info" className="me-1">
                  🏆 UCL: {trophees.championsLeague}
                </Badge>
              )}
              {/* Affiche les Coupes du Monde si présentes */}
              {trophees.worldCup && (
                <Badge bg="info" className="me-1">
                  🌟 CM: {trophees.worldCup}
                </Badge>
              )}
              {/* Affiche le nombre de titres en championnat */}
              <Badge bg="info">
                🏅 Titres: {trophees.leagueTitles}
              </Badge>
            </div>
            {/* Affiche les récompenses individuelles si présentes */}
            {trophees.personalAwards && (
              <div className="mt-2">
                <small className="text-muted">
                  {trophees.personalAwards.join(" • ")}
                </small>
              </div>
            )}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

// Export du composant pour utilisation dans PlayersList
export default Player;
