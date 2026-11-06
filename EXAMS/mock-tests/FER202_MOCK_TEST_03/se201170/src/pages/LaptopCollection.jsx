import React, { useEffect, useState } from 'react';
import MyCard from '../components/MyCard';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';

export default function LaptopCollection() {
  const [laptops, setLaptops] = useState([]);

  useEffect(() => {
    const fetchLaptops = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_API_URL);
        // Sắp xếp giảm dần theo tên (Z -> A): b.sneakerName.localeCompare(a.sneakerName)
        setLaptops(response.data.sort((a, b) => a.laptopName.localeCompare(b.laptopName)));
      } catch (error) {
        console.log(error);
      }
    };
    fetchLaptops();
  }, []);

  return (
    <Container className="my-4">
      <Row className="g-4">
        {laptops.map((laptop) => (
          <Col key={laptop.id} xs={12} sm={6} md={4} lg={3}>
            <MyCard laptop={laptop} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
