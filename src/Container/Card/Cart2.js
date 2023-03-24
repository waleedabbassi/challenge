import React from 'react';
import photo from './f2.jfif';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Cart2 ()  {
return (
    <Card style={{ width: '10rem' }}>
    <Card.Img variant="top" src={photo} />
    <Card.Body>
      <Card.Title color='black'>Adidas brands</Card.Title>
      <Card.Text>Couleur = noir & or </Card.Text>
        <Card.Text>Taille = 42  </Card.Text>
        <Card.Text>Prix = 300 dt </Card.Text>
      <Button variant="primary">plus de détails</Button>
    </Card.Body>
  </Card>
);
}
export default Cart2;
