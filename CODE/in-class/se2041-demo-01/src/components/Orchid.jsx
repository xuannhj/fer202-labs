import React, { useState } from 'react'
//import 16 bong hoa tu mang -> map() de lap 
//lưới grid để duyện map 16 bông lun
import { ListOfOrchids } from '../ListOfOrchids';
import { Card, Col, Container, Row } from 'react-bootstrap';
import OrchidCard from './OrchidCard';
import OrchidDetailModal from './OrchidDetailModal';


function Orchid() {
  //useState xem hoa nào đang dc chọn -> để truyền xuống modal -> default là null
  const [selectedOrchid, setSelectedOrchid] = useState (null);
  return (
    <Container>
      <Row xs={1} sm={2} md={4} className="g-4">
        {ListOfOrchids.map((orchidFull) => (
          <Col key={orchidFull.id}>
            <OrchidCard orchid={orchidFull} onSelect = {setSelectedOrchid} />
          </Col>
        ))}
      </Row>


      {
        selectedOrchid &&(
          <OrchidDetailModal
          show={true}
          orchid={selectedOrchid}
          onHide={() => setSelectedOrchid(null)} />
        )
      }
    </Container>
  );
}

export default Orchid;