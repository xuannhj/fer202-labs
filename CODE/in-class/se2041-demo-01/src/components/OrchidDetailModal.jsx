import React from 'react';
import { Modal, Button, Badge, Row, Col } from 'react-bootstrap';

export default function OrchidDetailModal({ show, orchid, onHide }) {
  if (!orchid) return null;

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header>
        <Modal.Title>
          {orchid.name}
          {orchid.isSpecial && <Badge bg="primary" className="ms-2">Special ⭐</Badge>}
        </Modal.Title>
      </Modal.Header>
      
      <Modal.Body>
        <Row>
          <Col md={6}>
            <img src={orchid.image} alt={orchid.name} style={{ width: '100%' }} />
          </Col>

          <Col md={6}>
            <p><strong>Xuất xứ:</strong> {orchid.origin}</p>
            <p><strong>Màu sắc:</strong> {orchid.color}</p>
            <p><strong>Loài:</strong> {orchid.category}</p>
            <p><strong>Phân loại:</strong> {orchid.isNatural ? 'Tự nhiên' : 'Lai tạo'}</p>
<div className="mb-2 d-flex align-items-center">
  {/* Duyệt mảng từ 1 đến 5 để vẽ 5 ngôi sao */}
  {[1, 2, 3, 4, 5].map((star) => (
    <span
      key={star}
      style={{
        color: star <= Number(orchid.rating) ? '#ffc107' : '#dee2e6',
        fontSize: '1.25rem',
        marginRight: '2px'
      }}
    >
      ★
    </span>
  ))}
  <span className="ms-2">| ❤️ {orchid.numberOfLike} yêu thích</span>
</div>
          </Col>
        </Row>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Đóng
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
