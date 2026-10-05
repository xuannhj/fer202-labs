import React from 'react'
//import 16 bong hoa tu mang -> map() de lap 
//lưới grid để duyện map 16 bông lun
import { ListOfOrchids } from '../ListOfOrchids';
import { Card, Col, Row } from 'react-bootstrap';
import OrchidCard from './OrchidCard';

function Orchid() {
  return (
    <Row xs={1} md={3} className="g-4">
      {ListOfOrchids.map((orchid)=> (
        <Col key={orchid.id}>
          <OrchidCard orchid = {orchid}/>
        </Col>
      ))}
    </Row>
  );
}

export default Orchid;