import React, { useState, useEffect } from 'react';
import { Table, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router';
import axios from 'axios';

export default function OrchidsManagement() {
  const [orchids, setOrchids] = useState([]);

  useEffect(() => {
    const fetchOrchids = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_API_URL);
        setOrchids(response.data);
      } catch (error) {
        console.error("Lỗi khi tải danh sách hoa:", error);
      }
    };

    fetchOrchids();
  }, []);

  const handleDelete = async (id, name) => {
    if (window.confirm(`Bạn có chắc chắn muốn xóa hoa lan "${name}" không?`)) {
      try {
        await axios.delete(import.meta.env.VITE_API_URL + '/' + id);

        setOrchids(orchids.filter((item) => item.id !== id));

        alert("Đã xóa thành công!");
      } catch (error) {
        console.error("Lỗi khi xóa:", error);
        alert("Xóa thất bại!");
      }
    }
  };

  return (
    <Container className="my-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">📋 Quản Lý Danh Mục Hoa Lan</h2>
        <Button variant="success" as={Link} to="/add">
          ➕ Thêm Hoa Lan Mới
        </Button>
      </div>

      <Table striped bordered hover responsive className="shadow-sm align-middle">
        <thead className="table-dark">
          <tr>
            <th>#ID</th>
            <th>Hình Ảnh</th>
            <th>Tên Hoa Lan</th>
            <th>Xuất Xứ</th>
            <th>Đánh Giá</th>
            <th>Thao Tác</th>
          </tr>
        </thead>
        <tbody>
          {orchids.map((orchid) => (
            <tr key={orchid.id}>
              <td>{orchid.id}</td>
              <td>
                <img
                  src={orchid.image}
                  alt={orchid.name}
                  style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px' }}
                />
              </td>
              <td className="fw-semibold">{orchid.name}</td>
              <td>{orchid.origin}</td>
              <td>⭐ {orchid.rating} / 5</td>
              <td>
                <div className="d-flex gap-2">
                  <Button variant="outline-primary" size="sm" as={Link} to={`/update/${orchid.id}`}>
                    ✏️ Sửa
                  </Button>
                  <Button 
                    variant="outline-danger" 
                    size="sm"
                    onClick={() => handleDelete(orchid.id, orchid.name)}
                  >
                    🗑️ Xóa
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
