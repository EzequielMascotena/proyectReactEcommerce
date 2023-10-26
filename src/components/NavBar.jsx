import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import Logo from "../assets/craftbeer.png";
import { CartWidget } from "./CartWidget";

export const NavBar = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home"> <> <img src={Logo} alt="craftBeer logo" width="250px"/> </> </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home" className="nav-link active text-warning p-3 fs-3">Home</Nav.Link>
                    <Nav.Link href="#features" className="nav-link text-warning p-3 fs-3">Products</Nav.Link>
                    <Nav.Link href="#pricing" className="nav-link text-warning p-3 fs-3">Contact</Nav.Link>
                </Nav>
                <a className="nav-link text-warning p-3 fs-4" href="#">
                    <CartWidget />
                </a>
            </Container>
        </Navbar>
    );
};