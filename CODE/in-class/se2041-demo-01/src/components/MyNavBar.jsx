import { GoogleLogin, googleLogout } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import React, { useState } from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { NavLink, Link } from 'react-router';

function MyNavBar({ theme, toggleTheme }) {
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    googleLogout();
    setUser(null);
  };

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
            {user && (
              <Nav.Link as={NavLink} to="/management" className="fw-semibold">
                📋 Management
              </Nav.Link>
            )}
          </Nav>

          <div className="d-flex align-items-center gap-2 mt-2 mt-md-0">
            {/* Nút gạt Dark / Light Mode */}
            <Button
              variant={theme === 'light' ? 'outline-dark' : 'outline-light'}
              onClick={toggleTheme}
              size="sm"
            >
              {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
            </Button>

            {/* Nếu đã đăng nhập thì hiện tên + nút Logout, ngược lại mới hiện nút GoogleLogin */}
            {user ? (
              <div className="d-flex align-items-center gap-2 ms-2">
                <span className="fw-semibold">👤 {user.name}</span>
                <Button variant="outline-danger" size="sm" onClick={handleLogout}>
                  Đăng xuất
                </Button>
              </div>
            ) : (
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  // credentialResponse là 1 object, chuỗi JWT nằm trong credentialResponse.credential
                  const decoded = jwtDecode(credentialResponse.credential);
                  console.log("JWT payload:", decoded);
                  setUser({
                    name: decoded.name,
                    email: decoded.email,
                    picture: decoded.picture,
                  });
                }}
                onError={() => {
                  console.error("Đăng nhập Google thất bại!");
                }}
              />
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;