import React, { useEffect, useState } from 'react';
import MyCard from '../components/MyCard';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';

export default function PizzaNight() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_API_URL);
        setPizzas(response.data.sort((a, b) => new Date(b.promotionEndDate) - new Date(a.promotionEndDate))); 
      } catch (error) {
        console.log(error);
      }
    };
    fetchPizzas();
  }, []);

  return (
    <Container className="my-4">
      <Row className="g-4">
        {pizzas.map((pizza) => (
          <Col key={pizza.id} xs={12} sm={6} md={4} lg={3}>
            <MyCard pizza={pizza} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
