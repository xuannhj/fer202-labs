import React from 'react'
import { Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import {Link} from 'react-router';

export default function MyNavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to ='/se201170/sneaker-collection'>SE201170</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to ='/se201170/sneaker-collection'>Sneaker Collection</Nav.Link>
            <Nav.Link as={Link} to ='/se201170/sneaker-management'>Sneaker Management</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
