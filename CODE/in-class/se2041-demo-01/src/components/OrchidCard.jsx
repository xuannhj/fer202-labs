import React from 'react'
//nhận props để vẽ thẻ card cho từng bông hoa -> hiển thị thẻ card
import { Button, Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router';

//destructoring props
function OrchidCard({ orchid, onSelect }) {
  return (
    <Card className='h-100'>
      {orchid.isSpecial && (
  <Badge
     bg="light" className="badge position-absolute top-0 end-0 m-2 px-2 py-1 shadow-sm" 
    style={{color: '#060505ff', fontWeight: '600' }}
    >
    Special 🪼
  </Badge>
      )}
      {orchid.isNatural && (
  <Badge
     bg="light" className="badge position-absolute top-0 m-2 px-2 py-1 shadow-sm" 
    style={{color: '#060505ff', fontWeight: '600' }}
    >
    Natural 🎍
  </Badge>
      )}


<Card.Img variant='top' src={orchid.image} />
  <Card.Body className="d-flex flex-column">
  <Card.Title>{orchid.name}</Card.Title>
  <Card.Text>Xuất xứ: {orchid.origin}</Card.Text>
  <Card.Text className="text-muted mb-1">
    <strong>Màu sắc:</strong> {orchid.color}
  </Card.Text>
  <Card.Text className="text-muted mb-2">
    <strong>Loài:</strong> {orchid.category} {orchid.isNatural ? '(Tự nhiên)' : '(Lai tạo)'}
  </Card.Text>


  <div className="d-flex justify-content-between align-items-center mb-3 small">
    <span>⭐ {orchid.rating} / 5</span>
    <span>❤️ {orchid.numberOfLike} yêu thích</span>
  </div>

  <div className="mt-auto d-flex gap-2">
    <Button 
      variant="outline-success" 
      size="sm" 
      className="flex-fill" 
      onClick={() => onSelect(orchid)}
    >
      👁️ Quick View
    </Button>


    
    <Button 
      as={Link} 
      to={`/detail/${orchid.id}`} 
      variant="success" 
      size="sm" 
      className="flex-fill"
    >
      🔍 Detail
    </Button>
  </div>
</Card.Body>

    </Card>
  );
}

export default OrchidCard;
