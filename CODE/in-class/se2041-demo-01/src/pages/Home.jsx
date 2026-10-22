import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { ListOfOrchids } from '../ListOfOrchids';
import OrchidCard from '../components/OrchidCard';
import OrchidDetailModal from '../components/OrchidDetailModal';

export default function Home() {
  // State lưu bông hoa đang được chọn để mở Modal xem nhanh
  const [selectedOrchid, setSelectedOrchid] = useState(null);

  return (
    <div>
      <div className="text-center my-4">
        <h2 className="fw-bold">🌸 Bộ Sưu Tập Hoa Lan</h2>
      </div>

      <Row xs={1} sm={2} md={4} className="g-4">
        {ListOfOrchids.map((orchid) => (
          <Col key={orchid.id}>
            <OrchidCard orchid={orchid} onSelect={setSelectedOrchid} />
          </Col>
        ))}
      </Row>


      {selectedOrchid && (
        <OrchidDetailModal
          show={true}
          orchid={selectedOrchid}
          onHide={() => setSelectedOrchid(null)}
        />
      )}
    </div>
  );
}
