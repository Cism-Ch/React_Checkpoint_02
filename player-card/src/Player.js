import React, { useEffect } from "react";
import { Card, Badge, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: true,
		});
	}, []);
	return (
		<Card
			className="shadow-lg h-100 text-center border-3 border-black p-1 rounded-4"
			style={{
				width: "28rem",
				margin: "2px",
				transition: "transform 0.3s ease-in-out",
			}}
			onMouseEnter={(e) =>
				(e.currentTarget.style.transform = "scale(1.05)")
			}
			onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
			data-aos="fade-up"
			data-aos-delay="100"
			data-aos-anchor-placement="top-center"
			data-aos-easing="ease-in-out"
			data-aos-mirror="true"
			data-aos-once="false"
		>
			<Card.Img
				variant="top"
				src={imageUrl}
				alt={name}
				className="mb-0 rounded-top-4"
				style={{ objectFit: "cover", height: "500px",transition: "transform 0.3s ease" }}
        onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
        onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
				data-aos="zoom-in"
				data-aos-duration="800"
			/>
			<Card.Body className="d-flex flex-column justify-content-between bg-black rounded-bottom-4 ">
				<Card.Title className="text-primary fw-bold text-uppercase border-2 pb-2">
					{name}
				</Card.Title>
				<Card.Text className="text-start p-3">
					<Row className="mb-2">
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

					<div className="mt-3 border-top pt-2">
						<div className="text-secondary fw-semibold mb-2">
							Palmarès:
						</div>
						<div className="d-flex flex-wrap gap-2">
							{trophees.championsLeague && (
								<Badge bg="info" className="me-1">
									🏆 UCL: {trophees.championsLeague}
								</Badge>
							)}
							{trophees.worldCup && (
								<Badge bg="info" className="me-1">
									🌟 CM: {trophees.worldCup}
								</Badge>
							)}
							<Badge bg="info">
								🏅 Titres: {trophees.leagueTitles}
							</Badge>
						</div>
						{trophees.personalAwards && (
							<div className="mt-2">
								<small className="text-muted">
									{trophees.personalAwards.join(" • ")}
								</small>
							</div>
						)}
					</div>
				</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default Player;
