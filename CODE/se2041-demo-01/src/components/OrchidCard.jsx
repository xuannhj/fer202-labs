import React from 'react'
//nhận props để vẽ thẻ card cho từng bông hoa -> hiển thị thẻ card
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

function OrchidCard({orchid}) {
  return (
    <Card className='h-100'>
      {orchid.isSpecial && (
          <Badge className="position-absolute top-0 end-0 m-2 px-2 py-1" style={{ backgroundColor: '#ff982d', color: '#ffffff' }}>
          Special ⭐
        </Badge>
      )}
      <Card.Img variant = 'variant' src={orchid.image}/>
      <Card.Body>
        <Card.Title>{orchid.name}</Card.Title>
        <Card.Text>Origin: {orchid.origin}</Card.Text>
                <Card.Text className="text-muted mb-1">
          <strong>Màu sắc:</strong> {orchid.color}
        </Card.Text>
        <Card.Text className="text-muted mb-2">
          <strong>Loài:</strong> {orchid.category} {orchid.isNatural ? '(Tự nhiên)' : '(Lai tạo)'}
        </Card.Text>
        <Button variant="primary">Explore more</Button>
      </Card.Body>
    </Card>
  );
}

export default OrchidCard;
