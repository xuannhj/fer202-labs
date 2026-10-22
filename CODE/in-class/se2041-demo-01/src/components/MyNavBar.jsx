import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { NavLink, Link } from 'react-router';

function MyNavBar({ theme, toggleTheme }) {
  return (
    <Navbar bg={theme} data-bs-theme={theme} expand="md" className="shadow-sm mb-4">
      <Container>
        {/* Logo bấm về Trang chủ */}
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-4">
          🌸 Orchid Garden
        </Navbar.Brand>

        {/* Nút hamburger mở menu trên điện thoại */}
        <Navbar.Toggle aria-controls="main-navbar-nav" />

        <Navbar.Collapse id="main-navbar-nav">
          {/* Danh sách liên kết điều hướng */}
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" end className="fw-semibold">
              🏠 Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="fw-semibold">
              📬 Contact
            </Nav.Link>
          </Nav>

          {/* Nút gạt Dark / Light Mode */}
          <Button 
            variant={theme === 'light' ? 'outline-dark' : 'outline-light'} 
            onClick={toggleTheme}
            size="sm"
            className="ms-md-2 mt-2 mt-md-0"
          >
            {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;