import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Container, Table, Modal } from 'react-bootstrap';
import { Link } from 'react-router';

export default function SneakerManagement() {
  const [sneakers, setSneakers] = useState([]);

  // ================= 🎯 BÀI TẬP 3: STATE QUẢN LÝ MODAL XÁC NHẬN XÓA =================
  // 1. State kiểm soát ẩn/hiện Modal
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  // 2. State lưu đối tượng giày đang được chọn để xóa (để hiển thị tên/id trong Modal)
  const [sneakerToDelete, setSneakerToDelete] = useState(null);

  useEffect(() => {
    const fetchSneakers = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_API_URL);
        // Sort ID tăng dần theo đúng đề PE
        setSneakers(response.data.sort((a, b) => Number(a.id) - Number(b.id)));
      } catch (error) {
        console.log(error);
      }
    };
    fetchSneakers();
  }, []);

  // ================= HÀM KÍCH HOẠT MỞ MODAL XÓA =================
  const handleOpenDeleteModal = (sneaker) => {
    setSneakerToDelete(sneaker); // Lưu lại đôi giày muốn xóa
    setShowDeleteModal(true);    // Bật Modal lên
  };

  // ================= HÀM ĐÓNG MODAL =================
  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setSneakerToDelete(null);
  };

  // ================= HÀM XÁC NHẬN XÓA (GỌI API KHI BẤM CONFIRM TRONG MODAL) =================
  const handleConfirmDelete = async () => {
    if (!sneakerToDelete) return;

    try {
      // Gọi API DELETE lên MockAPI
      await axios.delete(`${import.meta.env.VITE_API_URL}/${sneakerToDelete.id}`);

      // Lọc bỏ phần tử vừa xóa khỏi state sneakers
      setSneakers(sneakers.filter((item) => item.id !== sneakerToDelete.id));

      // Đóng modal & thông báo
      handleCloseDeleteModal();
      alert(`Deleted "${sneakerToDelete.sneakerName}" successfully!`);
    } catch (error) {
      console.log(error);
      alert('Delete failed! Please try again.');
    }
  };

  /* 
  ================= 💡 SO SÁNH VỚI CÁCH DÙNG window.confirm() =================
  Nếu đề thi chỉ yêu cầu "display a confirmation prompt" đơn giản:
  const handleDeleteSimple = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      try {
        await axios.delete(`${import.meta.env.VITE_API_URL}/${id}`);
        setSneakers(sneakers.filter(s => s.id !== id));
        alert("Deleted successfully!");
      } catch (err) {
        console.log(err);
      }
    }
  };
  */

  return (
    <Container className="my-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="fw-bold">📋 Sneaker Management</h2>
        <Button as={Link} to="/se201170/add-sneaker" variant="primary">
          ➕ Add a Sneaker
        </Button>
      </div>

      <Table striped bordered hover responsive className="align-middle text-center">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sneakers.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td className="fw-semibold text-start">{item.sneakerName}</td>
              <td>{item.brandName}</td>
              <td>{item.sneakerCategory}</td>
              <td>
                <img
                  src={item.sneakerImageUrl}
                  alt={item.sneakerName}
                  height={70}
                  width={70}
                  style={{ objectFit: 'cover', borderRadius: '8px' }}
                />
              </td>
              <td>
                <div className="d-flex justify-content-center gap-2">
                  <Button
                    as={Link}
                    to={`/se201170/edit-sneaker/${item.id}`}
                    variant="outline-primary"
                    size="sm"
                  >
                    ✏️ Edit
                  </Button>
                  <Button
                    onClick={() => handleOpenDeleteModal(item)}
                    variant="outline-danger"
                    size="sm"
                  >
                    🗑️ Delete
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* ================= 🎯 MODAL XÁC NHẬN XÓA (REACT-BOOTSTRAP) ================= */}
      <Modal show={showDeleteModal} onHide={handleCloseDeleteModal} centered>
        <Modal.Header closeButton>
          <Modal.Title className="text-danger fw-bold">⚠️ Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete sneaker:{' '}
          <span className="fw-bold text-primary">{sneakerToDelete?.sneakerName}</span> (ID:{' '}
          {sneakerToDelete?.id})?
          <div className="text-muted small mt-2">
            This action cannot be undone and will remove the item from MockAPI.
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDeleteModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Yes, Delete it!
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
