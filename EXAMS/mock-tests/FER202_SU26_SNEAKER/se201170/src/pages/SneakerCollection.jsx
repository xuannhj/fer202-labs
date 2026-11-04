import React, { useEffect, useState } from 'react';
import MyCard from '../components/MyCard';
import axios from 'axios';
import { Container, Row, Col, Form } from 'react-bootstrap';

export default function SneakerCollection() {
  const [sneakers, setSneakers] = useState([]);

  // ================= 🎯 BÀI TẬP 1 & 2: STATE TÌM KIẾM & LỌC DANH MỤC =================
  // 1. State lưu từ khóa tìm kiếm (Drill 1)
  const [searchTerm, setSearchTerm] = useState('');

  // 2. State lưu thể loại được chọn (Drill 2 - Mặc định là 'All' để hiện tất cả)
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const fetchSneakers = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_API_URL);
        // Sắp xếp giảm dần theo tên (Z -> A) theo đúng yêu cầu đề bài
        setSneakers(response.data.sort((a, b) => b.sneakerName.localeCompare(a.sneakerName)));
      } catch (error) {
        console.log(error);
      }
    };
    fetchSneakers();
  }, []);

  // ================= 💡 THUẬT TOÁN LỌC KẾT HỢP (SEARCH + FILTER) =================
  // Mẹo phòng thi: Luôn dùng .filter() tạo ra mảng mới trước khi .map()
  const filteredSneakers = sneakers.filter((sneaker) => {
    // Tiêu chí 1: Tên chứa từ khóa tìm kiếm (bỏ khoảng trắng thừa & không phân biệt hoa thường)
    const matchesSearch = sneaker.sneakerName
      .toLowerCase()
      .includes(searchTerm.toLowerCase().trim());

    // Tiêu chí 2: Thể loại khớp với Dropdown (hoặc là 'All')
    const matchesCategory =
      selectedCategory === 'All' || sneaker.sneakerCategory === selectedCategory;

    // Cả 2 điều kiện đều đúng thì mới giữ lại
    return matchesSearch && matchesCategory;
  });

  return (
    <Container className="my-4">
      <h2 className="mb-4 text-center fw-bold">👟 Sneaker Collection</h2>

      {/* ================= THANH TÌM KIẾM & BỘ LỌC THỂ LOẠI ================= */}
      <Row className="mb-4 g-3">
        {/* Drill 1: Ô tìm kiếm theo tên (8 cột trên màn hình vừa/lớn) */}
        <Col md={8}>
          <Form.Control
            type="text"
            placeholder="🔍 Search sneaker by name (e.g. Nike, Adidas)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Col>

        {/* Drill 2: Dropdown lọc theo thể loại (4 cột) */}
        <Col md={4}>
          <Form.Select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">-- All Categories --</option>
            <option value="Running">Running</option>
            <option value="Basketball">Basketball</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Skateboarding">Skateboarding</option>
            <option value="Training">Training</option>
          </Form.Select>
        </Col>
      </Row>

      {/* ================= DANH SÁCH SNEAKERS ĐÃ ĐƯỢC LỌC ================= */}
      <Row className="g-4">
        {filteredSneakers.length > 0 ? (
          filteredSneakers.map((sneaker) => (
            <Col key={sneaker.id} xs={12} sm={6} md={4} lg={3}>
              <MyCard sneaker={sneaker} />
            </Col>
          ))
        ) : (
          <Col xs={12} className="text-center py-5 text-muted">
            <h5>Không tìm thấy mẫu giày nào phù hợp! 😢</h5>
          </Col>
        )}
      </Row>
    </Container>
  );
}
