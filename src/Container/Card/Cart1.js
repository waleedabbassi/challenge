import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import photo from './f1.png';

function Cart1  ()  {
return (
    <Card style={{ width: '10rem' }}>
      <Card.Img variant="top" src={photo} />
      <Card.Body>
        <Card.Title>Adidas company</Card.Title>
        <Card.Text>Couleur = blanc </Card.Text>
        <Card.Text>Taille = 42  </Card.Text>
        <Card.Text>Prix = 200 dt</Card.Text>
        
        <Button variant="primary">plus de détails</Button>
      </Card.Body>
    </Card>
);
}
export default Cart1;


