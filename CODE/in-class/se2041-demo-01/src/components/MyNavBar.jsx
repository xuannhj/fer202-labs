import { Container, Navbar } from 'react-bootstrap';

function MyNavBar() {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Orchid Garden</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
    </>
  );
}

export default MyNavBar;