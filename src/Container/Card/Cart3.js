import React from 'react';
import photo from './f3.jfif';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Cart3 ()  {
  return (
    <Card style={{ width: '10rem' }}>
      <Card.Img variant="top" src={photo} />
      <Card.Body>
        <Card.Title>Adidas starks</Card.Title>
        <Card.Text>Couleur = rose & noir </Card.Text>
        <Card.Text>Taille = 41  </Card.Text>
        <Card.Text>Prix = 250 dt </Card.Text>
        <Button variant="primary">plus de détails</Button>
      </Card.Body>
    </Card>
  );
}
export default Cart3;
