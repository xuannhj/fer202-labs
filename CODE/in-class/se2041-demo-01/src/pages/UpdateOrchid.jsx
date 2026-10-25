import React, { useEffect } from 'react';
import { Card, Form, Button, Row, Col, Container } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useParams, useNavigate, Link } from 'react-router';
import axios from 'axios';

export default function UpdateOrchid() {
  // 1. Lấy id của bông hoa cần sửa từ URL (ví dụ: /update/3 -> id = "3")
  const { id } = useParams();
  const navigate = useNavigate();

  // 2. Khởi tạo useFormik
  const formik = useFormik({
    initialValues: {
      name: '',
      image: '',
      origin: '',
      category: '',
      color: '',
      rating: 5,
      numberOfLike: 0,
      isSpecial: false,
      isNatural: false,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Tên hoa không được để trống')
        .min(2, 'Tối thiểu 2 ký tự'),
      image: Yup.string().required('Link ảnh không được để trống'),
      origin: Yup.string().required('Xuất xứ không được để trống'),
      category: Yup.string().required('Phân loại không được để trống'),
      color: Yup.string().required('Màu sắc không được để trống'),
      rating: Yup.number()
        .typeError('Rating phải là số')
        .min(1, 'Từ 1 đến 5 sao')
        .max(5, 'Từ 1 đến 5 sao')
        .required('Bắt buộc nhập'),
    }),
    onSubmit: async (values) => {
      try {
        // Điểm khác biệt 1: Dùng PUT và nối chuỗi '/' + id để ghi đè đúng bông hoa đó!
        await axios.put(import.meta.env.VITE_API_URL + '/' + id, values);
        alert('🎉 Cập nhật hoa lan thành công!');
        navigate('/management');
      } catch (error) {
        console.error('Lỗi khi cập nhật:', error);
        alert('❌ Cập nhật thất bại!');
      }
    },
  });

  // 3. Điểm khác biệt 2: useEffect kéo dữ liệu cũ đắp vào form bằng formik.setValues()
  useEffect(() => {
    const fetchOldOrchid = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_API_URL + '/' + id);
        // Đắp toàn bộ 100% dữ liệu cũ vào các ô nhập của Formik:
        formik.setValues(response.data);
      } catch (error) {
        console.error('Lỗi khi tải dữ liệu hoa cũ:', error);
      }
    };

    fetchOldOrchid();
  }, [id]);

  return (
    <Container className="my-4" style={{ maxWidth: '750px' }}>
      <Button variant="outline-secondary" size="sm" as={Link} to="/management" className="mb-3">
        ⬅️ Quay lại Quản lý
      </Button>

      <Card className="shadow-sm border-0 p-4">
        <Card.Body>
          <h3 className="fw-bold mb-4 text-center">✏️ Cập Nhật Thông Tin Hoa Lan #{id}</h3>

          <Form onSubmit={formik.handleSubmit}>
            {/* Tên hoa & Link ảnh */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="name">
                  <Form.Label>
                    Tên hoa lan <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ví dụ: Lan Hồ Điệp..."
                    {...formik.getFieldProps('name')}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <Form.Text className="text-danger">{formik.errors.name}</Form.Text>
                  )}
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="image">
                  <Form.Label>
                    Link hình ảnh (URL) <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="https://..."
                    {...formik.getFieldProps('image')}
                  />
                  {formik.touched.image && formik.errors.image && (
                    <Form.Text className="text-danger">{formik.errors.image}</Form.Text>
                  )}
                </Form.Group>
              </Col>
            </Row>

            {/* Xuất xứ & Phân loại */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="origin">
                  <Form.Label>
                    Xuất xứ <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ví dụ: Việt Nam, Thái Lan..."
                    {...formik.getFieldProps('origin')}
                  />
                  {formik.touched.origin && formik.errors.origin && (
                    <Form.Text className="text-danger">{formik.errors.origin}</Form.Text>
                  )}
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="category">
                  <Form.Label>
                    Phân loại loài <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ví dụ: Cattleya, Dendro..."
                    {...formik.getFieldProps('category')}
                  />
                  {formik.touched.category && formik.errors.category && (
                    <Form.Text className="text-danger">{formik.errors.category}</Form.Text>
                  )}
                </Form.Group>
              </Col>
            </Row>

            {/* Màu sắc & Rating */}
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="color">
                  <Form.Label>
                    Màu sắc <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ví dụ: Trắng, Tím, Vàng..."
                    {...formik.getFieldProps('color')}
                  />
                  {formik.touched.color && formik.errors.color && (
                    <Form.Text className="text-danger">{formik.errors.color}</Form.Text>
                  )}
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="rating">
                  <Form.Label>
                    Đánh giá Rating (1 - 5 ⭐) <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="number"
                    min="1"
                    max="5"
                    step="0.1"
                    {...formik.getFieldProps('rating')}
                  />
                  {formik.touched.rating && formik.errors.rating && (
                    <Form.Text className="text-danger">{formik.errors.rating}</Form.Text>
                  )}
                </Form.Group>
              </Col>
            </Row>

            {/* Switch Đặc biệt & Tự nhiên */}
            <div className="d-flex gap-4 mb-4">
              <Form.Check
                type="switch"
                id="isSpecial"
                label="Hoa đặc biệt (Special ⭐)"
                {...formik.getFieldProps('isSpecial')}
                checked={formik.values.isSpecial}
              />
              <Form.Check
                type="switch"
                id="isNatural"
                label="Hoa tự nhiên (Natural 🎍)"
                {...formik.getFieldProps('isNatural')}
                checked={formik.values.isNatural}
              />
            </div>

            {/* Nút Submit cập nhật */}
            <Button variant="primary" type="submit" className="w-100 py-2 fw-bold">
              💾 Cập Nhật Thay Đổi
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
