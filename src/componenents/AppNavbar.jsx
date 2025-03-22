import { Container, Nav, Navbar } from "react-bootstrap";

export const AppNavbar = () => {
    return (
        <>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto"> 
            <Nav.Link href="/informacoes/empresa">Empresa</Nav.Link>
            <Nav.Link href="/informacoes/socios">Sócios</Nav.Link>
            <Nav.Link href="/informacoes/areas">Áreas</Nav.Link>
            <Nav.Link href="/informacoes/equipe">Equipe</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </> 
    );
}