import React from 'react';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import * as Yup from 'yup'
import { useFormik } from 'formik';

export default function Contact() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      program: 0,
      message: '',
      agree: false,
    },

    validationSchema: Yup.object({
      name: Yup.string().required('Required').min(2, 'must be 2 characters or more'),
      email: Yup.string().required('Required').email('Invalid email'),
      phone: Yup.number().integer().typeError('please enter a valid number').required('Required'),
      program: Yup.number()
        .min(1, 'Please select a program.'),
      message: Yup.string()
        .required('Required.')
        .min(10, 'Must be 10 characters or more'),
      agree: Yup.boolean()
        .oneOf([true], 'The terms and conditions must be accepted.'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },

  });

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

              <Form onSubmit={formik.handleSubmit}>
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group controlId="contactName">
                      <Form.Label>Họ và tên <span className="text-danger">*</span></Form.Label>
                      <Form.Control 
                        type="text" 
                        placeholder="nhi nhi nhi" 
                        {...formik.getFieldProps("name")}
                      />
                      {formik.touched.name && (<Form.Text className='text-danger'>{formik.errors.name}</Form.Text>)}
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group controlId="contactPhone">
                      <Form.Label>Số điện thoại <span className="text-danger">*</span></Form.Label>
                      <Form.Control 
                        type="text" 
                        placeholder="0901234567" 
                        {...formik.getFieldProps("phone")}
                      />
                      {formik.touched.phone && (<Form.Text className='text-danger'> {formik.errors.phone}
                        </Form.Text>)}
                    </Form.Group>
                  </Col>
                </Row>

       
                <Form.Group className="mb-3" controlId="contactEmail">
                  <Form.Label>Địa chỉ Email <span className="text-danger">*</span></Form.Label>
                  <Form.Control 
                    type="email" 
                    placeholder="example@gmail.com" 
                     {...formik.getFieldProps("email")}
                  />
                  {formik.touched.email && (
                        <Form.Text className="text-danger">
                          {formik.errors.email}</Form.Text>
                    )}


                </Form.Group>

                {/* 4. Dropdown chọn Chương trình (Program) */}
                <Form.Group className="mb-3" controlId="contactProgram">
                  <Form.Label>Program of Study <span className="text-danger">*</span></Form.Label>
                  <Form.Select {...formik.getFieldProps("program")}>
                    <option value={0}>Please select</option>
                    <option value={1}>Software Engineering</option>
                    <option value={2}>Information System</option>
                    <option value={3}>Information Assurance</option>
                    <option value={4}>Internet of Things</option>
                    <option value={5}>Artificial Intelligence</option>
                    <option value={6}>Digital Art & Design</option>
                  </Form.Select>
                   {formik.touched.program && (
                        <Form.Text className="text-danger">{formik.errors.program}</Form.Text>
                      )}
                </Form.Group>

                {/* 5. Lời nhắn (Message) */}
                <Form.Group className="mb-3" controlId="contactMessage">
                  <Form.Label>Nội dung cần tư vấn <span className="text-danger">*</span></Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Nhập lời nhắn của bạn (tối thiểu 10 ký tự)..."
                  {...formik.getFieldProps("message")}
                  />
                  {formik.touched.message && (
                        <Form.Text className="text-danger">{formik.errors.message}</Form.Text>
                      )}
                </Form.Group>

                {/* 6. Switch Đồng ý điều khoản (Agree) */}
                <Form.Group className="mb-3" controlId="contactAgree">
                  <Form.Check
                    type="switch"
                    label="Agree to terms and conditions."
                    {...formik.getFieldProps("agree")}
                      checked={formik.values.agree}
                  />
                  {formik.touched.agree && (
                        <Form.Text className="text-danger d-block">{formik.errors.agree}</Form.Text>
                      )}
                </Form.Group>

                {/* Nút gửi (Send) */}
                <Button variant="success" type="submit" className="w-100 py-2 fw-bold">
                  Send
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
