import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Player = ({ name, team, nationality, playNumber, age, imageUrl }) => {
  return (
    <Card className="shadow-lg h-100 text-center border-0" style={{ width: '18rem', margin: '2px' }}>
      <Card.Img variant="top" src={imageUrl} alt={name} className="mb-0" style={{ objectFit: 'cover', height: '300px' }}/>
      <Card.Body className='d-flex flex-column justify-content-between bg-light'>
        <Card.Title className="text-primary fw-bold text-uppercase border-bottom pb-2">{name}</Card.Title>
        <Card.Text className="text-start p-3">
          <div className="mb-2">
            <span className="text-secondary fw-semibold">Team: </span>
            <span className="text-dark">{team}</span>
          </div>
          <div className="mb-2">
            <span className="text-secondary fw-semibold">Nationality: </span>
            <span className="text-dark">{nationality}</span>
          </div>
          <div className="mb-2">
            <span className="text-secondary fw-semibold">Player Number: </span>
            <span className="badge bg-primary">{playNumber}</span>
          </div>
          <div className="mt-3">
            <span className="text-secondary fw-semibold">Age: </span>
            <span className="badge bg-secondary">{age} years</span>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;
