import React from 'react'
//nhận props để vẽ thẻ card cho từng bông hoa -> hiển thị thẻ card
import { Button, Card, Badge } from 'react-bootstrap';

//destructoring props
function OrchidCard({ orchid }) {
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

      <Card.Img variant='top' src={orchid.image} />
      {/* 1. Thêm "d-flex flex-column" vào Card.Body */}
<Card.Body className="d-flex flex-column">
  <Card.Title>{orchid.name}</Card.Title>
  <Card.Text>Xuất xứ: {orchid.origin}</Card.Text>
  <Card.Text className="text-muted mb-1">
    <strong>Màu sắc:</strong> {orchid.color}
  </Card.Text>
  <Card.Text className="text-muted mb-2">
    <strong>Loài:</strong> {orchid.category} {orchid.isNatural ? '(Tự nhiên)' : '(Lai tạo)'}
  </Card.Text>

  {/* Thêm mb-3 để khoảng cách sao & like thoáng hơn */}
  <div className="d-flex justify-content-between align-items-center mb-3 small">
    <span>⭐ {orchid.rating} / 5</span>
    <span>❤️ {orchid.numberOfLike} yêu thích</span>
  </div>

  {/* 2. Thêm "mt-auto" và "w-100" vào Button */}
  <Button variant="success" className="mt-auto w-100">
    Explore more
  </Button>
</Card.Body>

    </Card>
  );
}

export default OrchidCard;
