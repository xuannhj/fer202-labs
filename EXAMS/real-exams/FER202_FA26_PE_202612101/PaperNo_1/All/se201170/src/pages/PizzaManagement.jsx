import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Container, Table, Modal } from 'react-bootstrap';
import { Link } from 'react-router';

export default function PizzaManagement() {
  const [pizzas, setPizzas] = useState([]);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [pizzaToDelete, setPizzaToDelete] = useState(null);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_API_URL);
        setPizzas(response.data.sort((a, b) => Number(a.id) - Number(b.id)));

      } catch (error) {
        console.log(error);
      }
    };
    fetchPizzas();
  }, []);

  const handleOpenDeleteModal = (pizza) => {
    setPizzaToDelete(pizza); 
    setShowDeleteModal(true);    
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setPizzaToDelete(null);
  };

  const handleConfirmDelete = async () => {
    if (!pizzaToDelete) return;

    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/${pizzaToDelete.id}`);

      setPizzas(pizzas.filter((item) => item.id !== pizzaToDelete.id));

      handleCloseDeleteModal();
      alert(`Deleted "${pizzaToDelete.pizzaName}" successfully!`);
    } catch (error) {
      console.log(error);
      alert('Delete failed! Please try again.');
    }
  };



  return (
    <Container className="my-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="fw-bold">PIZZA MANAGEMENT</h2>
        <Button as={Link} to="/se201170/add-pizza" variant="primary">
          Add Pizza
        </Button>
      </div>

      <Table striped bordered hover responsive className="align-middle text-center">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Pizza Name</th>
            <th>Crust Type</th>
            <th>Diameter Cm</th>
            <th>image URL</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pizzas.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td className="fw-semibold text-start">{item.pizzaName}</td>
              <td>{item.crustType}</td>
              <td>{item.diameterCm}</td>
              <td>
                <img
                  src={item.imageUrl}
                  alt={item.pizzaName}
                  height={80}
                  width={80}
                />
              </td>
              <td>
                <div className="d-flex justify-content-center gap-2">
                  <Button
                    as={Link}
                    to={`/se201170/edit-pizza/${item.id}`}
                    variant="outline-primary"
                    size="sm"
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => handleOpenDeleteModal(item)}
                    variant="outline-danger"
                    size="sm"
                  >
                    Delete
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showDeleteModal} onHide={handleCloseDeleteModal} centered>
        <Modal.Header closeButton>
          <Modal.Title className="text-danger fw-bold">Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete pizza:{' '}
          <span className="fw-bold text-primary">{pizzaToDelete?.pizzaName}</span> 
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
