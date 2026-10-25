import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import OrchidCard from '../components/OrchidCard';
import OrchidDetailModal from '../components/OrchidDetailModal';
import axios from 'axios';

export default function Home() {
  // State lưu bông hoa đang được chọn để mở Modal xem nhanh
  const [selectedOrchid, setSelectedOrchid] = useState(null);
  const [orchids, setOrchids] = useState([]);
  useEffect(() => {
    const fetchOrchids = async () =>{
      try{
        const response = await axios.get(import.meta.env.VITE_API_URL);
        setOrchids(response.data);

      } catch (error){
        console.log(error);
      }
    }
    fetchOrchids();
  },[])

  return (
    <div>
      <div className="text-center my-4">
        <h2 className="fw-bold">🌸 Bộ Sưu Tập Hoa Lan</h2>
      </div>

      <Row xs={1} sm={2} md={4} className="g-4">
        {orchids.map((orchid) => (
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
