import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router';
import { Card, Row, Col, Badge, Button, ListGroup } from 'react-bootstrap';
import axios from 'axios';

export default function Detail() {
  // 1. Bóc tách param "id" từ URL (ví dụ: /detail/1 -> id = "1")
  const { id } = useParams();
  const navigate = useNavigate();

  // 2. Tìm bông hoa có id trùng khớp
  // const orchid = ListOfOrchids.find((item) => String(item.id) === String(id));

  const [orchid, setOrchid] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchOrchidDetail = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_API_URL + '/' + id);
        setOrchid(response.data);

      } catch (error){
        console.log(error);
        setOrchid(null);

      } finally{
        setLoading(false);
      }
    }      
    fetchOrchidDetail();

  }, [id])

if (loading) {
  return (
    <div className="text-center py-5">
      <h4>⏳ Đang tải thông tin hoa lan...</h4>
    </div>
  );
}

  if (!orchid) {
    return (
      <div className="text-center py-5">
        <h3 className="text-danger fw-bold">❌ Không tìm thấy thông tin hoa lan!</h3>
        <p className="text-muted">Mã số hoa lan #{id} không tồn tại trong danh mục.</p>
        <Button variant="primary" as={Link} to="/">
          ⬅️ Quay về Trang chủ
        </Button>
      </div>
    );
  }

  return (
    <div className="my-4">
      <Button variant="outline-secondary" size="sm" className="mb-3" onClick={() => navigate(-1)}>
        ⬅️ Quay lại
      </Button>

      <Card className="shadow-lg border-0 overflow-hidden">
        <Row className="g-0">
          <Col md={5}>
            <Card.Img
              src={orchid.image}
              alt={orchid.name}
              className="h-100 object-fit-cover"
              style={{ minHeight: '350px' }}
            />
          </Col>

          <Col md={7}>
            <Card.Body className="p-4 d-flex flex-column h-100">
              <div className="d-flex justify-content-between align-items-start mb-2">
                <Card.Title className="fs-2 fw-bold mb-0">{orchid.name}</Card.Title>
                <div>
                  {orchid.isSpecial && (
                    <Badge bg="warning" text="dark" className="me-1">
                      Special ⭐
                    </Badge>
                  )}
                  <Badge bg={orchid.isNatural ? 'success' : 'info'}>
                    {orchid.isNatural ? 'Tự nhiên 🎍' : 'Lai tạo 🧪'}
                  </Badge>
                </div>
              </div>

              <div className="text-muted mb-3">
                <span className="me-3">⭐ Đánh giá: <strong>{orchid.rating} / 5</strong></span>
                <span>❤️ <strong>{orchid.numberOfLike}</strong> lượt yêu thích</span>
              </div>

              <ListGroup variant="flush" className="my-3">
                <ListGroup.Item className="px-0 bg-transparent">
                  <strong>Xuất xứ (Origin):</strong> {orchid.origin}
                </ListGroup.Item>
                <ListGroup.Item className="px-0 bg-transparent">
                  <strong>Màu sắc (Color):</strong> {orchid.color}
                </ListGroup.Item>
                <ListGroup.Item className="px-0 bg-transparent">
                  <strong>Chi / Giống loài (Category):</strong> {orchid.category}
                </ListGroup.Item>
              </ListGroup>

              <div className="mt-auto pt-3 d-flex gap-2">
                <Button variant="success" as={Link} to="/contact">
                  💬 Liên hệ tư vấn về giống lan này
                </Button>
                <Button variant="outline-primary" as={Link} to="/">
                  🏠 Về Trang chủ
                </Button>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
