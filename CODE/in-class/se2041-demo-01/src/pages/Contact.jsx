import React, { useState } from 'react';
import { Card, Form, Button, Row, Col, Alert } from 'react-bootstrap';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <div className="my-4">
      <div className="text-center mb-4">
        <h2 className="fw-bold">📬 Liên Hệ Với Orchid Garden</h2>
        <p className="text-muted">Chúng tôi luôn sẵn sàng lắng nghe và tư vấn về các giống hoa lan</p>
      </div>

      <Row className="g-4">
        {/* Cột trái: Thông tin liên hệ vườn lan */}
        <Col md={5}>
          <Card className="h-100 shadow-sm border-0 p-3">
            <Card.Body>
              <h4 className="fw-bold mb-3 text-success">🌸 Vườn Lan Orchid Garden</h4>
              <p className="text-muted">
                Chuyên cung cấp, bảo tồn và tư vấn chăm sóc các giống hoa lan quý hiếm tự nhiên và lai tạo.
              </p>

              <hr />

              <div className="mb-3">
                <strong>📍 Địa chỉ:</strong>
                <p className="mb-0 text-muted">Khu Công Nghệ Cao, TP. Thủ Đức, TP. Hồ Chí Minh</p>
              </div>

              <div className="mb-3">
                <strong>📞 Hotline / Zalo:</strong>
                <p className="mb-0 text-muted">0909 123 456 - (028) 38 123 456</p>
              </div>

              <div className="mb-3">
                <strong>📧 Email:</strong>
                <p className="mb-0 text-muted">contact@orchidgarden.vn</p>
              </div>

              <div>
                <strong>⏰ Giờ mở cửa tham quan:</strong>
                <p className="mb-0 text-muted">08:00 - 17:30 (Tất cả các ngày trong tuần)</p>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Cột phải: Form gửi tin nhắn */}
        <Col md={7}>
          <Card className="h-100 shadow-sm border-0 p-3">
            <Card.Body>
              <h4 className="fw-bold mb-3">✉️ Gửi Tin Nhắn Cho Chúng Tôi</h4>

              {submitted && (
                <Alert variant="success" onClose={() => setSubmitted(false)} dismissible>
                  🎉 Cảm ơn <strong>{formData.name}</strong>! Tin nhắn của bạn đã được gửi thành công. Chúng tôi sẽ phản hồi qua email <strong>{formData.email}</strong> sớm nhất có thể.
                </Alert>
              )}

              <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group controlId="contactName">
                      <Form.Label>Họ và tên <span className="text-danger">*</span></Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Nguyễn Văn A"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="contactPhone">
                      <Form.Label>Số điện thoại</Form.Label>
                      <Form.Control
                        type="tel"
                        name="phone"
                        placeholder="0901234567"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3" controlId="contactEmail">
                  <Form.Label>Địa chỉ Email <span className="text-danger">*</span></Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="example@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="contactMessage">
                  <Form.Label>Nội dung cần tư vấn <span className="text-danger">*</span></Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    placeholder="Bạn cần tư vấn về loài hoa lan nào..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Button variant="success" type="submit" className="w-100 py-2 fw-bold">
                  🚀 Gửi Lời Nhắn
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
