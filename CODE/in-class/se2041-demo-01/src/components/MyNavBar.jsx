import { Container, Navbar, Button } from 'react-bootstrap';

function MyNavBar({theme, toggleTheme}) {
  return (
    <>
    <Navbar bg={theme} data-bs-theme={theme} className="shadow-sm mb-4">
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand href="#home" className="fw-bold fs-4">
          🌸 Orchid Garden
        </Navbar.Brand>
        <Button 
          variant={theme === 'light' ? 'outline-dark' : 'outline-light'} 
          onClick={toggleTheme}
          size="sm"
        >
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </Button>
      </Container>
    </Navbar>


      <br />
    </>
  );
}

export default MyNavBar;