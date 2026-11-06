import React from 'react'
import { Badge } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function MyCard({laptop}) {
  return (
    <Card className="h-100 shadow-sm">
          <Card.Img variant="top" src={laptop.imageUrl}/>
          <Card.Body>
            <Card.Title>{laptop.laptopName}</Card.Title>
            <Card.Text>
              {laptop.brand} - {laptop.category}
            </Card.Text>
            <Card.Text>
                ${Number(laptop.priceUSD).toLocaleString('en-US')}
            </Card.Text>
            {laptop.isBestSeller && (
                 <Badge bg="danger">Best Seller</Badge>
)}
          </Card.Body>
        </Card>
  )
}
