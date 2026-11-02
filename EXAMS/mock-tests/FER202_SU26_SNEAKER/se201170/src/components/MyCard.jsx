import React from 'react'
import { Badge } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function MyCard({sneaker}) {
  return (
    <Card className="h-100 shadow-sm">
          <Card.Img variant="top" src={sneaker.sneakerImageUrl}/>
          <Card.Body>
            <Card.Title>{sneaker.sneakerName}</Card.Title>
            <Card.Text>
              {sneaker.brandName} - {sneaker.sneakerCategory}
            </Card.Text>
            <Card.Text>
                {sneaker.retailPriceK},000 VND
            </Card.Text>
            {sneaker.isLimitedEdition && (
                 <Badge bg="danger">Limited Edition</Badge>
)}
          </Card.Body>
        </Card>
  )
}
