import React from 'react'
//import 16 bong hoa tu mang -> map() de lap 
//lưới grid để duyện map 16 bông lun
import { ListOfOrchids } from '../ListOfOrchids';
import { Card, Col, Container, Row } from 'react-bootstrap';
import OrchidCard from './OrchidCard';

function Orchid() {
  return (
    <Container>
      <Row xs={1} sm={2} md={4} className="g-4">
        {ListOfOrchids.map((orchidFull) => (
          <Col key={orchidFull.id}>
            <OrchidCard orchid={orchidFull} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Orchid;