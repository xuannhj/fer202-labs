import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Container, Table, Modal } from 'react-bootstrap';
import { Link } from 'react-router';

export default function LaptopManagement() {
  const [laptops, setLaptops] = useState([]);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [laptopToDelete, setLaptopToDelete] = useState(null);

  useEffect(() => {
    const fetchLaptops = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_API_URL);
        setLaptops(response.data.sort((a, b) => Number(b.id) - Number(a.id)));
      } catch (error) {
        console.log(error);
      }
    };
    fetchLaptops();
  }, []);

  // ================= HÀM KÍCH HOẠT MỞ MODAL XÓA =================
  const handleOpenDeleteModal = (laptop) => {
    setLaptopToDelete(laptop); // Lưu lại đôi giày muốn xóa
    setShowDeleteModal(true);    // Bật Modal lên
  };

  // ================= HÀM ĐÓNG MODAL =================
  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setLaptopToDelete(null);
  };

  // ================= HÀM XÁC NHẬN XÓA (GỌI API KHI BẤM CONFIRM TRONG MODAL) =================
  const handleConfirmDelete = async () => {
    if (!laptopToDelete) return;

    try {
      // Gọi API DELETE lên MockAPI
      await axios.delete(`${import.meta.env.VITE_API_URL}/${laptopToDelete.id}`);

      setLaptops(laptops.filter((item) => item.id !== laptopToDelete.id));

      // Đóng modal & thông báo
      handleCloseDeleteModal();
      alert(`Deleted "${laptopToDelete.laptopName}" successfully!`);
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
        <h2 className="fw-bold">🖥️ Laptop Management</h2>
        <Button as={Link} to="/se201170/add-laptop" variant="primary">
          ➕ Add a Laptop
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
          {laptops.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td className="fw-semibold text-start">{item.laptopName}</td>
              <td>{item.brand}</td>
              <td>{item.category}</td>
              <td>
                <img
                  src={item.imageUrl}
                  alt={item.laptopName}
                  height={70}
                  width={70}
                  style={{ objectFit: 'cover', borderRadius: '8px' }}
                />
              </td>
              <td>
                <div className="d-flex justify-content-center gap-2">
                  <Button
                    as={Link}
                    to={`/se201170/edit-laptop/${item.id}`}
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
          Are you sure you want to delete laptop:{' '}
          <span className="fw-bold text-primary">{laptopToDelete?.laptopName}</span> (ID:{' '}
          {laptopToDelete?.id})?
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
