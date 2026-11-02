import React, { useEffect, useState } from 'react'
import MyCard from '../components/MyCard';
import axios from 'axios';
import Container from 'react-bootstrap/esm/Container';
import {Col, Row} from 'react-bootstrap';

export default function SneakerCollection() {
    const [sneakers, setSneakers] = useState([]);
     useEffect(() => {
        const fetchSneakers = async () => {
            try {
               const response = await axios.get(import.meta.env.VITE_API_URL)
               setSneakers(response.data.sort((a, b) => b.sneakerName.localeCompare(a.sneakerName)))
            } catch (error) {
                console.log(error)
            }
        }
        fetchSneakers()

     }, [])

  return (
    <>
    <Container>
        <Row className="g-4">
    {sneakers.map((sneaker) =>
         <Col key={sneaker.id} xs={12} sm={6} md={4} lg={3}>
            <MyCard sneaker={sneaker}/>
         </Col>)}
    </Row>
     </Container>
    </>
  )
}
