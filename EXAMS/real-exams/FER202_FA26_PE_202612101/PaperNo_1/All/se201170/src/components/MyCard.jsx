import React from 'react'
import { Badge } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function MyCard({pizza}) {
  return (
    <Card className="h-100 shadow-sm">
          <Card.Img variant="top" src={pizza.imageUrl}/>
          <Card.Body>
            <Card.Title>{pizza.pizzaName}</Card.Title>
            <Card.Text>
              {pizza.crustType} 
            </Card.Text>
            <Card.Text>
              {new Date(pizza.promotionEndDate).toLocaleDateString()} 
            </Card.Text>
            <Card.Text>
                {pizza.diameterCm}
            </Card.Text>
            {pizza.isVegetarian && (
                 <Badge bg="danger">Vegetarian</Badge>
)}
          </Card.Body>
        </Card>
  )
}
