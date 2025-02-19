import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Player from "./Player";
import players from "./players";

const PlayersList = () => {
	return (
		<Container fluid className=" py-4">
			<Row className="justify-content-center g-2">
				{players.map((player, index) => (
					<Col
						key={index}
						xs={12}
						md={6}
						lg={3}
						className="d-flex justify-content-center  mx-4 my-4 "
					>
						<Player {...player} />
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default PlayersList;
