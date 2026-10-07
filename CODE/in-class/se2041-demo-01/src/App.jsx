
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Orchid from './components/Orchid';
import MyNavBar from './components/MyNavBar';
import {Modal, Button} from "react-bootstrap";

export default function App() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    show === false ? setShow(true) : setShow(false);
  }
  return (
    <>
    
     <Button variant="primary" onClick={() => {handleShow()}}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={() => {handleShow()}}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => {handleShow()}}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {handleShow()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <MyNavBar />
      <Orchid />
      
    </>
  )
}
