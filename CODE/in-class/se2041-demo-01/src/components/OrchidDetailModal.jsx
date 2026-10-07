import React from 'react';
import { Modal, Button, Badge, Row, Col } from 'react-bootstrap';

export default function OrchidDetailModal({ show, orchid, onHide }) {
  if (!orchid) return null;

  return (
    <Modal show={show} onHide={onHide}>
      {/* 1. Header có nút đóng */}
      <Modal.Header closeButton>
        <Modal.Title>
          {orchid.name}
          {orchid.isSpecial && <Badge bg="primary" className="ms-2">Special ⭐</Badge>}
        </Modal.Title>
      </Modal.Header>

      {/* 2. Body chia 2 cột đơn giản */}
      <Modal.Body>
        <Row>
          {/* Cột 1: Ảnh */}
          <Col md={6}>
            <img src={orchid.image} alt={orchid.name} style={{ width: '100%' }} />
          </Col>

          {/* Cột 2: Thông tin */}
          <Col md={6}>
            <p><strong>Xuất xứ:</strong> {orchid.origin}</p>
            <p><strong>Màu sắc:</strong> {orchid.color}</p>
            <p><strong>Loài:</strong> {orchid.category}</p>
            <p><strong>Phân loại:</strong> {orchid.isNatural ? 'Tự nhiên' : 'Lai tạo'}</p>
            <p>⭐ {orchid.rating} / 5 | ❤️ {orchid.numberOfLike} yêu thích</p>
          </Col>
        </Row>
      </Modal.Body>

      {/* 3. Footer có nút Đóng */}
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Đóng
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
